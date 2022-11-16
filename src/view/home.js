import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Header from './header/header';
import Body from './body/body';
import React from 'react';
import { Link } from 'react-router-dom';
function Home(props){
  
    console.log(props.status)
    console.log('user',props.user)
    console.log(window.location.pathname)
    return (
        <>
 <Link></Link>
        <Header />
        <Body />
        </>
      
    );
}
const mapStateToProps = state =>{
    return {
        status : state.status,
        user: state.user
    }
};
const mapDispatchToProps = (dispatch, props) =>{
    return {
        addStatus : (status) =>{
            dispatch(actions.status(status))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
