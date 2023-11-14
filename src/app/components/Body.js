"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Body() {
  const ankit = ["/bhag.png","/guru.png","/paan.png","/attack.png","/gang.png","/mary.png","/special.png"];
  const router = useRouter();
  const handleclick = (id)=>{
    router.push('/pages/review');
    // console.log(id);
  };
  return (
    <div>
    <h1 className='heading'>Review of Top Movies</h1>
    <div className='imgbody'>{ankit.map((img,id) => (<Image src={img} height={100} width={100} className='hello' onClick={()=>handleclick(id)}/>))}</div>
    </div>  
  )
}
