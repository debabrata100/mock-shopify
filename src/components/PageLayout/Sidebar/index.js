import React from 'react';
import {Navigation} from '@shopify/polaris';
import {HomeMajorMonotone, OrdersMajorTwotone, ProductsMajorTwotone} from '@shopify/polaris-icons';
import './Sidebar.scss';
export default class App extends React.Component {
  render() {
    return (
      <div className="Sidebar">
          <div className="back-to-shopify">Back to Shopify</div>
          <Navigation location="/">
  <Navigation.Section
    items={[
      {
        url: '/path/to/place',
        label: 'Home',
        icon: HomeMajorMonotone,
      },
      {
        url: '/path/to/place',
        label: 'Orders',
        icon: OrdersMajorTwotone,
        badge: '15',
      },
      {
        url: '/path/to/place',
        label: 'Products',
        icon: ProductsMajorTwotone,
      },
    ]}
  />
</Navigation>
      </div>
    );
  }
}
