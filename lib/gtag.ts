export const GA_MEASUREMENT_ID: string | undefined = process.env.NEXT_PUBLIC_GA_ID

type GtagConfig = {
  page_path?: string
}

export const isGaEnabled = (): boolean => {
  return typeof window !== "undefined" && typeof GA_MEASUREMENT_ID === "string" && GA_MEASUREMENT_ID.length > 0
}

export const pageview = (url: string): void => {
  if (!isGaEnabled()) return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  } as GtagConfig)
}

export type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GtagEvent): void => {
  if (!isGaEnabled()) return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}


