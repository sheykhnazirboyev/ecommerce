import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {CategoryCard} from "../component/CategoryCard";
import LivingImg from "../assets/living.png";
import DiningImg from "../assets/dining.png";
import Bedroom from "../assets/bedroom.png";

const backendUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api/categories";

const images = {
  "living.png": LivingImg,
  "dining.png": DiningImg,
  "bedroom.png": Bedroom,
};


export default function Categories() {
    const [cards, setCards] = useState([]);

    // Component Did Mount
    useEffect(() => {
      const getCategories = async () => {
        const response = await axios.get(backendUrl); // -> promise
        setCards(response.data);
      };
      getCategories();
    }, []);
  
    // Component Did update
    useEffect(() => {
      console.log("Cards state changed...", cards)
    },[cards])
  return (
    <div>
      <div className="flex flex-row gap-4 my-4 p-8">
        {cards.map((card) => (
          <CategoryCard key={card.id} name={card.name} img={card.image} />
        ))}
      </div>
    </div>
  )
}
