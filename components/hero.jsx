"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { 
  TrendingUp, 
  PieChart, 
  Bell, 
  Brain, 
  Shield, 
  Smartphone,
  DollarSign,
  BarChart3,
  Target,
  Mail
} from "lucide-react";

function HeroSection() {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;
    const featuresElement = featuresRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
      }
    };

    // Intersection Observer for features animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresElement) {
      observer.observe(featuresElement);
    }

    window.addEventListener("scroll", handleScroll);

    // Trigger initial animation
    setTimeout(() => setIsVisible(true), 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (featuresElement) observer.unobserve(featuresElement);
    };
  }, []);

  const features = [
    {
      icon: DollarSign,
      title: "Daily Income & Expenses",
      description: "Track your daily financial activities with ease",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: PieChart,
      title: "Smart Categories",
      description: "Visualize spending with interactive charts and graphs",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Monthly Limits",
      description: "Set expenditure limits and stay on budget",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get warned when you reach 80% of your spending limit",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "AI Insights",
      description: "Receive intelligent monthly spending analysis via email",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive financial reports and trends",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 animate-gradient-slow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 animate-float"></div>
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        {/* Hero Content */}
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl pb-6 hero-gradient-title leading-tight">
              Manage Your Finances <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 animate-gradient">
                with Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              An AI-powered financial management platform that helps you track daily income and expenses, 
              visualize spending patterns, set smart limits, and receive intelligent insights.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up-delayed-2">
              <Link href="/dashboard">
                <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Managing Money
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard & Transaction Views Preview */}
        <div className="hero-images-section mb-20">
          {/* Main Dashboard View */}
          <div className="hero-image-wrapper mb-12">
            <div ref={imageRef} className="hero-image-main">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
                <Image
                  src="/Dashboard.png"
                  width={1100}
                  height={650}
                  alt="Complete financial dashboard with analytics, charts, and spending overview"
                  className="relative rounded-3xl shadow-2xl border border-white/30 mx-auto backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-3xl"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Live Dashboard
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction View - Floating beside */}
          <div className="relative -mt-32 ml-auto max-w-2xl">
            <div className="hero-image-secondary">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Image
                  src="/GrapgView.png"
                  width={800}
                  height={600}
                  alt="Personal transaction view with detailed spending analysis and category breakdown"
                  className="relative rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-2xl"></div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg px-3 py-2 shadow-lg text-sm font-medium">
                  Transaction Analytics
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Badges */}
          <div className="absolute top-20 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-float max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Real-time Analytics</h4>
                <p className="text-slate-600 text-xs">Track spending patterns instantly</p>
              </div>
            </div>
          </div>

          <div className="absolute top-60 right-22 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-float-delayed max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Smart Budgeting</h4>
                <p className="text-slate-600 text-xs">AI-powered spending limits</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-65 left-30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-float max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Smart Alerts</h4>
                <p className="text-slate-600 text-xs">80% spending warnings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Everything You Need for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Smart Money Management
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive tools to track, analyze, and optimize your financial life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto mt-24 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "$2M+", label: "Money Tracked" },
              { number: "95%", label: "Budget Success" },
              { number: "24/7", label: "AI Monitoring" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
