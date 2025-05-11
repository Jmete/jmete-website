import ProfileSection from "@/components/profile-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-3">
            <ProfileSection />
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </main>
  );
}
