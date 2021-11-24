import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import toasifyConfig from '../../../application/config/toastify';

const MocData = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
]
interface stateInterFace {
  id: number,
  name: string
}
export default function PreTest() {
  const [state, setstate] = useState<stateInterFace[]>([]);
  useEffect(() => {
    setstate(MocData);
  }, []);

  function deleteDataInState(id: number) {
    console.log('id :>> ', id);
    // เรื่อง ลบ ใช้ filter
    const prevState = [...state];
    const result = prevState.filter((item) => {
      return item.id !== id
    })
    console.log('result :>> ', result);
    setstate(result);
    toast.success('Wow so easy!', toasifyConfig);
  }

  return (
    <div>
      {state && state.length > 0 && state.map((item: any, index: number) => (
        <div key={index} onClick={() => deleteDataInState(item.id)}><p>index: {index + 1} , name :{item.name}</p></div>
      ))}
      {/* {state && JSON.stringify(state)} */}
    </div>
  )
}
