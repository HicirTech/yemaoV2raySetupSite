import { getConnection } from "./getConnection";
import IPockbaseTranslationItem from "./interfaces/IPockbaseTranslationItem";

const getChineseTranslation = async () => {
  const client = await getConnection();

  const translations = await client.records.getList("yemaoTranslation", 1, 1);

  const translationItem = translations.items.pop();
  if (!translationItem) {
    throw new Error("Can't fetch translations");
  }

  const chineseTranslation =
    translationItem as unknown as IPockbaseTranslationItem;

  return chineseTranslation.translation;
};


export { getChineseTranslation };
