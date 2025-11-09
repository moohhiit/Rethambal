import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Heart } from 'lucide-react';
import { Card } from '../Components/Ui/card';
import { WebName } from '../info';


export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Committed to transforming education through innovative technology solutions.',
    },
    {
      icon: Heart,
      title: 'Student-Focused',
      description: 'Every feature we build is designed with student success in mind.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Dedicated to delivering the highest quality products and services.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working hand-in-hand with educators to create meaningful solutions.',
    },
  ];

  const milestones = [
    { year: '2022', title: 'Company Founded', description: `${WebName} was established with a vision to revolutionize educational technology.` },
    { year: '2024', title: '100+ Institutions', description: 'Reached our first major milestone of serving over 100 educational institutions.' },
    { year: '2025', title: 'Mobile App Launch', description: 'Launched our comprehensive mobile application for iOS and Android.' },
  ];

  return (
    <div className="pt-16" style={{ background: '#000000' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #1a1a1a, #000000, #0d0d0d)', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-gray-900 mb-6" style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 'bold' }}>
              About {WebName}
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ color: '#cccccc', fontSize: '1.125rem', lineHeight: '1.75' }}>
              We're on a mission to empower educational institutions with intelligent 
              automation and seamless connectivity, enabling educators to focus on what 
              matters most - student success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white" style={{ background: '#000000', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ background: '#2a2a2a', width: '4rem', height: '4rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Target style={{ height: '2rem', width: '2rem', color: '#ffffff' }} />
              </div>
              <h2 className="text-gray-900 mb-4" style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>Our Mission</h2>
              <p className="text-gray-600 mb-6" style={{ color: '#b3b3b3', marginBottom: '1.5rem' }}>
                To revolutionize educational administration through innovative technology, 
                making it easier for institutions to manage operations, engage with parents, 
                and track student performance effectively.
              </p>
              <p className="text-gray-600" style={{ color: '#b3b3b3' }}>
                We believe that by automating routine tasks and providing real-time insights, 
                educators can dedicate more time to teaching and nurturing student growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ background: '#2a2a2a', width: '4rem', height: '4rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye style={{ height: '2rem', width: '2rem', color: '#ffffff' }} />
              </div>
              <h2 className="text-gray-900 mb-4" style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>Our Vision</h2>
              <p className="text-gray-600 mb-6" style={{ color: '#b3b3b3', marginBottom: '1.5rem' }}>
                To become the leading education technology platform that connects every 
                stakeholder in the education ecosystem - students, parents, teachers, and 
                administrators - through seamless, intelligent solutions.
              </p>
              <p className="text-gray-600" style={{ color: '#b3b3b3' }}>
                We envision a future where technology enhances every aspect of the educational 
                experience, creating better outcomes for students worldwide.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow" style={{ padding: '1.5rem', height: '100%', textAlign: 'center', border: '1px solid #333333', background: '#1a1a1a' }}>
                  <div style={{ background: '#2a2a2a', width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <value.icon style={{ height: '1.5rem', width: '1.5rem', color: '#ffffff' }} />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ color: '#ffffff', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{value.title}</h3>
                  <p className="text-gray-600" style={{ color: '#b3b3b3', fontSize: '0.875rem' }}>{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50" style={{ padding: '5rem 0', background: '#0d0d0d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-gray-900 mb-6" style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem' }}>Our Story</h2>
              <div className="space-y-4 text-gray-600" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ color: '#b3b3b3', lineHeight: '1.75' }}>
                  {WebName} was born from the firsthand experience of our founder, who witnessed 
                  the challenges faced by educational institutions in managing day-to-day operations 
                  while trying to maintain quality education.
                </p>
                <p style={{ color: '#b3b3b3', lineHeight: '1.75' }}>
                  In 2020, we set out to create a comprehensive platform that would address the 
                  most pressing needs of schools and colleges - from automating attendance to 
                  improving parent-teacher communication and tracking student performance.
                </p>
                <p style={{ color: '#b3b3b3', lineHeight: '1.75' }}>
                  Today, we're proud to serve over 500 institutions and 100,000+ students, 
                  continuously innovating to meet the evolving needs of the education sector.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)', filter: 'grayscale(100%)', border: '1px solid #333333' }}>
                <img
                  src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTAyMzAzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our team"
                  className="w-full h-auto"
                  style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" style={{ padding: '5rem 0', background: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="text-gray-900 mb-4" style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ color: '#b3b3b3', maxWidth: '42rem', margin: '0 auto' }}>
              Key milestones that have shaped {WebName} into what it is today.
            </p>
          </motion.div>

          <div className="relative" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', height: '100%', width: '2px', background: '#333333' }}></div>
            <div className="space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ display: 'flex', alignItems: 'center', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`} style={{ width: '50%', padding: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <Card className="p-6 hover:shadow-lg transition-shadow" style={{ padding: '1.5rem', border: '1px solid #333333', background: '#1a1a1a', borderRadius: '0.5rem' }}>
                      <div style={{ color: '#ffffff', marginBottom: '0.5rem', fontWeight: '600', fontSize: '1.125rem' }}>{milestone.year}</div>
                      <h3 className="text-gray-900 mb-2" style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>{milestone.title}</h3>
                      <p className="text-gray-600" style={{ color: '#b3b3b3' }}>{milestone.description}</p>
                    </Card>
                  </div>
                  <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                    <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#ffffff', border: '4px solid #000000' }}></div>
                  </div>
                  <div className="w-1/2" style={{ width: '50%' }}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}