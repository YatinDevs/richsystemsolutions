import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p className="mt-1">Built with Next.js 16 and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
