
interface IPockbaseTranslationItem {
  id: string;
  created: string;
  updated: string;
  "@collectionId": string;
  "@collectionName": string;
  translation: {
    [name: string]: string;
  };
  "@expand": {};
}


export default IPockbaseTranslationItem;
