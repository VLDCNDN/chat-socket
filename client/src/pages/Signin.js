import { Component } from "react";
import { Navigate } from 'react-router-dom';

class Signin extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }))
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginUser = this.state.user;
    fetch('/api/auth/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginUser),
    })
    .then((resp) => ( resp.json() ))
    .then((data) => {
      if(data.error !== "") {
        alert(data.error);
        return;
      }

      window.location = "/chat";
      return;
    })
  }

  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center  bg-neutral-900 h-screen text-neutral-200">
          <div className="">
            <form onSubmit={this.handleSubmit}>
              <p className="text-xl font-medium">Login</p>
              <br></br>
              <div className="mb-4">
                <label
                  className="block text-neutral-400 text-sm font-bold mb-2 uppercase"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-neutral-400 text-sm font-bold mb-2 uppercase"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  name="password"
                  onChange={this.handleInputChange}
                />
                {/* <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p> */}
              </div>
              <div className="flex items-center justify-between">
                <div></div>
                <button
                  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
