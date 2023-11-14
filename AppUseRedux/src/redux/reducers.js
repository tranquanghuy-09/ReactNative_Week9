let data = ["To check email", "Learn HTML Advance", "Medical App UI"]
function Reducer(state = data, action) {
    console.log(action);
  switch (action.type) {
    case "add":
        return [...state, action.note]

    default:
        return state
  }
}

export default Reducer;