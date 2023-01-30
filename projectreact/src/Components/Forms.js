import { Component } from "react";
class Forms extends Component{
  constructor(){
    super()
    this.state={
      myname: "", 
      mypass: "",
      myfirst: "",
      mylast:""
    }
  }
  myNamechange= (event)=>{
    this.setState({myname: event.target.value})
  }

  myPasschange= (event)=>{
    this.setState({mypass: event.target.value})
  }
  myFirstchange= (event)=>{
    this.setState({myfirst: event.target.value})
  }
  myLastchange= (event)=>{
    this.setState({mylast: event.target.value})
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
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={this.myNamechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={this.myPasschange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFirstname" className="form-label">First Name</label>
    <input type="text" onChange={this.myFirstchange} className="form-control" id="exampleFirstname"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleLastname" className="form-label">Last Name</label>
    <input type="text" onChange={this.myLastchange} className="form-control" id="exampleLastname"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>

    )
  }
}
export default Forms;