import {Component} from "react";

class Api extends Component{
 constructor(props){
  super(props)
  this.state={
    myarry: []
  }
 }
 myfun= ()=>{
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then((reciveddata)=>reciveddata.json())
  .then((jsondata)=>{ console.log(this.state)
   this.setState({myarry:jsondata  })
   console.log(this.state)
  })
  .catch((err)=>{console.log(err)})
 }
  render(){
    const a=this.state.myarry
    return(
      <div>
        <button onClick={this.myfun}> Click here</button>
        {
          a.map((myitem)=>(
            <ul key={myitem.id}>
              <li>{myitem.userId},{myitem.id },{myitem.title}</li>

            </ul>
          ))
        }
      </div>
    )
  }
}
export default Api;