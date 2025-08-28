
// EmailJS frontend email sending service
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_kel5mc7';
const TEMPLATE_ID = 'template_pl9zjdl';
const USER_ID = 'KJUYeP7IZD4EVpdnn'; 

/**
 * Sends an email to talhatofeeq2003@gmail.com with user info and book name
 * @param {Object} userInfo - Contains name, email, and phone
 * @param {string} bookName - Name of the downloaded book
 * @returns {Promise}
 */
export function sendDownloadInfo(userInfo, bookName) {
	// Initialize EmailJS with public key
	emailjs.init(USER_ID);
	
	const templateParams = {
		to_email: 'talhatofeeq2003@gmail.com',
		user_name: userInfo.name || 'User',
		user_email: userInfo.email || 'N/A',
		user_phone: userInfo.phone || 'N/A',
		book_name: bookName,
		download_date: new Date().toLocaleDateString(),
		download_time: new Date().toLocaleTimeString(),
		message: `Hello,\n\n${userInfo.name || 'A user'} has downloaded the book: "${bookName}" from your website.\n\nUser Details:\n- Name: ${userInfo.name}\n- Email: ${userInfo.email}\n- Phone: ${userInfo.phone}\n- Download Date: ${new Date().toLocaleDateString()}\n- Download Time: ${new Date().toLocaleTimeString()}\n\nThank you for providing valuable resources!\n\nBest regards,\nGTM Finance Team`
	};

	return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
		.then((response) => {
			console.log('Email sent successfully:', response.status, response.text);
			return response;
		})
		.catch((error) => {
			console.error('Email sending failed:', error);
			throw error;
		});
}

/**
 * Sends contact form submission email to talhatofeeq2003@gmail.com
 * @param {Object} contactInfo - Contains firstName, lastName, email, phone, and message
 * @returns {Promise}
 */
export function sendContactForm(contactInfo) {
	// Initialize EmailJS with public key
	emailjs.init(USER_ID);
	
	const templateParams = {
		to_email: 'talhatofeeq2003@gmail.com',
		user_name: `${contactInfo.firstName} ${contactInfo.lastName}`,
		user_email: contactInfo.email || 'N/A',
		user_phone: contactInfo.phone || 'N/A',
		user_message: contactInfo.message || 'No message provided',
		contact_date: new Date().toLocaleDateString(),
		contact_time: new Date().toLocaleTimeString(),
		message: `Hello,\n\nYou have received a new contact form submission from your GTM Finance website.\n\nContact Details:\n- Name: ${contactInfo.firstName} ${contactInfo.lastName}\n- Email: ${contactInfo.email}\n- Phone: ${contactInfo.phone}\n- Message: ${contactInfo.message}\n- Submitted Date: ${new Date().toLocaleDateString()}\n- Submitted Time: ${new Date().toLocaleTimeString()}\n\nPlease follow up with this potential client promptly.\n\nBest regards,\nGTM Finance Website`
	};

	return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
		.then((response) => {
			console.log('Contact form email sent successfully:', response.status, response.text);
			return response;
		})
		.catch((error) => {
			console.error('Contact form email sending failed:', error);
			throw error;
		});
}
