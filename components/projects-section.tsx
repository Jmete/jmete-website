import ProjectCard from "@/components/project-card";

const projects = [
  {
    id: 1,
    title: "Predicting Youtube Dislikes",
    description:
      "A complete machine learning pipeline to download / scrape, process, and analyze millions of Youtube data to train a model to predict dislikes and alert the user if a video is potentially probelmatic through a webapp that can process submitted videos.",
    link: "https://www.savethedislikes.com/",
    topics: ["Python", "ML/AI", "Data Analysis", "Big Data", "SQL"],
  },
  {
    id: 2,
    title: "Sentiment Analysis of Online Platforms",
    description:
      "A study of over 1.2 billion raw twitter posts, amazon reviews, and reddit posts utilizing sentiment and keyword analysis to discover important themes each platform focuses their attention on.",
    link: "/documents/Sentiment%20Analysis%20between%20Product%20Reviews%20and%20Social%20Media%20Platforms%20-stanhung-jmete.pdf",
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
    topics: ["Python", "AI/ML", "NLP", "LLM"],
  },
  {
    id: 4,
    title: "Open Assistant",
    description:
      "Open-Assistant was one of the first open-source alternatives to chatGPT. As part of the data team, I wrote data-collection and processing scripts involving billions of records to create high-quality datasets to train the AI model.",
    link: "https://github.com/LAION-AI/Open-Assistant",
    topics: ["Python", "AI/ML", "Gen AI", "LLM", "Big Data", "Open Source"],
  },
  {
    id: 5,
    title: "AI Document Automation / PDF Annotation Tool",
    description:
      "Built a custom PDF annotation tool to optimize sales document processing. Furthermore, the data collected via the program is stored and used to train a fine-tuned data extraction model to automate document processing",
    link: "https://github.com/Jmete/pdf-data-py",
    topics: [
      "Python",
      "AI/ML",
      "Data Processing",
      "Software Engineering",
      "Automation",
      "Open Source",
    ],
  },
  {
    id: 6,
    title: "Sawab (E-Commerce Site)",
    description:
      "I was a core team member to launch sawab.app, a new e-commerce platform for the industrial sector in the GCC. This involved providing analytical and project management support to align all stakeholders to meet our milestones on-time and within budget.",
    link: "https://sawab.app/?lang=en",
    topics: [
      "Project Management",
      "Business Analysis",
      "Digital Transformation",
    ],
  },
  {
    id: 7,
    title: "ERP / CRM Implementation",
    description:
      "Managed the implementation of a new enterprise resource planning solution (Odoo) at Sherbiny to consolidate and streamline business operations. This included working with stakeholders, partners, and developers to implement all necessary modules, as well as set up corporate dashboards and other features to greatly enhance our organizational efficiency.",
    link: "https://www.odoo.com/",
    topics: [
      "Project Management",
      "ERP",
      "SQL",
      "Python",
      "Digital Transformation",
      "Business Intelligence",
    ],
  },
  {
    id: 8,
    title: "IT / OT Infrastructure Plan",
    description:
      "IT / OT infrastructure plan for the new Sherbiny HQ development including networking, security, servers, smart meeting rooms, future factory initiative, intelligent warehousing & manufacturing, as well as integration with other locations using zero-trust SD-WAN / SASE solutions.",
    link: "https://sherbiny.com/",
    topics: [
      "IT",
      "Networking",
      "Digital Transformation",
      "Project Management",
      "Automation",
    ],
  },
  {
    id: 9,
    title: "Meeting Timer App",
    description:
      "I created a minimalist timer that is better for developers that uses JSON to store meeting templates to allow for hot swapping between different meeting structures by just editing text files that I can maintain. The timer largely is built using React for smooth client-side actions.",
    link: "https://timer.jamesmete.com/",
    topics: ["Javascript", "React", "Front-End", "JSON"],
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
          A cross-disciplinary body of work spanning data science, AI systems,
          software engineering, and large-scale transformation programs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
