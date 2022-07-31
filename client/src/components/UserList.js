import React, { Component } from "react";
import UserComponent from "./User";

class UserList extends Component {
  render() {
    const { usersData } = this.props;

    function usersList() {
      return usersData.map((user) => <UserComponent userName={user} />);
    }

    return <ul class="divide-y divide-neutral-800">{usersList()}</ul>;
  }
}

export default UserList;
