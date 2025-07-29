'use client';

import { useEffect } from 'react';

interface PerformanceMonitorProps {
  pageName: string;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PerformanceMonitor({ pageName }: PerformanceMonitorProps) {
  const sendToAnalytics = (metric: {
    name: string;
    value: number;
    id: string;
    delta: number;
    rating: string;
    entries: PerformanceEntry[];
    navigationType: string;
  }, pageName: string) => {
    // Send to your analytics service (Google Analytics, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: pageName,
        value: Math.round(metric.value),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
      });
    }
  };

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Track page load time
    const pageLoadTime = performance.now();
    window.addEventListener('load', () => {
      const loadTime = performance.now() - pageLoadTime;
      console.log('Page Load Time:', loadTime);
      sendToAnalytics({ 
        name: 'page-load-time', 
        value: loadTime,
        id: 'page-load-time',
        delta: 0,
        rating: 'good',
        entries: [],
        navigationType: 'navigate'
      }, pageName);
    });

    // Track Core Web Vitals using native APIs
    if ('PerformanceObserver' in window) {
      // Track LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        console.log('LCP:', lastEntry.startTime);
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          id: 'lcp',
          delta: 0,
          rating: 'good',
          entries: [],
          navigationType: 'navigate'
        }, pageName);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const firstInputEntry = entry as PerformanceEventTiming;
          console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
          sendToAnalytics({
            name: 'FID',
            value: firstInputEntry.processingStart - firstInputEntry.startTime,
            id: 'fid',
            delta: 0,
            rating: 'good',
            entries: [],
            navigationType: 'navigate'
          }, pageName);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  }, [pageName]);

  return null; // This component doesn't render anything
} 