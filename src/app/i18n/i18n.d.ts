import translations from "./locales/es/translations.json";

declare module "i18next" {
  interface CustomTypeOptions {
    // defaultNS: 'translation'
    resources: {
      translations: typeof translations;
    };
  }
}
