import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const withLoginRedirect = (Component) => {

    class loginRedirect extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to={"/profile"}/>;
            return <Component {...this.props}/>
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.userAuthData.isAuth
        }
    };
    return connect(mapStateToProps)(loginRedirect);
};
export default withLoginRedirect;

