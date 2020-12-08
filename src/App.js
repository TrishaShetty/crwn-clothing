import React from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component.jsx';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
 
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route 
          exact 
          path='/signin' 
          render={() => 
            this.props.currentUser? (
            <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
            } 
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispath => ({
  checkUserSession: () => dispath(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
