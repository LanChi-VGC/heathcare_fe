import React,{Component} from 'react';   //imrc
import Header from './header';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Sidebar from './sidebar';

class DefaultLayout extends Component {    
    state = { } //cc
    render(){
        return(
            <div>
                    <Header/>
                    <Sidebar/>
                    <Switch>
                        {routes.map((route,idx)=>{
                            return route.component ? (       //toan tu 3 ngoi
                                <Route 
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    component={route.component}
                                />
                            ):null;
                        }
                        ) 

                        }
                    </Switch>
            </div>
        
        );
    }

}

export default DefaultLayout; // export thi cac trang khac dung dc