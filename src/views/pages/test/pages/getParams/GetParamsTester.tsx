import React from 'react'
import { useParams } from "react-router-dom";
import NavBarTester from '../../components/layouts/NavBarTester';

export default function GetParams() {
  const { id }: any = useParams();
  return (
    <div>
      <NavBarTester />
      <div className="container">
        <h4>dynamic Route</h4>
        <h4>Params : {id}</h4>
      </div>
    </div>
  )
}
