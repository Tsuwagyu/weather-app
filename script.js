async function weatherFetch(location, date1, date2) {

    try {

        const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=8AAVWB7V3JELBLHF38KT3VGLC`);
        const result = await response.json();

        console.log(result);


    } catch(error) {
        console.error('there was a problem', error);
    }


}

function searchLocale() {
    let locationSearchRef = document.querySelector('#location-search');

    locationSearchRef.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log('this is working');
        }
    })
}