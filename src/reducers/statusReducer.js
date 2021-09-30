export const statusReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'SET_PHASE':
      return { ...state, phase: action.payload };
    case 'SET_INTERVAL':
      return { ...state, interval: action.payload };
    case 'SET_PHASE_TIMEOUT_ID':
      return { ...state, phaseTimeoutID: action.payload };
    case 'CLEAR_PHASE_TIMEOUT_ID':
      return { ...state, phaseTimeoutID: null };
    default:
      return state;
  }
}
