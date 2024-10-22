import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
    fallback: string;
    name: string;
}

export function AvatarDemo({fallback, name} : AvatarProps) {
  return (
      <div className='flex space-x-2 items-center'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{ fallback}</AvatarFallback>
      </Avatar>
      <span>{name}</span>
    </div>
  );
}
