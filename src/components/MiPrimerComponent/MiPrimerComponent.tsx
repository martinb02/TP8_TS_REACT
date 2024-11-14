import { FC } from "react"


interface IpropsMiPrimerComponent{
    text:string
    color:string
    fontSize?:number
}

export const MiPrimerComponent : FC <IpropsMiPrimerComponent> = ({
    text,
    color,
    fontSize
}) => {
  return (
    <div style={{color: `${color}`, fontSize:`${fontSize || 1}rem`}}><p>{text}</p></div>
  )
}
