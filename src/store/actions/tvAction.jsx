export {removetv} from "../reducers/tvSlice";
import {loadtv} from "../reducers/tvSlice";
import axios from "../../utils/axios";

export const asyncloadtv = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const video = await axios.get(`/tv/${id}/videos`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);
        const translations = await axios.get(`tv/${id}/translations`);

        let theUltimateDetails = {
            detail : detail.data,
            externalid : externalid.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            video : video.data.results.find(v => v.type === "Trailer"),
            watchprovider : watchprovider.data.results.IN,
            translations : translations.data.translations.map((t)=> t.english_name)
        }

        dispatch(loadtv(theUltimateDetails));
        
    } catch (error) {
        console.log("ERROR:", error);
        
    }
}