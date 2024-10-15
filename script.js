document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email-input').value;
    const formUrl = 'https://script.google.com/macros/s/AKfycbyUJDAccVcoRhDKVg_gWFY1BJ-K1Q8sgJ7ONZuGGGNTZirsgpdowklym3YXHz0E1ulXbw/exec'; // Correct form response URL
    const data = new URLSearchParams();
    data.append('entry.1045781291', email); // Your email field ID

    fetch(formUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
    })
    .then(() => {
        alert('Thank you for subscribing!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your email.');
    });
});
