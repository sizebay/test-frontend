import { Avatar } from "../atoms/Avatar";

type UserInfoProps = {
  avatarUrl: string;
  name: string;
  username: string;
  bio?: string;
};

export function UserInfo({ avatarUrl, name, username, bio }: UserInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={avatarUrl} alt={username} size={64} />
      <div>
        <h2 className="text-xl font-semibold text-white">{name || username}</h2>
        <p className="text-sm text-[#E3B873]">@{username}</p>
        {bio && <p className="text-sm text-[#C9A77A] mt-1">{bio}</p>}
      </div>
    </div>
  );
}