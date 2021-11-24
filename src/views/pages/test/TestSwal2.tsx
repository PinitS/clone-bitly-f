import React from 'react'
import Swal from 'sweetalert2';

export default function TestSwal2() {
  function swal2okBtn() {
    Swal.fire({
      icon: 'error',
      title: 'TEST!',
      text: 'Please Ok',
      confirmButtonText: 'OK'
    }).then(() => {
      alert('confirmButtonText');
    });
  }
  function swal2deleteBtn() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        alert('delete success');
      }
    })
  }

  return (
    <div>
      <button className='btn btn-danger' onClick={() => swal2okBtn()}>swal2okBtn</button>
      <button className='btn btn-danger' onClick={() => swal2deleteBtn()}>delete</button>
      <span>sweetalert2</span>
    </div>
  )
}
