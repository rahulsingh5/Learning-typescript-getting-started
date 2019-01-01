var container = document.getElementById('container');
// Optional parameters
function countDown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    var el = [];
    while (current > final) {
        el.push("<p>" + current + "</p>");
        current -= interval;
    }
    container.innerHTML = el.join('');
}
countDown(10, 0, 3);
