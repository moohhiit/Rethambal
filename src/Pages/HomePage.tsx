import { motion } from 'motion/react';
import { CheckCircle, Users, BarChart3, Smartphone, Clock, Shield, Code, Zap, Cloud, Lock, Cpu } from 'lucide-react';
import { Card } from '../Components/Ui/card';
import { WebName } from '../info';

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat protection and security monitoring to keep your business safe.',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business needs.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    },
    {
      icon: Cpu,
      title: 'IT Infrastructure',
      description: 'Robust network setup, maintenance, and optimization services.',
    },
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Enterprise-grade security and compliance',
    'Real-time monitoring and support',
    'Scalable solutions that grow with you',
    'Seamless integration with existing systems',
    '24/7 expert technical support',
  ];

 

  const services = [
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Around-the-clock support and monitoring for critical systems and infrastructure.',
    },
    {
      icon: CheckCircle,
      title: 'Help Desk',
      description: 'Responsive technical support to resolve issues quickly and efficiently.',
    },
    {
      icon: Smartphone,
      title: 'Remote Support',
      description: 'Quick, efficient remote troubleshooting and problem resolution.',
    },
    {
      icon: Users,
      title: 'Onsite Support',
      description: 'Hands-on technical support when remote solutions aren\'t enough.',
    },
    {
      icon: BarChart3,
      title: 'Proactive Monitoring',
      description: 'Predictive analytics to prevent issues before they impact your business.',
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability testing.',
    },
  ];

  return (
    <div className="pt-16 bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black"
        style={
          {
            backgroundColor: 'black'
          }
        }>
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden"

        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{
                  fontSize: 40,
                }}
              >
                Your Trusted <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technology</span> Partner
              </h1>

              <p className=" text-gray-300 mb-8 leading-relaxed"
                style={{
                  fontSize: 20
                }}
              >
                Empowering businesses with cutting-edge IT solutions, software development, and cybersecurity. Let us transform your challenges into opportunities and drive your success through technology.
              </p>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src="https://assets-v2.codedesign.ai/storage/v1/object/public/685a38bb1be5a6957cc7c130_da5ac127/asset-63e44766"
                  autoPlay={true}
                  loop
                  muted
                  className="w-full h-auto"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-4 border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" style={{ color: 'white' }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">99.9% Uptime</p>
                    <p className="text-sm text-gray-400">System Reliability</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-black"
        style={
          {
            backgroundColor: 'black'
          }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{
                fontSize: 40
              }}
            >
              Comprehensive <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to modernize your technology infrastructure and accelerate business growth.
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
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-purple-500 transition-all">
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-400" style={{ color: 'white' }} />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Service Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
        style={
          {
            backgroundColor: 'black'
          }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{
                fontSize: 40
              }}
            >
              Experience The Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions offer comprehensive protection against evolving threats, ensuring your data and systems remain secure. Trust us to safeguard your digital assets.
            </p>
            <img src='https://res.cloudinary.com/doytvgisa/image/upload/v1762277645/asset-8c658875_tlet1y.png' ></img>
          </motion.div>

          <div className="relative flex justify-center items-center min-h-[400px]">
            {/* Glowing orb background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
                filter: 'blur(40px)'
              }}
            />

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-48 h-48 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(168, 85, 247, 0.3) 70%, transparent 100%)',
                filter: 'blur(30px)'
              }}
            />

            {/* Content cards */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 w-full max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl backdrop-blur-sm  transition-all"

              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-yellow-400 w-8 h-8" style={{ color: "white" }} />
                  <h3 className="text-2xl font-bold text-white">Lightning Fast</h3>
                </div>
                <p className="text-gray-300">
                  Optimized performance and rapid deployment for all your IT needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-purple-400 w-8 h-8" style={{ color: "white" }} />
                  <h3 className="text-2xl font-bold text-white">Always Secure</h3>
                </div>
                <p className="text-gray-300">
                  Enterprise-grade security and compliance built into every solution.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Support Features Section */}
      <section
        className="relative py-24 bg-black overflow-hidden"
        style={{
          backgroundColor: "black",

        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"

          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/doytvgisa/image/upload/v1762279168/asset-7c0c11e6_tjki6a.png')",
            zIndex: 0,
            // backgroundImage: "url('https://via.placeholder.com/800x600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontSize: 40 }}
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Support
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Full-spectrum technical support to keep your business running smoothly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ borderColor: 'gray' }}
                className="bg-gradient-to-br from-gray-900 to-black/90 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all shadow-lg"
              >
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon
                    className="w-8 h-8 text-purple-400"
                    style={{ color: "white" }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black"

        style={
          {
            backgroundColor: 'black'
          }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{WebName}</span>?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Join hundreds of businesses that have transformed their operations with our comprehensive IT solutions and expert support.
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
                    <div className="bg-purple-500/20 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" style={{ color: "white" }} />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl"
                />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Shield, label: 'Security First' },
                      { icon: Zap, label: 'Fast Solutions' },
                      { icon: Users, label: 'Expert Team' },
                      { icon: CheckCircle, label: 'Proven Results' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700"
                        style={{}}
                      >
                        <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" style={{ color: "white" }} />
                        <p className="text-white text-sm font-semibold">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}