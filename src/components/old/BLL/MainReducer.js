let initial = {
    form: 'cube'
}

const mainreducer = (state = initial, action) => {
    if (action.type == "setForm") {
        return { ...state, form: action.action }
    }
    return state
}
export default mainreducer