const supabase = require("../supabase");

const getWorkList = async (req, res) => {
  const { data, error } = await supabase.from("works").select("*");
  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Work list Fetched", data: data });
  }
};

module.exports = { getWorkList };
