const { Op } = require("sequelize")
const { Countries } = require("../db");

const getByName = async (req, res) => {
    const { name } = req.query;

    try{

        if(!name){
            return res.status(400).json({error: "You must write a country for search"})
        }

        const countriesDB = await Countries.findAll({
            where: {
                name: {
                [Op.iLike]: `%${name}%`
            }
        }
        })

        if(countriesDB.length === 0){
            return res.status(404).json({error: "Something wrong"})
        }

        res.status(200).json(countriesDB)
    }
    catch(error){
        res.status(400).json({error: "Check the name, something is wrong"})
    }
}

module.exports = { getByName }