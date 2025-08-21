export type SupportCategory = {
	slug: string;
	title: string;
	description?: string;
	articles: { id: string; title: string; body: string }[];
};

export const supportCategories: SupportCategory[] = [
	{
		slug: 'coupons-and-offers',
		title: 'Coupons & Offers',
		articles: [
			{
				id: 'coupon-not-working',
				title: 'Coupon not working/expired coupon',
				body:
					"Every coupon comes with a validity and if the validity is over you cannot use the coupon. But there are more coupons coming your way through our various promotions! Keep checking the 'View coupons & offers' tab on the cart page for more offers.",
			},
			{
				id: 'forgot-coupon-code',
				title: 'I forgot to apply my coupon code. What do I do now?',
				body: 'Unfortunately, coupon codes cannot be applied after an order is placed. However, you can use the coupon code on your next order. Make sure to apply it before completing your payment.',
			},
			{
				id: 'refer-friend',
				title: 'How do I refer my friend?',
				body: 'You can refer friends through the referral section in your account. Share your unique referral code and both you and your friend will receive benefits when they place their first order.',
			},
		],
	},
	{
		slug: 'general-inquiry',
		title: 'General Inquiry',
		articles: [
			{ id: 'delete-account', title: 'How do I delete my account?', body: 'You can delete your account by contacting our customer support team. Please note that this action is irreversible and all your data will be permanently removed.' },
			{ id: 'what-is-supr-daily', title: 'What is Supr Daily?', body: 'Supr Daily is our subscription service that delivers your daily essentials at your doorstep with flexible scheduling and exclusive discounts.' },
			{ id: 'login-supr-app', title: 'How do I log in to the Supr app?', body: 'You can log in using your registered mobile number. Enter your phone number and verify with the OTP sent to your device.' },
			{ id: 'favourite-brand', title: 'Supr doesn\'t sell my favourite brand. How can I tell you about it?', body: 'We\'re always looking to expand our product range. You can suggest new brands through our customer support or feedback section in the app.' },
			{ id: 'about-supr', title: 'Tell me a little about Supr', body: 'Supr is India\'s fastest grocery delivery platform, delivering fresh groceries and daily essentials in minutes across multiple cities.' },
			{ id: 'charges-taxes', title: 'Do you charge any amount or taxes over and above the price of each item?', body: 'All prices displayed include applicable taxes. We may charge a small delivery fee based on your order value and location.' },
			{ id: 'cold-beverages', title: 'Do you deliver all beverages cold?', body: 'Yes, we maintain cold chain for beverages and dairy products to ensure they reach you fresh and at the right temperature.' },
			{ id: 'veg-nonveg-packing', title: 'How do you pack your veg and non-veg items?', body: 'We pack vegetarian and non-vegetarian items separately to maintain hygiene and respect dietary preferences.' },
			{ id: 'paan-corner', title: 'How do I order anything from the paan corner?', body: 'You can find paan corner items in the "Paan Corner" category on our app. Browse and add items to your cart like any other product.' },
			{ id: 'discreet-packaging', title: 'Do you follow discreet packaging for sexual wellness products?', body: 'Yes, we ensure complete privacy with discreet packaging for all personal care and wellness products.' },
			{ id: 'minimum-order', title: 'What is the minimum order value?', body: 'The minimum order value varies by location. You can check the minimum order requirement for your area in the app.' },
			{ id: 'work-with-us', title: 'Want to work with us?', body: 'We\'re always hiring! Check our careers page or visit our website for current job openings and application details.' },
			{ id: 'cod-limit', title: 'What is the maximum COD limit?', body: 'Cash on Delivery is available up to ₹2000 per order. For higher amounts, please use online payment methods.' },
			{ id: 'eta-more-than-10', title: 'Why is my ETA more than 10 minutes?', body: 'Delivery time may vary due to high demand, weather conditions, or distance from our nearest store. We always try our best to deliver as quickly as possible.' },
			{ id: 'pay-rider-upi', title: 'Can I pay the rider by UPI?', body: 'Yes, you can pay the delivery partner via UPI, cash, or any other payment method available in your area.' },
			{ id: 'return-supr-bags', title: 'How do I return the Supr bags?', body: 'You can return Supr bags to any delivery partner during your next order. We encourage reusing bags to support sustainability.' },
			{ id: 'delivery-area', title: 'Why does Supr not deliver in my area?', body: 'We\'re rapidly expanding our services. If we don\'t deliver to your area yet, we\'ll notify you as soon as we start serving your location.' },
			{ id: 'product-request', title: 'Can I make a product request which is not available on Supr?', body: 'Yes! You can request products through our customer support. We regularly review requests and add popular items to our inventory.' },
			{ id: 'not-taking-orders', title: 'Why are you not taking orders?', body: 'This could be due to high demand, store closure hours, or temporary service disruption in your area. Please try again later.' },
			{ id: 'partner-sell', title: 'Can I partner/sell with Supr?', body: 'Yes! We welcome brand partnerships. Visit our vendor portal or contact our business development team for partnership opportunities.' },
			{ id: 'location-serviceability', title: 'Location serviceability / Non serviceable area', body: 'You can check if we deliver to your area by entering your pincode in the app. We\'re constantly expanding to new locations.' },
			{ id: 'timings', title: 'What are your timings?', body: 'We operate 24/7 in most locations. However, timings may vary by area. Check the app for exact operating hours in your location.' },
		],
	},
	{
		slug: 'payment-related',
		title: 'Payment Related',
		articles: [
			{ id: 'payment-modes', title: 'What are the modes of payment?', body: 'We accept UPI, credit/debit cards, net banking, digital wallets, and cash on delivery (where available).' },
			{ id: 'change-payment-mode', title: 'How do I change the mode of payment?', body: 'You can change your payment method during checkout before confirming your order. Once an order is placed, the payment method cannot be changed.' },
			{ id: 'safe-debit-credit-card', title: 'Is it safe to use my debit/credit card to shop on Supr?', body: 'Yes, absolutely. We use industry-standard encryption and secure payment gateways. Your card details are never stored on our servers.' },
			{ id: 'delete-saved-card', title: 'How can I delete my saved card details?', body: 'You can delete saved cards from the payment methods section in your account settings. Simply select the card and choose delete.' },
			{ id: 'accept-sodexo-tickets', title: 'Do you accept Sodexo, ticket restaurant etc.?', body: 'Currently, we do not accept meal vouchers like Sodexo or ticket restaurant. We accept standard payment methods like cards, UPI, and wallets.' },
			{ id: 'cod-blocked', title: 'Why is my COD blocked?', body: 'COD may be blocked due to multiple order cancellations, failed deliveries, or if you exceed the COD limit. Contact support to resolve this.' },
			{ id: 'cod-limit', title: 'What is the limit to place a COD order?', body: 'Cash on Delivery is available up to ₹2000 per order. For higher amounts, please use online payment methods.' },
			{ id: 'small-cart-fees', title: 'What are the small cart fees?', body: 'Small cart fees are charged on orders below the minimum cart value to cover operational costs. The fee varies by location.' },
			{ id: 'delivery-fee-each-order', title: 'Is there a delivery fee for each order?', body: 'Delivery fees may apply based on your order value and location. Super Saver members get free delivery on eligible orders.' },
			{ id: 'surge-fee', title: 'Why is there a surge fee?', body: 'Surge fees are applied during peak hours or high-demand periods to ensure faster delivery. The fee helps manage delivery capacity.' },
			{ id: 'charge-for-bag', title: 'Do you charge for the Bag?', body: 'We may charge a nominal fee for bags as per local regulations. You can opt for bagless delivery to avoid this charge.' },
			{ id: 'refunds', title: 'Refund timelines', body: 'Refunds are initiated instantly and may take 3-5 business days to reflect depending on your bank.' },
			{ id: 'payment-failed', title: 'My payment failed but money was deducted', body: 'If your payment failed but money was deducted, the amount will be automatically refunded within 3-5 business days. Contact support if it takes longer.' },
			{ id: 'payment-security', title: 'Is my payment information secure?', body: 'Yes, all payments are processed through secure, encrypted channels. We do not store your complete payment information.' },
		],
	},
	{
		slug: 'feedback-and-suggestions',
		title: 'Feedback & Suggestions',
		articles: [
			{ id: 'rider-safety-initiative', title: 'Tell me a little about your rider safety initiative', body: 'We prioritize rider safety with comprehensive insurance coverage, safety training, protective gear, and 24/7 support for all our delivery partners.' },
			{ id: 'rider-feedback-general', title: 'Rider feedback in general', body: 'You can provide feedback about your delivery experience through the order rating system or contact support with specific comments about our delivery partners.' },
			{ id: 'any-feedback-review', title: 'Any feedback / review', body: 'We value your feedback! You can share reviews and suggestions through the app, email, or social media. Your input helps us improve our service.' },
			{ id: 'out-of-stock', title: 'Out of stock', body: 'If an item is out of stock, we\'ll notify you and offer suitable alternatives. You can choose to accept substitutes or get a refund for unavailable items.' },
			{ id: 'packaging-feedback', title: 'Packaging feedback', body: 'We continuously improve our packaging based on customer feedback. Share your packaging experience to help us serve you better while being environmentally conscious.' },
			{ id: 'share-feedback', title: 'How can I share feedback?', body: 'You can share feedback using the Contact Support option in the app.' },
		],
	},
	{
		slug: 'order-products-related',
		title: 'Order / Products Related',
		articles: [
			{ id: 'change-delivery-address', title: 'Can I change the delivery address of my order?', body: 'You can change the delivery address only before the order is picked up from the store. Contact support immediately if you need to change it.' },
			{ id: 'reschedule-order', title: 'Can I reschedule my order?', body: 'Orders cannot be rescheduled once placed as we deliver within minutes. You can cancel and place a new order if needed.' },
			{ id: 'edit-cart', title: 'Can I edit my cart / add items?', body: 'You can edit your cart before placing the order. Once ordered, items cannot be added or removed.' },
			{ id: 'invoice-pricing', title: 'Want the invoice/ pricing break-up?', body: 'You can view and download your invoice from the order details section in your account after delivery.' },
			{ id: 'delivery-instructions', title: 'Do you take delivery instructions?', body: 'Yes, you can add delivery instructions while placing your order. Our delivery partners will follow them whenever possible.' },
			{ id: 'minimum-order-value', title: 'Is there a minimum order value?', body: 'Yes, minimum order values vary by location. You can check the minimum order requirement for your area in the app.' },
			{ id: 'missing-item', title: 'Missing item in order', body: 'If an item is missing, raise a ticket within 24 hours for a quick resolution.' },
		],
	},
	{ 
		slug: 'gift-card', 
		title: 'Gift Card', 
		articles: [ 
			{ id: 'add-gift-card-supr-cash', title: 'What is Add Gift card on Supr Cash?', body: 'You can add gift cards to your Supr Cash wallet for easy payments. The gift card amount will be credited to your wallet balance.' },
			{ id: 'add-gift-card', title: 'How do I add my Gift Card?', body: 'Go to your wallet section, select "Add Gift Card", enter the gift card code and PIN, then click add to credit the amount to your Supr Cash.' },
			{ id: 'buy-gift-card', title: 'Where can I buy a Gift Card?', body: 'You can purchase Supr gift cards from select retail stores, online platforms, or through our app during special promotions.' },
			{ id: 'fees-redeeming-gift-card', title: 'Are there any fees associated with redeeming Gift Cards?', body: 'No, there are no additional fees for redeeming gift cards. The full value will be added to your Supr Cash wallet.' },
			{ id: 'gift-card-not-working', title: 'What should I do if my Gift Card is not working?', body: 'Check if the code is entered correctly and the card is not expired. If issues persist, contact support with your gift card details.' },
			{ id: 'multiple-gift-cards', title: 'Can I use multiple Gift Cards for a single purchase?', body: 'Yes, you can add multiple gift cards to your Supr Cash wallet and use the combined balance for purchases.' },
			{ id: 'gift-card-expiry', title: 'Is there an expiry date for the Gift Card?', body: 'Yes, gift cards have expiry dates mentioned on them. Make sure to use them before the expiry date to avoid losing the value.' },
			{ id: 'receive-gift-card', title: 'How will I receive the Gift Card that I purchased?', body: 'Digital gift cards will be sent to your registered email or phone number. Physical cards will be delivered to your address if applicable.' },
			{ id: 'redeem', title: 'How to redeem gift card', body: 'Apply your gift card code at checkout to redeem.' } 
		] 
	},
	{ 
		slug: 'no-cost-emi', 
		title: 'No-Cost EMI', 
		articles: [ 
			{ id: 'what-is-emi', title: 'What is EMI?', body: 'EMI (Equated Monthly Installment) allows you to pay for your purchases in easy monthly installments instead of paying the full amount upfront.' },
			{ id: 'what-is-no-cost-emi', title: 'What is No-Cost EMI?', body: 'No-Cost EMI lets you pay in installments without any additional interest charges. The total amount remains the same as the original price.' },
			{ id: 'know-no-cost-emi-offer', title: 'How do I know if a product has a No-Cost EMI offer?', body: 'Products eligible for No-Cost EMI will display the EMI option during checkout. Look for "No-Cost EMI available" on product pages.' },
			{ id: 'processing-fees', title: 'Will I be charged any processing fees?', body: 'Processing fees may apply depending on your bank and card type. These fees, if any, will be clearly displayed before you confirm your EMI.' },
			{ id: 'cancel-return-no-cost-emi', title: 'What happens if I cancel or return a product purchased with No-Cost EMI?', body: 'If you cancel or return, the refund process will be handled according to your bank\'s EMI cancellation policy. Contact support for assistance.' },
			{ id: 'terms-conditions', title: 'What are some other Terms and Conditions I should be aware of?', body: 'EMI terms vary by bank and card type. Check your bank\'s EMI terms, minimum order values, and eligible card types before proceeding.' },
			{ id: 'emi', title: 'Is no-cost EMI available?', body: 'No-cost EMI is available on select high-value orders with supported cards.' } 
		] 
	},
	{ 
		slug: 'wallet-related', 
		title: 'Wallet Related', 
		articles: [ 
			{ id: 'add-money-wallet', title: 'I am not able to add money to my Wallet', body: 'Check your internet connection and payment method. If the issue persists, try using a different payment method or contact support.' },
			{ id: 'refund-not-received', title: 'I am not able to see the money refunded to my Wallet. What should I do?', body: 'Wallet refunds are usually instant. If you don\'t see the refund, check your transaction history or contact support with your order details.' },
			{ id: 'wallet-money-not-added', title: 'I am not able to see the money I added to my Wallet. What should I do?', body: 'If money was deducted but not added to wallet, it will be automatically refunded. Contact support if the issue persists beyond 24 hours.' },
			{ id: 'what-is-supr-cash', title: 'What is Supr Cash?', body: 'Supr Cash is our digital wallet that you can use to pay for orders and get instant discounts and cashback offers.' },
			{ id: 'unable-use-wallet', title: 'I am unable to use my wallet', body: 'Ensure you have sufficient balance and your wallet is active. Some promotional credits may have usage restrictions or expiry dates.' },
			{ id: 'wallet-usage', title: 'How to use wallet', body: 'Use Supr Cash at checkout to avail instant discounts.' } 
		] 
	},
	{ 
		slug: 'supr-super-saver', 
		title: 'Supr Super Saver', 
		articles: [ 
			{ id: 'issues-free-monthly', title: 'Issues with free monthly Super Saver gift', body: 'If you haven\'t received your monthly Super Saver gift, check your account after the billing cycle. Contact support if the issue persists.' },
			{ id: 'what-is-super-saver', title: 'What is Supr Super Saver?', body: 'Supr Super Saver is our premium membership that offers free delivery, exclusive discounts, and priority customer support.' },
			{ id: 'minimum-order-free-delivery', title: 'Is there a minimum order for free delivery with Supr Super Saver?', body: 'Super Saver members enjoy free delivery on all orders above the minimum cart value, which varies by location.' },
			{ id: 'charges-covered', title: 'What charges are covered under free delivery?', body: 'Super Saver covers standard delivery charges. Additional charges like surge pricing during peak hours may still apply.' },
			{ id: 'platforms-super-saver', title: 'On which platforms can I use Supr Super Saver?', body: 'You can use Super Saver benefits on the Supr mobile app and website across all serviceable locations.' },
			{ id: 'super-saver-all-cities', title: 'Is Supr Super Saver available in all cities?', body: 'Super Saver is available in all cities where Supr operates. Benefits may vary slightly based on local operations.' },
			{ id: 'products-additional-offers', title: 'Which products get additional offers with Supr Super Saver?', body: 'Super Saver members get exclusive discounts on select products, early access to sales, and special member-only offers.' },
			{ id: 'super-saver-stack-coupons', title: 'Does Supr Super Saver offer stack with other coupons?', body: 'Super Saver benefits can be combined with most coupons, but some exclusive offers may not be stackable. Check terms during checkout.' },
			{ id: 'paper-bag-removal', title: 'Is the Paper bag removal option applicable to Supr Super Saver orders?', body: 'Yes, Super Saver members can opt out of paper bags to support sustainability. This option is available during checkout.' },
			{ id: 'enroll-super-saver', title: 'How do I enroll in Supr Super Saver?', body: 'You can subscribe to Super Saver from the membership section in your account or during checkout for instant benefits.' },
			{ id: 'minimum-order-value-super-saver', title: 'Is there a minimum order value for placing orders on Supr Super Saver?', body: 'The minimum order value remains the same for Super Saver members, but you get free delivery and additional benefits.' },
			{ id: 'about-sss', title: 'About Supr Super Saver', body: 'Get exclusive offers and savings with Super Saver.' } 
		] 
	},
	{ 
		slug: 'supr-daily', 
		title: 'Supr Daily', 
		articles: [ 
			{ id: 'what-is-supr-daily', title: 'What is Supr Daily?', body: 'Supr Daily is our subscription service that delivers your daily essentials like milk, bread, and groceries at your preferred time with flexible scheduling.' },
			{ id: 'purchase-supr-pass', title: 'Can I still purchase a new Supr Pass?', body: 'Supr Pass has been upgraded to Supr Daily with better benefits. You can subscribe to Supr Daily for enhanced features and savings.' },
			{ id: 'supr-daily-all-users', title: 'Is Supr Daily available to all users?', body: 'Yes, Supr Daily is available to all users in serviceable areas. You can start your subscription anytime from the app.' },
			{ id: 'signup-supr-daily', title: 'How do I sign up for Supr Daily?', body: 'You can sign up for Supr Daily from the subscription section in your account or through the Supr Daily banner in the app.' },
			{ id: 'supr-pass-converted-daily', title: 'I am a Supr Pass user and have been converted to Supr Daily user. Does that impact the benefits of my Supr Pass Membership in any way?', body: 'Your existing benefits are preserved and enhanced. Supr Daily offers all previous Supr Pass benefits plus additional features like flexible scheduling.' },
			{ id: 'supr-daily-membership-duration', title: 'How long does my Supr Daily membership last?', body: 'Supr Daily memberships are available in monthly, quarterly, and annual plans. You can check your membership duration in your account settings.' },
			{ id: 'supr-daily-membership-expires', title: 'What happens when my Supr Daily membership expires?', body: 'When your membership expires, you\'ll lose subscription benefits but can continue using Supr normally. You can renew anytime to restore benefits.' },
			{ id: 'special-prices-products', title: 'What products will I get the special prices on?', body: 'Supr Daily members get special prices on daily essentials like milk, bread, eggs, and other frequently ordered items. Check the app for current offers.' },
			{ id: 'free-deliveries', title: 'How many free deliveries do I get?', body: 'Supr Daily members get unlimited free deliveries on all orders above the minimum cart value throughout their subscription period.' },
			{ id: 'about-daily', title: 'About Supr Daily', body: 'Subscribe to daily essentials with flexible schedules.' } 
		] 
	},
];

export function getCategory(slug: string): SupportCategory | undefined {
	return supportCategories.find((c) => c.slug === slug);
}

export function getArticle(slug: string, id: string) {
	const cat = getCategory(slug);
	return { category: cat, article: cat?.articles.find((a) => a.id === id) };
}


