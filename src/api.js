const apiKey = 'b86b760ec75f35c0f262eaa42ab0871f';
var axios = require('axios');

function getMovie (movie) {
  return axios.get('https://api.themoviedb.org/3/movie/videos?api_key='+apiKey).then((resp)=> {
    console.log(resp);
  })

}
