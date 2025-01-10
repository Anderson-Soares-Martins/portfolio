// app/projects/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import banner1 from "@/assets/banner-pague-safe.png";
import banner2 from "@/assets/banner-convert-img-3d.png";
import banner3 from "@/assets/banner-covert-text.png";
import banner4 from "@/assets/banner-handyman.png";

const projects = [
  {
    title: "Pague Safe",
    description: "Landing page gateway de pagamento",
    imageUrl: banner1.src,
    demoUrl: "https://paguesafe.com/"
  },
  {
    title: "Convert text",
    description:
      "This is a automation site to change text of file for another text of excel file",
    imageUrl: banner3.src,
    demoUrl: "https://webappazul.andersoaresmartins.com.br/"
  },
  {
    title: "Landing page Handyman",
    description: "Site to shows services of handyman",
    imageUrl: banner4.src,
    demoUrl: "https://andersonreparos.com.br/"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
