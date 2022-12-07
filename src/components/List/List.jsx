import React from 'react';
import './List.scss';
import Card from '../Card/Card';

const List = () => {
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
        {
            id: 5,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 6,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 7,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 8,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 9,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 10,
            img: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/07/lisa-4-blackpink-696x1046.jpg?fit=700%2C20000&quality=95&ssl=1',
            img2: 'https://vcdn1-giaitri.vnecdn.net/2021/11/24/lisa-2554-1637749826.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ybWaQjRUALuxjSGVNvqnVQ',
            title: 'Lisa',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];

    return <div className='list'>{
        data?.map(item => (
            <Card item={item} key={item.id} />
        ))
    }</div>;
};

export default List;