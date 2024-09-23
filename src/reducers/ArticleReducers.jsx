import { SET_LOADING_STATUS, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from "../actions/ActionType";

export const initState = {
    loading: false,
    articles: [], // Add articles to the initial state
    error: null,  // To handle any errors during fetching
};

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING_STATUS:
            return {
                ...state,
                loading: action.status,
            };
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload, // Store the fetched articles in the state
                loading: false,
                error: null,
            };
        case FETCH_ARTICLES_FAILURE:
            return {
                ...state,
                error: action.error, // Handle any errors that occurred
                loading: false,
            };
        default:
            return state;
    }
};

export default articleReducer;
