import BlogList from "@/app/components/blog/blog-list";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Events | Nils Hansson Meng",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/blog/banner/blog_banner.png"
        heading="Events"
        desc="Excited to <span>begin something amazing?</span> Get in touch—we'd love to connect with you!"
      />
      <BlogList />
    </main>
  );
}
