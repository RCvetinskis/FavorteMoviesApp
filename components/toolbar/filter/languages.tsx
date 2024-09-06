import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getLanguages } from "@/actions/tmdb api/getRequests";
import { Language } from "@/types";
import { toast } from "sonner";

const Languages = () => {
  const [languages, setLanguages] = useState<Language[] | []>([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setLoading(true);
    getLanguages()
      .then((res) => {
        setLanguages(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="my-2 font-semibold">Languages</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {value
                ? languages.find((language) => language.iso_639_1 === value)
                    ?.english_name
                : "Select Language"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search Language..." />
              <CommandList>
                <CommandEmpty>No Language Found.</CommandEmpty>
                <CommandGroup>
                  {languages.map((language) => (
                    <CommandItem
                      key={language.iso_639_1}
                      value={language.iso_639_1}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === language.iso_639_1
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {language.english_name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default Languages;
