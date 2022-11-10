import PocketBase from "pocketbase";
const getConnection = async () => {
  const client = new PocketBase("http://connection.yemaoren.tk/");

  return client;
};

export { getConnection };
