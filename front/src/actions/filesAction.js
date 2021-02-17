import axios from 'axios';
import { getFiles } from '../data';

export const loadElements = (userId) => async (dispatch) => {

    //IS LOADING
    dispatch({
        type: 'LOADING_FILES'
    });

    //FETCH AXIOS
    // const gameData = await axios.get(gameDetailsUrl(id));
    // const screenShotData = await axios.get(gameScreenShotUrl(id));

    const elements = getFiles();

    dispatch({
        type: 'FETCH_ELEMENTS',
        payload: {
            elements: elements,
        }
    })
}