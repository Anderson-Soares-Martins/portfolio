// components/ProjectCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <picture>
          <img
            src={imageUrl}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded"
          />
        </picture>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
