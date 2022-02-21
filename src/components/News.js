import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import FloatingBtn from './FloatingBtn'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  articles=[];
  
  static defaultProps={
         category:'general',
         pageSize:8,
         myPresentCountry:"in"
 }

 static propTypes={
  category:PropTypes.string,
  pageSize:PropTypes.number,
  myPresentCountry:PropTypes.string
 }

  constructor() {
    
    super();
    this.state={
     
      articles :this.articles,
      //articles:[] //same as aboveline but no need to declare above constructor
      loading: true, // Used for showing Spinner
      page:1,
      totalResults:0,
      
      
      }
  }

 
 capitalize=(text)=>{
  return  text.charAt(0).toUpperCase()+text.slice(1);
  }
setPg=()=>{
 //
}

  async updateNews(){
    this.props.setTopBarProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.myPresentCountry}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true}); // set to true to show the spinner initially on page load
    this.props.setTopBarProgress(30);
    let data1= await fetch(url);                  // (data1);
    this.props.setTopBarProgress(50);
    let parseData=await  data1.json();           //console.log(parseData);
    this.props.setTopBarProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResults:parseData.totalResults,
      loading:false, 
      page:this.state.page
    });
     this.props.setTopBarProgress(100);
     document.title=`News Corner -  ${this.capitalize(this.props.category)}`
  }
  
  async componentDidMount(){
    this.updateNews();
   }


  /* componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=da32b780a2e6477fb60928ea8789fa4c")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            articles: result.articles
          });
        },
       
        (error) => {
         ('The error is  ----- >< '+error);
        }
      )
  } */
 
  handleNext= async() =>{
  await this.setState({page:this.state.page+1}); // await is needed because page state must update before the updateNews function gets executed otherwise updateNews will run with same page number as before.---- Very very important 
 //('The page no is '+this.state.page);
  this.updateNews();
  }
  
  
  handlePrev=async ()=>{
   
    await this.setState({page:this.state.page-1});    // await is needed because page state must update before the updateNews function gets executed otherwise updateNews will run with same page number as before.---- Very very important
    this.updateNews();


    /* if(this.state.page-1>Math.ceil(this.state.totalResults/this.props.pageSize))
    {
    //Do nothing
    
    }
else{
console.log('Handle Prev');
let url=`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=da32b780a2e6477fb60928ea8789fa4c&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;

this.setState({loading:true});
    let data1= await fetch(url);
   (data1);
    let parseData=await  data1.json();
     this.setState({
      articles: parseData.articles,
       page:this.state.page-1,
       loading:false
  })
} */


}

chkCountry=(val)=>{
if (val==='in'){return "India"}
else if(val==='au'){return "Australia"}
else if(val==='us'){return "US"}
else if(val==='gb'){return "UK"}
else if(val==='cn'){return "China"}
else if(val==='ae'){return "UAE"}
else if(val==='jp'){return "Japan"}
else if(val==='ch'){return "Switzerland"}
else{return "Unknown Contry"}

}

fetchMoreData = async() => {
  this.setState({page:this.state.page+1})
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.myPresentCountry}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    //this.setState({loading:true});
    let data1= await fetch(url);                  // (data1);
    let parseData=await  data1.json();           //console.log(parseData);
   // this.props.setNextPage(true);
   this.extraPage=true;
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults:parseData.totalResults,
      loading:false,
      page:this.state.page,
      extraPage:false
    });
};
  render() {
    return (
        <>
        <div className='coantainer ' style={{margin:'25px'}}>
        <div className=" d-grid gap-2 col-6 mx-auto">
  <button  className="btn btn-dark disabled" type="button"><h3 className='text-center'>News Corner : Top <strong style={{color:'#dfed1c'}}> {this.capitalize(this.props.category)}</strong> Headlines <strong  style={{color:'#dfed1c'}}>({this.chkCountry(this.props.myPresentCountry)})</strong> </h3></button>
  </div>
              
        </div>
   {/*    <div className='container ' style={{height:'10'}}>{this.state.loading && <Spinner/>}</div>  */}

      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          onScroll={this.setPg}
          
        >
       
       <div className='row my-1 mx-1'>
     {!this.state.loading && this.state.articles.map((element,i,arr)=>{ 
     // (arr.length);
return <div className='col-md-3 my-1' key={element.url} >


<NewsItem  title={element.title?(element.title.slice(0,47)+'...'):"No title for the newz"} description={element.description?element.description.slice(0,87):"No Description available for this newz"} imgurl={element.urlToImage} fullNewzUrl={element.url} author ={element.author} time={element.publishedAt} source={element.source.name}/>

</div>  

      })}
          
        </div>
    
        </InfiniteScroll>

        {<FloatingBtn />}
    {/*  <div className='container d-flex justify-content-between my-2'>
     <button type="button"  disabled={this.state.page<=1} className="btn btn-lg btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
     <button type="button" className="btn btn-lg btn-dark">Page {this.state.page}</button>
     <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults)/this.props.pageSize}  className="btn btn-lg btn-dark" onClick={this.handleNext}>Next &rarr;</button>
     </div> */}
   
     </>
    )
  }
}
