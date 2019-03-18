import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/css/trial.css'

class TrialPage extends React.Component
{
  
  constructor(props)
  {
    super(props);
    this.state={"arrayImage":["Image1","Image2","Image3"],"style":[],"counter":0};
    this.PrevClick = this.PrevClick.bind(this);
    this.NextClick = this.NextClick.bind(this);
    
  }
  PrevClick(){
   if(this.state.counter!=0)
   {
     this.setState({"counter":(this.state.counter-1)})
   }
   else{
     this.setState({"counter":2})
   }
  }
  componentDidMount(){
   // this.timer = setInterval(this.NextClick,2000)
  }
  componentWillUnmount()
  {
    //clearInterval(this.timer)
  }
  componentDidUpdate()
  {
    console.log(this.state.counter)
  }

  NextClick(){
    if(this.state.counter!=2)
    {
      this.setState({"counter":(this.state.counter+1)})
    }
    else{
      this.setState({"counter":0})
    }

  }
 
  render()
  {
    const image= this.state.arrayImage
    return(
      <div Style="width:60px;overflow: hidden">
      <div Style={"width:180px;position:relative;left:"+(-(this.state.counter*60))+"px"}>
      <ReactCSSTransitionGroup transitionName="example1" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      <div Style="width:60px;display:inline">{image[0]}</div>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName="example2" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      <div Style="width:60px;display:inline">{image[1]}</div>
      </ReactCSSTransitionGroup >
      <ReactCSSTransitionGroup transitionName="example3" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      <div Style="width:60px;display:inline">{image[2]}</div>
      </ReactCSSTransitionGroup>
      </div>
      <div>
      <button onClick={this.PrevClick}>Previous</button>
      <button onClick={this.NextClick}>Next</button>
      </div>
      </div>
    )
  }
}

export default TrialPage
