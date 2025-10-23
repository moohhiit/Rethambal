import { motion } from 'motion/react';
import { Calendar, Users, Building2 } from 'lucide-react';
import { Button } from '../Components/Ui/button';
import { Input } from '../Components/Ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Components/Ui/select';
import { toast } from 'sonner';
import { Card } from '../Components/Ui/card';
import { Textarea } from '../Components/Ui/textarea';
import { Label } from '../Components/Ui/label';
import { WebName } from '../info';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    institutionType: '',
    studentCount: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_b9k2jxb', // Replace with your EmailJS Service ID
        'template_u4a5rxd', // Replace with your EmailJS Template ID
        formData,
        '7YRjeivin-_UOam6k'   // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success('Demo request submitted! You will get an email shortly.');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            institution: '',
            institutionType: '',
            studentCount: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error('Something went wrong. Please try again later.');
        }
      );
  };


  const demoFeatures = [
    {
      icon: Users,
      title: 'Personalized Demo',
      description: 'Tailored to your specific requirements and use cases',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for you',
    },
    {
      icon: Building2,
      title: 'Institution-Focused',
      description: 'Solutions designed for your type of institution',
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
              Request a Free Demo
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience {WebName} firsthand with a personalized demo. See how our platform
              can transform your institution's operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
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

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Work Email *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="institution">Institution Name *</Label>
                  <Input id="institution" value={formData.institution} onChange={handleChange} required />
                </div>

                <div>
                  <Label>Institution Type *</Label>
                  <Select onValueChange={(value) => handleSelectChange('institutionType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select institution type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="k12">K-12 School</SelectItem>
                      <SelectItem value="college">College/University</SelectItem>
                      <SelectItem value="vocational">Vocational Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Number of Students</Label>
                  <Select onValueChange={(value) => handleSelectChange('studentCount', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-200">0-200</SelectItem>
                      <SelectItem value="201-500">201-500</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1000+">1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Request Demo <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 md:p-12">
              <div className="text-indigo-600 mb-4">"</div>
              <blockquote className="text-gray-700 mb-6">
                The {WebName} demo was incredibly informative and helped us understand exactly
                how the platform could solve our attendance and parent communication challenges.
                The team was knowledgeable and patient with all our questions.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="text-gray-900">Dr. Sarah Martinez</p>
                  <p className="text-gray-600">Principal, Delhi Public School</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
