import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category:'general'
  }
  static defaultProps = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles : [],
      loading : false,
      page : 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41af05badebf44c3a29fe6c1ba2caf1a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, 
    totalResults: parsedData.totalResults,
    loading:false});
  }

  handlePreviousClick = async () =>{
    console.log("P")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41af05badebf44c3a29fe6c1ba2caf1a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles,
      loading:false
    })
  }

  handleNextClick = async () =>{
    console.log("N")
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41af05badebf44c3a29fe6c1ba2caf1a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
      page: this.state.page + 1,
      articles : parsedData.articles,
      loading:false
    })
    }
    
  }

  render() {
    return (
      <div>
        <h1 style={{color:"black", marginTop:"35px"}}>Times Of Nation - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='my-3'>
          <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-sm-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,45):"" } description={element.description?element.description.slice(0,150):""} imageUrl={element.urlToImage?element.urlToImage:"https://unsplash.it/500/500/"} newsUrl={element.url}/>
          </div>
          })}
          </div>
        </div>
        <div className='container d-flex justify-content-between' >
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePreviousClick}>Previous</button>
          <button disable={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>    
      
    )
  }
}

export default News