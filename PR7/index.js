document.addEventListener("DOMContentLoaded", loadData);

function saveData() {
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value
    };

    if (!user.name || !user.email || !user.password) {
        alert("Заповни обов'язкові поля!");
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("message").innerText = "Дані збережено!";
}

function loadData() {
    let data = localStorage.getItem("user");

    if (data) {
        let user = JSON.parse(data);

        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;
        document.getElementById("password").value = user.password;
    }
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = JSON.parse(localStorage.getItem("user"));

    if (data && email === data.email && password === data.password) {
        document.getElementById("message").innerText = "Успішний вхід!";
    } else {
        document.getElementById("message").innerText = "Неправильний email або пароль!";
    }
}

function editData() {
    let data = JSON.parse(localStorage.getItem("user"));

    if (!data) {
        alert("Немає даних!");
        return;
    }

    data.name = document.getElementById("name").value;
    data.phone = document.getElementById("phone").value;

    localStorage.setItem("user", JSON.stringify(data));
    document.getElementById("message").innerText = "Дані оновлено!";
}

function clearData() {
    localStorage.removeItem("user");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";

    document.getElementById("message").innerText = "Дані видалено!";
}