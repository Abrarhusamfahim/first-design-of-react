import React, { useEffect, useState } from 'react';
import LoadData from '../LoadData/LoadData';

const FetchData = () => {
    const [mealData, setMealData] = useState([]);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then(res => res.json())
        .then(data => setMealData(data.meals))
    },[])
    return (
        <div>
            {
                mealData.map(meal => <LoadData strMealThumb={meal.strMealThumb} strMeal={meal.strMeal} strCategory={meal.strCategory} strArea={meal.strArea} strInstructions={meal.strInstructions}></LoadData>)
            }
        </div>
    );
};

export default FetchData;