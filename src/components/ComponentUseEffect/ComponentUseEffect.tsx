import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {

    const [state,setState] = useState(false)

    useEffect(()=>{
        console.log('Componete Montado')
        return ()=>{
            console.log('Componete Desmontado')
        }
    },[])
    useEffect(()=>{
        console.log(state)
    },[state])

  return (
    <div>
        <p>{state ? 'Es true': 'Es false'}</p>
        <button onClick={()=>{
            setState(!state)
        }}>
            Cambiar state
        </button>
    </div>
  )
}
