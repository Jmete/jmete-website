import ProjectCard from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Customer Segmentation Analysis",
    description:
      "Developed a machine learning model to segment customers based on purchasing behavior, enabling targeted marketing campaigns.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    topics: ["Python", "ML/AI", "Data Analysis", "Clustering"],
  },
  {
    id: 2,
    title: "Sales Prediction Dashboard",
    description:
      "Created an interactive dashboard to visualize sales predictions and trends, helping stakeholders make informed decisions.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    topics: ["Tableau", "Data Visualization", "Forecasting"],
  },
  {
    id: 3,
    title: "Supply Chain Optimization",
    description:
      "Optimized inventory management and distribution network, resulting in 15% cost reduction and improved delivery times.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    topics: ["Project Management", "Optimization", "Supply Chain"],
  },
  {
    id: 4,
    title: "Sentiment Analysis Tool",
    description:
      "Built a natural language processing tool to analyze customer feedback and social media mentions for brand sentiment.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    topics: ["Python", "NLP", "ML/AI", "Big Data"],
  },
  {
    id: 5,
    title: "Predictive Maintenance System",
    description: "Implemented a predictive maintenance system for manufacturing equipment, reducing downtime by 30%.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    topics: ["IoT", "ML/AI", "Time Series Analysis"],
  },
  {
    id: 6,
    title: "Market Basket Analysis",
    description:
      "Analyzed transaction data to identify product associations and optimize store layout and promotional strategies.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    topics: ["Python", "Association Rules", "Data Mining"],
  },
]

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-[#333333] dark:text-[#E0E0E0] mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

