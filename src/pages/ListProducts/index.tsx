import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListProducts = () => {

  const [produtos, setProdutos] = useState<any>([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response => setProdutos(response.data))
  },[])

  return (
    <>
      <p>produtos</p>

      {
        produtos.map((item:any)=> (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <Link to={`/produto/${item.id}`}><button>comprar</button></Link>
          </div>

        ))}
    </>
  )
}

export default ListProducts;