import React from 'react'
import { useSelector } from 'react-redux'
import ProductListPage from '../components/Product/Product'
import Header from '../components/Header/Header'
const Home = () => {

    const count = useSelector((state) => state?.userDetails?.userDetails)

    console.log(count)
  return (
    <div>
        <Header/>
        <h1 style={{color: "#000"}}>Products</h1>
      <ProductListPage/>
    </div>
  )
}

export default Home
