import {AppWrapper} from "./AppStyled";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";

const App = () => {
    return (
        <AppWrapper>
            <Topbar/>
            <Sidebar/>
            <Content/>
        </AppWrapper>
    );
}

export default App
