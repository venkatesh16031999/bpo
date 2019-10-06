import React from 'react';
import Layout from './components/layout/layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route,Switch} from 'react-router-dom';
import "tachyons";
import Home from './components/home/home';
import Login from './components/login/login';
import Data from './components/Data/Data';
import User from './components/users/users';


function App() {
  return (
        <Layout>
        <div>
      
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login"  component={Login} />
              <Route path="/data" component={Data} />
              <Route path="/:id" component={User} />
          </Switch>
        

        </div>  
        </Layout>
  );
}

export default App;
