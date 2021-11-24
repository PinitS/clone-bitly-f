import { IS_CLEAR_LOADING, IS_SET_LOADING } from "../types"

const initialState = {
  isLoading: false,
}

const setLoading = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_SET_LOADING:
      return { ...state, isLoading: state.isLoading = true }
    case IS_CLEAR_LOADING:
      return { ...state, isLoading: state.isLoading = false }
    default:
      return state
  }
}
export default setLoading;
