import Axios from 'axios';


export default {
    getReverseGeocode
}

async function getReverseGeocode(lat, lng) {
    // console.log('here',lat, lng);
    
    const result = await Axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDp8q5Y7KiWO6Pg-0t2OiYniFD5vNvDAGY`
        );   
        
    
    // console.log('googleservice: ', result.data.results[0].address_components[2].long_name);
    const cityName = result.data.results[0].address_components[2].long_name;
    

    return cityName ;
     
        


}


