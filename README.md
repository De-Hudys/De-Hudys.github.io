# De-Hudys.github.io   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DE-HUDY’S-SALOON</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>DE HUDY’S SALOON</h1>
            <p>Quality hair styling, beauty services, wigs and hair products in Nungua Kanta.</p>
            <p>Call: <strong>050 935 6744</strong> · <strong>024 405 8208</strong></p>
            <a href="#booking" class="button-primary">Book an Appointment</a>
        </div>
    </header>

    <main class="container">
        <section class="hero card">
            <div>
                <h2>Welcome to DE HUDY’S SALOON</h2>
                <p>At DE HUDY’S SALOON, we offer beautiful hair styling, expert treatment, braiding, weaving, wig installation, and premium beauty grooming services. Shop top-quality wigs, bundles and hair care products while you relax in our friendly salon space.</p>
                <ul class="contact-list">
                    <li><strong>Location:</strong> Maritime ACADEMY RD, Nungua Kanta</li>
                    <li><strong>GPS:</strong> G-042-6160</li>
                    <li><strong>Email:</strong> <a href="mailto:hudysde@gmail.com">hudysde@gmail.com</a></li>
                </ul>
            </div>
            <div class="hero-image" aria-label="Salon service image"></div>
        </section>

        <section class="section-split">
            <div class="card">
                <h2>Salon Services</h2>
                <div class="features-list">
                    <div class="feature-item">Hair styling</div>
                    <div class="feature-item">Hair treatment</div>
                    <div class="feature-item">Braiding and weaving</div>
                    <div class="feature-item">Wig installation</div>
                    <div class="feature-item">Beauty and grooming services</div>
                    <div class="feature-item">Makeup, lashes, manicure and pedicure</div>
                </div>
            </div>
            <div class="card">
                <h2>Products for Sale</h2>
                <div class="features-list">
                    <div class="feature-item">High-quality wigs</div>
                    <div class="feature-item">Hair bundles</div>
                    <div class="feature-item">Hair care products</div>
                    <div class="feature-item">Beauty accessories</div>
                </div>
            </div>
        </section>

        <section id="booking" class="card">
            <h2>Book an Appointment</h2>
            <p class="note">Complete the form below and our team will contact you to confirm your appointment.</p>
            <form id="bookingForm">
                <div class="form-row">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required>
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="050 935 6744" required>
                </div>
                <div class="form-row">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required>
                    <label for="service">Preferred Service</label>
                    <select id="service" name="service" required>
                        <option value="">Select a service</option>
                        <option>Hair styling</option>
                        <option>Hair treatment</option>
                        <option>Braiding and weaving</option>
                        <option>Wig installation</option>
                        <option>Makeup, nails, lashes</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required>
                    <label for="time">Preferred Time</label>
                    <input type="time" id="time" name="time" required>
                </div>
                <div>
                    <label for="message">Additional Details</label>
                    <textarea id="message" name="message" placeholder="Describe your booking request..." required></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit Booking Request</button>
                <p id="responseMessage" class="note"></p>
            </form>
        </section>
    </main>

    <footer>
        <p>DE HUDY’S SALOON · Maritime ACADEMY RD · Nungua Kanta · Call 050 935 6744 or 024 405 8208</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
