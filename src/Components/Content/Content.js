import React from 'react';
import Pages from "../../utils/Pages";
import {ContentWrapper} from "./ContentStyled";

function Content(props) {
    return (
        <ContentWrapper className={'container'}>
            <Pages/>
        </ContentWrapper>
    );
}

export default Content;