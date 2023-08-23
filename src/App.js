import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Topitem from './Topitem';
import Taskitems from './Taskitems';
function App() {
  return (
    <div className='container w-100 h-100 p-4'>
      <div className='row h-100 justify-content-center align-align-items-start'>
        <div className='col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h-fit'>
          <Topitem />
          <Taskitems />
        </div>
      </div>
    </div>
  );
}

export default App;