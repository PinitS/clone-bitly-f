import React from 'react'
import NavBarTester from '../../components/layouts/NavBarTester'
import TestToastify from '../../TestToastify'
import ConvertNumberTester from './components/ConvertNumberTester'
import MomentTester from './components/MomentTester'
import ReadImgSrcTester from './components/ReadImgSrcTester'

export default function OtherPage() {
  return (
    <div>
      <NavBarTester />
      <div className="container">
        <h1>Convert</h1>
        <TestToastify />
        <ConvertNumberTester />
        <hr />
        <MomentTester />
        <hr />
        <ReadImgSrcTester />
      </div>
    </div>
  )
}
