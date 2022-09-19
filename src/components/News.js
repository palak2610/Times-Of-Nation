import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
  constructor(props){
    super(props);
    this.state={
      articles : [],
      loading : true,
      page : 1,
      totalResults :0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Times Of Nation`;
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41af05badebf44c3a29fe6c1ba2caf1a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles : parsedData.articles, 
    totalResults: parsedData.totalResults,
    loading:false
  });
  this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41af05badebf44c3a29fe6c1ba2caf1a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles : this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{color:"black", marginTop:"35px"}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='my-3'>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-sm-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,45):"" } description={element.description?element.description.slice(0,150):""} 
                imageUrl={element.urlToImage?element.urlToImage:"https://unsplash.it/500/500/"} newsUrl={element.url} author={element.author} date={element.publishedAt}
                source={element.source.name}/>
          </div>
          })}
          </div>
          </InfiniteScroll>
        </div>  
      </div>    
    )
  }
}

export default News