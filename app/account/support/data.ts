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
		],
	},
	{
		slug: 'general-inquiry',
		title: 'General Inquiry',
		articles: [
			{ id: 'what-is-zepto', title: 'What is Zepto?', body: 'Zepto delivers groceries in minutes in select cities across India.' },
		],
	},
	{
		slug: 'payment-related',
		title: 'Payment Related',
		articles: [
			{ id: 'refunds', title: 'Refund timelines', body: 'Refunds are initiated instantly and may take 3-5 business days to reflect depending on your bank.' },
		],
	},
	{
		slug: 'feedback-and-suggestions',
		title: 'Feedback & Suggestions',
		articles: [
			{ id: 'share-feedback', title: 'How can I share feedback?', body: 'You can share feedback using the Contact Support option in the app.' },
		],
	},
	{
		slug: 'order-products-related',
		title: 'Order / Products Related',
		articles: [
			{ id: 'missing-item', title: 'Missing item in order', body: 'If an item is missing, raise a ticket within 24 hours for a quick resolution.' },
		],
	},
	{ slug: 'gift-card', title: 'Gift Card', articles: [ { id: 'redeem', title: 'How to redeem gift card', body: 'Apply your gift card code at checkout to redeem.' } ] },
	{ slug: 'no-cost-emi', title: 'No-Cost EMI', articles: [ { id: 'emi', title: 'Is no-cost EMI available?', body: 'No-cost EMI is available on select high-value orders with supported cards.' } ] },
	{ slug: 'wallet-related', title: 'Wallet Related', articles: [ { id: 'wallet-usage', title: 'How to use wallet', body: 'Use Zepto Cash at checkout to avail instant discounts.' } ] },
	{ slug: 'zepto-super-saver', title: 'Zepto Super Saver', articles: [ { id: 'about-zss', title: 'About Zepto Super Saver', body: 'Get exclusive offers and savings with Super Saver.' } ] },
	{ slug: 'zepto-daily', title: 'Zepto Daily', articles: [ { id: 'about-daily', title: 'About Zepto Daily', body: 'Subscribe to daily essentials with flexible schedules.' } ] },
];

export function getCategory(slug: string): SupportCategory | undefined {
	return supportCategories.find((c) => c.slug === slug);
}

export function getArticle(slug: string, id: string) {
	const cat = getCategory(slug);
	return { category: cat, article: cat?.articles.find((a) => a.id === id) };
}


