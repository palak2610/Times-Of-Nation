import React, { Component } from 'react'
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props; 
    return (
      <div className='newsitem'>
        <a rel ="noopener noreferrer" href={newsUrl} target="_blank"> 
            <div className="container my-3">
                {/* <img src={imageUrl}/> */}
                <div className="front" style={{backgroundImage : `url(${imageUrl})`}} >
                    <div className="inner">
                        <p>{title}...</p> 
                        {/* <span>Lorem ipsum</span> */}
                    </div>
                </div>
                <div className="back" style={{backgroundImage : `url("https://cdn.cnn.com/cnnnext/dam/assets/160906115810-iyw-impact-your-world-background-large-43.jpg")`}}>
                    <div className="inner">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </a>
      </div>
    )
  }
}

export default NewsItem