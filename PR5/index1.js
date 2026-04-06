async function loadPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Помилка при завантаженні');
        }

        const posts = await response.json();

        const postsDiv = document.getElementById('posts');

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            postsDiv.appendChild(postElement);
        });

    } catch (error) {
        document.getElementById('posts').innerHTML =
            `<p class="error">Сталася помилка: ${error.message}</p>`;
    }
}

loadPosts();