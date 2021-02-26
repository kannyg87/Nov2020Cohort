import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './component/Layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './asset/styles.css'
import Forms from './component/Forms'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const NoMatch =() => <div>Error: Could Not Find Rooute </div>

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <BaseLayout>
      <switch>
        <Route path ='/' component={App}/>
        <Route path ='/forms' component={Forms}/>
        <Route component={NoMatch}/>
      </switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

