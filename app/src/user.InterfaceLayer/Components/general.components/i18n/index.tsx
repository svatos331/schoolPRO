import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/en.json";
import ruTranslations from "./locales/ru/ru.json";

i18n.use(initReactI18next).init({
	debug: true,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: enTranslations,
		},
		ru: {
			translation: ruTranslations,
		},
	},
});

export default i18n;
