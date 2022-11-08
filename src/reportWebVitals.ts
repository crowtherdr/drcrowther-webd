import { ReportHandler } from 'web-vitals'

export default async function reportWebVitals(onPerfEntry?: ReportHandler): Promise<void> {
  if (onPerfEntry instanceof Function) {
    const vitals = await import('web-vitals')
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = vitals
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}
