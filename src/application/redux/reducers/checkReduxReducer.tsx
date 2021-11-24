import { CHECK_REDUX_HAS_PAYLOAD, CHECK_REDUX_NO_PAYLOAD } from "../types"

const initialState = {
  checkData: 0,
}

const checkRedux = (state = initialState, action: any) => {
  switch (action.type) {
    case CHECK_REDUX_NO_PAYLOAD:
      return { ...state, checkData: state.checkData += 1 }
    case CHECK_REDUX_HAS_PAYLOAD:
      return { ...state, checkData: action.payload }
    default:
      return state
  }
}
export default checkRedux;
