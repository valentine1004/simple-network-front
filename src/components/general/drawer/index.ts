import CustomDrawer from './CustomDrawer';
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
    user: state.profile.user.data
});

export default connect(mapStateToProps, null)(CustomDrawer);