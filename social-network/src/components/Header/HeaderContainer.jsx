import React from "react";
import Header from "./Header";
import classes from "./Header.module.css"
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-Reducer";

class HeaderContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerComponent);
export default HeaderContainer
