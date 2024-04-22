const { Activities, Countries } = require("../db");


const postActivities = async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;

    try{
        [activity, created] = await Activities.findOrCreate({
            where: {name: name},
            defaults: {difficulty, duration, season}
        })

        const countriesChoose = await Countries.findAll({
        where: {
            name: countries
        }
        })

        await activity.setCountries(countriesChoose)

        return res.status(200).json(activity)

    }
    catch(error){
        console.log(error)
        res.status(400).json({error: "Something is wrong"})
    }

}

module.exports = {postActivities};