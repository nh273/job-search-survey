import React from "react";
import firebase from "firebase";
import PropTypes from "prop-types";
import Translatable from "../../multilingual/Translatable";
import { firebaseApp } from "./Base";

class Login extends React.Component {
  state = {
    loggedIn: false,
    anonymous: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      /* onAuthStateChanged auto-triggers whenever there is
      login state change */
      this.handleAuthStateChanged(user);
    });
  }

  handleAuthStateChanged = user => {
    /* This function will get called
    by onAuthStateChanged, whenever there is
    a successful sign in or sign out event */
    if (user) {
      // user is signed in
      this.props.setUserState(user.uid);
      this.setState({ loggedIn: true, anonymous: user.isAnonymous });
    } else {
      // no user signed in
      this.props.setUserState(null);
      this.setState({ loggedIn: false, anonymous: false });
    }
  };

  authenticate = provider => {
    firebaseApp.auth().signInWithPopup(provider);
  };

  facebookAuthenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider();
    this.authenticate(authProvider);
  };

  githubAuthenticate = () => {
    const authProvider = new firebase.auth.GithubAuthProvider();
    this.authenticate(authProvider);
  };

  anonAuthenticate = () => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        console.log(error.code, error.message);
      });
  };

  logout = async () => {
    await firebase.auth().signOut();
  };

  render() {
    const logoutButton = (
      <div className="first-logout-prompt">
        <Translatable
          text={{ en: <p>Welcome back!</p>, vi: <p>Xin chào!</p> }}
        />
        <button onClick={this.logout}>
          <Translatable
            text={{
              vi: "Đăng xuất",
              en: "Logout"
            }}
          />
        </button>
      </div>
    );

    const loginButton = (
      <div className="first-login-prompt">
        <Translatable
          text={{
            vi: <p>Dang nhap tai day</p>,
            en: <p>Login here</p>
          }}
        />
        <button
          className="facebook"
          onClick={() => this.facebookAuthenticate()}
        >
          <Translatable
            text={{
              vi: "Đăng nhập qua Facebook",
              en: "Login with Facebook"
            }}
          />
        </button>

        <button className="github" onClick={() => this.githubAuthenticate()}>
          <Translatable
            text={{
              vi: "Đăng nhập qua Github",
              en: "Login with Github"
            }}
          />
        </button>
      </div>
    );

    if (this.state.loggedIn & !this.state.anonymous) {
      return logoutButton;
    }

    return loginButton;
  }
}

export default Login;
