// import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({text, link, target}) => {
  return (
    <>
    {target === "" ? (
      <a href={link} className="border rounded-md p-3"><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent">{text}</span></a>
    ): (
      <a href={link} target={target} className="border rounded-md p-3"><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent">{text}</span></a>
    )}
    {/* <a href={link} target={target} className="border rounded-md p-3"><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent">{text}</span></a> */}
    </>
  )
  
}

export default Button