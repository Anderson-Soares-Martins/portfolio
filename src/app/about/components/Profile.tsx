import { Mail, Phone, Linkedin } from "lucide-react";
import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import ImageProfile from "@/assets/photo-perfil.png";
import Image from "next/image";

export const Profile = forwardRef<
  HTMLDivElement,
  { ref: React.Ref<HTMLDivElement> }
>((props, ref) => {
  return (
    <div id="profile" className="space-y-6" ref={ref}>
      <div className="relative flex flex-col md:flex-row justify-between">
        <div className="space-y-6 mb-8 sm:mb-10 lg:mb-20 ">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Anderson Soares Martins
          </h1>
          <div className="space-y-2">
            <p>Location: Palhoça, SC</p>
            <ContactInfo />
          </div>
        </div>
        <Image
          src={ImageProfile}
          alt="Anderson Soares Martins"
          width={250}
          height={450}
          className="rounded-3xl"
        />
      </div>
      <ProfessionalSummary />
    </div>
  );
});

Profile.displayName = "Profile";

const ContactInfo = () => (
  <>
    <div className="flex items-center">
      <Mail className="mr-2" size={18} />
      <a
        href="mailto:andersoaresmartins@gmail.com"
        className="font-medium text-primary hover:underline"
      >
        andersoaresmartins@gmail.com
      </a>
    </div>
    <div className="flex items-center">
      <Phone className="mr-2" size={18} />
      <a
        href="tel:+5548996084908"
        className="font-medium text-primary hover:underline"
      >
        (48) 99608-4908
      </a>
    </div>
    <div className="flex items-center">
      <Linkedin className="mr-2" size={18} />
      <a
        href="https://www.linkedin.com/in/anderson-soares-martins-a3b5b21aa"
        className="font-medium text-primary hover:underline"
      >
        LinkedIn
      </a>
    </div>
    <div className="flex items-center">
      <FaGithub className="mr-2" size={18} />
      <a
        href="https://github.com/Anderson-Soares-Martins"
        className="font-medium text-primary hover:underline"
      >
        GitHub
      </a>
    </div>
  </>
);

const calculateAge = (birthDate: string) => {
  const birth = new Date(birthDate);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  // Se o aniversário ainda não aconteceu este ano
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    return age - 1;
  }
  return age;
};

// Data de nascimento de Anderson
const birthDate = "2000-06-12";
const age = calculateAge(birthDate);

const ProfessionalSummary = () => (
  <div>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
      Professional Summary
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Hi, I’m Anderson, and I’m currently {age} years old. A little about me: my
      hobby is going to the gym and maintaining a healthy lifestyle. Thanks to
      this, I’ve become who I am today focused and determined to give my best
      every day. I’m a very communicative person. Professionally, I have over 2
      years of programming experience and have worked on several projects. I
      enjoy giving and receiving constructive feedback.
    </p>
  </div>
);
