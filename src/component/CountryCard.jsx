import React from "react";

const CountryCard = ( { Country }) => {

    if (Country === null) {
        return null;
    };

    let CountryObj = Country.data.objects.length === 0 ? null : Country.data.objects[0];

    if(CountryObj === null){
        return (
            <h1>Country Not Found</h1>
        )
    };

    return (
        <div className="countryCard">
            <img src={CountryObj.flag.url_png} alt="Flag Image" width={400} height={300}/>
            <h1>{CountryObj.names.common }</h1>
            <div className="countryDetails">
                <p><strong>Population: </strong>{CountryObj.population}</p>
                <p>{CountryObj.capitals[0].name}</p>
            </div>
        </div>
    );
};

export default CountryCard;