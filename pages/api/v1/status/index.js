function status(req, res) {
  res.status(200).json({ status: "testando acentos. Será que funciona?" });
}

export default status;
