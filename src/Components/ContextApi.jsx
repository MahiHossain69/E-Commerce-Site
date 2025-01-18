import React, { Children, useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from "axios";
let ApiData = createContext()

function ContextApi({children}) {
    let [info,setInfo] = useState([])
    let [loading,setLoading] = useState(true);
    let getData = ()=>{
        axios.get("https://dummyjson.com/product").then((response)=>{
            setInfo(response.data.products)
            setLoading(false);
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <ApiData.Provider value={{info,loading}}>
   {children}
    </ApiData.Provider>
  )
}

export  {ContextApi,ApiData}

