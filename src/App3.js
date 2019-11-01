import React from 'react'
import Product from './Product'
import productData from './productData'

function App3(){
	const productComponents = productData.map(product => <Product key={product.id} product={product}/>)

	return (
		<div>
			{productComponents}
		</div>
		)
}

export default App3