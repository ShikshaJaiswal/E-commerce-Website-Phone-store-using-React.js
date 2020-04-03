import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';    
import {ProductConsumer, ProductProvider} from '../Context';
export default class Productlist extends Component {
    
    render() {       
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title=" Products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                    return value.products.map(products => {
                                        return <Product key={products.id} products= {products}/>
                                    }) 
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
