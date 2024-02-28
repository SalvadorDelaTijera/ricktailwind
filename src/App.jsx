import React from "react";
import { useState,useEffect } from "react";
import Data from "./Data/Data";

const App = () => {
  const[apimort, setApimort]= useState();

  const datos = async ()=>{
    let res = await fetch("https://rickandmortyapi.com/api/character");
    res = await res.json();
    setApimort(res);
  }
  useEffect(()=>{
    datos();
  },[]);

  //console.log(apimort);

  return (
    <div className=" grid grid-cols-1 items-center grid-rows sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 bg-slate-500">
     {
      apimort?.results?.map((s)=>{
        return(

            <Data
            imagen ={s.image}
            id ={s.id}
            name ={s.name}
            gender ={s.gender}
            specie ={s.species}
            origen ={s.origin.name}
            location ={s.location.name}
            status ={s.status}
            />

        );
      })
     }
    </div>
  )
}

export default App

/**
img src={i.image} alt="" />
            <ul>
            <p>}</p>
            <h4>name={i.name}</h4>
            <p>gender={i.gender}</p>
            <p>{i.species}</p>
            <p>{i.origen.name}</p>
            <p>{i.location.name}</p>
            <p>{i.status}</p>

            </ul>
 */