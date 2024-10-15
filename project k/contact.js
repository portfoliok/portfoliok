document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const phone = event.target.querySelector('input[type="tel"]').value;
    const message = event.target.querySelector('textarea').value;

    fetch('YOUR_DEPLOYMENT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&message=${encodeURIComponent(message)}`,
    })
    .then(response => response.text())
    .then(data => {
        console.log('Form submitted:', { name, email, phone, message });
        alert('Your message has been sent!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});
