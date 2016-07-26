import { ActionReducer, Action } from '@ngrx/store';
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../../actions';

export const notificationReducer: ActionReducer<any> = (state: Object[] = [], action: Action):Object => {
    if(!action.type || !action.payload){
        return state;
    }

    switch (action.type){
        case ADD_NOTIFICATION:
            return [...state, action.payload];
        case REMOVE_NOTIFICATION:
            return state.filter(notification => notification !== action.payload);
        default:
            return state;
    }
}
