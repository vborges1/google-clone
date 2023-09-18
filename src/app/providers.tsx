"use client";

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react';

export default function Providers({children}: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  )
}
