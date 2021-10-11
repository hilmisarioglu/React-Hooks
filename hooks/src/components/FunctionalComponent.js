import React,{useState, useEffect} from 'react'

const FunctionalComponent = (initial) => {
    const [count,setCount] = useState(initial=0)

    // Asagidaki gibi yazarsak componentDidMount a karsilik geldi. Buttona basarsam componentDidUpdate olur. Component hem yenilendiginde hem de butona basildiginda render oluyor.
    // useEffect(()=>{
    //     console.log("useEffect")
    // })

    // bos array koyarsak componentDidUpdate calismaz componentDidMount gibi calisir. Sadece baslangicta calisir, butona basuldiginda render etmez.
    // useEffect(()=>{
    //     console.log("useEffect")
    // },[],)

    // Arrayin icine bagimli bir degisken koyarsak componentDidUpdate gibi calisir
    useEffect(()=>{
        console.log("useEffect")
    },[count])

    const increase = () =>{
        setCount(count => count + 1);
    }
    const decrease = () =>{
        setCount(count => count - 1);
    }
    
    return (
        <div>
            <p>Counter: {count} , with FunctionalComponent</p>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default FunctionalComponent
