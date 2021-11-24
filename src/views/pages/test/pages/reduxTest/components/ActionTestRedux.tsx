import React, { useState } from 'react'
import { checkReduxNoPayload, checkReduxHasPayload } from '../../../../../../application/redux/actions/checkReduxAction';
import { useDispatch } from 'react-redux';

export default function ActionTestRedux() {
  const dispatch = useDispatch();
  const [state, setState] = useState<number>(0);
  function checkReduxIncrement() {
    console.log('checkReduxIncrement :>> ');
    dispatch(checkReduxNoPayload());
  }
  function checkReduxWithPayload() {
    dispatch(checkReduxHasPayload(10));
    console.log('checkReduxWithPayload :>> ');
  }
  return (
    <div>
      <h2>ActionTestRedux</h2>
      <button type="button" className="btn btn-primary" onClick={() => checkReduxIncrement()}>No Payload</button>
      <button type="button" className="btn btn-secondary" onClick={() => checkReduxWithPayload()}>HAS Payload</button>
      <h2>State test</h2>
      <button type="button" className="btn btn-secondary" onClick={() => setState(state + 1)}>State Add</button>
      <p>{state}</p>
    </div>
  )
}
