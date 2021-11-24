import { IS_CLEAR_LOADING, IS_SET_LOADING } from "../types";

export function setLoading() {
  return {
    type: IS_SET_LOADING
  };
}

export function clearLoading() {
  return {
    type: IS_CLEAR_LOADING
  };
}
