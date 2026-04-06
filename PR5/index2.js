async function loadData() {
    try {
        const [userRes, postsRes] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        ]);

        const user = await userRes.json();
        const posts = await postsRes.json();

        displayUser(user);
        displayPosts(posts);

    } catch (error) {
        console.log('Помилка:', error);
    }
}
function displayUser(user) {
    const userDiv = document.getElementById('user');
    userDiv.innerHTML = `
    <p><strong>Ім'я:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Місто:</strong> ${user.address.city}</p>
  `;
}
function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');

    posts.forEach(post => {
        const postEl = document.createElement('div');

        postEl.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr>
    `;
        postsDiv.appendChild(postEl);
    });
}
loadData();