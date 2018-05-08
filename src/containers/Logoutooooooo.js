import { at_logoutCompleted} from '../actions/actionAccount'
import { connect } from "react-redux";

function Logout (props){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    props.at_logoutCompleted();
    props.history.push("/login");
    return true;
}
function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
       at_logoutCompleted: ()=> dispatch(at_logoutCompleted ()),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Logout);
