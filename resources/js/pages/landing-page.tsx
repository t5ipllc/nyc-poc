<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Coming Soon - The Independent Restaurant Directory</title>
<style>
    body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

    header {
    background: #111;
    color: #fff;
    padding: 60px 20px;
    text-align: center;
}

    header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

    header p {
    font-size: 1.2rem;
}

    section {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
}

    .tiers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

    .tier {
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

    .gold { border-color: gold; }
    .silver { border-color: silver; }
    .bronze { border-color: peru; }
    .copper { border-color: sienna; }

    .tier h3 {
    margin-top: 0;
}

    form {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: 40px;
}

    form label {
    display: block;
    margin: 15px 0 5px;
}

    form input, form select, form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

    form button {
    margin-top: 20px;
    background: #111;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
}

    form button:hover {
    background: #333;
}

    footer {
    text-align: center;
    padding: 30px 20px;
    background: #111;
    color: #fff;
    margin-top: 40px;
}

    .note {
    font-size: 0.9rem;
    color: #777;
    margin-top: 10px;
}
</style>
</head>
<body>

<header>
    <h1>🍽️ Arriving Soon!</h1>
    <p>The Independent Restaurant Directory for Local Flavor</p>
</header>

<section>
    <h2>Support Local. Get Discovered.</h2>
    <p>
        We're building a new kind of restaurant directory — no corporate chains, no order fees.
        Just a powerful place for neighborhood restaurants to get discovered.
        Whether you’re a taco truck, a soul food kitchen, or the best pizza in town — we’ve got your back.
    </p>

    <p>
        Secure your spot now by pre-registering for one of our limited banner ad spaces:
    </p>

    <div class="tiers">
        <div class="tier gold">
            <h3>🥇 Gold</h3>
            <p><strong>$500/month</strong></p>
            <p>10 Available</p>
        </div>
        <div class="tier silver">
            <h3>🥈 Silver</h3>
            <p><strong>$350/month</strong></p>
            <p>20 Available</p>
        </div>
        <div class="tier bronze">
            <h3>🥉 Bronze</h3>
            <p><strong>$200/month</strong></p>
            <p>30 Available</p>
        </div>
        <div class="tier copper">
            <h3>🏅 Copper</h3>
            <p><strong>$50/month</strong></p>
            <p>50 Available</p>
        </div>
    </div>

    <form name="interest-form" method="POST" action="https://formspree.io/f/yourFormID">
        <h2>Pre-Register Your Spot</h2>

        <label for="name">Full Name *</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required />

        <label for="business">Restaurant / Business Name *</label>
        <input type="text" id="business" name="business" required />

        <label for="website">Restaurant Website or Social Link</label>
        <input type="url" id="website" name="website" />

        <label for="tier">Tier of Interest *</label>
        <select id="tier" name="tier" required>
            <option value="">Choose one...</option>
            <option value="Gold">Gold - $500/mo</option>
            <option value="Silver">Silver - $350/mo</option>
            <option value="Bronze">Bronze - $200/mo</option>
            <option value="Copper">Copper - $50/mo</option>
        </select>

        <label for="comments">Questions / Comments</label>
        <textarea id="comments" name="comments" rows="4"></textarea>

        <button type="submit">Submit Interest</button>
        <p class="note">* This form does not collect payment. We will contact you to confirm your spot.</p>
    </form>
</section>

<footer>
    &copy; 2025 YourDomainName.com — Supporting Local Restaurants Only.
</footer>

</body>
</html>
