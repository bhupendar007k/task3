Longeststring = (str) => {
    var array = str.split(' ');
    longeststring = array[0];
    for (var i = 0; i < array.length; i++) {
        if (longeststring.length <= array[i].length) {
            longeststring = array[i];
        }
        
    }
    return longeststring;
}
console.log(Longeststring("web developement tutorial"));