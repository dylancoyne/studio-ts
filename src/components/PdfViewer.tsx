'use client'
import React from 'react';

const PdfViewer: React.FC = () => {
  return (
    <p className="mt-6">
          <a href="./pdf/dylan-coyne-cv.pdf" className="inline-flex items-center font-medium text-primary transition hover:text-secondary" target="_blank"
        rel="noopener noreferrer">Download CV
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </p>
  );
};

export default PdfViewer;