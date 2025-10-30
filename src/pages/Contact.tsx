import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would send to a backend API
    const mailtoLink = `mailto:hello@hustlehub.tech?subject=Contact from ${encodeURIComponent(values.name)}&body=${encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService Interest: ${values.service}\n\nMessage:\n${values.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Get in <span className="bg-gradient bg-clip-text ">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border">
              <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-secondary border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} className="bg-secondary border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 97657 49263" {...field} className="bg-secondary border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-secondary border-border">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="web">Website Development</SelectItem>
                            <SelectItem value="mobile">Mobile Apps</SelectItem>
                            <SelectItem value="ai">AI & ML</SelectItem>
                            <SelectItem value="student">Student Projects</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..."
                            className="min-h-32 bg-secondary border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-subtle border-accent/50">
                <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email</h3>
                      <a href="mailto:hello@hustlehub.tech" className="text-muted-foreground font-body hover:text-accent transition-colors">
                        hello@hustlehub.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground font-body hover:text-accent transition-colors">
                        +91 97657 49263
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground font-body">
                        Amravati<br />
                        Sai Nagar, India
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-border">
                <h3 className="text-xl font-heading font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 font-body text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
