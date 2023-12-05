/* eslint-disable react/prop-types */
import Sidebar from "./sidebar/Sidebar";
import Nav from "./Nav";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar />
                <div className="w-full">
                    <Nav/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
