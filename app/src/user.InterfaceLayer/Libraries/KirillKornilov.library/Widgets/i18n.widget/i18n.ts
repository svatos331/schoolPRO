import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n

.use(initReactI18next)

.init({
	debug:true,
	lng:"en",
	interpolation:{
		escapeValue:false,
	},
	resources:{
		ru:{
			translation:{
				"sidebar":{
					"categories":"Категории",
				
				}
			}
		},
		en:{
			translation:{
				sidebar:{
					categories:"Categories",
					home: "Home",
					family:"Family",
					job:"Job",
					sport:"Sport",
					add:"Add",
					exit:"Exit"
				},
				header:{
					newtask:"New task",
					greetings:"Have a nice day"
				},
				weekAchievements:{
					title:"Week achievements",
					created: "Created",
					done: "Done",
					deleted:"Deleted",
					tasks:"tasks",
				},
				activeTask:"Active tasks",
				completedTask:"Completed task",
				timer:{
					title:"Well well well",
					onWatch:"On watch we have",
					onDay:"Today is",
				},
				observation:"Observation",
				dayFact:"Day fact",

				chart:"Progress chart",
			}
		}
	}
});
export default i18n;