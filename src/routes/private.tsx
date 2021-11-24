/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ Component, ...rest }: any) {
  const auth: any = localStorage.getItem('auth') ? true : false;
  return (
    <Route {...rest} render={() => auth ? Component : <Redirect to="/publicRoute" />} />
  );
}
export default PrivateRoute;
