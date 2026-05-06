import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
    const[pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(() => {
        async function fetchPizaOfTheDay() {
            const response = await fetch("/api/pizza-of-the-day");
            const pizzaOfTheDay = await response.json();
            setPizzaOfTheDay(pizzaOfTheDay);
        }
        fetchPizaOfTheDay();
    }, []);

    return pizzaOfTheDay;
}