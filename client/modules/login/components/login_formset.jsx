import React from 'react';
import LoginServices from './login_services.jsx';
import LoginForm from './login_form.jsx';

const LoginFormSet = React.createClass({
  render(){
    const options = {};

    if (this.props.redirect){
      options.redirect = this.props.redirect;
    }

    const services = getLoginServices().length && !Meteor.user() ? <LoginServices {...options}/> : null;
    const form = Package['accounts-password'] ? <LoginForm {...options}/> : null;

    return(<div
      className="accounts-ui__formset">
        {services}
        {form && services ? <hr className="accounts-ui__separator"/> : null}
        {form}
    </div>);
  }
});

console.log("LoginFormSet ** ", LoginFormSet);

export default LoginFormSet;
