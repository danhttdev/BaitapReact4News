import React, { Component } from 'react';

import { atx_getData } from '../../actions/actions';
import { connect } from "react-redux";

class Home extends Component {
componentWillMount(){
  this.props.atx_getData();
}
  render() {
    console.log(this.props.news);
      return (
          <div>{
            this.props.news.map((item)=> {
              return <span key={item.id}>{item.content}</span>
            })
          }</div>
      );
  }
}

//export default Home;

// export default  () => (
//   <div> hello </div>
// )


function mapStateToProps(state) {
  return {
      ...state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    atx_getData: () => dispatch(atx_getData()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);