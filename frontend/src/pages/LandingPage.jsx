"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";

const HeroSection = () => (
  <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary text-primary-foreground">
    <div className="hero-content text-center">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Create Your Perfect Resume with AI
        </h1>
        <p className="py-6 text-xl">
          Build a professional resume in minutes. Just describe yourself, and
          our AI will do the rest!
        </p>
        <Link to="/generate-resume" className="btn btn-accent btn-lg group">
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="card-body items-center text-center">
      <div className="text-4xl mb-4 text-primary">{icon}</div>
      <h3 className="card-title text-2xl mb-2">{title}</h3>
      <p className="text-base-content/80">{description}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => (
  <section className="py-20 bg-base-200">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Powerful Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Star className="w-12 h-12" />}
          title="AI-Powered"
          description="Our AI analyzes your input and generates a tailored resume for you."
        />
        <FeatureCard
          icon={<CheckCircle className="w-12 h-12" />}
          title="Multiple Templates"
          description="Choose from a variety of professionally designed resume templates."
        />
        <FeatureCard
          icon={<Users className="w-12 h-12" />}
          title="Job-Specific Resumes"
          description="Optimize your resume for specific job roles and industries."
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, jobTitle, avatarUrl }) => (
  <motion.div
    className="card bg-base-100 shadow-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="card-body">
      <p className="text-lg italic">"{quote}"</p>
      <div className="flex items-center mt-4">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatarUrl || "/placeholder.svg"} alt={name} />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <p className="text-base-content/70">{jobTitle}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-base-300">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          quote="This AI resume maker saved me so much time! My resume looks professional and got me multiple interviews."
          name="John Doe"
          jobTitle="Software Engineer"
          avatarUrl="https://i.pravatar.cc/150?img=68"
        />
        <TestimonialCard
          quote="I love the templates and the ease of use. Highly recommend this tool to anyone looking for a job."
          name="Jane Smith"
          jobTitle="Marketing Specialist"
          avatarUrl="https://i.pravatar.cc/150?img=47"
        />
      </div>
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="py-20 bg-gradient-to-r from-accent to-accent-focus text-accent-content">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to Create Your Resume?
        </h2>
        <p className="mb-8 text-xl">
          Join thousands of users who have landed their dream jobs with our AI
          resume maker.
        </p>
        <Link to="/generate-resume">
          <button className="btn btn-primary btn-lg">
            Get Started Now
            <ArrowRight className="ml-2" />
          </button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="footer p-10 bg-neutral text-neutral-content">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="footer-title">ResuMate</h4>
          <p>Your go-to tool for creating professional resumes with AI.</p>
        </div>
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <a href="#" className="link link-hover">
            About Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="#" className="link link-hover">
            Features&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
        </div>
        <div>
          <h4 className="footer-title">Legal</h4>
          <a href="#" className="link link-hover">
            Privacy
            Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="#" className="link link-hover">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="bg-base-100">
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CallToActionSection />
    <FooterSection />
  </div>
);

export default LandingPage;
