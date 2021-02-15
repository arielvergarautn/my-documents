const initialState = {
    elements: [],
    folderActive: null,
    isLoading: false,
}

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ELEMENTS':
            return {
                ...state,
                elements: action.payload.elements,
                isLoading: false,

            };
        case 'FOLDER_ACTIVE':
            return {
                ...state,
                folderActive: action.payload.folderACtive,
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

export default filesReducer;
