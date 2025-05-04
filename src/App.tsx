import React, { useEffect } from 'react';
import { Github, Twitter, Linkedin, ArrowRight, Code2, Rocket, Users } from 'lucide-react';
import { OWNER_NAME, validateBranding, BrandingViolationError } from './constants/branding';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  useEffect(() => {
    // Validate branding in component text
    if (!validateBranding(title + description)) {
      throw new BrandingViolationError();
    }
  }, [title, description]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  // Protect against runtime modifications
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData' || mutation.type === 'childList') {
          const content = document.body.textContent || '';
          if (!validateBranding(content)) {
            throw new BrandingViolationError();
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full">
            <main className="mx-auto max-w-7xl">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-indigo-600">{OWNER_NAME}'s Platform</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                  Join {OWNER_NAME}'s innovative platform where DevOps excellence meets modern development. Experience the future of deployment and monitoring.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Explore {OWNER_NAME} <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt={`${OWNER_NAME}'s Development Environment`}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {OWNER_NAME}'s DevOps Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Cutting-edge tools and practices curated by {OWNER_NAME}
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Code2}
              title="Modern Tech Stack"
              description={`${OWNER_NAME}'s carefully selected stack featuring React, TypeScript, and Tailwind CSS.`}
            />
            <FeatureCard
              icon={Rocket}
              title="Fast Development"
              description={`Optimized development workflow with ${OWNER_NAME}'s proven deployment strategies.`}
            />
            <FeatureCard
              icon={Users}
              title="Community Driven"
              description={`Join ${OWNER_NAME}'s community of skilled developers and DevOps engineers.`}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; 2024 {OWNER_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;