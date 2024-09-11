function cakesReducer(state, action) {
    switch (action.type) {
      case "FETCHDATA":
        return action.payload;
      default:
        return state;
    }
  }
export default cakesReducer  