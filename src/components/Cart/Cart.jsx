import { DeleteOutline } from '@mui/icons-material';
import React from 'react';
import './Cart.scss';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            desc: 'Lisa yeu Duy',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            desc: 'Lisa yeu Duy',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];

    return (
        <div className="cart">
            <h1>Products in you cart</h1>
            {data.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutline className="delete" />
                </div>
            ))}
            <div className="total">
                <span className="">SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    );
};

export default Cart;
