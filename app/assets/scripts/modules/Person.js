function Person(fullName, favColor) {
    this.name = fullName;
    this.fav = favColor;
    this.greet = function () {
        console.log('Hello there, my name is ' + this.name + " my fav color is " + this.fav);

    };
}

module.exports = Person;