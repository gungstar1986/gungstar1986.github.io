import React from "react";
import Header from "./Header";
import classes from "./Header.module.css"
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-Reducer";
import {auth} from "../Api/api";


class HeaderContainerComponent extends React.Component {
    componentDidMount() {
        auth.getAuthInfo().then(response => {
            if (response.resultCode === 0) {
                this.props.setAuthUserData(response.data);
            }
        })
    }

    render() {
        return (
            <div className={classes.headerContainer}>
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAuthData: state.userAuthData
    }
};
const mapDispatchToProps = {
    setAuthUserData
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerComponent);
export default HeaderContainer
