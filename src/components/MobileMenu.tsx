import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  id: string;
  label: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems,
  activeSection,
  setActiveSection
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full mb-6 justify-between md:hidden"
        >
          {menuItems.find((item) => item.id === activeSection)?.label}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {menuItems.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
