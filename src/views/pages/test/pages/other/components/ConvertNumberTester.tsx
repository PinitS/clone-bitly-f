import React from 'react'
import { ConvertNumber, ConvertNumberCurrency, ConvertWithPrefixPostfix } from '../../../../../../application/helpers/convertNumber'

export default function ConvertNumberTester() {
  return (
    <div>
      <h3>ConvertNumberTester</h3>
      <h4>ConvertNumber : {ConvertNumber(245966598576)}</h4>
      <h4>ConvertNumberCurrency {ConvertNumberCurrency(2233)}</h4>
      <h4>ConvertWithPrefixPostfix:{ConvertWithPrefixPostfix(2313123123123123, 'ชิ้น')}</h4>
      <h4>ConvertWithPrefixPostfix:{ConvertWithPrefixPostfix(2313123123123123, 'รายการ')}</h4>
    </div>
  )
}
