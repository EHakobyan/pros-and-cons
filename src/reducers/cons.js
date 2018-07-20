const cons = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONS':
            return [
                ...state,
                {
                    value: action.payload.value
                }
            ]
        case 'EDIT_CONS':
            state[action.payload.index].value = action.payload.value
            return [...state]
        case 'DELETE_CONS':
            state.splice(action.payload.index, 1)
            return [...state]

        default:
            return state
    }
}

export default cons