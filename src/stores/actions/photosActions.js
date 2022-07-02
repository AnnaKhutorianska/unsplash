import { ActionTypes } from '../constants/actionsTypes';

const BASE_URL = 'https://api.unsplash.com/photos/?client_id=';

export function getAllPhotos() {
	return (dispatch) => {
		fetch(`${BASE_URL}ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`)
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: ActionTypes.GET_ALL_PHOTOS,
					payload: data,
				});
			});
	};
}

export function findImage(id) {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.FIND_IMAGE,
			payload: id,
		});
	};
}
