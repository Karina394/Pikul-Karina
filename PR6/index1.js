function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 100) + 1;
            resolve(random);
        }, 1000);
    });
}

async function processNumber() {
    try {
        const num = await getRandomNumber();

        if (num < 50) {
            const result = await Promise.resolve(num + 20);
            return `Було число ${num}, стало ${result}`;
        } else {
            await Promise.reject("Занадто велике число!");
        }

    } catch (error) {
        return "Оброблено помилку: " + error;
    }
}

async function startProcess() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Обробка...";

    const result = await processNumber();

    resultDiv.textContent = result;
}