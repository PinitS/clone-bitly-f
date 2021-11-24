import React from 'react'
import NavBarTester from '../../../components/layouts/NavBarTester'
import ActionTestRedux from '../components/ActionTestRedux'
import ShowTestRedux from '../components/ShowTestRedux'

export default function TestReduxOnly() {
  return (
    <div>
      <NavBarTester />
      <div className="container">
        <h1>MAIN PAGE TEST REDUX</h1>
        <ActionTestRedux />
        <ShowTestRedux />
      </div>
    </div>
  )
}
