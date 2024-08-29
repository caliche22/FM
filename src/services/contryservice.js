import enviroment from '../enviroment/enviroment';

export const fetchCountryData = async (countryName) => {
    const url = `${enviroment.contryapi}${countryName}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text(); 
        const data = JSON.parse(text);
        return data[0];
    } catch (error) {
        console.error('Error fetching country data:', error);
        throw error;
    }
};
