import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../data';
import { loadElements } from './filesAction';

export const loadUser = () => async (dispatch) => {

    console.log("hola")

    //IS LOADING
    dispatch({
        type: 'LOADING_USER'
    });

    //FETCH AXIOS
    // const gameData = await axios.get(gameDetailsUrl(id));
    // const screenShotData = await axios.get(gameScreenShotUrl(id));

    const user = getUser();

    dispatch(loadElements(user.id));

    dispatch({
        type: 'FETCH_USER',
        payload: {
            user: user,
        }
    })
}