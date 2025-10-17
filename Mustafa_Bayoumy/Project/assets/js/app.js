const subscribeBtn = document.getElementById('sub');
const emailInput = document.getElementById('email');
subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email && email.includes("@gmail.com")) {
        alert("Thanks for subscribing!");
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
});
const email = document.getElementById('email');
email.addEventListener('focus', () => {
    email.placeholder = '';
});
email.addEventListener('blur', () => {
    email.placeholder = 'Enter your email';
});
const supportBtn = document.getElementById('support');
supportBtn.addEventListener('click', () => {
    alert("Thank you for your interest! Visit our About Us page to learn more about our mission.");
});
const joinBtn = document.getElementById('join');
joinBtn.addEventListener('click', () => {
    alert("Welcome to our community programs! Check out our Services page for upcoming activities.");
});
const topBtn = document.getElementById('scrollTopBtn');
topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});