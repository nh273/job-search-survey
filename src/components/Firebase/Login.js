import React from "react";
import firebase from "firebase";
import PropTypes from "prop-types";
import { Translatable } from "../../multilingual/Translatable";
import { firebaseApp } from "./Base";

class Login extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    console.log("mounting login");
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUserState(user.uid);
        this.setState({ loggedIn: true });
      }
    });
  }

  authenticate = provider => {
    console.log("authenticate is called");
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    // dynamically put in what kind of AuthProvider to use
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(result => {
        this.props.setUserState(result.user.id);
        this.setState({ loggedIn: true });
      });
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.props.setUserState(null);
    this.setState({ loggedIn: true });
  };

  render() {
    const logoutButton = (
      <button onClick={this.logout}>
        <Translatable
          text={{
            vi: "Đăng xuất",
            en: "Logout"
          }}
        />
      </button>
    );

    const loginButton = (
      <nav className="login">
        <p>
          <Translatable
            text={{
              vi: "Đăng nhập",
              en: "Login"
            }}
          />
        </p>
        <button
          className="facebook"
          onClick={() => this.authenticate("Facebook")}
        >
          <Translatable
            text={{
              vi: "Đăng nhập qua Facebook",
              en: "Login with Facebook"
            }}
          />
        </button>

        <button className="github" onClick={() => this.authenticate("Github")}>
          <Translatable
            text={{
              vi: "Đăng nhập qua Github",
              en: "Login with Github"
            }}
          />
        </button>
      </nav>
    );
    if (this.state.loggedIn) {
      return logoutButton;
    }

    return loginButton;
  }
}

export default Login;
