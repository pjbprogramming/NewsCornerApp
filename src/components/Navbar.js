import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  
  changeCountry=(e,val)=>{
    
  // ('Event value is  '+e);
    this.props.setmycntry(val);
    
  }

  
                      
render() {
 ('From Navbar component ---- '+this.props.myPresentCountry);
  
  return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">News Corner</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home" >Home (IND)</Link>
              </li>
             

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Counrty
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <li><Link className="dropdown-item" to='/chg1'onClick={(e) => this.changeCountry(e,'in') }>India</Link></li> 
                <li><Link className="dropdown-item" to="/chg2" onClick={(e) => this.changeCountry(e,'au')}>Australia</Link></li>
                <li><Link className="dropdown-item" to="/chg3" onClick={(e) => this.changeCountry(e,'us')}>US</Link></li>
                <li><Link className="dropdown-item" to="/chg4" onClick={(e) => this.changeCountry(e,'gb')}>UK</Link></li>
                <li><Link className="dropdown-item" to="/chg5" onClick={(e) => this.changeCountry(e,'cn')}>China</Link></li>
                 <li><Link className="dropdown-item" to="/chg6" onClick={(e) => this.changeCountry(e,'ae')}>UAE</Link></li>
                 <li><Link className="dropdown-item" to="/chg7" onClick={(e) => this.changeCountry(e,'jp')}>Japan</Link></li>
                <li><Link className="dropdown-item" to="/chg8" onClick={(e) => this.changeCountry(e,'ch')}>Switzerland</Link></li>
                 </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/general">General</Link></li>
                  <li><Link className="dropdown-item" to="business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
              </li>
             
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
