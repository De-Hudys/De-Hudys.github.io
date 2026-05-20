document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Thank you! Your booking request has been captured. We will contact you shortly to confirm your appointment.';
    this.reset();
});
