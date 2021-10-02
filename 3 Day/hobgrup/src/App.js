import "./App.css";
import React from "react";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableForm from "./components/TableForm";

class App extends React.Component {
  render() {
    return <PersonTable />;
  }
}
const columns = ["id", "Name", "Age", "City", "School", "language"];
class PersonTable extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "John",
        age: 20,
        city: "istanbul",
        school: "19mayıs",
        language: "Arapic",
      },
      {
        id: 2,
        name: "Ali",
        age: 30,
        city: "istanbul",
        school: "Gabze Tk",
        language: "Turkish",
      },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <table>
          <TableHead columns={columns} />
          <TableBody rows={data} />
        </table>
        <TableForm />
        <button
          onClick={() => {
            this.setState({
              data: [
                ...this.state.data,
                {
                  id: 2,
                  name: "Ali",
                  age: 30,
                  city: "istanbul",
                  school: "Gabze Tk",
                  language: "Turkish",
                },
              ],
            });
          }}
        >
          Render
        </button>
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
