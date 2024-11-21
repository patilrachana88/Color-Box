import React,{ Component } from 'react'
import './BoxContainer.css'
import Box from './Box'
import { rgbValue, generateColors } from './help'
 
class BoxContainer extends Component{
 
  
  static defaultProps = {
    num : 18
  }
  constructor(props){
    super(props)
    this.state = {
     
     
      colors : generateColors(this.props.num)
    }
    this.changeColor = this.changeColor.bind(this)
  }
 
  changeColor(c){
   
  
    let newColor
    do{
      newColor = `rgb(
        ${rgbValue()},
        ${rgbValue()},
        ${rgbValue()}
      )`
       
  
    }while(newColor === c)
 
 
    this.setState(st => ({
      colors : st.colors.map(color => {
        if(color !== c) return color
        return newColor
      })
    }))
  }
 
  render(){ 
    return(
      <div className='BoxContainer'>
        {this.state.colors.map(color => (
         
        
          <Box color={color} changeColor={this.changeColor}/>
        ))}
      </div>
    )
  }
}
 
export default BoxContainer