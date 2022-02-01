import Main from './Components/Main/Main';
import Navigation from './Components/Navigation/Navigation';
import {AppWrapper} from "./AppStyled";

const App = () => {
    return (
        <AppWrapper className={'container'}>
            <Navigation/>
            <Main/>
        </AppWrapper>
    );
}

export default App
