export {removeperson} from "../reducers/personSlice";
import {loadperson} from "../reducers/personSlice";
import axios from "../../utils/axios";

export const asyncloadperson = (id) => async (dispatch, getState) =>{
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const moviecredits = await axios.get(`/person/${id}/movie_credits`);
        const tvcredits = await axios.get(`/person/${id}/tv_credits`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);

        let theUltimateDetails = {
            detail : detail.data,
            externalid : externalid.data,
            moviecredits : moviecredits.data,
            tvcredits : tvcredits.data,
            combinedCredits : combinedCredits.data
        }

        dispatch(loadperson(theUltimateDetails));
        
    } catch (error) {
        console.log("ERROR:", error);
        
    }
}