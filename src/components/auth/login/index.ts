import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {fetchToken} from "../../../state/actions/profile";

const mapDispatchToProps = {
    getToken: fetchToken
};

export default connect(null, mapDispatchToProps)(LoginForm);