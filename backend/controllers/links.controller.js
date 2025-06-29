const supabase = require("../supabase");

const getLinks = async( req,res) => {
    const {data,error} =  await supabase.from("links").select("*");

    if(error){
        res.json({message : error?.message || "something went wrong"});
    }else{
        res.json({message : "Links fetched successfully",data : data });
    }

};

module.exports = {
    getLinks
}



