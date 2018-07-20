const pros = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROS':
            return [
                ...state,
                {
                    value: action.payload.value
                }
            ]
        case 'EDIT_PROS':
            state[action.payload.index].value = action.payload.value;
            return [...state]
        case 'DELETE_PROS':
            state.splice(action.payload.index, 1)
            return [...state]


        default:
            return state
    }
}

export default pros