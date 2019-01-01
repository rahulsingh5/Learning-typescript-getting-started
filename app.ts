let container = document.getElementById('container');

// Optional parameters
function countDown(initial: number, final = 0, interval = 1) {
    var current = initial;
    
    let el = [];

    while(current > final) {
        el.push(`<p>${current}</p>`);
        current -= interval;
    }

    container.innerHTML = el.join('');

}

countDown(10, 0, 3);