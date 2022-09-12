const restaurants = require('./restaurants.json');

exports.handler = async (event) => {
    const indices = new Set();
    while (indices.size < 3) {
        const randIndex = Math.floor(Math.random() * restaurants.length);
        indices.add(randIndex);
    }
    const selections = Array.from(indices).map(i => restaurants[i]);
    let text = "Today's lunch selections:\n"
    for (const item of selections) {
        text = `${text}\n${item.name} - ${item.link}`;
    }
    const responseBody = { text, "response_type": "in_channel" };
    const response = {
        statusCode: 200,
        body: JSON.stringify(responseBody),
    };
    return response;
}
