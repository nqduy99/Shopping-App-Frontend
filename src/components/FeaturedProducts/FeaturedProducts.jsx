import React from 'react';
import './FeaturedProducts.scss';
import Card from './../Card/Card';

const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];

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
                {data.map((item)=>{
                    return <Card key={item.id} item={item}/>
                })}
            </div>
        </div>
    );
};

export default FeaturedProducts;
