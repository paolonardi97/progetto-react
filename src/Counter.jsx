import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0)
    return (
        <>
        <h3 className="text-center mt-5">Il mio contatore parte da: <span className={counter%2==0 ? "text-success" : "text-danger"}>{counter}</span></h3>
        <div className="text-center"><button onClick={()=>setCounter(counter+1)} className="btn btn-outline-primary ">Incrementa</button></div>
        <div className="text-center"><button onClick={()=>setCounter(counter-1)} className="btn btn-outline-danger ">Decrementa</button></div>
        </>
    )
}