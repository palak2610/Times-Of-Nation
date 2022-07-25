// import React, { Component } from 'react'
// import "./Slideshow.css"

// export default class Slideshow extends Component {
//     constructor(){
//         super();
//         this.state={
//           articles : []
//         }
//       }

//       async componentDidMount(){
//         let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=41af05badebf44c3a29fe6c1ba2caf1a";
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({articles : parsedData.articles});
//       }

//   render() {
//     return (
//         <div>
//             <Carousel fade>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=First slide&bg=373940"
//                     alt="First slide"
//                     />
//                     <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         </div>
    
//     )
//   }
// }

