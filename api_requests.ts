import * as dotenv from 'dotenv';
dotenv.config();

// QuickStats API key
const apiKey = process.env.API_KEY;

const getCornData = async () => {
    const url = `https://quickstats.nass.usda.gov/api/api_GET/?key=${apiKey}&commodity_desc=CORN&year__GE=2012&state_alpha=VA&format=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

getCornData();