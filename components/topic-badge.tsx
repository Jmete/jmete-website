interface TopicBadgeProps {
  topic: string
}

export default function TopicBadge({ topic }: TopicBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2c4dd5]/10 text-[#2c4dd5] dark:bg-[#60a5fa]/20 dark:text-[#93c5fd]">
      {topic}
    </span>
  )
}
