import Home from './component/home';
import Login from './component/Login';


const cusroutes = [    
    {path: "/service", exact: true, name:"Home", component: Home},
    {path: "/login", exact: true, name:"Login", component: Login}

];
export default cusroutes;