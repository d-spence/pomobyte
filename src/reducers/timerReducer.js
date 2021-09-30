export const timerReducer = (state, action) => {
  action.type !== 'UPDATE_TIMER' && console.log(action);

  switch (action.type) {
    case 'UPDATE_TIMER':
      return state.subtract(1, 'seconds');
    case 'SET_TIMER':
      return action.timer;
    case 'RESET_TIMER':
      return state; // TODO: Make this work
    case 'ADD_MINUTES':
      return state.add(action.minutes, 'minutes');
    default:
      return state;
  }
}