import database from "infra/database";

async function status(req, res) {
  // gera a data/hora exata em que a rota foi chamada, já no formato ISO (padrão internacional).
  const updatedAt = new Date().toISOString();
  res.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
