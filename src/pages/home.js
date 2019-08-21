import React from 'react';
import PageLayout from '../components/PageLayout';
import {Layout, Page} from '@shopify/polaris';
import Notification from '../components/Notification';
import axios from 'axios';
import './Home.scss';
class Home extends React.Component{
    state = {
        notifications: []
    }
    componentDidMount(){
        axios.get("http://www.mocky.io/v2/5d5da172330000a65a57bacd")
        .then(res=>{
            this.setState(state=>({ notifications: res.data }));
        }).catch(error=>{

        })
    }

    render(){
            const { notifications } = this.state;
            return (
                <div>
                    <PageLayout>
                    <Page title="Recomended Apps from our Partners" separator>
                        <div className="notification-list">
                        {notifications.length > 0 && notifications.map((n,key)=>(
                                    <div key={key} className="notification-group">
                                        <div className="title">{n.groupName}</div>
                                        <div className="items">
                                            {n && n.items.map((item,i)=>(
                                                    <Notification key={i} {...item} ></Notification>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        </Page>
                    </PageLayout>
                </div>
            );
    }
}

export default Home;