// app/projects/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "This is a description of project 1",
    imageUrl: "/project1.png",
    demoUrl:
      "https://d1etqblq65l80m.cloudfront.net/6ixu5d0sgfq88p0rsyxsgaqzeo6e",
    repoUrl:
      "https://d1etqblq65l80m.cloudfront.net/6ixu5d0sgfq88p0rsyxsgaqzeo6e"
  },
  {
    title: "Project 2",
    description: "This is a description of project 2",
    imageUrl: "/project2.png",
    demoUrl:
      "https://d1etqblq65l80m.cloudfront.net/6ixu5d0sgfq88p0rsyxsgaqzeo6e",
    repoUrl:
      "https://d1etqblq65l80m.cloudfront.net/6ixu5d0sgfq88p0rsyxsgaqzeo6e"
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
      <Footer />
    </div>
  );
}
