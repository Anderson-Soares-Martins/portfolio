// app/about/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          {
            "Hi, I'm Anderson Soares Martins. I'm a passionate about programming with 2 years of experience in front-end development."
          }
        </p>
        <p className="mb-4">
          My expertise includes [List your key skills and technologies].
        </p>
        <p className="mb-4">
          {"When I'm not coding, you can find me [Your Hobbies or Interests]."}
        </p>
      </main>
      <Footer />
    </div>
  );
}
