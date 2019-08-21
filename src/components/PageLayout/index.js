import React from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
class Layout extends React.Component{


    render(){
            return (
                <div className="Layout">
                    <TopBar/>
                    <div className="bottom-content">
                        <Sidebar/>
                        <div className="page-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
    }
}

export default Layout;