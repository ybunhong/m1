import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectCard({ title, status, description, href, buttonText }) {
  return (
    <Card className="h-full transition-shadow duration-200 hover:shadow-md">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {status}
          </Badge>
        </div>

        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Button asChild className="w-full">
          <a href={href} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
