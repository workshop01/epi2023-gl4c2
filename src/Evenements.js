import React, { useState } from 'react'

export const Evenements = () => {
    /* var nb = 0 */
    const [nb , setNb]= useState(0)
    var [num , setNum] = useState(0)
    const inc = ()=>{
        setNb(nb+1)
        console.log(nb)    }
    const add = (valeur)=> setNb(nb+valeur)
    const ajouter = (event)=>{
        console.log(event.target.value)
         setNum(+event.target.value)
    }
  return (
    <div>
        <h4>{nb}</h4>
        <button onClick={inc}>+</button>
        <button onClick={()=>setNb(nb-1)}>-</button>
        <br></br>
        <button onClick={()=>add(5)}>Add 5</button>
        <button onClick={()=>add(15)}>Add 15</button>
        <button onClick={()=>add(50)}>Add 50</button>
        <br></br>
        <input type="number" onChange={(event)=>ajouter(event)} />
        <button onClick={()=>add(num)}>Add</button>

    </div>
  )
}
