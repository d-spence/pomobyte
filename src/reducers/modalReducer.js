export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return { ...state, isOpen: true };
    case 'MODAL_CLOSE':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
