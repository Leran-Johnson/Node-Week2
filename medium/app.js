const fs = require('fs');

const planets = 'planets.txt';

fs.readFile(planets, 'utf8', (err, data) => {

    const planets = data.split('\n').filter(Boolean);

    console.log('Planets in the Solar System:');
    planets.forEach((planet, index) => {
        console.log(`${index + 1}. ${planet}`);
    });
});