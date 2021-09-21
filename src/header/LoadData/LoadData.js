import React from 'react';

const LoadData = (props) => {
    // const {strMealThumb, strMeal, strCategory, strArea, strInstructions} = props.meals;
    return (
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col mb-4">
                <div class="card h-100">
                <img src={props.strMealThumb} class="card-img-top p-3 rounded" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.strMeal}</h5>
                    <h5 class="card-title">{props.strCategory}</h5>
                    <h5 class="card-title">{props.strArea}</h5>
                    <p class="card-text">{props.strInstructions.slice(0,30)}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                <img src={props.strMealThumb} class="card-img-top p-3 rounded" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.strMeal}</h5>
                    <h5 class="card-title">{props.strCategory}</h5>
                    <h5 class="card-title">{props.strArea}</h5>
                    <p class="card-text">{props.strInstructions.slice(0,100)}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                <img src={props.strMealThumb} class="card-img-top p-3 rounded" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.strMeal}</h5>
                    <h5 class="card-title">{props.strCategory}</h5>
                    <h5 class="card-title">{props.strArea}</h5>
                    <p class="card-text">{props.strInstructions.slice(0,30)}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LoadData;