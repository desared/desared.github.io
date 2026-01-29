// Contact Form Handler
// Zapier Webhook URL - Replace with your actual webhook URL from Zapier
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/26099749/ultufzd/'; // Add your Zapier webhook URL here (leave empty to disable)

document.getElementById('contactForm').addEventListener('submit', async function(e) {
	e.preventDefault();

	// Get form values
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const subject = document.getElementById('subject').value.trim();
	const message = document.getElementById('message').value.trim();

	// Basic validation
	if (!name || !email || !subject || !message) {
		showMessage('Please fill in all required fields.', 'error');
		return;
	}

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		showMessage('Please enter a valid email address.', 'error');
		return;
	}

	// Get submit button and disable it
	const submitBtn = document.getElementById('submitBtn');
	const originalBtnText = submitBtn.value;
	submitBtn.value = 'Sending...';
	submitBtn.disabled = true;

	// Hide previous messages
	const formMessage = document.getElementById('formMessage');
	formMessage.style.display = 'none';
	formMessage.className = '';

	try {
		// Add document to Firestore
		await db.collection('contacts').add({
			name: name,
			email: email,
			subject: subject,
			message: message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			read: false
		});

		// Send to Zapier Webhook for email notification (no polling required!)
		if (ZAPIER_WEBHOOK_URL) {
			fetch(ZAPIER_WEBHOOK_URL, {
				method: 'POST',
				body: JSON.stringify({
					name: name,
					email: email,
					subject: subject,
					message: message,
					timestamp: new Date().toISOString()
				}),
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'no-cors' // Zapier webhooks don't return CORS headers
			}).catch(() => console.log('Webhook notification sent'));
		}

		// Show success message
		showMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');

		// Reset form
		document.getElementById('contactForm').reset();

	} catch (error) {
		console.error('Error submitting form:', error);

		// Show error message
		showMessage('Oops! Something went wrong. Please try again or contact me directly via email.', 'error');
	} finally {
		// Re-enable submit button
		submitBtn.value = originalBtnText;
		submitBtn.disabled = false;
	}
});

// Helper function to display messages
function showMessage(text, type) {
	const formMessage = document.getElementById('formMessage');
	formMessage.textContent = text;
	formMessage.className = type;
	formMessage.style.display = 'block';

	// Scroll to message
	formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

	// Hide success message after 5 seconds
	if (type === 'success') {
		setTimeout(() => {
			formMessage.style.display = 'none';
		}, 5000);
	}
}
