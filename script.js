let currentUnits = 'us';
let lastSearched = '';

function toggleUnit() {
    let toggleBtn = document.getElementById("toggleWeather");

    toggleBtn.addEventListener('click', () => {
        currentUnits = currentUnits === 'us' ? 'metric' : 'us';
        weatherFetch(lastSearched);
    })
}
async function weatherFetch(location) {

    try {

        const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8AAVWB7V3JELBLHF38KT3VGLC&unitGroup=${currentUnits}`);
        if (!response.ok) {
            if(response.status === 400) {
                throw new Error ('please type your location of choice correctly');
            }
        }
        const result = await response.json();
        let resultsRef = document.querySelector('.weather-results');

        const unitsImperial = {
            Temperature: '°F',
            Feel: '°F',
            Precipitation: ' in',
            Windspeed: ' mph',
            Windgust: ' mph',
        };

        const unitsMetric = {
            Temperature: ' °C',
            Feel: ' °C',
            Precipitation: ' mm',
            Windspeed: ' kph',
            Windgust: ' kph'
            
        }


        let finalData = necessaryResults(result);
        console.log(finalData);

        resultsRef.innerHTML = ``;

        Object.entries(finalData).forEach(([key, value]) => {
            const units = currentUnits === 'us' ? unitsImperial : unitsMetric;
            const p = document.createElement('p');

            if(Array.isArray(value)) {
                if(value.length === 0) {
                    p.textContent = "No present alerts";
                } else {
                    p.textContent = value.map(alert => alert.event).join(', ');
                }
                
            } else {
                p.textContent = `${key}: ${value}${units[key] || ''}`;
            }
            p.classList.add(`weather-${key}`);
            resultsRef.append(p);
            
        });





        

    } catch(error) {    
        console.error('there was a problem', error);
    }


}

function searchLocale() {
    let locationSearchRef = document.querySelector('#location-search');
    let formRef = document.querySelector('.weather-form');

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();
        weatherFetch(locationSearchRef.value);
        lastSearched = locationSearchRef.value;
        
    })
}

function necessaryResults(result) {
            
    return {
        Alerts: result.alerts,
        Location: result.resolvedAddress,
        Temperature: result.currentConditions.temp,
        Conditions: result.currentConditions.conditions,
        Feel: result.currentConditions.feelslike,
        Precipitation: result.currentConditions.precip,
        UV: result.currentConditions.uvindex,
        Sunrise: result.currentConditions.sunrise,
        Sunset: result.currentConditions.sunset, 
        Windspeed: result.currentConditions.windspeed,
        Windgust: result.currentConditions.windgust,
                

    };
}

searchLocale();
toggleUnit();