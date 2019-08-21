import React from 'react';
import {Button} from '@shopify/polaris';

import './Notification.scss';
class Notification extends React.Component{
        render(){
            const {title, ratings, description, actionText, discount, iconUrl } = this.props;
            return (
                <div className="notification-component">
                    <div className="icon"><img src={iconUrl}/></div>
                    <div className="content">
                            <div className="title">{title}</div>
                            <div className="ratings">* {ratings}</div>
                            <div className="description">{description}</div>
                            <div className="actions"><Button size="slim" primary>{actionText}</Button></div>
                            <div className="discount">{discount}% off on 1st Month</div>
                    </div>
                </div>
            );
        }
}
export default Notification;