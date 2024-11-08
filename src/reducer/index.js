const INITIAL_STATE = {
    theme: 'light',
    title: 'Test'
}


function reducer(state, action) {
    switch (action.type) {
        case "update_theme":
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
}

export {
    reducer,
    INITIAL_STATE
}