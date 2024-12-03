import React from "react";

export default function GoodsCard({ good }) {
    return (
        <div className="card">
            <img src={good.image} alt={good.name} />
            <h2>{good.name}</h2>
            <p>Price: {good.price}$</p>
        </div>
    );
}
