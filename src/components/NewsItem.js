import React, { Component } from 'react'

export default class NewsItem extends Component {
  /* constructor() {
    super();
   // console.log('Constructor from newsitem');
  } */
  render() {
    let {title,description,imgurl,fullNewzUrl,author,time,source}=this.props;

    return (<>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  style={{left:"15%",zIndex:4}}>
     
     {source}
   </span>
        <img src={imgurl?imgurl:"../altrnate_news.jpg"} className="card-img-top" alt="Loading..."/>
        <div className="card-body">
           
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{ description}</p>
          <p className="card-text"><small className="text-info">By {author?author:"Unknown"} on {new Date(time).toGMTString()}</small></p>
          <a href={fullNewzUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read Full </a>
        </div>
      </div></>
    )
  }
}




