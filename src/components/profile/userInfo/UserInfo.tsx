import React, {useEffect} from "react";
import CustomDrawer from "../../general/drawer";

const UserProfile = (props: any) => {

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (typeof userStr === "string") {
            const user = JSON.parse(userStr);
            props.getProfile(user.id, props.history);
        }
    },[]);

    return (
        <div>
            <CustomDrawer {...props}/>
        </div>
    )
};

export default UserProfile;

