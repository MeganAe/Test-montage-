import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className={`py-6 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Metoushela AI. Created by Metoushela Walker
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`p-2 rounded-full transition-colors ${
                  darkMode
                    ? 'hover:bg-gray-700 hover:text-purple-400'
                    : 'hover:bg-gray-100 hover:text-purple-600'
                }`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;