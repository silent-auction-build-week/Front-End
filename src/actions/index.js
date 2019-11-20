import axios from "axios";

export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

export const dataLoading = () => ({ type: FETCH_DATA_LOADING });
export const dataLoadSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});
export const dataLoadFailure = error => ({
  type: FETCH_DATA_FAILED,
  payload: error
});

export const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  };

export function fetchdata() {
  return function(dispatch) {
    dispatch(dataLoading());

    return axios
      .get(`https://silent-auction-be.herokuapp.com/api/auctions`)
      .then(function(response) {
        console.log('Server response', response);
        dispatch(dataLoadSuccess(response.data.auctions));
      })
      .catch(error => dispatch(dataLoadFailure(error)));
  };
}