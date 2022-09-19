import React, { Component } from 'react'
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props; 
    return (
      <div className='newsitem'>
        <a rel ="noopener noreferrer" href={newsUrl} target="_blank"> 
            <div className="container my-3">
                {/* <img src={imageUrl}/> */}
                <div className="front" style={{backgroundImage : `url(${imageUrl})`}} >
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                      <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <div className="inner">
                    {/* <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"80%", zIndex:"1"}}>{source}</span> */}
                        <p>{title}...</p> 
                        {/* <span>Lorem ipsum</span> */}    
                    </div>
                </div>
                <div className="back" style={{backgroundImage : `url("https://cdn.cnn.com/cnnnext/dam/assets/160906115810-iyw-impact-your-world-background-large-43.jpg")`}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                      <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <div className="inner">
                        <p>{description}</p>
                    </div>
                </div>
                <p className="card-text"><small className="text-muted">By {author? author:"Unknown"} on {new Date(date).toGMTString()} </small>
                </p>
            </div>
        </a>
      </div>
    )
  }
}

export default NewsItem