import { Component } from "react"; 

class Apis extends Component{
   constructor(props){
     super(props) 
     this.state={
       myarray:[] 
    }
   } 
    myfun=()=>{ 
      fetch('https://jsonplaceholder.typicode.com/albums') 
    .then((reciveddata)=>reciveddata.json())
     .then((jsondata)=>{ console.log(this.state)
      this.setState({ myarray:jsondata })    
     console.log(this.state) 
    })
      .catch((err)=>{console.log(err)}) 
    }
       render(){ 
        const a=this.state.myarray 
       return( 
       <div> 
        <button onClick={this.myfun}>Click Here</button> 
        { 
        a.map((myitem)=>(
           <ul key={myitem.id}>
             <li>{myitem.userId},{myitem.title}</li>
              </ul> 
              )) 
              } 
              </div> 
              ) 
            } 
          } export default Apis;