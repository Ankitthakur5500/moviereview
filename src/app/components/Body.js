"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Body(props) {
  console.log("-->",props);
  const images = [,"/bhag.png","/guru.png","/paan.png","/attack.png","/gang.png","/mary.png","/special.png"];
  const router = useRouter();
  const handleclick = (id)=>{
    router.push('/pages/review');
  };
  return (
    <div>
    <h1 className='heading'>Review of Top Movies</h1>
    <div className='imgbody'>
      {props.ankit.map((items)=>(
        <div>
        <Image src={images[items.id]} height={100} width={100} className='hello' onClick={()=>handleclick(id)}/>
        <h2>{items.movieName}</h2>
        </div>
       ))}
    </div>

    </div>  
  )
}
