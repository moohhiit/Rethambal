import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, BarChart3, Smartphone, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../Components/Ui/button';
import { Card } from '../Components/Ui/card';
import { WebName } from '../info';

export default function HomePage() {
  const features = [
    {
      icon: Clock,
      title: 'Automated Attendance',
      description: 'Smart attendance tracking system that saves time and eliminates manual errors.',
    },
    {
      icon: Users,
      title: 'Parent Connect',
      description: 'Seamless communication bridge between parents and educational institutions.',
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time student performance analytics and comprehensive reports.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Access everything on-the-go with our intuitive mobile application.',
    },
  ];

  const benefits = [
    'Reduce administrative workload by up to 70%',
    'Improve parent engagement and satisfaction',
    'Real-time insights and analytics',
    'Secure and compliant data management',
    'Easy integration with existing systems',
    '24/7 customer support',
  ];

  const stats = [
    { number: '100+', label: 'Institutions' },
    { number: '50K+', label: 'Students' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-gray-900 mb-6">
                Transform Your Educational Institution with Smart Automation
              </h1>
              <p className="text-gray-600 mb-8">
                {WebName} revolutionizes how educational institutions manage attendance,
                connect with parents, and track student performance through intelligent automation
                and mobile technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Request Free Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/doytvgisa/image/upload/v1761232079/unnamed_br94hy.jpg"
                  alt="Students using technology"
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">98% Accuracy</p>
                    <p className="text-sm text-gray-500">Attendance Tracking</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <div className="w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-white mb-2">{stat.number}</div>
                <p className="text-indigo-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Powerful Features for Modern Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your institution's operations and enhance
              the learning experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-6">
                Why Choose {WebName}?
              </h2>
              <p className="text-gray-600 mb-8">
                Join hundreds of educational institutions that have transformed their
                operations with our comprehensive platform.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Schedule a free demo today and discover how {WebName} can revolutionize
              your educational institution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
