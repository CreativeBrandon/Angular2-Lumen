/**
 *  Users reducer
 */
import { ActionReducer, Action} from '@ngrx/store';

import {
    ADD_USER,
    REMOVE_USER,
    UPDATE_USER,
    SEED
} from '../../constants';

export const usersReducer: ActionReducer<any> = (state: Object[] = [], action: Action):Object => {
    if(!action.type || !action.payload){
        return state;
    }

    switch (action.type){
        case ADD_USER:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_USER:
            return state;
        case UPDATE_USER:
            return state;
        case SEED:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}
