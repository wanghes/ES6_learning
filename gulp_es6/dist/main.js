(function () {
'use strict';

function hello() {
    return 'hello world';
}

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

document.write(hello() + '<br>' + add(1, 2));

}());
