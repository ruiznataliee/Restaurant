import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async (sw, ne) => {

try{
const { data: {data}} = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
       
        },
        headers: {
          'X-RapidAPI-Key': '1e35d27cffmsh14f239788c2a92ep1927d0jsn766d97c5785b',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      
});

return data;
}catch (error){
console.log(error)
}

};