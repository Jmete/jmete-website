import ProfileSection from "@/components/profile-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="page-shell w-full px-4 py-8 md:px-8 md:py-12 xl:px-10 2xl:px-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[19.5rem_minmax(0,1fr)] xl:gap-10">
          <div>
            <ProfileSection />
          </div>
          <div className="min-w-0">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </main>
  );
}
