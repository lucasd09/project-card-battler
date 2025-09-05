import { Coins, Gamepad2, Package, ShoppingBag, Users2 } from "lucide-react";
import { Button } from "../ui/button";
import { HeaderProps } from "./types";
import { Badge } from "../ui/badge";
import { Link } from "@tanstack/react-router";
import { UserDropdown } from "./components/user-dropdown";

export const Header = ({ data }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold font-[family-name:var(--font-display)] text-primary">Anime Brawlers</h1>
            <nav className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Gamepad2 className="h-4 w-4" />
                  Play
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Shop
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Package className="h-4 w-4" />
                  Inventory
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Users2 className="h-4 w-4" />
                  Teams
                </Button>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-2 px-3 py-1">
              <Coins className="h-4 w-4 text-yellow-500" />
              1000
            </Badge>
            <Badge variant="outline" className="gap-2 px-3 py-1">
              <div className="h-4 w-4 rounded-full bg-purple-500" />
              1000
            </Badge>
            <UserDropdown user={data.user} />
          </div>
        </div>
      </div>
    </header>
  )
}