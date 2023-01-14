import { getConnection } from "./getConnection";
import IPockbaseFileLocationItem from "./interfaces/IPockbaseFileLocationItem";

const getFileByNameAsync = async (fileName: string) => {
  const client = await getConnection();

  const fileRecord = await client.collection("fileLocation").getList( 1, 1, {
    filter: `fileName="${fileName}"`,
  });

  const fileLocation =
    fileRecord.items.pop() as unknown as IPockbaseFileLocationItem;

  downloadFile(fileLocation.location);
};

const downloadFile = (fileLink: string) => {
  const shimFileLink = `${fileLink}`.replace(/"/g, "");
  const link = document.createElement("a");
  link.href = shimFileLink;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const PC_V2RAY_FILE_NAME = "V2rayPC";
const ANDROID_V2RAY_FILE_NAME = "v2rayPhone";

export { getFileByNameAsync, PC_V2RAY_FILE_NAME, ANDROID_V2RAY_FILE_NAME };
