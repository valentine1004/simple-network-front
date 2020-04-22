import CustomDrawer from './CustomDrawer';
import {connect} from "react-redux";
import {changeCurrentSection} from "../../../state/actions/profile";

const mapStateToProps = (state: any) => ({
    user: state.profile.user.data,
    currentSection: state.profile.general.currentSection
});

const mapDispatchToProps = {
    changeSection: changeCurrentSection
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);