const supabase = require("../supabase");

// GET all clients
const getClientList = async (req, res) => {
  const { data, error } = await supabase.from("testimonials").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

// POST a new client
const addClient = async (req, res) => {
  const { avatar_url, name, rating, description } = req.body;

  const { data, error } = await supabase
    .from("testimonials")
    .insert([{ avatar_url, name, rating, description }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ data, message: "Client Added" });
};

// GET a single client
const getClient = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.status(200).json(data);
};

// PUT update client
const editClient = async (req, res) => {
  const { id } = req.params;
  const { avatar_url, name, rating, description } = req.body;

  const { data, error } = await supabase
    .from("testimonials")
    .update({ avatar_url, name, rating, description })
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// DELETE client
const removeClient = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("testimonials").delete().eq("id", id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
};

module.exports = {
  getClientList,
  addClient,
  getClient,
  editClient,
  removeClient,
};
