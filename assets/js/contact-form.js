// Contact Form Handler
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
			read: false, // Flag to track if you've read the message
			// Email notification fields (for Firebase Trigger Email extension)
			to: 'your-email@example.com', // Replace with your email
			replyTo: email,
			template: {
				name: 'contactForm',
				data: {
					senderName: name,
					senderEmail: email,
					subject: subject,
					messageBody: message
				}
			}
		});

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
