const initialState = {
    user: null,
    isLoading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                user: action.payload.user,
                isLoading: false,

            };
        case 'LOADING_FILES':
            return {
                ...state,
                isLoading: true
            };
        default:
            return { ...state };
    }
}

export default userReducer;
