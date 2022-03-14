import React, {useState} from 'react'
import './App.css'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import ShowAge from './components/test'
// // ReactDOM.render(
// //   <App />, document.querySelector("#root")
// // )
// // const person = {
// //   name: "Dyy",
// //   age: 19,
// //   status : false,
// //   children: [
// //     {id : "1", name:"Dyy"},
// //     {id : "2" , name :"P"},
// //   ]
// // }
// //Sử dụng hàm trong react
// // const showAge = (age) => <span>Tuổi của bạn là: {age}</span>
// //Sử dụng component trong react

// const { useState } = require("react");


// ReactDOM.render(
// //  <div>
// //    <span>
// //       Tên : {person.name}
// //    </span> <br />
// //    <span>
// //      Tuổi: {person.age}
// //    </span> <br />
// //    <span>
// //      {person.status ? "Học rồi" : "Chưa Học"}
// //    </span><br />
// //    <span>
// //     <ul>
// //       {person.children.map(child => <li>
// //           {child.name}
// //         </li>)}
// //     </ul>
// //    </span>
// //    <span>
// //      function: 
// //      {showAge(person.age)}
// //    </span>
// //    <span><br />
// //      Component file riêng: <ShowAge age = {person.age}/> <br />
// //    </span>
// //  </div>,
//   document.getElementById('root')
// )
function App(){
  const [time,setTime] = useState(1);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("crimson");
  const [myStatus, setMyState] = useState(false);
  const [products, setProducts] = useState([{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}, {id: 4, name: "D"}, {id: 5, name: "E"}])
  const changeColor = () => {
    setColor("blue")
  }
  const removeItem = (id) => {
    const newsProducts = products.filter(item => item.id !== id);
    setProducts(newsProducts);
  }
  return <div>
      Number: {count} <br />
      String: <div style={{color: color, width: 100, height: 100}}>Content</div> <br />
      Boolean: { myStatus &&
       <div>
            Arr: {products.map(item => <div>{item.name}<button onClick={() => removeItem(item.id)}>Xóa</button></div> )}  
       </div>
       }<br />

    Time: {time}  <br />
  <button onClick = {() => setTime(time +1)}>Up time</button>
  <button onClick={(changeColor)}>change color</button>
  <button onClick={() => setMyState(!myStatus)}>Toggle Status</button>
  </div>
}
export default App