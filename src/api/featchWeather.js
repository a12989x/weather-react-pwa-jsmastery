import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1fa8019f55701aaad32a47823e3804e6';

const fetchWeather = async (query) => {
    const { data } = await axios.get(baseURL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        },
    });

    return data;
};

export { fetchWeather };
