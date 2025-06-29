const supabase = require("../supabase");

const getSkillList = async (req, res) => {
  const { data, error } = await supabase.from("skills").select("*");


  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Skill list Fetched", data: data });
  }
};

module.exports = { getSkillList };


