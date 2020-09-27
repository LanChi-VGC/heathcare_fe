import React from 'react';

import { Switch, Route } from 'react-router-dom';
import DefaultLayoutCustomer from './container/defaultlayout.jsx';
import Login from './content/login.jsx';
import DefaultLayout from './default/defaultLayout';




function App() {
  return (
     <Switch>
            <Route path='/login' exact component={Login} />
           <Route path='/' component={DefaultLayout}/>
           <Route path='/customer' component={DefaultLayoutCustomer}/>
     
     </Switch>
    
  );
}

export default App;
