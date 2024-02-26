import React from "react"




const Data = ({imagen, id, name, gender, specie, origen, location, status}) => {
  return (
    <div className=" bg-gray-50 " >
      <div className="md:flerounded-xl  dark:bg-slate-800 font-mono text-center">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto p-2 m-5git " src={imagen} alt="" />
        <h5 className=""> Id: {id}</h5>
        <h3 className="text-lg font-medium">{name}</h3>
        <p>{gender}</p>
        <p>{specie}</p>
        <p>{origen}</p>
        <p>{location}</p>
        <p>{status}</p>
      </div>
 

    </div>
  )
}
export default Data