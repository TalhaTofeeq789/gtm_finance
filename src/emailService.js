
// EmailJS frontend email sending service
import emailjs from '@emailjs/browser';

// EmailJS credentials from environment variables
const SERVICE_ID = service_szljn19;
const TEMPLATE_ID = template_7tgjdxm;
const USER_ID = qyg87wpq8Y7xJzeDI; 

/**
 * @param {Object} userInfo - Contains name, email, and phone
 * @param {string} bookName - Name of the downloaded book
 * @returns {Promise}
 */
export function sendDownloadInfo(userInfo, bookName) {
	console.log('🚀 [EmailJS] Starting sendDownloadInfo function...');
	console.log('📝 [EmailJS] User Info:', userInfo);
	console.log('📚 [EmailJS] Book Name:', bookName);
	
	// Initialize EmailJS with public key
	console.log('🔧 [EmailJS] Initializing EmailJS with User ID:', USER_ID);
	emailjs.init(USER_ID);
	
	const templateParams = {
		to_email: 'Lopeye@gtmfinance.com.au',
		user_name: userInfo.name || 'User',
		user_email: userInfo.email || 'N/A',
		user_phone: userInfo.phone || 'N/A',
		book_name: bookName,
		download_date: new Date().toLocaleDateString(),
		download_time: new Date().toLocaleTimeString(),
		message: `Hello,\n\n${userInfo.name || 'A user'} has downloaded the book: "${bookName}" from your website.\n\nUser Details:\n- Name: ${userInfo.name}\n- Email: ${userInfo.email}\n- Phone: ${userInfo.phone}\n- Download Date: ${new Date().toLocaleDateString()}\n- Download Time: ${new Date().toLocaleTimeString()}\n\nThank you for providing valuable resources!\n\nBest regards,\nGTM Finance Team`
	};

	console.log('📧 [EmailJS] Template Parameters:', templateParams);
	console.log('🔗 [EmailJS] Service ID:', SERVICE_ID);
	console.log('📄 [EmailJS] Template ID:', TEMPLATE_ID);
	console.log('⏳ [EmailJS] Attempting to send email...');

	return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
		.then((response) => {
			console.log('✅ [EmailJS] Email sent successfully!');
			console.log('📊 [EmailJS] Response Status:', response.status);
			console.log('📝 [EmailJS] Response Text:', response.text);
			console.log('🎉 [EmailJS] Download info email delivery confirmed!');
			return response;
		})
		.catch((error) => {
			console.error('❌ [EmailJS] Email sending failed!');
			console.error('🚨 [EmailJS] Error Details:', error);
			console.error('📧 [EmailJS] Failed Template Params:', templateParams);
			console.error('🔍 [EmailJS] Service Config - Service ID:', SERVICE_ID, 'Template ID:', TEMPLATE_ID);
			throw error;
		});
}

/**
 * Sends contact form submission email to talhatofeeq2003@gmail.com
 * @param {Object} contactInfo - Contains firstName, lastName, email, phone, and message
 * @returns {Promise}
 */
export function sendContactForm(contactInfo) {
	console.log('🚀 [EmailJS] Starting sendContactForm function...');
	console.log('👤 [EmailJS] Contact Info:', contactInfo);
	
	// Initialize EmailJS with public key
	console.log('🔧 [EmailJS] Initializing EmailJS with User ID:', USER_ID);
	emailjs.init(USER_ID);
	
	const templateParams = {
		to_email: 'Lopeye@gtmfinance.com.au',
		user_name: `${contactInfo.firstName} ${contactInfo.lastName}`,
		user_email: contactInfo.email || 'N/A',
		user_phone: contactInfo.phone || 'N/A',
		user_message: contactInfo.message || 'No message provided',
		contact_date: new Date().toLocaleDateString(),
		contact_time: new Date().toLocaleTimeString(),
		message: `Hello,\n\nYou have received a new contact form submission from your GTM Finance website.\n\nContact Details:\n- Name: ${contactInfo.firstName} ${contactInfo.lastName}\n- Email: ${contactInfo.email}\n- Phone: ${contactInfo.phone}\n- Message: ${contactInfo.message}\n- Submitted Date: ${new Date().toLocaleDateString()}\n- Submitted Time: ${new Date().toLocaleTimeString()}\n\nPlease follow up with this potential client promptly.\n\nBest regards,\nGTM Finance Website`
	};

	console.log('📧 [EmailJS] Template Parameters:', templateParams);
	console.log('🔗 [EmailJS] Service ID:', SERVICE_ID);
	console.log('📄 [EmailJS] Template ID:', TEMPLATE_ID);
	console.log('⏳ [EmailJS] Attempting to send contact form email...');

	return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
		.then((response) => {
			console.log('✅ [EmailJS] Contact form email sent successfully!');
			console.log('📊 [EmailJS] Response Status:', response.status);
			console.log('📝 [EmailJS] Response Text:', response.text);
			console.log('🎉 [EmailJS] Contact form email delivery confirmed!');
			return response;
		})
		.catch((error) => {
			console.error('❌ [EmailJS] Contact form email sending failed!');
			console.error('🚨 [EmailJS] Error Details:', error);
			console.error('📧 [EmailJS] Failed Template Params:', templateParams);
			console.error('🔍 [EmailJS] Service Config - Service ID:', SERVICE_ID, 'Template ID:', TEMPLATE_ID);
			console.error('👤 [EmailJS] Original Contact Info:', contactInfo);
			throw error;
		});
}
