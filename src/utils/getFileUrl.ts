import { getConnection } from "./getConnection";
import IPockbaseFileLocationItem from "./interfaces/IPockbaseFileLocationItem";

const getFileByNameAsync = async (fileName: string) => {
  const client = await getConnection();

  const fileRecord = await client.records.getList("fileLocation", 1, 1, {
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

export { getFileByNameAsync };

