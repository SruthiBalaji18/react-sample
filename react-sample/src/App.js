import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Table, FormControl, InputGroup, Button, Row, Col } from "react-bootstrap";


function App() {
  const [arrayList, setArrayList] = useState([]);
  const [arrayCount, setArrayCount] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  //sconst [maxEle, setMaxEle] = useState([]);
  const appendArray = () => {
    setArrayCount(true);
    setArrayList([...arrayList,""]);
    
  };

  const listAdd = (i, e) => {
    if(e){
      arrayList[i] = e.target.value;
    }
    }
    
  const checkDuplicate = () => {
   let  maxEle = arrayList.filter((ele, i) => { if (arrayList.indexOf(ele) !== i) return ele });
    let obj = {};
    let arrayFinal = [];
    for(let i=0; i<maxEle.length; i++){
      obj[maxEle[i]] = 0;
    }
    for ( let i in obj) {
      arrayFinal.push(i)
    }
    let count=[];
    for(let i=0; i< arrayFinal.length; i++){
      let check = 0;
      for(let j=0; j<arrayList.length; j++){
        if(arrayFinal[i] == arrayList[j])
        {
          count[i]= check+=1;
        }
      }
    }
    let maxItem = Math.max(...count);
    let index;
    count.map((item, i) => {if(item === maxItem) index=i;});
    alert("The most repititive element in the array is "+ arrayFinal[index]);  
    
  };
  return (
    <div className="App">
      <Button variant="primary" onClick={appendArray}>Add</Button>
      <Button onClick={checkDuplicate}>Calc</Button>
      <div style={{maxWidth:"100px"}}>
      <Table responsive>
        <InputGroup>
        <tbody>
          <tr>
          {arrayCount && arrayList.length === 0 ? <td><FormControl onChange={(e) => listAdd(0, e)}/></td> : ( arrayList.map((item, i) => { return <td><FormControl placeholder="Number"  onChange={(e) => listAdd(i, e)}></FormControl></td>}))}
        </tr>
        </tbody>
        </InputGroup>
      </Table>
      </div>



    </div>
  );
}

export default App;
