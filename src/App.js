import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';

import {
  BrowserRouter,
   Route,
   Routes
 } from "react-router-dom";
 
 

export default class App extends Component {
  
  pageSize=12;
  apikey=process.env.REACT_APP_NEWS_KEY1

  //country='in'
  
  // 
  
  render() {
    return (
      <BrowserRouter>
      <>
      <Navbar/>
    
      <Routes>
      <Route exact path="/"               element={<News  apikey={this.apikey}  key="general" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/business"       element={<News  apikey={this.apikey}  key="business" pageSize={this.pageSize}    category="business" />} />
      <Route exact path="/entertainment"  element={<News  apikey={this.apikey}  key="entertainment" pageSize={this.pageSize}    category="entertainment"/>} />
      <Route exact path="/health"         element={<News  apikey={this.apikey}  key="health" pageSize={this.pageSize}    category="health"/>} />
      <Route exact path="/general"        element={<News  apikey={this.apikey}  key="general" pageSize={this.pageSize}    category="general"/>} />
      <Route exact path="/science"        element={<News  apikey={this.apikey}  key="science" pageSize={this.pageSize}    category="science"/>} />
      <Route exact path="/sports"         element={<News  apikey={this.apikey}  key="sports" pageSize={this.pageSize}    category="sports"/>} />
      <Route exact path="/technology"     element={<News  apikey={this.apikey}  key="technology" pageSize={this.pageSize}     category="technology"/>} />

      

   </Routes>
      
      </>
      </BrowserRouter>
    )
  }
}
