import PocketBase from "pocketbase";
const getConnection = async () => {
  const client = new PocketBase("https://connection.yemaoren.tk/");

  return client;
};

export { getConnection };
