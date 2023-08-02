// eslint-disable-next-line import/order
const jwt = require("jsonwebtoken");
// eslint-disable-next-line import/order
const bodyParser = require("body-parser");
// eslint-disable-next-line import/order
const cors = require("cors");
const extractClaimFromJWT = (token, claim) => {
	try {
		const decodedToken = jwt.decode(token);

		// Проверка наличия декодированного токена и поля email в его payload
		if (
			decodedToken &&
			typeof decodedToken === "object" &&
			decodedToken[claim]
		) {
			return decodedToken[claim];
		}
	} catch (error) {
		console.error("Failed to extract email from JWT token:", error);
	}

	return null;
};
const isTokenValid = (expirationDate) => {
	const currentTimestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds

	// Calculate the expiration timestamp with a 5-minute buffer

	return currentTimestamp < expirationDate;
};
const isSupport = (role) => role === "SUPPORT";
const isSupervisor = (role) => {
	// eslint-disable-next-line no-console

	return role === "SUPERVISOR";
};

const jsonServer = require("json-server");
const clone = require("clone");

const data = require("./db.json");

const isProductionEnv = true;
//делать фейковые запросы или нет
// process.env.NODE_ENV === 'production';
const server = jsonServer.create();
server.use(cors());
// For mocking the POST request, POST request won't make any changes to the DB in production environment
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(bodyParser.json());

server.use((req, res, next) => {
	// // eslint-disable-next-line no-console
	const authorizationHeader = req.headers.authorization;
	let token = "";
	if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
		token = authorizationHeader.substring(7);
	}
	try {
		// const isValidToken = isTokenValid(extractClaimFromJWT(token, "exp"));
		const roles = extractClaimFromJWT(token, "resource_access").claimapi.roles;
		const isAccessByRole = isSupport(roles[0]) || isSupervisor(roles[0]);

		if (!isAccessByRole) {
			return res.status(403).json({ error: "User not found" });
		}

		next();
	} catch (e) {
		return res.status(401).json({ error: "Unauthorized: Invalid token" });
	}
});

server.use(middlewares);
//ends

server.post("/addBalance/:id", (req, res) => {
	const balanceToAdd = parseInt(req.body?.balance ?? 0);

	const token = req.headers.authorization.substring(7);

	// Проверяем, что значение balanceToAdd неотрицательное
	if (isNaN(balanceToAdd) || balanceToAdd < 0) {
		res.status(400).json({
			error:
				"Некорректное значение баланса. Баланс должен быть неотрицательным числом.",
		});
	} else {
		const user = router.db
			.get("users")
			.find((user) => user.id == req.params.id)
			.value();

		if (user) {
			// Прибавляем значение к текущему балансу пользователя
			user.balance = parseInt(user.balance) + balanceToAdd;
			router.db.write();
			res.json({ balance: user.balance });
		} else {
			res.status(404).json({ error: "Пользователь не найден." });
		}
	}
});
server.get("/me", (req, res) => {
	const token = req.headers.authorization.substring(7);
	const id = extractClaimFromJWT(token, "preferred_username");
	const user = router.db
		.get("users")
		.find((user) => user.id == id)
		.value();

	return res.json(user);
});
server.get("/baseInfoAboutMe", (req, res) => {
	const token = req.headers.authorization.substring(7);
	const id = extractClaimFromJWT(token, "preferred_username");
	const user = router.db
		.get("users")
		.find((user) => user.id == id)
		.value();

	return res.json({
		src: user.src,
		name: user.name,
		id: user.id,
		balance: user.balance,
	});
});
server.get("/balance/me", (req, res) => {
	const token = req.headers.authorization.substring(7);
	const id = extractClaimFromJWT(token, "preferred_username");
	const user = router.db
		.get("users")
		.find((user) => user.id == id)
		.value();
	const balance = user.cards.reduce((acc, cur) => +acc + +cur.balance, 0);
	user.balance = balance;
	router.db.write();

	return res.json({ balance });
});

server.get("/public/users", (req, res) => {
	const users = router.db.get("users").map(({ src, name, id }) => ({
		src,
		name,
		id,
	}));

	return res.json(users);
});
server.get("/cards/me", (req, res) => {
	const token = req.headers.authorization.substring(7);
	const id = extractClaimFromJWT(token, "preferred_username");
	const user = router.db
		.get("users")
		.find((user) => user.id == id)
		.value();

	return res.json(user?.cards ?? []);
});
server.post("/pay", (req, res) => {
	const userId = req.query.userId;
	let { sum } = req.body;
	sum = parseInt(sum);

	// if(isNaN(sum) || (sum | 0 < sum) || sum < 0){
	//     return res.status(404, "баланс должен быть целочислен");
	// }
	const token = req.headers.authorization.substring(7);

	// eslint-disable-next-line no-unreachable
	const meId = extractClaimFromJWT(token, "preferred_username");

	const me = router.db
		.get("users")
		.find((user) => user.id == meId)
		.value();
	const user = router.db
		.get("users")
		.find((user) => user.id == userId)
		.value();
	if (sum > me.balance) {
		res.status(404, "недостаточно средств");
	}
	// const balanceMe = me.cards.reduce((acc, cur) => +acc + +cur.balance, 0);
	const meCard = me.cards.find((card) => card.balance >= sum);
	if (user.cards.length === 0) {
		res.status(404, "у польззователя нет карт");
	}
	let minIndex = 0;
	user.cards.forEach((_, curIndex, cards) => {
		if (cards[curIndex].balance < cards[minIndex].balance) {
			minIndex = curIndex;
		}
	});
	const userCard = user.cards[minIndex || 0];

	if (!userCard) {
		res.status(404, "у пользователя нет доступных карт");
	}
	if (meCard) {
		meCard.balance = parseInt(meCard.balance) - sum;
	} else {
		res.status(404, "нет доступных карт");
	}
	userCard.balance = parseInt(userCard.balance) + sum;
	router.db.write();

	return res.json({
		myCard: meCard,
	});
});
server.post("/payFromMeTo", (req, res) => {
	const userId = req.query.id;

	let { balance } = req.body;
	balance = parseInt(balance);

	// if(isNaN(balance) || (balance | 0 < balance) || balance < 0){
	//     return res.status(404, "баланс должен быть целочислен");
	// }
	const token = req.headers.authorization.substring(7);

	// eslint-disable-next-line no-unreachable
	const meId = extractClaimFromJWT(token, "preferred_username");

	const me = router.db
		.get("users")
		.find((user) => user.id == meId)
		.value();
	const user = router.db
		.get("users")
		.find((user) => user.id == userId)
		.value();
	if (balance > me.balance) {
		res.status(404, "недостаточно средств");
	}

	me.balance = parseInt(me.balance) - balance;
	user.balance = parseInt(user.balance) + balance;
	router.db.write();

	return res.json({
		balance: user.balance,
		id: user.id,
		meBalance: me.balance,
	});
});
server.use(jsonServer.bodyParser);

server.use(router);

//

server.listen(3030, () => {
	// eslint-disable-next-line no-console
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
