import { combineReducers } from 'redux';
import checkRedux from './checkReduxReducer'
import setLoading from './loadingReducer'

import { LoadingReducerInterface, CheckReduxReducerInterface } from '../reducersInterface/ReducerInterface';

export interface RootState {
  checkRedux: CheckReduxReducerInterface;
  setLoading: LoadingReducerInterface;
}

export const rootReducer = combineReducers<RootState>({
  checkRedux,
  setLoading,
});