import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News   from './components/News';

import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
   Route,
   Routes
 } from "react-router-dom";

 
 


export default class App extends Component {
  
  pageSize=12;
  apikey=process.env.REACT_APP_NEWS_KEY_1
  
  state={
    country:'in',
    progress:0,
    nextPage:false
   }
    
  setCountry=(cntry)=>{
       // eslint-disable-next-line
      this.setState ({country:cntry});
       
    }
  
  setProgress=(progress1)=>{
      this.setState({progress:progress1});
    }
  
  

  render() {
    return (
      <BrowserRouter>
      <>
      <LoadingBar shadow={true} height={2.5} color='#f11946' progress={this.state.progress} /> 

      <Navbar   apikey={this.apikey}  myPresentCountry={this.state.country}  setmycntry={this.setCountry} />
   {/*  
     { console.log('From Appjs '+this.state.country)} */}
    {/* { this.state.nextPage && <FloatingBtn/>} */}
      
      <Routes>
      
      <Route exact path="/"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/home"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry='in' setmycntry={this.setCountry}  apikey={this.apikey}  key="general" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/business"       element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="business" pageSize={this.pageSize}    category="business" />} />
      <Route exact path="/entertainment"  element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="entertainment" pageSize={this.pageSize}    category="entertainment"/>} />
      <Route exact path="/health"         element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="health" pageSize={this.pageSize}    category="health"/>} />
      <Route exact path="/general"        element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general" pageSize={this.pageSize}    category="general"/>} />
      <Route exact path="/science"        element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="science" pageSize={this.pageSize}    category="science"/>} />
      <Route exact path="/sports"         element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="sports" pageSize={this.pageSize}    category="sports"/>} />
      <Route exact path="/technology"     element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="technology" pageSize={this.pageSize}     category="technology"/>} />
    
      
 
      <Route exact path="/chg1"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general1" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg2"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general2" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg3"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general3" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg4"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general4" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg5"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general5" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg6"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general6" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg7"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general7" pageSize={this.pageSize}   category="general" />} />
      <Route exact path="/chg8"               element={<News    setTopBarProgress={this.setProgress} myPresentCountry={ this.state.country}  setmycntry={this.setCountry}  apikey={this.apikey}  key="general8" pageSize={this.pageSize}   category="general" />} />
   </Routes>
    
      </>

      </BrowserRouter>
    )
  }
}
