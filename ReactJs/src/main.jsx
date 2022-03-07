import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ShowAge from './components/test'
// ReactDOM.render(
//   <App />, document.querySelector("#root")
// )
const person = {
  name: "Dyy",
  age: 19,
  status : false,
  children: [
    {id : "1", name:"Dyy"},
    {id : "2" , name :"P"},
  ]
}
//Sử dụng hàm trong react
const showAge = (age) => <span>Tuổi của bạn là: {age}</span>
//Sử dụng component trong react


ReactDOM.render(
 <div>
   <span>
      Tên : {person.name}
   </span> <br />
   <span>
     Tuổi: {person.age}
   </span> <br />
   <span>
     {person.status ? "Học rồi" : "Chưa Học"}
   </span><br />
   <span>
    <ul>
      {person.children.map(child => <li>
          {child.name}
        </li>)}
    </ul>
   </span>
   <span>
     function: 
     {showAge(person.age)}
   </span>
   <span><br />
     Component file riêng: <ShowAge age = {person.age}/> <br />
   </span>
 </div>,
  document.getElementById('root')
)