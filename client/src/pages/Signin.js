import { Component } from "react";

class Signin extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
        repeat_password: '',
        name: '',
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

    const registerUser = this.state.user;
    fetch('/api/auth/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(registerUser),
    }).then((resp) => {
      console.log(resp);
      alert("Registered");
    })
  }

  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center  bg-neutral-900 h-screen text-neutral-200">
          <div className="">
            <form>
              <p>Register</p>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
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
