import { motion } from 'motion/react';
import { 
  Clock, Users, BarChart3, Smartphone, 
  CheckCircle, Bell, Shield, Zap, 
  Database, Calendar, MessageSquare, FileText 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Components/Ui/tabs';
import { Card } from '../Components/Ui/card';
import { WebName } from '../info';

export function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Clock,
      title: 'Automated Attendance System',
      description: 'AI-powered attendance tracking that eliminates manual roll calls and reduces errors.',
      features: [
        'Biometric and RFID integration',
        'Real-time attendance updates',
        'Automatic parent notifications',
        'Customizable attendance rules',
        'Absence tracking and alerts',
      ],
      imageUrl : "https://res.cloudinary.com/doytvgisa/image/upload/v1761230747/AutoAttandance_ocr3kq.png"
    },
    {
      icon: Users,
      title: 'Parent-Institution Connect',
      description: 'Bridge the communication gap with a dedicated platform for parents and institutions.',
      features: [
        'Real-time notifications',
        'Two-way messaging system',
        'Event and announcement updates',
        'Parent-teacher meeting scheduler',
        'Fee payment integration',
      ],
      imageUrl : "https://res.cloudinary.com/doytvgisa/image/upload/v1761231559/Parens-instistude_j68kky.png"
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive student performance tracking with actionable insights.',
      features: [
        'Grade and assessment tracking',
        'Performance trend analysis',
        'Customizable report cards',
        'Comparative analytics',
        'Behavior and conduct monitoring',
      ],
      imageUrl : "https://res.cloudinary.com/doytvgisa/image/upload/v1761231744/Performance-Analytics_mwxtp6.png"
    },
    {
      icon: Smartphone,
      title: 'Mobile Application',
      description: 'Full-featured mobile app for parents, teachers, and administrators.',
      features: [
        'iOS and Android support',
        'Offline mode capability',
        'Push notifications',
        'Secure authentication',
        'Intuitive user interface',
      ],
      imageUrl : "https://res.cloudinary.com/doytvgisa/image/upload/v1761231904/Mobile-Application_dlzelp.png"
    },
  ];

  const additionalFeatures = [
    { icon: Bell, title: 'Smart Notifications', description: 'Automated alerts for important events' },
    { icon: Shield, title: 'Data Security', description: 'Enterprise-grade security and encryption' },
    { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast load times and responses' },
    { icon: Database, title: 'Cloud Storage', description: 'Secure cloud-based data storage' },
    { icon: Calendar, title: 'Event Management', description: 'Comprehensive calendar and scheduling' },
    { icon: MessageSquare, title: 'In-App Messaging', description: 'Seamless communication platform' },
    { icon: FileText, title: 'Document Management', description: 'Organize and share documents easily' },
    { icon: CheckCircle, title: 'Easy Integration', description: 'Integrate with existing systems' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-gray-900 mb-6">
              Comprehensive Features for Modern Education
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {WebName} provides a complete suite of tools designed to automate operations, 
              enhance communication, and improve student outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="attendance" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 mb-8 sm:mb-12 h-auto">
              <TabsTrigger value="attendance" className="text-sm sm:text-base py-2 sm:py-3">Attendance</TabsTrigger>
              <TabsTrigger value="connect" className="text-sm sm:text-base py-2 sm:py-3">Parent Connect</TabsTrigger>
              <TabsTrigger value="performance" className="text-sm sm:text-base py-2 sm:py-3">Performance</TabsTrigger>
              <TabsTrigger value="mobile" className="text-sm sm:text-base py-2 sm:py-3">Mobile App</TabsTrigger>
            </TabsList>

            {mainFeatures.map((feature, index) => (
              <TabsContent 
                key={index} 
                value={['attendance', 'connect', 'performance', 'mobile'][index]}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h2 className="text-gray-900 mb-4">{feature.title}</h2>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="rounded-2xl overflow-hidden shadow-2xl max-w-md lg:max-w-full w-full"
                    >
                      <img
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">And Many More Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {WebName}is packed with additional tools and capabilities to support 
              every aspect of your institution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-gray-900 mb-6">
              Seamless Integration with Your Existing Systems
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              {WebName}easily integrates with your current infrastructure, including 
              student information systems, learning management platforms, and payment gateways.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {['Student Information Systems', 'Learning Management Systems', 'Payment Gateways'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{item}</h3>
                    <p className="text-gray-600">Easy integration and data synchronization</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
