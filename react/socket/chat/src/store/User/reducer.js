const INITIAL_STATE = {
  name: '',
};

function enterChat(state = INITIAL_STATE, action){
  switch(action.type){
    case "ADD_USER":
      return {
        ...state, 
        name: action.data
      };
    default:
      return state;
  }
}

export default enterChat;