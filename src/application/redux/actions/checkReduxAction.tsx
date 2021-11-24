import { CHECK_REDUX_HAS_PAYLOAD, CHECK_REDUX_NO_PAYLOAD } from "../types";

export function checkReduxNoPayload() {
  return {
    type: CHECK_REDUX_NO_PAYLOAD
  };
}

export function checkReduxHasPayload(payload: number) {
  return {
    type: CHECK_REDUX_HAS_PAYLOAD,
    payload
  };
}
