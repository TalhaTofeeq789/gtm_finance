
// EmailJS frontend email sending service
import emailjs from 'emailjs-com';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_kel5mc7';
const TEMPLATE_ID = 'template_z0w8lvm';
const USER_ID = 'template_z0w8lvm'; 

/**
 * Sends an email to talhatofeeq2003@gmail.com with user info and book name
 * @param {Object} userInfo 
 * @param {string} bookName 
 * @returns {Promise}
 */
export function sendDownloadInfo(userInfo, bookName) {
	const templateParams = {
		to_email: 'talhatofeeq2003@gmail.com',
		user_name: userInfo.name || 'User',
		user_email: userInfo.email || 'N/A',
		book_name: bookName,
		message: `Hello,\n\n${userInfo.name || 'A user'} (${userInfo.email || 'no email provided'}) has downloaded the book: "${bookName}" from your website.\n\nThank you for providing valuable resources!\n\nBest regards,\nGTM Finance Team`
	};
	return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
}
