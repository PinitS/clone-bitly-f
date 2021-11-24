import React from 'react'
import { ConvertLongDate, ConvertShortDate } from '../../../../../../application/helpers/convertTimeFormat';
export default function MomentTester() {
  return (
    <div>
      <h3>ConvertDate</h3>
      <h4>ConvertLongDate form '2019/06/01' to {ConvertLongDate('2019/06/01')}</h4>
      <h4>ConvertShortDate form '2019/06/01' to {ConvertShortDate('2019/06/01')}</h4>
    </div>
  )
}
