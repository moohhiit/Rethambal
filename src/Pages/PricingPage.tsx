import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Card } from '../Components/Ui/card';
import { Button } from '../Components/Ui/button';


export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small schools and institutions',
      badge: null,
      features: [
        { text: 'Up to 200 students', included: true },
        { text: 'Automated attendance', included: true },
        { text: 'Parent portal access', included: true },
        { text: 'Basic performance tracking', included: true },
        { text: 'Email notifications', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Standard support', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'API access', included: false },
        { text: 'Custom branding', included: false },
      ],
    },
    {
      name: 'Professional',
      price: '59',
      description: 'Ideal for growing institutions',
      badge: 'Most Popular',
      features: [
        { text: 'Up to 500 students', included: true },
        { text: 'Automated attendance', included: true },
        { text: 'Parent portal access', included: true },
        { text: 'Advanced performance tracking', included: true },
        { text: 'Email & SMS notifications', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Basic API access', included: true },
        { text: 'Custom branding', included: false },
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large institutions with specific needs',
      badge: null,
      features: [
        { text: 'Unlimited students', included: true },
        { text: 'Automated attendance', included: true },
        { text: 'Parent portal access', included: true },
        { text: 'Advanced performance tracking', included: true },
        { text: 'Email, SMS & push notifications', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Advanced analytics & AI insights', included: true },
        { text: 'Full API access', included: true },
        { text: 'Custom branding & white-label', included: true },
      ],
    },
  ];

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees. We provide free onboarding and training for all plans.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can accommodate purchase orders for annual plans.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans with full access to features.',
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data before canceling. We retain your data for 30 days after cancellation.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer a 20% discount when you choose annual billing instead of monthly.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your institution. All plans include core features 
              with 14-day free trial and no credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${index === 1 ? 'md:-mt-4' : ''}`}
              >
                <Card className={`p-8 h-full flex flex-col ${
                  index === 1 ? 'border-2 border-indigo-600 shadow-xl' : ''
                }`}>
                  {/* {plan.badge && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                      {plan.badge}
                    </Badge>
                  )} */}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      {plan.price === 'Custom' ? (
                        <div className="text-gray-900">Contact Us</div>
                      ) : (
                        <>
                          <span className="text-gray-900">$</span>
                          <span className="text-gray-900">{plan.price}</span>
                          <span className="text-gray-600">/month</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="w-full">
                    <Button 
                      className={`w-full ${
                        index === 1 
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Have questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}
