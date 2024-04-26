import style from './iconProfile.module.css'
import { useState } from 'react'

const IconProfile = ({icon,size,color,background,font}) => {

  const [name,SetName] = useState(icon.split(' ').map((e)=> e[0]))

  return (
    <div className={style.iconProfile} style={{width:`${size}em`, height:`${size}em`, background: `${background}`, color: `${color}`, fontWeight: 'bold', fontSize: `${font}em`}}>
      {name.map((e)=> e )}
    </div>
  )
}

export default IconProfile