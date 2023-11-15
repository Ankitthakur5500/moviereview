import React from 'react'
import { gql,useQuery } from '@apollo/client';
import Body from './Body';
import Navbar from './Navbar';
import Footer from './Footer';


const query = gql`
      query GetLocations {
        getData {
          id
          movieName
        }
      }
    `

export default function Main() {
    const {data,loading} = useQuery(query)
    console.log("==>",data);
    if(loading) return <h1>Loading...</h1>
  return (<div>
    <Navbar/>
    <Body ankit={data.getData}/>
    <Footer/>
  </div>)
}
