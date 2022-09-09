import React, { Component } from 'react';
// import {Route, Redirect} from 'react-router-dom';
// import {browserHistory} from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            Password: "",
            UserNameWrong:"",
            PasswordWrong:""
        }
        
    }


    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle submit");
        // event.preventDefault();
        console.log(this.state.UserName);
        localStorage.setItem("UserName", this.state.UserName);
        if(this.state.UserName===""){
            this.setState({UserNameWrong: "Please enter UserName"});
        }
        else if(this.state.Password===""){

            this.setState({PasswordWrong: "Please enter Password",
             UserNameWrong:""});
        }
        else{
            this.setState({PasswordWrong:""});
            window.location.href="/home"
            // this.props.history.push('/home');
            // props.history.push("/home");
            // window.location("/home");
            // browserHistory.push('/home',
            //   localStorage.setItem('Username', this.state.UserName));
            alert("Login was success Mr." , localStorage.getItem("UserName") );
            
        }

    }



    render() {

        return (

            <div
            style={{border: '2px solid blue',
                         margin:'auto',
                        borderRadius:'10px',
                        marginTop: '7%',
                        // marginLeft:'50%',
                        height: '350px',
                        width:'400px',
                        textAlign:'center',
                        alignItems :'center'}}>
                <h3>GPS Tracker</h3>
                <table style={{margin:'auto',
                               textAlign: 'center',
                              }}>
                    <tr>
                        <td>
                            Username :
                        </td>
                        <td>
                            <input style={{
                                width: '80%',
                                padding: '8px 12px',
                                // margin: '6px',
                                border: 'none',
                                
                                borderBottom: '2px solid black'
                            }} 
                            type="text" value={this.state.UserName} name="UserName"
                                onChange={(e)=>this.setState({UserName:e.target.value},()=>{
                                    if(!e.target.value){
                                        this.setState({UserNameWrong: "UserName should not be blank"})
                                    }
                                    else{
                                        this.setState({UserNameWrong:""})
                                    }
                                    
                                })}
                                // onChange={this.handleChange}
                                />
                                
                        </td>
                    </tr>&nbsp;
                    <tr>
                        <td></td>
                        <td>
                        <p style={{color:'red'}}>{this.state.UserNameWrong}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password :
                        </td>
                        <td>
                            <input  style={{
                                width: '80%',
                                padding: '8px 12px',
                                // margin: '6px 0',
                                border: 'none',
                                
                                borderBottom: '2px solid black'
                            }} 
                             type="password" value={this.state.Password} name="Password"
                                onChange={(e)=> this.setState({Password:e.target.value})} 
                                // onChange={this.handleChange}
                                />
                               
                        </td>
                    </tr>&nbsp;
                    <tr>
                        <td></td>
                        <td>
                        <p style={{color:'red'}}>{this.state.PasswordWrong}</p>
                        </td>
                    </tr>
                    <button
                    style={{marginLeft:'100%', marginTop:'2vmin', padding: '8px 12px', 
                    borderRadius:'10px', 
                    backgroundColor: 'brown', color:'white'}} 
                    onClick={this.handleSubmit} >Submit</button>
                    
                </table>


            </div>
        )
    }


}