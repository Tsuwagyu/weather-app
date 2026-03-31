async function weatherFetch(location) {

    try {

        const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8AAVWB7V3JELBLHF38KT3VGLC`);
        const result = await response.json();
        let weatherInfoDiv = document.querySelector('.weather-results');


        let finalData = necessaryResults(result);
        console.log(finalData);



        

    } catch(error) {    
        console.error('there was a problem', error);
    }


}

function searchLocale() {
    let locationSearchRef = document.querySelector('#location-search');

    locationSearchRef.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log('this is working');
            weatherFetch(locationSearchRef.value);
        }
    })
}

function necessaryResults(result) {
            
    return {
        alerts: result.alerts,
        location: result.resolvedAddress,
        temperature: result.currentConditions.temp,
        conditions: result.currentConditions.conditions,
        feel: result.currentConditions.feelslike,
        precipitation: result.currentConditions.precip,
        uvIndex: result.currentConditions.uvindex,
        sunrise: result.currentConditions.sunrise,
        sunset: result.currentConditions.sunset, 
        windsp: result.currentConditions.windspeed,
        windgus: result.currentConditions.windgust,
                

    };
}

searchLocale();