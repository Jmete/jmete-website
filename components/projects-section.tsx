import ProjectCard from "@/components/project-card";

const projects = [
  {
    id: 14,
    title: "TenderScore.AI",
    description:
      "TenderScore.AI is a SaaS platform that uses AI to analyze tens of thousands of government tenders and rank them against a company's profile, so teams focus on bids they are most likely to win. It surfaces fit drivers, deal breakers, timelines, and prioritized next steps to speed decisions and improve win rates.",
    link: "https://youtu.be/dIhhRKhDVF0",
    image: "/images/projects/tenderscore-light.png",
    topics: ["AI/ML", "TypeScript", "SAAS", "Data"],
  },
  {
    id: 5,
    title: "AI Document Automation",
    description:
      "Project Genesis uses AI to transform messy RFQ and purchase order documents into clean, structured, ERP-ready data, helping teams automatically drive sales workflows, procurement actions, and invoicing with far less manual entry, fewer errors, and much faster turnaround.",
    link: "https://youtu.be/MDEElgM2C2I",
    image: "/images/projects/ai-doc-automation-light.png",
    topics: [
      "Automation",
      "Procurement Intelligence",
      "AI/ML",
      "Software Engineering",
    ],
  },
  {
    id: 11,
    title: "Flowlab",
    description:
      "FlowLab is an interactive app that models real workflows as networks and simulates how work moves through each stage. It uses max-flow/min-cut algorithms to identify bottlenecks and show where adding capacity will improve throughput the most.",
    link: "https://flowlab.jamesmete.com",
    image: "/images/projects/flowlab.png",
    topics: [
      "Process Optimization",
      "Algorithm Visualization",
      "Bottleneck Analysis",
    ],
  },
  {
    id: 1,
    title: "Predicting Youtube Dislikes",
    description:
      "A complete machine learning pipeline to download / scrape, process, and analyze millions of Youtube data to train a model to predict dislikes and alert the user if a video is potentially probelmatic through a webapp that can process submitted videos.",
    link: "https://www.savethedislikes.com/",
    image: "/images/projects/save-the-dislikes.png",
    topics: ["Python", "AI/ML", "Data Analysis", "Big Data", "SQL"],
  },
  {
    id: 4,
    title: "Open Assistant",
    description:
      "Open-Assistant was one of the first open-source alternatives to chatGPT. As part of the data team, I wrote data-collection and processing scripts involving billions of records to create high-quality datasets to train the AI model.",
    link: "https://github.com/LAION-AI/Open-Assistant",
    image: "/images/projects/open-assistant.png",
    topics: ["Python", "AI/ML", "Gen AI", "LLM", "Big Data", "Open Source"],
  },
  {
    id: 2,
    title: "Sentiment Analysis of Online Platforms",
    description:
      "A study of over 1.2 billion raw twitter posts, amazon reviews, and reddit posts utilizing sentiment and keyword analysis to discover important themes each platform focuses their attention on.",
    link: "/documents/Sentiment%20Analysis%20between%20Product%20Reviews%20and%20Social%20Media%20Platforms%20-stanhung-jmete.pdf",
    image: "/images/projects/sentiment-analysis.png",
    topics: [
      "Python",
      "Data Visualization",
      "Big Data",
      "Spark",
      "Pandas",
      "Clustering",
    ],
  },
  {
    id: 3,
    title: "Predicting Text Difficulty",
    description:
      "Machine learning pipeline utilizing both supervised and unsupervised learning to classify sentences into whether or not they require simplification. Fine-tuned BERT model scored 77.6% on the test set, claiming second place in the associated Kaggle competition.",
    link: "/documents/Predicting%20Text%20Difficulty%20-%20Project%20Report%20-%20jmete-mattdann.pdf",
    image: "/images/projects/predicting-text-difficulty.png",
    topics: ["Python", "AI/ML", "NLP", "LLM"],
  },
  {
    id: 6,
    title: "Sawab (E-Commerce Site)",
    description:
      "I was a core team member to launch sawab.app, a new e-commerce platform for the industrial sector in the GCC. This involved providing analytical and project management support to align all stakeholders to meet our milestones on-time and within budget.",
    link: "https://sawab.app/?lang=en",
    image: "/images/projects/sawab.png",
    topics: [
      "Project Management",
      "Business Analysis",
      "Digital Transformation",
    ],
  },
  {
    id: 10,
    title: "Geocache",
    description:
      "Built a cloud geocoding API that turns messy AI-generated location text into accurate coordinates and standardized place data. Added smart matching with GeoNames plus KV and D1 caching to reduce latency and cost, and secured it with API keys, strict CORS, rate limits, and full test coverage.",
    link: "https://www.geocache.dev/",
    image: "/images/projects/geocache-dark.png",
    topics: ["TypeScript", "Serverless", "Data"],
  },
  {
    id: 12,
    title: "Privacy Law Comparison",
    description:
      "Privacy Law Comparison Copilot helps compliance and product teams compare GDPR, PDPL, PDPA, and PDPO in one workflow. It highlights topic-by-topic differences, provides question-based guidance, and links source citations to speed up privacy decisions and reduce research effort.",
    link: "https://privacylaws.jamesmete.com",
    image: "/images/projects/privacylaws.png",
    topics: ["LegalTech", "Privacy Compliance", "Rules Engine"],
  },
  {
    id: 13,
    title: "Google Maps Auto Search",
    description:
      "Built a Chrome extension that streamlines repetitive Google Maps work by saving reusable places and search queries, then running one-click map recentering and viewport-based searches; it also supports grouped organization and CSV bulk import to speed up high-volume location research.",
    link: "https://github.com/Jmete/google-maps-auto-search",
    image: "/images/projects/googlemaps-auto-search.png",
    topics: ["Chrome Extension", "TypeScript", "Workflow Automation"],
  },
  {
    id: 9,
    title: "Meeting Timer App",
    description:
      "I created a minimalist timer that is better for developers that uses JSON to store meeting templates to allow for hot swapping between different meeting structures by just editing text files that I can maintain. The timer largely is built using React for smooth client-side actions.",
    link: "https://timer.jamesmete.com/",
    image: "/images/projects/meeting-timer.png",
    topics: ["JavaScript", "React", "Front-End", "JSON"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Portfolio
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Selected Projects
        </h2>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
          Projects across data science, AI systems, software engineering, and
          digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,21.5rem),21.5rem))] justify-center gap-4 xl:justify-start">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
