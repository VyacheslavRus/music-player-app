import React from 'react';
import {SidebarWrapper} from "./SidebarStyled";
import Navigation from "./Navigation/Navigation";
import {useSelector} from "react-redux";
import {getSidebarSelectors} from "../../redux/sidebar/sidebarSelectors";

function Sidebar(props) {
    const isShowSidebar = useSelector(getSidebarSelectors)

    return (
        <SidebarWrapper isShow={isShowSidebar} className='sidebar'>
        <Navigation/>
        </SidebarWrapper>
    );
}

export default Sidebar;