import { ActionTypes } from '../constants/actionsTypes';

const initialState = {
    photosList: [],
    selectedPhoto: {}
};

export default function PhotosReducer(state = initialState, {type, payload}) {
    switch(type) {
        case ActionTypes.GET_ALL_PHOTOS:
            return {
                ...state,
                photosList: payload
            };
        
        case ActionTypes.FIND_IMAGE:
            const findedPhoto =  state.photosList.find(photo => photo.id === payload);
            return {
                ...state,
                selectedPhoto: findedPhoto
            }
        default:
            return state;    
    }
}