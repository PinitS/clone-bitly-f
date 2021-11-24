import React from 'react'
import { useHistory } from "react-router-dom";
export default function PrivateRouteTest() {
  let history = useHistory();
  function logout() {
    localStorage.removeItem('auth');
    history.push("/publicRoute");
    console.log('logout :>> ');
  }
  return (
    <div>
      <h4>privateRoute</h4>
      <button type="button" className="btn btn-primary" onClick={() => logout()}>logout</button>
    </div>
  )
}
