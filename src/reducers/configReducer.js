export const configReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'UPDATE_CONFIG':
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
