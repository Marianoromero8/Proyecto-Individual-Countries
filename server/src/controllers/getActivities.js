const { Activities, Countries } = require("../db")


const getActivities = async (req, res) => {
    try{
    
    const allActivities = await Activities.findAll({
        include: {model: Countries,
        attributes: ["name"]
        }
    })

    return res.status(200).json(allActivities)

    }
    catch(error){
        res.status(400).json({error: "Activities are not found"})
    }
}

module.exports = {getActivities}