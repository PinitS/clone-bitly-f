import React from 'react'

export default function SS(props: any) {
  console.log('props :>> ', props);
  return (
    <div>
      <h1>SS</h1>
      <button onClick={() => props.fn(props.paramfn)}>SS BTN</button>
    </div>
  )
}
