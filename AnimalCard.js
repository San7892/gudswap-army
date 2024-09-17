import React from 'react';

const AnimalCard = ({ animal, addAnimal, removeAnimal, count }) => {
    return (
        <div className="animal-card">
            <img src={animal.imageUrl} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>Unit Value: {animal.unitValue}</p>
            <div>
                <button onClick={() => removeAnimal(animal.id)}>-</button>
                <span>{count}</span>
                <button onClick={() => addAnimal(animal.id)}>+</button>
            </div>
        </div>
    );
};

export default AnimalCard;
