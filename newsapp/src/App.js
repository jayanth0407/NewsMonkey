import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/NewsRead';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component { 
  render() {
    
    return (
      <div>
        <Router>
        <Navbar/>
       <Routes>
          <Route exact path="/" element={<News pagesize={21} country="us" category="general" />} />
          <Route exact path="/business" element={<News key="businees" pagesize={21} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertaiment" pagesize={21} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News key="geneal" pagesize={21} country="us" category="general" />} />
          <Route exact path="/health" element={<News key="health" pagesize={21} country="us" category="health" />} />
          <Route exact path="/science" element={<News key="science" pagesize={21} country="us" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" pagesize={21} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News key="technol0gy" pagesize={21} country="us" category="technology" />} />
        
        </Routes>
       </Router>
      </div>
     
    )
  }
}
