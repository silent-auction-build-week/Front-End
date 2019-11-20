import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../actions'

export const initialState = {
  isLoading: false,
  error: null,
  auctions: []
};

const addAuction = auctions => {
  return auctions.map(props => ({
    item_name: props.item_name,
    description: props.description,
    img_url: props.img_url,
    price: props.price
  }))
}

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
            return {
                ...state,
                auctions: [],
                isLoading: true,
                error: null
            };
            case FETCH_DATA_SUCCESS:
                return {
                    ...state,                    
                    isLoading: false,
                    error: null,
                    auctions: addAuction(action.payload)                   
                };
                case FETCH_DATA_FAILED:
                return {
                    ...state,
                    auctions: [],
                    isLoading: false,
                    error: action.payload
                };
    default:
      return state;
  }
};
