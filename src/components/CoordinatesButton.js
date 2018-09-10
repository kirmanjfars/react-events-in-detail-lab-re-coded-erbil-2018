// Code CoordinatesButton Component Here

<<<<<<< HEAD
import React from 'react';

class CoordinatesButton extends React.Component {
  clicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.clicked}>Cordinates</button>
    );
  }
}

export default CoordinatesButton
=======
export default CoordinatesButton extends React.Component{
  clicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render(){
    return(
       <button onClick={this.clicked}>Coord button</button>
      )
  }
}
>>>>>>> a0d099bde16cfe21ee546d9c17f83a95a033dbf9
