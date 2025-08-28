
// EmailJS frontend email sending service
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_kel5mc7';
const TEMPLATE_ID = 'template_z0w8lvm';
const USER_ID = 'KJUYeP7IZD4EVpdnn'; 

/**
 * Sends an email to talhatofeeq2003@gmail.com with user info and book name
 * @param {Object} userInfo - Contains name, email, and phone
 * @param {string} bookName - Name of the downloaded book
 * @returns {Promise}
 */
export function sendDownloadInfo(userInfo, bookName) {
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

	return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
		.then((response) => {
			console.log('Email sent successfully:', response.status, response.text);
			return response;
		})
		.catch((error) => {
			console.error('Email sending failed:', error);
			throw error;
		});
}
