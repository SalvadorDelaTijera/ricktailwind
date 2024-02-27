import React from "react"

const Data = ({imagen, id, name, gender, specie, origen, location, status}) => {
  return (
    <div className="">
      <div className=" bg-yellow-500 w-fit h-fit rounded-t-2xl rounded-b-2xl p-5 m-5 min-w-80">
      <div className=" tracking-wide bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-80%  font-mono text-center w-fit h-fit  p-2 shadow-lg " >
        <img className="rounded-t-3xl rounded-b-3xl p-2 border-double border-4 border-red-900 shadow-lg " src={imagen} alt="" />
        <h5 className=" text-white " > Id: {id}</h5>
            <h3 className=" bg-white border-double border-4 opacity-55 text-lg font-medium text-red-900 rounded-t-2xl rounded-b-2xl  h-fit mb-1" >{name}</h3>
            <p className="text-md font-thin text-black text-sm" >{gender}</p>
            <p className="text-md font-bold text-black ">{specie}</p>
            <p className="text-md font-thin text-black ">{origen}</p>
            <p className="text-md font-thin text-black text-sm">{location}</p>
            <p className="text-md font-thin text-black  ">{status}</p>
        </div>
    </div>

    </div>

  )
}
export default Data