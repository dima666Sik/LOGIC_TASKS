async function hundredLog() {
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) console.log("i = " + i);
    }
}

async function workingHours(callback) {
    let startTime = performance.now();
    await callback();
    let endTime = performance.now();
    console.log(endTime - startTime);
}

workingHours(hundredLog);