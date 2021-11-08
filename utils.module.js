exports.getRandomItem = (array) =>
{
    return array[Math.floor((Math.random()*array.length))];
}
