import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './content/login.jsx';
import DefaultLayout from './default/defaultLayout';




function App() {
  return (
     <Switch>
            <Route path='/login' exact component={Login} />
           <Route path='/' component={DefaultLayout}/>
     
     </Switch>
    
  );
}

export default App;
