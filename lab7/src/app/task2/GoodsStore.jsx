import React from 'react';
import GoodsCard from "./GoodsCard";


let counter = 0;
const Good = (name, price, image) => ({
    id: counter++,
    image, name, price,
});
export default function GoodsStore() {
    const goods = [
        Good('Apple', 10, 'https://media.istockphoto.com/id/184276818/cs/fotografie/%C4%8Derven%C3%A9-jablko.jpg?s=612x612&w=0&k=20&c=ySRBctHC-xOMPmqY1Zi3p2AYbhYdFOsZcUTp8HeBuS8='),
        Good('Pineapple', 18, 'https://media.istockphoto.com/id/1217479737/cs/fotografie/ananas-s-pl%C3%A1tky-izolovan%C3%BDmi-na-b%C3%ADl%C3%A9m-pozad%C3%AD.jpg?s=612x612&w=0&k=20&c=ut0vF-bLWbmSSqUgso5dqUp5KVwK92bd_48SqIKrV3E='),
        Good('Kiwi', 8, 'https://media.istockphoto.com/id/834807852/cs/fotografie/cel%C3%A9-kiwi-ovoce-a-polovina-kiwi-ovoce-na-b%C3%ADl%C3%A9m.jpg?s=612x612&w=0&k=20&c=8lW4j-JhWZRzWEXN98V4b1p7QxnRFjxi6mF6EFQdc1M='),
        Good('Banana', 13, 'https://media.istockphoto.com/id/1400057530/cs/fotografie/ban%C3%A1ny-izolovan%C3%A9.jpg?s=612x612&w=0&k=20&c=__4qCqQwgyBBQTd-ar42wUrWsuWpIUValbLXS9d6Pnk='),
        Good('Watermelon', 24, 'https://media.istockphoto.com/id/492393524/cs/fotografie/dva-pl%C3%A1tky-melounu-na-b%C3%ADl%C3%A9m-pozad%C3%AD.jpg?s=612x612&w=0&k=20&c=IPwkbEsP9Ryn1sBeMfzVP1xWEiPivKgFYgehHAnpT8I='),
        Good('Orange', 15, 'https://media.istockphoto.com/id/506622283/cs/fotografie/oran%C5%BEov%C3%A1-na-b%C3%ADl%C3%A9m-pozad%C3%AD.jpg?s=612x612&w=0&k=20&c=_xuQXxmQPaKJSBYoZdqAS6mnAowqEu9pH0lxS9KqQhs='),
    ];
    return (<>
        <div className="store-container">
            <h1>Goods Store</h1>
            <p>Here are some goods</p>
            <div className="goods-grid">
                {goods.map((good) => (
                    <GoodsCard key={good.id} good={good}/>
                ))}
            </div>
        </div>
    </>);
}
