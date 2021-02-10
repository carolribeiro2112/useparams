import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Products = () => {

  const params = useParams<any>()

  const [parametro, setParametro] = useState<any>()
 
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(response => setParametro(response.data))
  },[params])

  return (
    <>
      <h1>Produto é : {parametro?.title}</h1>
      <h3>{parametro?.price}</h3>
      <p>{parametro?.description}</p>
    </>
  )
}

export default Products;