export {removeMovie} from "../reducers/movieSlice";
import {loadMovie} from "../reducers/movieSlice";
import axios from "../../utils/axios";

export const asyncloadmovie = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const video = await axios.get(`/movie/${id}/videos`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
        const translations = await axios.get(`movie/${id}/translations`);

        let theUltimateDetails = {
            detail : detail.data,
            externalid : externalid.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            video : video.data.results.find(v => v.type === "Trailer"),
            watchprovider : watchprovider.data.results.IN,
            translations : translations.data.translations.map((t)=> t.english_name)
        }

        dispatch(loadMovie(theUltimateDetails));
        
    } catch (error) {
        console.log("ERROR:", error);
        
    }
}