import React, { useState } from 'react';

const App = () => {
    const [catalog, setCatalog] = useState([]);
    const [inputValue, setInputValue] = useState(''); 

    const submitHandler = (e) => {
        e.preventDefault();
        setCatalog([...catalog, inputValue]);
        setInputValue('');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button>Добавить товар</button>
            </form>
            <ul>
                {catalog.map((el, idx) => (
                    <li key={idx}>{el}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
