import React from 'react'

function Product(props){
	return (
		<div>
			<h3>Name: {props.product.name}</h3>
			<p>Price: {props.product.price.toLocaleString("en-US", {style: "currency", currency:"USD"})}</p>
			<p style={{display: !props.product.description && "none"}}>Description: {props.product.description}</p>
		</div>
		)
}

export default Product