const posts = [
    { name: "John", text: "Hi " },
    { name: "Alice", text: "This is a post." },
];


function render() {
    const postsContainer = $('#postsContainer');
    postsContainer.empty(); 

    for (let i = 0; i < posts.length; i++) {
        const postDiv = $('<div class="post"></div>');

        const nameElement = $(`<p>Name: ${posts[i].name}</p>`);
        const textElement = $(`<p>Text: ${posts[i].text}</p>`);

        postDiv.append(nameElement);
        postDiv.append(textElement);

        postsContainer.append(postDiv);
    }
}

function addPost() {
    const nameInput = $('#name');
    const textInput = $('#text');

    const name = nameInput.val();
    const text = textInput.val();

    if (name.trim() !== '' && text.trim() !== '') {
        posts.push({ name, text });

        render();
    } else {
        alert('Please fill in both fields.');
    }
}

render();

$('#submitButton').on('click', addPost);
