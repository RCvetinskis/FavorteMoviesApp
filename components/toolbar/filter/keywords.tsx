import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import React, { useEffect, useState } from "react";
import { getKeyWords } from "@/actions/tmdb api/getRequests";
import { KeyWordType } from "@/types";
import { toast } from "sonner";
import { useDebounce } from "@/hooks/useDebounce";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const KeyWords = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [results, setResults] = useState<KeyWordType[] | []>([]);
  const [loading, setLoading] = useState(false);

  const handleKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    setValue(value);
  };
  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    if (!query) return;

    setLoading(true);

    getKeyWords(query)
      .then((res) => {
        setResults(res.results);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedQuery]);

  const handleClear = () => {
    setValue("");
    setQuery("");
  };

  return (
    <Command onChange={handleKeywords}>
      <h2 className="my-2 font-semibold">Key Words</h2>
      <div className="relative">
        <CommandInput value={value} />

        {value && (
          <Button
            onClick={handleClear}
            className="absolute right-0 top-0"
            variant={"ghost"}
            size={"icon"}
          >
            <X size={18} />
          </Button>
        )}
      </div>

      <CommandList
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          query ? "h-[10svh] overflow-y-auto  opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {results.map((item) => (
                <CommandItem
                  value={item.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                  }}
                  key={item.id}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  );
};

export default KeyWords;
