import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default function Auth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      fetch('api/verifyToken')
        .then(res => {
          if(res.status === 200) {
            this.setState({loading: false});
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            redirect: true
          })
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if(loading) {
        return null;
      }

      if( redirect ) {
        return <Navigate to='/' />;
      }

      return <ComponentToProtect {...this.props} />
    }
  }
}