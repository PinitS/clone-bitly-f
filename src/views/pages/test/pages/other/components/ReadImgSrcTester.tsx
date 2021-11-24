import React from 'react'
import { readImgSrc } from '../../../../../../application/helpers/readImg'

export default function ReadImgSrcTester() {
  return (
    <div>
      <h1>ReadImgSrcTester</h1>
      <img src={readImgSrc('media/uploads/summernote/2019', '5c78d99ac781a.jpg')} />
    </div>
  )
}
