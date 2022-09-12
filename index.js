const restaurants = require('./restaurants.json');

exports.handler = async (event) => {
    const indices = new Set();
    while (indices.size < 3) {
        const randIndex = Math.floor(Math.random() * restaurants.length);
        indices.add(randIndex);
    }
    const selections = Array.from(indices).map(i => restaurants[i]);
    let response = "Today's lunch selections:\n"
    for (const item of selections) {
        response = `${response}\n${item.name} - ${item.link}`;
    }
    return response;
};
