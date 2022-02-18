import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export default class News extends Component {
  articles=[];
  
  static defaultProps={
         category:'general',
         pageSize:8,
         country:"in"
 }

 static propTypes={
  category:PropTypes.string,
  pageSize:PropTypes.number,
  country:PropTypes.string
 }

  constructor() {
    
    super();
    this.state={
     
      articles :this.articles,
      //articles:[] //same as aboveline but no need to declare above constructor
      loading: false,
      page:1,
      
      }
  }

 capitalize=(text)=>{
  return  text.charAt(0).toUpperCase()+text.slice(1);
  }

  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data1= await fetch(url);                  //  console.log(data1);
    let parseData=await  data1.json();           //console.log(parseData);
    
    this.setState({
      articles: parseData.articles,
      totalResults:parseData.totalResults,
      loading:false,
      page:this.state.page
    });
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
          console.log('The error is  ----- >< '+error);
        }
      )
  } */
 
  handleNext= async() =>{
  await this.setState({page:this.state.page+1}); // await is needed because page state must update before the updateNews function gets executed otherwise updateNews will run with same page number as before.---- Very very important 
  console.log('The page no is '+this.state.page);
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
    console.log(data1);
    let parseData=await  data1.json();
     this.setState({
      articles: parseData.articles,
       page:this.state.page-1,
       loading:false
  })
} */


}
  render() {
    return (
        <><div>
        <div className='coantainer ' style={{margin:'25px'}}>
        <div class=" d-grid gap-2 col-6 mx-auto">
  <button  class="btn btn-dark disabled" type="button"><h3 className='text-center'>News Corner : Top {this.capitalize(this.props.category)} Headlines</h3></button>
  </div>
              
        </div>
        <div className='container ' style={{height:'10'}}>{this.state.loading && <Spinner/>}</div>
       
       <div className='row my-1 mx-1'>
     {!this.state.loading && this.state.articles.map((element,i,arr)=>{ 
       console.log(arr.length);
return <div className='col-md-3 my-1' key={element.url} >


<NewsItem  title={element.title?(element.title.slice(0,47)+'...'):"No title for the newz"} description={element.description?element.description.slice(0,87):"No Description available for this newz"} imgurl={element.urlToImage} fullNewzUrl={element.url} author ={element.author} time={element.publishedAt} source={element.source.name}/>

</div>  

      })}
          
        </div>
     <div className='container d-flex justify-content-between my-2'>
     <button type="button"  disabled={this.state.page<=1} className="btn btn-lg btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
     <button type="button" className="btn btn-lg btn-dark">Page {this.state.page}</button>
     <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults)/this.props.pageSize}  className="btn btn-lg btn-dark" onClick={this.handleNext}>Next &rarr;</button>
     </div>
     </div>
     </>
    )
  }
}