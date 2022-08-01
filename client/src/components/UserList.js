import React, { Component } from "react";
import UserComponent from "./User";

class UserList extends Component {
  render() {
    const { usersData } = this.props;

    function usersList() {
      return usersData.map((user) => <UserComponent userName={user} key={user}/>);
    }

    return <ul className="divide-y divide-neutral-800">{usersList()}</ul>;
  }
}

export default UserList;
