import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ5YTc2YTMzM2E1NzIwNzkzZTc3MGZmNzgwYjhiZiIsIm5iZiI6MTczNzI4MTM2My4yMDYsInN1YiI6IjY3OGNjZjUzZDhhNWIwZDAwYzQzMjc4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWM2qUb5mRdHCskgBLzXq3PAFHIL48Qed2ZXOBqbmo8'
      }  
});

export default instance;