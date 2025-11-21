"use client";

import { AnimatedBee } from "@/components/animated-bee";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    orgType: "",
    orgSize: "",
    instagram: "",
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [selectedImage]);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCollabs = () => {
    const collabSection = document.getElementById("collabs");
    if (collabSection) {
      collabSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for registering!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E0D5F5] via-[#EDE8F5] to-[#F5E8F0] relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2 md:gap-3 touch-manipulation">
              <Image
                src="/bee-icon.svg"
                alt="Bee"
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                priority
              />
              BUZZ
            </Link>
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.instagram.com/bringthebuzzover/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-black/5 rounded-full transition-all duration-300 touch-manipulation flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                BRING THE BUZZ OVER!
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-lg leading-relaxed">
              Register your college organization to partner with your favorite brands
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="group w-full sm:w-auto cursor-pointer" onClick={scrollToWaitlist}>
                  REGISTER
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="group w-full sm:w-auto bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 hover:from-amber-200 hover:to-yellow-200 cursor-pointer"
                  onClick={scrollToCollabs}
                >
                  VIEW RECENT COLLABS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Animated Bee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 sm:mt-0"
          >
            <AnimatedBee />
          </motion.div>
        </div>
      </motion.div>

      {/* Waitlist Form Section */}
      <div id="waitlist" className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/40 backdrop-blur-xl rounded-3xl md:rounded-[3rem] p-6 md:p-12 border border-white/60 shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Register
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 text-sm md:text-base"
            >
              Register your college organization to get started
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="name" className="text-sm font-semibold">
                Name <span className="text-red-500">*</span>
              </Label>
              <motion.div 
                whileFocus={{ scale: 1.01 }} 
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="transition-all duration-300"
                  autoComplete="name"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="text-sm font-semibold">
                School Email <span className="text-red-500">*</span>
              </Label>
              <motion.div 
                whileFocus={{ scale: 1.01 }} 
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@university.edu"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="transition-all duration-300"
                  autoComplete="email"
                  inputMode="email"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="school" className="text-sm font-semibold">
                School <span className="text-red-500">*</span>
              </Label>
              <motion.div 
                whileFocus={{ scale: 1.01 }} 
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Input
                  id="school"
                  type="text"
                  placeholder="University or college name"
                  required
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  className="transition-all duration-300"
                  autoComplete="organization"
                />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2"
              >
                <Label htmlFor="orgType" className="text-sm font-semibold">
                  Organization Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  required
                  value={formData.orgType}
                  onValueChange={(value) => setFormData({ ...formData, orgType: value })}
                >
                  <SelectTrigger id="orgType">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fraternity">Fraternity</SelectItem>
                    <SelectItem value="sorority">Sorority</SelectItem>
                    <SelectItem value="club">Club</SelectItem>
                    <SelectItem value="sports">Sports Team</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-2"
              >
                <Label htmlFor="orgSize" className="text-sm font-semibold">
                  Organization Size <span className="text-red-500">*</span>
                </Label>
                <Select
                  required
                  value={formData.orgSize}
                  onValueChange={(value) => setFormData({ ...formData, orgSize: value })}
                >
                  <SelectTrigger id="orgSize">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-25">1-25 members</SelectItem>
                    <SelectItem value="26-50">26-50 members</SelectItem>
                    <SelectItem value="51-100">51-100 members</SelectItem>
                    <SelectItem value="101-200">101-200 members</SelectItem>
                    <SelectItem value="200+">200+ members</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-2"
            >
              <Label htmlFor="instagram" className="text-sm font-semibold">
                Organization Instagram <span className="text-red-500">*</span>
              </Label>
              <motion.div 
                whileFocus={{ scale: 1.01 }} 
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Input
                  id="instagram"
                  type="text"
                  placeholder="@yourorganization"
                  required
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="transition-all duration-300"
                  autoComplete="username"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-4"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group text-base cursor-pointer"
                >
                  Register
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>

      {/* BUZZ x YERBA MADRE Collaboration Section */}
      <div id="collabs" className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 md:space-y-12"
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6 md:mb-8"
            >
              BUZZ x YERBA MADRE
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8 md:mb-12"
            >
              <motion.a
                href="https://yerbamadre.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/YerbaMadre_full-logo_color.webp"
                    alt="Yerba Madre Logo"
                    width={300}
                    height={100}
                    className="w-48 md:w-72 h-auto"
                    loading="lazy"
                  />
                </div>
              </motion.a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { src: "/IMG_9944.jpeg", alt: "BUZZ x Yerba Madre Collaboration 1" },
              { src: "/DSC07197.jpeg", alt: "BUZZ x Yerba Madre Collaboration 2" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-3xl md:rounded-[3rem] shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      quality={90}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 bg-white/20 backdrop-blur-sm mt-12 md:mt-16 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 lg:py-12 pb-safe">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center md:items-start gap-2 md:gap-3"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Image src="/bee-icon.svg" alt="Bee" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
                <span className="text-lg md:text-xl lg:text-2xl font-bold">BUZZ</span>
              </div>
              <p className="text-xs md:text-sm text-gray-700 text-center md:text-left">Bring the BUZZ over!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs md:text-sm text-gray-700 text-center md:text-right"
            >
              © 2025 BUZZ. All rights reserved.
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Decorative stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-300 pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
            fontSize: `${12 + (i % 3) * 4}px`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Image Modal/Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-hidden"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer"
                aria-label="Close"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={selectedImage}
                  alt="Enlarged image"
                  fill
                  className="object-contain"
                  priority
                  quality={95}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
