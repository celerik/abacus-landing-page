"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-blue-900/30 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Abacus</h3>
            <p className="text-slate-400 leading-relaxed">
              The future of institutional loan management. Precision, scale,
              and control in one unified platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.celerik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Celerik Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-slate-400 mb-4">
              Ready to transform your loan management?
            </p>
            <a
              href="mailto:info@celerik.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              info@celerik.com
            </a>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/celerik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/celerik/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Celerik. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
