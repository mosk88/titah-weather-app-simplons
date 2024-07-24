const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const app = express();
const port = 3000;

let weatherData = {};
// Fonction pour obtenir et mettre à jour les données météo
const updateWeatherData = async () => {
    try {
        const response = await axios.get('https://home.openweathermap.org/api_keys');
        weatherData = response.data;
        console.log('Données météo mises à jour:', weatherData);
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo:', error);
    }
};

// Rafraîchir les données immédiatement au démarrage du serveur
updateWeatherData();

// Configurer une tâche cron pour rafraîchir les données toutes les heures
cron.schedule('0 * * * *', () => {
    console.log('Mise à jour des données météo...');
    updateWeatherData();
});

// Route pour obtenir les données météo
app.get('/weather', (req, res) => {
    if (Object.keys(weatherData).length === 0) {
        return res.status(500).send('Données météo indisponibles. Veuillez réessayer plus tard.');
    }
    res.json(weatherData);
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});