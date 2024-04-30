export default (form) => {
    let errors = {};

    const regexName = /^([a-zA-Z ]+)$/i;
    const regexDiff = /^[1-5]$/;
    const regexDuration = /^(?:[1-9]|[1-3][0-9]|4[0-8])$/

    //*Validations for name

    if(!form.name){
        errors.name = "The field is empty, please complete it"
    } else if(form.name && !regexName.test(form.name)){
        errors.name = "Activity only admit letters"
    }

    //*Validations for difficulty
    if(form.difficulty < 1 || form.difficulty > 5){
        errors.difficulty = "The range of difficulty only have 5 levels (1-5)"
    } else if(form.difficulty === ""){
        errors.difficulty = "Full the space"
    }

    //*Validations for duration
    if(form.duration < 1 || form.duration > 48){
        errors.duration = "Duration only can be between 1 and 48 hours"
    }

    //*Validation for season
    if (!form.season) {
        errors.season = "Please you must select a season";
    }

    //*Validation for countries
    if(form.countries.length === 0){
        errors.countries = "You must select at least one country"
    }

    return errors;
}