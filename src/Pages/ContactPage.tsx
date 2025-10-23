import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Input } from '../Components/Ui/input';
import { Textarea } from '../Components/Ui/textarea';
import { Card } from '../Components/Ui/card';
import { Label } from '../Components/Ui/label';
import { toast } from 'sonner';
import { Button } from '../Components/Ui/button';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';


export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
  });
  const [onsubmiting, setonsubmiting] = useState(false)
const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    try {
      setonsubmiting(true);
      e.preventDefault();

      emailjs
        .send(
          'service_b9k2jxb', // Your EmailJS Service ID
          'template_u4a5rxd', // Your EmailJS Template ID
          formData,
          '7YRjeivin-_UOam6k' // Your EmailJS Public Key
        )
        .then(
          () => {
            setTimeout(() => {
              toast.success('Demo request submitted! You will get an email shortly.');
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                institution: '',
                message: '',
              });
              setonsubmiting(false); 
               navigate('/');// Move this inside the timeout
            }, 2000); // Delay of 2 seconds
          },
          (error) => {
            console.error('FAILED...', error);
            toast.error('Something went wrong. Please try again later.');
            setonsubmiting(false); // Reset immediately on error
          }
        );
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      setonsubmiting(false);
    }


  };



  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'connectautocampus@gmail.com',
      link: 'mailto:itzmohitsharma20@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9129785031',
      link: 'tel:+919129785031',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Block D , Dashrath Puri , Delhi , 110045',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  const officeLocations = [
    {
      city: 'Lucknow',
      address: 'Vinay Khand 3 , Gomti Nagar ,Lucknow , Uttar Pradesh , 226010',
      phone: '+91 9129785031',
    },
    {
      city: 'Delhi',
      address: 'Block D , Dashrath Puri , Delhi , 110045',
      phone: '+1 (555) 234-5678',
    }
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
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about AutoCampus? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={info.link}>
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        className="mt-1"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        className="mt-1"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Name@example.com"
                      required
                      className="mt-1"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 00********00"
                      className="mt-1"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="institution">Institution Name</Label>
                    <Input
                      id="institution"
                      type="text"
                      placeholder="Your School/College Name"
                      className="mt-1"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className="mt-1"
                      onChange={handleChange}
                    />
                  </div>
                  {onsubmiting ? (
                    <Label htmlFor="message" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" style={{ padding: 10, borderRadius: 10 }}>
                      Sending Message...
                    </Label>
                  ) : (
                    <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  )}


                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-6">
                Our Offices
              </h2>
              <p className="text-gray-600 mb-8">
                Visit us at any of our global locations or reach out to your nearest office.
              </p>


              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-gray-900 mb-3">{office.city}</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          </div>
        </div>
      </section>



    </div>
  );
}
