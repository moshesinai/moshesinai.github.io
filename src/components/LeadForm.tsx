
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `New Investment Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Investment Interests: ${formData.message || 'Not specified'}`;
    
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = "972123456789"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You're being redirected to WhatsApp to send your inquiry.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let me help you find profitable real estate investment opportunities. 
            Fill out the form below and I'll contact you with personalized investment strategies.
          </p>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-white font-medium mb-2">Full Name *</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label className="block text-white font-medium mb-2">Email Address *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <Label className="block text-white font-medium mb-2">Phone Number *</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <Label className="block text-white font-medium mb-2">Investment Interests</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="Tell me about your investment goals, budget, and timeline..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                Send via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
