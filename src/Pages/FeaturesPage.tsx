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
      imageUrl: "https://res.cloudinary.com/doytvgisa/image/upload/v1762318470/undraw_my-resume_etai_zgmi2j.svg"
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
      imageUrl: "https://res.cloudinary.com/doytvgisa/image/upload/v1762319376/undraw_product-explainer_b7ft_hk7uip.svg"
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
      imageUrl: "https://res.cloudinary.com/doytvgisa/image/upload/v1762319601/undraw_app-benchmarks_ls0m_uhjtl4.svg"
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
      imageUrl: "https://res.cloudinary.com/doytvgisa/image/upload/v1762319709/undraw_real-time-sync_ro77_ldlkxv.svg"
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
    <div className="pt-16" style={{ backgroundColor: 'black' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'black' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="mb-6" style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
              Comprehensive Features for Modern Education
            </h1>
            <p className="max-w-3xl mx-auto" style={{ color: "#b3b3b3", fontSize: '1.125rem', lineHeight: '1.75' }}>
              {WebName} provides a complete suite of tools designed to automate operations,
              enhance communication, and improve student outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'black' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="attendance" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TabsList className="grid w-full grid-cols-2 px-10 lg:grid-cols-4 gap-2 mb-8 sm:mb-12 h-auto" style={{ background: '#1a1a1a', border: '1px solid #333333' }}>
                {['attendance', 'connect', 'performance', 'mobile'].map((tab, idx) => (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  >
                    <TabsTrigger
                      value={tab}
                      className="sm:py-3 transition-all duration-300 hover:scale-105"
                      style={{
                        padding: 10,
                        background: 'transparent',
                        color: '#b3b3b3',
                        border: '1px solid transparent'
                      }}
                    >
                      {tab === 'attendance' && 'Attendance'}
                      {tab === 'connect' && 'Parent Connect'}
                      {tab === 'performance' && 'Performance'}
                      {tab === 'mobile' && 'Mobile App'}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {mainFeatures.map((feature, index) => (
              <TabsContent
                key={index}
                value={['attendance', 'connect', 'performance', 'mobile'][index]}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid lg:grid-cols-2 gap-12 items-stretch"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: '#2a2a2a' }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          delay: 0.8,
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <feature.icon className="h-8 w-8" style={{ color: 'white' }} />
                      </motion.div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-4"
                      style={{ color: 'white', fontSize: '2rem', fontWeight: '600' }}
                    >
                      {feature.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="mb-6"
                      style={{ color: "#b3b3b3" }}
                    >
                      {feature.description}
                    </motion.p>

                    <div className="space-y-3 flex-grow">
                      {feature.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start space-x-3 cursor-default"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.7 + idx * 0.1,
                              type: "spring",
                              stiffness: 500,
                              damping: 20
                            }}
                          >
                            <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: 'white' }} />
                          </motion.div>
                          <span style={{ color: '#b3b3b3' }}>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Animated background blob - now in grayscale */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-3xl"
                      style={{ background: 'radial-gradient(circle, rgba(50,50,50,0.6) 0%, rgba(30,30,30,0.4) 50%, rgba(10,10,10,0.2) 100%)' }}
                    />

                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-full h-full flex items-center justify-center px-4"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="object-contain drop-shadow-lg"
                        style={{
                          height: 406,
                          width: "auto",
                          border: '1px solid #333333',
                          borderRadius: '0.5rem'
                        }}
                      />
                    </motion.div>

                    {/* Decorative floating elements - now in grayscale */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-10 right-0 w-16 h-16 rounded-full blur-xl"
                      style={{ background: '#333333', opacity: 0.2 }}
                    />

                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                        x: [0, -10, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-10 left-0 w-20 h-20 rounded-full blur-xl"
                      style={{ background: '#444444', opacity: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20" style={{ backgroundColor: 'black' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4" style={{ color: 'white', fontSize: '2rem', fontWeight: '600' }}>And Many More Features</h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#b3b3b3' }}>
              {WebName} is packed with additional tools and capabilities to support
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
                <Card className="p-6 h-full transition-all duration-300" style={{ background: '#1a1a1a', border: '1px solid #333333' }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: '#2a2a2a' }}>
                    <feature.icon className="h-6 w-6" style={{ color: 'white' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'white', fontSize: '1.125rem' }}>{feature.title}</h3>
                  <p style={{ color: '#b3b3b3', fontSize: '0.875rem' }}>{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
