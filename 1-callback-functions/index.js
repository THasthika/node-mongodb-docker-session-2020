function syncAdd(a, b) {
    console.log(`calculating ${a} + ${b}`);
    const c = a + b;
    console.log(`calculation complete!`);
    return c;
}

function asyncAdd(a, b, callback) {
    console.log(`calculating ${a} + ${b}`);
    setTimeout(function () {
        const c = a + b;
        console.log(`calculation complete!`);
        callback(c);
    }, 10);
}

// Synchronous Addition
function syncExample() {
    console.log("--------- START SYNC EXAMPLE ---------");
    const a = 5;
    const b = 10;
    console.log('calling... syncAdd');
    const c = syncAdd(a, b);
    console.log(`addition ${c} = ${a} + ${b}`);
    console.log('complete syncAdd');
    console.log("---------- END SYNC EXAMPLE -----------");
}

// Asynchronous Addition
function asyncExample() {
    console.log("--------- START ASYNC EXAMPLE ---------");
    const a = 5;
    const b = 10;
    console.log('calling... asyncAdd');
    asyncAdd(a, b, function (c) {
        console.log(`addition ${c} = ${a} + ${b}`);
        console.log("---------- END ASYNC EXAMPLE ----------");
    });
    console.log('complete asyncAdd');
}


syncExample();

asyncExample();