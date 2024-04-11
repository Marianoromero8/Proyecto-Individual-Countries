require ('dotenv').config();
const {API_URL} = process.env;
const { Countries } = require ("../db");
const axios = require("axios")

const getCountries = async (req, res) => {
    try{
        const response = await axios (API_URL);
        const {data} = response;

        const countriesFromApi = data.map((country) => {
            const name = country.name.official;
            const flags = country.flags?.png;
            const continent = country.continents[0];
            const capital = country.capital[0];
            const subregion = country.subregion;
            const area = country.area;
            const population = country.population;

            return {
            name,
            flags,
            continent,
            capital,
            subregion,
            area,
            population
        }
        })

        const countriesToDB = countriesFromApi.map(async (coun) => {
            await Countries.findOrCreate({
                where: {name: coun.name}
            })
        })
        return (countriesToDB)
    }
    catch(error){
        return ({error: error.message})
    }
}

const getCountriesFromDB = async (req, res) => {
    try{
        await getCountries();
         
        const countries = await Countries.findAll()
        res.status(200).json(countries)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {getCountriesFromDB}; 