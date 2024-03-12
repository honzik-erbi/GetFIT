import React from "react";

export default function Card() {
    return(
        <div className="card">
            <h2 className="card-headline">Chicken with rice</h2>
            <img className="card-image" src="https://via.placeholder.com/300" alt="Kuřecí maso s rýží"></img>
            <p className="card-desc">Protein: 100g
               Carbs: 30g
            </p>
        </div>
    );
}