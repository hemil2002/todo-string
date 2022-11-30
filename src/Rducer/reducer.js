const initialState = {
  data: [],
};

const InputData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      localStorage.setItem("items", JSON.stringify(action.payload));
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
      default:
        return state;
  }
};

export default InputData;
