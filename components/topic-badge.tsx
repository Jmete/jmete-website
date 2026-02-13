interface TopicBadgeProps {
  topic: string
}

export default function TopicBadge({ topic }: TopicBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/70 bg-secondary/65 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-secondary-foreground">
      {topic}
    </span>
  )
}
