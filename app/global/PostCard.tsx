'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { LuUser2 } from "react-icons/lu";

export default function PostCard({
  title,
  category,
  content,
  categoryContent,
  profesor,
} : {
  title: String;
  category: String;
  content: String;
  categoryContent: String;
  profesor: String;
}) {
  return (
    <Card className="w-[80%]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <HoverCard>
            <HoverCardTrigger className="underline">@{category}</HoverCardTrigger>
            <HoverCardContent>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <LuUser2 className="border rounded-full bg-black text-white" />
                <p className="text-foreground">{profesor}</p>
                </div>
                {categoryContent}
                </div>           
            </HoverCardContent>
          </HoverCard>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4">
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
