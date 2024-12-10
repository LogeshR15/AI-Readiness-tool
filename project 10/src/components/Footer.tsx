import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <a href="#" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Terms of Service
          </a>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Our AI Digest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};