import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Helloo</h1>
      </div>
    );
  }
}






// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Comp1
//           title={"Hello Coming From Title Prop"}
//           handleButtonClick={() => {
//             alert("Button Clicked");
//           }}
//         />
//       </div>
//     );
//   }
// }

// class Comp1 extends React.Component{
//   render(){
//     //Destructuring
//     const{title,handleButtonClick}=this.props;
//     return(
//       <div className="App">
//         <h1>{title}<br/>Movie App Class Component</h1>
//         <button onClick={handleButtonClick}>Button Property</button>
//       </div>
//     );
//   }
// }

// function App(){
//   return <h1>Hello From Function</h1>
// }
export default App;
