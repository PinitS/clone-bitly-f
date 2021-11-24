/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ Component, ...rest }: any) {
  const auth: any = localStorage.getItem('auth') ? true : false;
  return (
    <Route {...rest} render={() => auth ? <Redirect to="/dynamic/1" /> : Component} />
  );
}
export default PublicRoute;
