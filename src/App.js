import React, { useState } from 'react';

import { fetchWeather } from './api/featchWeather';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    };

    return (
        <div className="App">
            <input
                className="search"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
                autoFocus={true}
            />

            <section className="city">
                {weather.main && (
                    <>
                        <h2 className="city__name">
                            {weather.name}
                            <sup>{weather.sys.country}</sup>
                        </h2>

                        <p className="city__temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                        </p>

                        <div className="city__info">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default App;
