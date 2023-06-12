import { format, parseISO } from 'date-fns'

export default function PostDate({
  dateString,
  ...props
}: {
  dateString: string | undefined
}) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} {...props}>
      {format(date, 'LL.d.yyyy')}
    </time>
  )
}
