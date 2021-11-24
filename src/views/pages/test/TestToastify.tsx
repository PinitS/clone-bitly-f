import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toasifyConfig from '../../../application/config/toastify';

export default function TestToastify() {
  //add <ToastContainer /> in index.tsx
  function notify() {
    toast.success('Wow so easy!', toasifyConfig);
    toast.info('Wow so easy!', toasifyConfig);
    toast.warn('Wow so easy!', toasifyConfig);
    toast.error('Wow so easy!', toasifyConfig);
  }
  return (
    <div>
      <button className='btn btn-success' onClick={notify}>Notify!</button>
      <span>toastify</span>
    </div>
  )
}
