import React, { useEffect, useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - CannaBrewCafé';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, error: false });
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    // In a real application, you would send the form data to a server here
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{backgroundColor: '#f5f2e8'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#3d3629'}}>Kontakt</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#5a4f42'}}>
            Haben Sie Fragen oder möchten Sie Kontakt aufnehmen? Wir freuen uns auf Sie.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-stone-50 p-8 rounded-lg border border-stone-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Visit Us</h3>
              <p className="text-stone-600">
                123 Green Street<br />
                Amsterdam, 1012 AB<br />
                Netherlands
              </p>
            </div>

            {/* Hours */}
            <div className="bg-stone-50 p-8 rounded-lg border border-stone-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Opening Hours</h3>
              <p className="text-stone-600">
                Monday - Thursday: 8am - 10pm<br />
                Friday - Saturday: 8am - 12am<br />
                Sunday: 10am - 8pm
              </p>
            </div>

            {/* Phone */}
            <div className="bg-stone-50 p-8 rounded-lg border border-stone-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Call Us</h3>
              <p className="text-stone-600">
                +31 20 123 4567<br />
                <span className="text-sm text-stone-500">General Inquiries</span>
              </p>
              <p className="text-stone-600 mt-2">
                +31 20 765 4321<br />
                <span className="text-sm text-stone-500">Reservations</span>
              </p>
            </div>

            {/* Email */}
            <div className="bg-stone-50 p-8 rounded-lg border border-stone-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Email Us</h3>
              <p className="text-stone-600">
                info@cannabrewcafe.com<br />
                <span className="text-sm text-stone-500">General Inquiries</span>
              </p>
              <p className="text-stone-600 mt-2">
                events@cannabrewcafe.com<br />
                <span className="text-sm text-stone-500">Events & Reservations</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-96 lg:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5525997270247!2d4.891269!3d52.3702157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzEyLjkiTiA0wrA1MycyOC42IkU!5e0!3m2!1sen!2snl!4v1621436431244!5m2!1sen!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                className="w-full h-full"
                title="CannaBrewCafé Location"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Send Us a Message</h3>
              
              {formStatus.submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-5 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : formStatus.error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-5 rounded-lg mb-6">
                  <p className="font-medium">Something went wrong!</p>
                  <p>Please try again or contact us directly.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-stone-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-stone-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-stone-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Reservations">Reservations</option>
                    <option value="Events">Events</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-stone-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg resize-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Find answers to our most commonly asked questions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Do you require reservations?</h3>
                <p className="text-stone-600">
                  Reservations are not required for general seating, but we recommend them for groups of 6 or more and for weekend evenings. You can make a reservation by calling us or using the contact form above.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">What is your age policy?</h3>
                <p className="text-stone-600">
                  CannaBrewCafé is a 21+ establishment due to our cannabis offerings. Valid ID is required for entry.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Do you offer WiFi?</h3>
                <p className="text-stone-600">
                  Yes, we offer complimentary high-speed WiFi for all our guests. Ask our staff for the current password.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Can I host a private event at your café?</h3>
                <p className="text-stone-600">
                  Absolutely! We offer private event spaces and custom packages for various occasions. Please contact our events team at events@cannabrewcafe.com for more information and availability.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Do you offer non-cannabis products?</h3>
                <p className="text-stone-600">
                  Yes, we have a full menu of traditional coffee beverages, non-infused food items, and non-alcoholic drinks. Everyone can find something to enjoy at CannaBrewCafé, whether or not they consume cannabis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on events, new menu items, and special offers.
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button 
              type="submit" 
              className="bg-stone-800 hover:bg-stone-900 text-white font-medium px-6 py-3 rounded-r-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-emerald-200 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;