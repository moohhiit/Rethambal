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
    { year: '2022', title: 'Company Founded', description: '{WebName} was established with a vision to revolutionize educational technology.' },
    { year: '2024', title: '100+ Institutions', description: 'Reached our first major milestone of serving over 100 educational institutions.' },
    { year: '2025', title: 'Mobile App Launch', description: 'Launched our comprehensive mobile application for iOS and Android.' },
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
              About {WebName}
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're on a mission to empower educational institutions with intelligent 
              automation and seamless connectivity, enabling educators to focus on what 
              matters most - student success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To revolutionize educational administration through innovative technology, 
                making it easier for institutions to manage operations, engage with parents, 
                and track student performance effectively.
              </p>
              <p className="text-gray-600">
                We believe that by automating routine tasks and providing real-time insights, 
                educators can dedicate more time to teaching and nurturing student growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To become the leading education technology platform that connects every 
                stakeholder in the education ecosystem - students, parents, teachers, and 
                administrators - through seamless, intelligent solutions.
              </p>
              <p className="text-gray-600">
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
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {WebName} was born from the firsthand experience of our founder, who witnessed 
                  the challenges faced by educational institutions in managing day-to-day operations 
                  while trying to maintain quality education.
                </p>
                <p>
                  In 2020, we set out to create a comprehensive platform that would address the 
                  most pressing needs of schools and colleges - from automating attendance to 
                  improving parent-teacher communication and tracking student performance.
                </p>
                <p>
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
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTAyMzAzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped {WebName} into what it is today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-indigo-600 mb-2">{milestone.year}</div>
                      <h3 className="text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
