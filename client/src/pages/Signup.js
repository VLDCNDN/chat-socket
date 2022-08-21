import { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        repeat_password: "",
        name: "",
      },
    };

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
        [name]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    const registerUser = this.state.user;
    fetch("/api/auth/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerUser),
    }).then((resp) => resp.json())
    .then((data) => {
      if(data.error !== "" ) {
        alert(data.error);
        return;
      }

      alert("Registered!");
      window.location = "/";
      
    });
  }

  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center  bg-neutral-900 h-screen text-neutral-200">
          <div className="w-1/6">
            <form onSubmit={this.handleSubmit}>
              {/* <p>Register</p> */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
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
              <div className="">
                <label className="block text-sm font-bold mb-2" htmlFor="password">
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
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="repeat_password">
                  Repeat password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="repeat_password"
                  type="password"
                  placeholder="******************"
                  name="repeat_password"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Username"
                  name="name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div></div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
