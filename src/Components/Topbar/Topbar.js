import React, {useRef} from 'react';
import {TopbarWrapper} from "./TopbarStyled";
import {HiArrowNarrowLeft} from "react-icons/hi";
import {BsMoonStars, BsMoonStarsFill} from "react-icons/bs";
import {FiFilter, FiSearch} from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi";
import {useDispatch, useSelector} from "react-redux";
import {getSidebarSelectors} from "../../redux/sidebar/sidebarSelectors";
import {SHOW_SIDEBAR} from "../../redux/sidebar/sidebarSlice";
import {CgClose} from "react-icons/cg";


function Topbar(props) {
    const dispatch = useDispatch()
    const isShowSidebar = useSelector(getSidebarSelectors)


    const hendlerShowSitebar = () => {
        dispatch(SHOW_SIDEBAR())
    }

    return (
        <TopbarWrapper className={'container'}>
            <button className='firstBtn' onClick={hendlerShowSitebar}>
                {/*<HiArrowNarrowLeft/>*/}
                {isShowSidebar ? <CgClose/> : <GiHamburgerMenu/>}
            </button>
            <button className='secondBtn'>
                <BsMoonStarsFill/>
                {/*<BsMoonStars/>*/}
            </button>
            <button className='thirdBtn'>
                <FiSearch/>
                {/*<FiFilter/>*/}
            </button>
        </TopbarWrapper>
    );
}

export default Topbar;