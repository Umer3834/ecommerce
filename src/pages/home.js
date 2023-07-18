import React from 'react'
import Herosection from '../components/herosection'
import Featureproducts from '../components/featureproducts'
function Home() {
  return (
    <>
      <Herosection heading={{ name: "Thapa Store" }} />
      <Featureproducts />
    </>
  )
}
export default Home