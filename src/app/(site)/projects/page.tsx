import ProjectList from "@/app/components/artworks";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects | Nils Hansson Meng",
};

export default function Page() {
  const projects = getAllProjects();
  return (
    <main>
      <Herobanner
        bannerimage="/images/projects/banner/projects-banner.png"
        heading="Artworks"
        desc="Here you can see some of my works that have been either sold, comission or still available"
      />
      <ProjectList />
    </main>
  );
}
