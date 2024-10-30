function handleSubmit(event) {
    event.preventDefault();
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('hidden');
    }, 3000);
}