import useStates from "@/hooks/useStates";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGetReq } from "@/hooks/useRequests";
import { Check, ChevronsUpDown } from "lucide-react";
import { memo, useState } from "react";

const FolderSelectBox = () => {
  const { data } = useGetReq({
    url: "/chat",
    queryKey: "CHATS",
    cacheTime: 86400000,
    staleTime: 86400000,
    errorToastMsg: "Failed To Get Chats",
  });

  const { selectedFolderChatValues, userDatas, toggleFolderChatSelection } =
    useStates();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id="chats"
          variant="outline"
          className="w-full overflow-hidden justify-between hover:scale-100 col-span-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ring ring-chart-2"
        >
          {selectedFolderChatValues?.length
            ? selectedFolderChatValues?.length > 4
              ? `${selectedFolderChatValues
                  .slice(0, 4)
                  .map((chat) => chat?.title)
                  .join(", ")}...`
              : selectedFolderChatValues.map((chat) => chat?.title).join(", ")
            : "Select chat"}
          <ChevronsUpDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search chat..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {data?.data?.data?.map(
                (chat: {
                  _id: string;
                  title: string;
                  isPV?: boolean;
                  identifier: string;
                  pvAccessUsers?: {
                    _id: string;
                    username: string;
                    cover: string;
                    identifier: string;
                    description?: string;
                  }[];
                }) => {
                  console.log(chat);
                  return (
                    <CommandItem
                      key={chat?._id}
                      onSelect={() =>
                        toggleFolderChatSelection({
                          id: chat?._id,
                          title:
                            chat?.isPV &&
                            chat?.identifier === userDatas?.identifier
                              ? chat?.pvAccessUsers![1]?.username
                              : chat?.title,
                        })
                      }
                      className="flex items-center justify-between"
                    >
                      {chat?.isPV && chat?.identifier === userDatas?.identifier
                        ? chat?.pvAccessUsers![1]?.username
                        : chat?.title}
                      <Check
                        className={cn(
                          "h-4 w-4",
                          selectedFolderChatValues?.some(
                            (selected) => selected?.id === chat?._id
                          )
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                }
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default memo(FolderSelectBox);
