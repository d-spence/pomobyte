export const statusReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.status };
    case 'SET_PHASE':
      return { ...state, phase: action.phase };
    case 'SET_INTERVAL':
      return { ...state, interval: action.interval };
    case 'SET_PHASE_TIMEOUT_ID':
      return { ...state, phaseTimeoutID: action.id };
    case 'CLEAR_PHASE_TIMEOUT_ID':
      return { ...state, phaseTimeoutID: null };
    default:
      return state;
  }
}
