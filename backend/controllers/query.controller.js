const supabase = require("../supabase");

const addQuery = async (req, res) => {
  const { email, name, message } = req.body;

  const { data, error } = await supabase
    .from("queries")
    .insert([{ email, name, message }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

module.exports = {
  addQuery,
};
