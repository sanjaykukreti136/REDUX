
let reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return 1;
        default:
            return 0;
    }
}

export default reducer;