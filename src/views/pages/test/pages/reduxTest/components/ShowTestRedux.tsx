import React from 'react'
import { useSelector } from 'react-redux';
import { selectCheckRedux } from '../../../../../../application/redux/selector/checkReduxSelector'
import { selectLoading } from '../../../../../../application/redux/selector/loadingSelector'

export default function ShowTestRedux() {
  const checkData = useSelector(selectCheckRedux);
  const loading = useSelector(selectLoading);

  return (
    <div>
      <h3>Check Redux : {checkData}</h3>
      { loading && <h1>Loading</h1>}
    </div>
  )
}
