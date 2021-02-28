function add3Dots(string) {
    var dots = "...";
    if (string.length > 30) {
        // you can also use substr instead of substring
        string = string.substring(0, 30) + dots;
    }
    return string;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")@)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export { add3Dots, validateEmail };