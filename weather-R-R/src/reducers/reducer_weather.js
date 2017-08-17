/**
 * Created by antonincarlin on 27/12/2016.
 */
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }

    return state;
}
