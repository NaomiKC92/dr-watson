export const messages = (state=[], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return action.message;
    case 'REMOVE_MESSAGE':
      return null;
    default:
      return state;
  }
}