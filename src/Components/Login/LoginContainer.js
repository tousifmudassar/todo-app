import React, {Component} from 'react';
import Login from './Login';
import axios from 'axios';
import Cookies from 'js-cookie'

class LoginContainer extends Component{
    handleLogin = async(e)=>{
        e.preventDefault();
        // e.persist();
        const email = e.target[0].value;
        // axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`).then((result) => {
        //  result.data.length && Cookies.set('token',email);
        //  this.props.history.push('/dashboard');
        // }).catch((e)=>{
        //     console.log(e);
        // });

        const result = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
        result.data.length && Cookies.set('token',email);
        this.props.history.push('/dashboard');
    }

    render(){
        return(
            <Login 
            handleLogin={this.handleLogin}
            />
        );
    }
}

export default LoginContainer;