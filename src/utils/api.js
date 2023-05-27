import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTYyZmU4ZjkwMmVjNzQ0ZjY4MGFmZmJlNjkwNGI2NSIsInN1YiI6IjY0NWRiZTI1ZWY4YjMyMDE1NWU1NWQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M36NxGK2KY0lJN5x2OB2BDYRxzm-lD5QJ6BKpPX4YCw";


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) =>
{
    try
    {
        const {data} = await axios.get(BASE_URL + url, {headers,params})
        return data;
    }
    catch(err)
    {
        console.log(err);
        return err;
    }
}