import { getConnection } from "./getConnection";

const checkPasswordAsync = async (password: string) => {
  const client = await getConnection();

  const key_sets = await client.collection("key_sets").getList( 1, 1, {
    filter: `vpn_keys="${password}"`,
  });
  return key_sets.items.length != 0;
};

export { checkPasswordAsync };
