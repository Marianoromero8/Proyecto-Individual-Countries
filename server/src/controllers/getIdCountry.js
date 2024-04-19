const { Countries, Activities } = require("../db");

const getIdCountry = async (req, res) => {
    const {id} = req.params; 
    try{
        const countryId = await Countries.findByPk(id, {
        include: Activities,
    })

    if(!countryId){
        res.status(400).json({error: "Country not found"})
    }
    
        res.status(200).json(countryId);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { getIdCountry }