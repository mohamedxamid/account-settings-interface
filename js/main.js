window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    console.log(form);

    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        console.log('hi');

        const formData = new FormData(evt.target),
        json = JSON.stringify(Object.fromEntries(formData.entries()));

        fetch("http://localhost:3000/requests", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: json,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => console.log(err))
        .finally(() => evt.target.reset())
    })
})