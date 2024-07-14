import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Badge, Package, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";

export default function SearchBox() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <>
        <Button
          variant={"outline"}
          onClick={() => setOpen(true)}
          className="md:min-w-44 md:w-1/3 justify-start px-2 py-4 bg-[#F6F6F6] items-center"
          size="lg"
        >
          <SearchIcon className=" size-4 mr-2" />
          <span className=" text-start min-w-24 text-[#8A8A8A]"> Search ... </span>{" "}
          <kbd
            className=" ml-auto pointer-events-none  inline-flex h-5 select-none items-center gap-1
            rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
          >
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
        </Button>
      </>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder=" search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" className="mb-5">
            <CommandItem>
              <Package className="mr-2 h-4 w-4" />
              <span className="text-[#121212]">Project 1: This is Project 1</span>
            </CommandItem>
            <CommandItem>
              <Package className="mr-2 h-4 w-4" />
              <span className="text-[#121212]">Project 2: This is Project 2</span>
            </CommandItem>
            <CommandItem>
              <Package className="mr-2 h-4 w-4" />
              <span className="text-[#121212]">Project 3: This is Project 3</span>
            </CommandItem>
            <CommandItem>
              <Package className="mr-2 h-4 w-4" />
              <span className="text-[#121212]">Project 4: This is Project 4</span>
            </CommandItem>
            <CommandItem>
              <Package className="mr-2 h-4 w-4" />
              <span className="text-[#121212]">Project 5: This is Project 5</span>
            </CommandItem>

          </CommandGroup>
      
        
        </CommandList>
      </CommandDialog>
    </>
  );
}
