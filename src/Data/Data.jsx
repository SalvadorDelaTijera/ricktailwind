import React from "react"




const Data = ({imagen, id, name, gender, specie, origen, location, status}) => {
  return (
    <div className="">
      <div className="md:flerounded-xl  dark:bg-slate-800 font-mono text-center w-fit h-fit p-6 m-20 rounded-t-3xl rounded-b-3xl border-black" >
        <img className="md:w-80 md:h-auto md:rounded-none mx-auto bg-contain w-fit h-fit items-center" src={imagen} alt="" />
        <div className=" bg-black p10  justify-center bg-cover w-45 h-50 fit-text">
        <h5 className=" text-yellow-300"> Id: {id}</h5>
            <h3 className="text-lg font-medium text-red-900">{name}</h3>
            <p className="text-md font-thin text-white">{gender}</p>
            <p className="text-md font-thin text-white">{specie}</p>
            <p className="text-md font-thin text-white">{origen}</p>
            <p className="text-md font-thin text-white">{location}</p>
            <p className="text-md font-thin text-white">{status}</p>
        </div>
      </div>
    </div>
  )
}
export default Data