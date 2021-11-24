import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Page404 from '../views/pages/error/404';
import GenUrl from '../views/pages/genUrl/GenUrl';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* path permissions */}
        {/* <PublicRoute path="/publicRoute" Component={<PublicRouteTest />} />
        <PrivateRoute path="/privateRoute" Component={<PrivateRouteTest />} /> */}
        
        {/* path defult */}
        <Route exact path="/"><GenUrl /></Route>
        <Route path="*"><Page404 /></Route>
      </Switch>
    </BrowserRouter>
  )
}
