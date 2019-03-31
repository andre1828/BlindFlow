import React from 'react'

class MyButton extends React.Component{
    
    render() {
        return (
        <>
            <button onClick={() => console.log(`${this.props.value}`)}>my button</button>
            <i></i>
          </>  
        )
    }
}

export default MyButton