// Code DelayedButton Component Here
import React from 'react';

export default DelayedButton  extends React.Component{

  clicked = (evt)=>{
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.clicked}>Delay this</button>
    );
  }
}

