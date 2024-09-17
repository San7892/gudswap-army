import React, { useState, useEffect } from 'react';
import './App.css';
import AnimalCard from './AnimalCard';
import ProgressBar from './ProgressBar';
import ResetButton from './ResetButton';
import animalsData from './animals.json';

function App() {
    const [animals, setAnimals] = useState([]);
    const [animalCounts, setAnimalCounts] = useState({});
    const [totalUnits, setTotalUnits] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setAnimals(animalsData.animals);
    }, []);

    const addAnimal = (id) => {
        const updatedCounts = { ...animalCounts, [id]: (animalCounts[id] || 0) + 1 };
        setAnimalCounts(updatedCounts);
        calculateTotalUnits(updatedCounts);
    };

    const removeAnimal = (id) => {
        if (animalCounts[id] > 0) {
            const updatedCounts = { ...animalCounts, [id]: animalCounts[id] - 1 };
            setAnimalCounts(updatedCounts);
            calculateTotalUnits(updatedCounts);
        }
    };

    const calculateTotalUnits = (counts) => {
        const total = animals.reduce((sum, animal) => {
            return sum + (counts[animal.id] || 0) * animal.unitValue;
        }, 0);
        setTotalUnits(total);
    };

    const resetAnimals = () => {
        setLoading(true);
        setTimeout(() => {
            setAnimalCounts({});
            setTotalUnits(0);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="App">
            <h1>GudSwap Army Selection</h1>
            {animals.map((animal) => (
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    addAnimal={addAnimal}
                    removeAnimal={removeAnimal}
                    count={animalCounts[animal.id] || 0}
                />
            ))}
            <ProgressBar totalUnits={totalUnits} />
            <ResetButton resetAnimals={resetAnimals} disabled={totalUnits === 0} />
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default App;
