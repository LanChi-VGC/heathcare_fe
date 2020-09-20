
import Home from "./content/home";

import Login from "./content/login";
import Accounts from "./content/accountlist";
import AddAccount from "./content/addaccount";
import Services from "./service/servicelist";
import AddService from "./service/addservice";
import EditService from "./service/editservice";
import Majors from "./major/majorlist";
import EditMajor from "./major/editmajor";
import AddMajor from "./major/addmajor";
import Customers from "./customer/customerlist";
import AddCustomer from "./customer/addcustomer";
import EditCustomer from "./customer/editcustomer";
import Areas from "./area/arealist";
import EditArea from "./area/editarea";
import AddArea from "./area/addarea";
import Nursings from "./nursing/nursinglist";
import AddNursing from "./nursing/addnursing";
import EditNursing from "./nursing/editnursing";
import Tips from "./tip/tiplist";
import AddTip from "./tip/addtip";
import EditTip from "./tip/edittip";
import Appoints from "./appointment/appointist";
import AddAppoint from "./appointment/addappoint";
import EditAppoint from "./appointment/editappoint";
import Details from "./detail/detaillist";
import AddDetail from "./detail/adddelist";
import EditDetail from "./detail/editdetail";
import Licenses from "./license/licenselist";
import AddLicense from "./license/addlicense";
import EditLicense from "./license/editlicense";






const routes = [
    {path: "/login" , exact : true,name: "Login",component: Login},
    {path: "/" , exact : true,name: "Home",component: Home},
    {path: "/home" , exact : true,name: "Home",component: Home},
    {path: "/accountlist" , exact : true,name: "Accounts",component: Accounts},
    {path: "/addaccount" , exact : true,name: "AddAccounts",component:AddAccount},
    {path: "/servicelist" , exact : true,name: "Services",component:Services},
    {path: "/addservice" , exact : true,name: "AddServices",component:AddService},
    {path: "/editservice" , exact : true,name: "EditServices",component:EditService},
    {path: "/majorlist" , exact : true,name: "Majors",component:Majors},
    {path: "/addmajor" , exact : true,name: "Majors",component:AddMajor},
    {path: "/editmajor" , exact : true,name: "EditMajor",component:EditMajor},
    {path: "/customerlist" , exact : true,name: "Customers",component:Customers},
    {path: "/addcustomer" , exact : true,name: "AddCustomers",component:AddCustomer},
    {path: "/editcustomer" , exact : true,name: "EditCustomers",component:EditCustomer},
    {path: "/arealist" , exact : true,name: "Areas",component:Areas},
    {path: "/addarea" , exact : true,name: "AddAre",component:AddArea},
    {path: "/editarea" , exact : true,name: "EditAreas",component:EditArea},
    {path: "/nursinglist" , exact : true,name: "Nursings",component:Nursings},
    {path: "/addnursing" , exact : true,name: "AddNursing",component:AddNursing},
    {path: "/editnursing" , exact : true,name: "EditNursing",component:EditNursing},
    {path: "/tiplist" , exact : true,name: "Tips",component:Tips},
    {path: "/addtip" , exact : true,name: "AddTip",component:AddTip},
    {path: "/edittip" , exact : true,name: "EditTip",component:EditTip},
    {path: "/appointlist" , exact : true,name: "Appoints",component:Appoints},
    {path: "/addappoint" , exact : true,name: "AddAppoint",component:AddAppoint},
    {path: "/editappoint" , exact : true,name: "EditAppoint",component:EditAppoint},
    {path: "/detaillist" , exact : true,name: "Appoints",component:Details},
    {path: "/adddetail" , exact : true,name: "AddDetail",component:AddDetail},
    {path: "/editdetail" , exact : true,name: "EditDetail",component:EditDetail},
    {path: "/licenselist" , exact : true,name: "Licenses",component:Licenses},
    {path: "/addlicense" , exact : true,name: "AddLicense",component:AddLicense},
    {path: "/editlicense" , exact : true,name: "EditLicense",component:EditLicense},





   
];
export default routes;