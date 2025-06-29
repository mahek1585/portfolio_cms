const supabase = require("../supabase");

const getProfileData = async (req, res) => {
  const { data, error } = await supabase.from("profile").select("*").single();
  if (error) {
    res.json({ message: error?.message || "Something went wrong" });
  } else {
    res.json({ message: "Profile Data Fetched", data: data });
  }
};

module.exports = {
  getProfileData,
};


