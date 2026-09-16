import { Avatar, Card, Chip } from "@heroui/react";
import { HOSTS } from "../data";

export function HostsScreen {
  return (
    <div className="flex flex-col gap-3">
      {HOSTS.map((host) => (
        <Card key={host.id} className="flex-row items-start gap-3">
          <Avatar>
            <Avatar.Fallback>{host.name.slice(0, 1)}</Avatar.Fallback>
          </Avatar>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{host.name}</span>
              <span className="text-xs opacity-60">모임 {host.meetupCount}회 진행</span>
            </div>
            <span className="text-sm opacity-70">{host.bio}</span>
            <div className="flex flex-wrap gap-1 pt-1">
              {host.tags.map((tag) => (
                <Chip key={tag} color="default" size="sm">{tag}</Chip>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
