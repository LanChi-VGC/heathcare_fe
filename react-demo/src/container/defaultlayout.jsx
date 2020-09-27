import React, {Component}from 'react';
import Header from '../component/header';
import { Switch, Route } from 'react-router-dom';

import Foolter from '../component/foolter';
import cusroutes from '../routes-customer';


 


class DefaultLayoutCustomer extends Component{
    render(){
        return(
            <div>
                <Header/>
                {/* <Home/> */}
                <Switch>
                
                    {cusroutes.map((route, idx)=>{
                        return route.component ? (
                            <Route path={route.path} 
                            exact={route.exact} 
                            name={route.name} 
                            component={route.component}/>
                        ):null;
                    })
                    }
                
                </Switch>
                <Foolter/>
            
            </div>
            
        );
    }
}
export default DefaultLayoutCustomer;