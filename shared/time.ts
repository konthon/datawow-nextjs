export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR

export type MaybeDate = Date | string | number | null | undefined

export const isDate = (date?: MaybeDate): date is Date => {
  if (!!date && !Number.isNaN(+new Date(date))) return true
  return false
}

// ref: https://www.builder.io/blog/relative-time
const RELATIVE_TIME_CUTOFFS = [
  60,
  3600,
  86400,
  86400 * 7,
  86400 * 30,
  86400 * 365,
  Infinity,
]
const RELATIVE_TIME_UNITS: Intl.RelativeTimeFormatUnit[] = [
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
]
export const getRelativeTime = (date?: MaybeDate) => {
  if (!isDate(date)) return ''
  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })
  const timeMs = +new Date(date)
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)
  const unitIndex = RELATIVE_TIME_CUTOFFS.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds),
  )
  const divisor = unitIndex ? RELATIVE_TIME_CUTOFFS[unitIndex - 1] : 1
  return rtf.format(
    Math.floor(deltaSeconds / divisor),
    RELATIVE_TIME_UNITS[unitIndex],
  )
}
