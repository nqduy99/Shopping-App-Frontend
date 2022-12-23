import React from 'react';

import './FeaturedProducts.scss';
import Card from './../Card/Card';
import useFetch from './../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`) 

    // console.log(data);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1> {type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {error ? "Something went wrong!" : (loading ? "loading" : data?.map((item)=>{
                    return <Card key={item.id} item={item}/>
                }))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
