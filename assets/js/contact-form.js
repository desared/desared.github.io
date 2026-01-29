// Contact Form Handler
// Optional: Webhook URL for notifications (Make.com, etc.)
const WEBHOOK_URL = 'https://hook.eu1.make.com/4vya511bc75b65marhp426kddal30l7u';

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

		// Send to webhook for email notification (optional)
		if (WEBHOOK_URL) {
			try {
				await fetch(WEBHOOK_URL, {
					method: 'POST',
					mode: 'no-cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: name,
						email: email,
						subject: subject,
						message: message,
						timestamp: new Date().toISOString()
					})
				});
			} catch (webhookError) {
				console.log('Webhook notification sent (or blocked by CORS)');
			}
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
