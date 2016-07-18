/**
 *  Peoples reducer
 */
import { ActionReducer, Action} from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SEED = 'SEED';

export const usersReducer: ActionReducer<any> = (state: Object[] = [], action: Action):Object => {
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
            console.log('store seed');
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}
