// Objects as parameters:
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }
// type Point = {
//   x: number;
//   y: number;
// };
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
var myPoint = { x: 1, y: 3 };
var user = {
    id: 12837,
    username: "catgurl",
};
console.log(user.id);
user.id;
var happyFace = {
    radius: 4,
    color: "yellow",
};
var christy = {
    numLives: 7,
    breed: "Husky",
    age: 9,
};
