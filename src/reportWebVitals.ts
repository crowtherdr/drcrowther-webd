import { type ReportCallback } from 'web-vitals'

export default async function reportWebVitals(onPerfEntry?: ReportCallback): Promise<void> {
  if (onPerfEntry instanceof Function) {
    const vitals = await import('web-vitals')
    const { onCLS, onINP, onFCP, onLCP, onTTFB } = vitals
    onCLS(onPerfEntry)
    onINP(onPerfEntry)
    onFCP(onPerfEntry)
    onLCP(onPerfEntry)
    onTTFB(onPerfEntry)
  }
}
