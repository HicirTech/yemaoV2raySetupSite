import { getConnection } from "./getConnection";
import IPockbaseV2rayConfigItem from "./interfaces/IPockbaseV2rayConfigItem";

const getV2rayConfig = async () => {
  const client = await getConnection();

  const v2rayConfigs = await client.records.getList("v2rayConfig", 1, 1);

  const v2rayConfigItem = v2rayConfigs.items.pop();
  if (!v2rayConfigItem) {
    throw new Error("Can't fetch v2rayConfig");
  }

  const v2rayConfig = v2rayConfigItem as unknown as IPockbaseV2rayConfigItem;

  const jsonConfigString = JSON.stringify(JSON.parse(v2rayConfig.jsonConfig));

  await copyToClipBoard(jsonConfigString);
};

const copyToClipBoard = async (textToCopy: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {}
};

export { getV2rayConfig };
