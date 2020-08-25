import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    render() {
        <PaypalExpressBtn
        client={'Ahmed'}
        currency={'EGP'}
        total={'30'}
       style={{ 
            size:'large',
            color:'blue',
            shape: 'rect',
            label: 'checkout'
        }}
         />
    }
}