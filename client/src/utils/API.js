import axios from "axios";
require('dotenv').config()


const URL="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"

export default {
    // get dog parks from yelp based on city
    getDogParks: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer y0lydZLqJiqXdvL0tGzYauktX0-LbHW2Q9XwdcCnhXrPHa-0Ifg5IxVoj63eyhM_uJz949jeJC2TjuWKhBG08k-NEhhTW0gsQ_Cy3mTwsyU_1nRwf39PlpIjRyD9XnYx" 
        },
          params: {
          term: 'dog park',
          location: city,
          limit:40
        }
        })
    },
    // get dog friendly businesses from yelp based on city
    getDogFriendly: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer y0lydZLqJiqXdvL0tGzYauktX0-LbHW2Q9XwdcCnhXrPHa-0Ifg5IxVoj63eyhM_uJz949jeJC2TjuWKhBG08k-NEhhTW0gsQ_Cy3mTwsyU_1nRwf39PlpIjRyD9XnYx" 
        },
          params: {
          term: 'dog allowed',
          location: city,
          limit:40
        }
        })
    },
    
    getDogBeaches: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer y0lydZLqJiqXdvL0tGzYauktX0-LbHW2Q9XwdcCnhXrPHa-0Ifg5IxVoj63eyhM_uJz949jeJC2TjuWKhBG08k-NEhhTW0gsQ_Cy3mTwsyU_1nRwf39PlpIjRyD9XnYx"
        },
          params: {
          term: 'dog beaches',
          location: city,
          limit:40
        }
        })
    },

    getCityCoords: function(city){
      return axios.get("https://www.mapquestapi.com/geocoding/v1/address?key=iJn3fnxq6GVxdR2Czn9tCFjMdpiLFMPf&location="+city)
    },
    
    getUserLocation: function(){
      return axios.get("/api/users/users")
    }


  };