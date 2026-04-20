function fetchData(id) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            resolve(`Дані для id ${id} (затримка ${delay} мс)`);
        }, delay);
    });
}

async function processData() {
    console.log("Паралельні запити:");

    const parallelResults = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);

    console.log(parallelResults);
    console.log("Послідовні запити:");

    const ids = [4, 5, 6];

    for await (const id of ids.map(fetchData)) {
        console.log(id);
    }
}

processData();