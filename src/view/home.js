import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Navbar from './navbar';

function Home(props){
  
    return (
        <>
        <Navbar />
  
        </>
      
    );
}
const mapStateToProps = state =>{
    return {
        status : state.status
    }
};
const mapDispatchToProps = (dispatch, props) =>{
    return {
        addStatus : (status) =>{
            dispatch(actions.status(status))
        }
    }
}

export default Home;
