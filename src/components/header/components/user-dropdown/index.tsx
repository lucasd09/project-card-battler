import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings2, User, User2 } from "lucide-react";
import { UserDropdownProps } from "./types";
import { authClient } from "@/lib/auth-client";
import { redirect } from "@tanstack/react-router";

export const UserDropdown = ({ user }: UserDropdownProps) => {
  const handleLogout = async () => {
    await authClient.signOut();

    return redirect({ to: '/login' })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'icon'}><User className="size-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuLabel className="text-center">{user.name}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User2 className="size-4" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2 className="size-4" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}