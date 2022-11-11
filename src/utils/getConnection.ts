import PocketBase from "pocketbase";
const getConnection = async () => {
  const client = new PocketBase("https://connection.yemaoren.net/");

  return client;
};

export { getConnection };
