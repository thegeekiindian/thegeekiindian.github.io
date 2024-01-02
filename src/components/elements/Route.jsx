import React from 'react';

class Route extends React.Component {
    render() {
      console.log("Rendering routing component for path : " + this.props.path)
      return window.location.pathname == this.props.path ? <this.props.component/> : null
    }
}

export default Route