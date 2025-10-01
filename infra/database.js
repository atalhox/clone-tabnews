import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};

function getSSLValues() {
  if (process.env.NODE_ENV === "development") {
    // Docker local/Postgres sem SSL
    return false;
  }

  if (process.env.POSTGRES_CA_CERT) {
    // Produção com certificado em variável de ambiente
    return {
      ca: process.env.POSTGRES_CA_CERT.replace(/\\n/g, "\n"),
      rejectUnauthorized: true,
    };
  }

  // Produção no Neon sem CA explícito → aceita Let’s Encrypt
  return { rejectUnauthorized: false };
}
