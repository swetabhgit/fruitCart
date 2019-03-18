import React from "react"
import '../styles/css/carousel.css'
import {Transition,Image} from 'semantic-ui-react'

class Carousel extends React.Component
{
  
  constructor(props)
  {
    super(props);
    this.state={"arrayImage":props.allImage,"counter":0,"visible":true};
    this.PrevClick = this.PrevClick.bind(this);
    this.NextClick = this.NextClick.bind(this);
    
  }
  PrevClick(){
   if(this.state.counter!=0)
   {
     this.setState({"counter":(this.state.counter-1),"visible":!(this.state.visible)})
   }
   else{
     this.setState({"counter":2,"visible":!(this.state.visible)})
   }
  }
  componentDidMount(){
    this.timer = setInterval(this.NextClick,5000)
  }
  componentWillUnmount()
  {
    clearInterval(this.timer)
  }
  componentDidUpdate(){
   // console.log(this.state.counter)
  }

  NextClick(){
    if(this.state.counter!=2)
    {
      this.setState({"counter":(this.state.counter+1),"visible":!(this.state.visible)})
    }
    else{
      this.setState({"counter":0,"visible":!(this.state.visible)})
    }

  }
 
  render()
  {
    const image= this.state.arrayImage[this.state.counter].node.childImageSharp.fixed.src
    return(
      <div className="carousel-wrapper">
      <div className="image-wrapper"><Transition visible={this.state.visible} animation='jiggle' duration={2000} ><Image center size='small' src={image} alt="carouselImages"/></Transition></div>
      {console.log(this.state.visible)}
      <div className="arrow-wrapper">
        <div onClick={this.PrevClick} className="left-arrow">&#10094;</div>
        <div onClick={this.NextClick} className="right-arrow">&#10095;</div>
        </div>     
      </div>
    )
  }
}

export default Carousel
