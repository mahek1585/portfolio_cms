import React, { useEffect, useState } from 'react'
import LinksService from '../services/Links.service';

const useLinks = () => {
  const[links,setLinks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    LinksService.getLinks()

    .then((res)=> setLinks(res.data.data))
    .catch((err)=> console.log("Link error:", err))
    .finally(()=>setIsLoading(false))

  },[]);

  return{links,isLoading};
    
}

export default useLinks;