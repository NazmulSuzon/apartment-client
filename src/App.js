import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/LandingPage/Home/Home";
import AuthProvider from "./Component/Context/AuthProvider";
import Login from "./Component/Login/Login/Login";
import Register from "./Component/Login/Register/Register";
import Services from "./Component/Page/Services/Services";
import NavigationBar from "./Component/Shared/NavigationBar/NavigationBar";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <NavigationBar></NavigationBar>
            <Services></Services>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
