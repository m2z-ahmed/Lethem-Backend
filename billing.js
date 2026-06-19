const RAZORPAY_PLAN_IDS = {
  starter: process.env.RAZORPAY_STARTER_PLAN_ID || 'plan_T2fRPqVhTfPcM0',
  pro: process.env.RAZORPAY_PRO_PLAN_ID || 'plan_T2fTOV7IbdTvGi',
  scale: process.env.RAZORPAY_SCALE_PLAN_ID || 'plan_T2fUCoe4EuHP4H',
};

const BILLING_PLANS = [
  { id: 'free', name: 'Free', description: 'For exploring Lethem.', monthlyUsd: 0, monthlyInr: 0, razorpayPlanId: null, popular: false, limits: { projects: 3, subkeys: 20, tokens: 2000000, logsDays: 30 }, features: ['3 Projects', '20 Subkeys', '2M Tokens / Month', '30 Days Logs', 'Community Support'] },
  { id: 'starter', name: 'Starter', description: 'For small teams and indie developers.', monthlyUsd: 12.99, monthlyInr: 1099, razorpayPlanId: RAZORPAY_PLAN_IDS.starter, popular: false, limits: { projects: 3, subkeys: 20, tokens: 2000000, logsDays: 30 }, features: ['3 Projects', '20 Subkeys', '2M Tokens / Month', '30 Days Logs', 'Priority Email Support'] },
  { id: 'pro', name: 'Pro', description: 'For growing AI products and startups.', monthlyUsd: 39, monthlyInr: 3299, razorpayPlanId: RAZORPAY_PLAN_IDS.pro, popular: true, limits: { projects: 10, subkeys: 75, tokens: 20000000, logsDays: 90 }, features: ['10 Projects', '75 Subkeys', '20M Tokens / Month', '90 Days Logs', 'Abuse Detection', 'Advanced Controls', 'Priority Support'] },
  { id: 'scale', name: 'Scale', description: 'For high-volume AI products.', monthlyUsd: 99, monthlyInr: 8499, razorpayPlanId: RAZORPAY_PLAN_IDS.scale, popular: false, limits: { projects: null, subkeys: 500, tokens: 100000000, logsDays: 180 }, features: ['*Unlimited Projects', '500 Subkeys', '100M Tokens / Month', 'Extended Logs', 'Advanced Controls+', 'Everything in Pro'] },
];

function publicBillingConfig() {
  return { currency: 'INR', keyId: process.env.RAZORPAY_KEY_ID || '', testMode: !process.env.RAZORPAY_LIVE_MODE || process.env.RAZORPAY_LIVE_MODE !== 'true', plans: BILLING_PLANS };
}

module.exports = { BILLING_PLANS, publicBillingConfig };
