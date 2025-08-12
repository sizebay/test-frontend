import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Card } from "@/components/atoms/card";
import { UserProps } from "@/types/user";
import { FolderGit2, Github, Star, Users } from "lucide-react";

interface UserCardProps {
  user: UserProps;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="p-8 bg-gradient-secondary border-card-border">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Avatar className="h-24 w-24 border-4 border-primary/20">
          <AvatarImage src={user.avatar_url} alt={user.name || user.login} />
          <AvatarFallback className="text-2xl bg-primary/10">
            {(user.name || user.login).charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {user.name || user.login}
              </h2>
              <p className="text-muted-foreground">@{user.login}</p>
            </div>
            <Button
              variant="outline"
              onClick={() =>
                window.open(`https://github.com/${user.login}`, "_blank")
              }
              className="mt-4 md:mt-0"
            >
              <Github className="h-4 w-4 mr-2" />
              View Profile
            </Button>
          </div>

          {user.bio && <p className="text-foreground mb-4">{user.bio}</p>}

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FolderGit2 className="h-4 w-4 text-primary" />
              <span className="font-medium">{user.public_repos}</span>
              <span className="text-muted-foreground">repositories</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">{user.followers}</span>
              <span className="text-muted-foreground">followers</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-medium">{user.following}</span>
              <span className="text-muted-foreground">following</span>
            </div>
            {user.location && (
              <Badge variant="secondary">{user.location}</Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
