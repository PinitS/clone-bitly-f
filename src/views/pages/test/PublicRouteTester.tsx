import React from 'react'
import { useHistory } from "react-router-dom";

export default function PublicRouteTest() {
  let history = useHistory();

  function login() {
    localStorage.setItem('auth', 'true');
    history.push("/privateRoute");
    console.log('login :>> ');
  }

  return (
    <div>
      <h4>publicRoute</h4>
      <button type="button" className="btn btn-primary" onClick={() => login()}>login</button>
    </div>
  )
}
