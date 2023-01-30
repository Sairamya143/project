import { Component } from "react";
class RegisterForm extends Component{
  constructor(){
    super()
    this.state={
      myFirst: "",
      myLast: "",
      myAddress: "",
      myGender: "",
      myEmail: "",
      myPassword: "",
      myCheckbox: ""
    }
  }
  myFirstNamechange= (event) =>{
    this.setState({myFirst:event.target.value})
  }
  myLastNamechange= (event) =>{
    this.setState({myLast:event.target.value})
  }
  myGenderchange= (event) =>{
    this.setState({myGender:event.target.value})
  }
  myAddresschange= (event) =>{
    this.setState({myAddress:event.target.value})
  }
  myEmailchange= (event) =>{
    this.setState({myEmail:event.target.value})
  }
  myPasswordchange= (event) =>{
    this.setState({myPassword:event.target.value})
  }
  myCheckboxchange= (event) =>{
    this.setState({myCheckbox:event.target.value})
  }
  mySubmitfunction= (event)=>{ 
    event.preventDefault()
    console.log(this.state)
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.mySubmitfunction}>
        <div className="mb-3">
    <label htmlFor="exampleFirstName" className="form-label">First Name</label>
    <input type="text" onChange={this.myFirstNamechange} className="form-control" id="exampleFirstName" required placeholder="Your FirstName"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleLastName" className="form-label">Last Name</label>
    <input type="text" onChange={this.myLastNamechange} className="form-control" id="exampleLastName" required placeholder="Your LastName"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleGender" className="form-label">Gender</label><br/>
 
    <input type="radio" onChange={this.myGenderchange} className="form-check-input" id="exampleRadio1"/>Male 
    <input type="radio" onChange={this.myGenderchange} className="form-check-input" id="exampleRadio1"/>Female
    <input type="radio" onChange={this.myGenderchange} className="form-check-input" id="exampleRadio1"/>Other
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleAddress" className="form-label">Address</label>
    <textarea onChange={this.myAddresschange}className="form-control" id="exampleAddess" rows="2" cols="10" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={this.myEmailchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={this.myPasswordchange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" onChange={this.myCheckboxchange} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
 
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
      </div>
  
 
    )
  }
}
export default RegisterForm;