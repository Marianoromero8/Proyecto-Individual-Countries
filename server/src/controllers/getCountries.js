require ('dotenv').config();
const {API_URL} = process.env;
const { Countries, Activities } = require ("../db");
const axios = require("axios")

const getCountries = async () => {
    try{
        const response = await axios(API_URL);
        const {data} = response;

        const countriesFromApi = data.map((country) => {
            const id = country.cca3;
            const name = country.name.official;
            const flags = country.flags?.png;
            const continent = country.continents?.[0];
            const capital = country.capital?.[0];
            const subregion = country.subregion;
            const area = country.area;
            const population = country.population;
        
            
            return {
                id,
                name,
                flags,
                continent,
                capital,
                subregion,
                area,
                population
            }
        })

        const countriesCreated = await Countries.findAll();

        const countries = countriesFromApi.filter(coun => !countriesCreated.some(country => country.name === coun.name))

        await Countries.bulkCreate(countries)
    }
    catch(error){
        throw new Error (error.message)
    }
}

const getCountriesFromDB = async (req, res) => {
    try{
        await getCountries();
          
        const countries = await Countries.findAll({
            include: {
            model: Activities,
            attributes: ["name", "difficulty", "duration", "season"],
        }
        });
        
        res.status(200).json(countries)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { getCountriesFromDB }; 