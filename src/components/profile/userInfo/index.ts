import UserInfo from "./UserInfo";
import {connect} from "react-redux";
import {fetchUser} from "../../../state/actions/profile";

const mapStateToProps = (state: any) => ({
    user: state.profile.user.data
});

const mapDispatchToProps = {
    getProfile: fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);