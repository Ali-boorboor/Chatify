import useStates from "@/hooks/useStates";
import MainAvatar from "@/components/atoms/MainAvatar";
import UserDataDrawer from "@/components/organisms/UserDataDrawer";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { memo } from "react";

function HeaderSection() {
  const {
    selectedChatID,
    userDatas,
    selectedChatInfo,
    userTypingData,
    onlineUsersCount,
  } = useStates();

  return (
    <header className="sticky top-0 z-50 drop-shadow-lg border-b border-foreground">
      <nav className="py-2.5 bg-accent flex items-center px-20 xl:px-40 relative">
        <SidebarTrigger className="bg-accent-foreground text-accent absolute left-4" />
        <Sheet>
          <div className="flex items-center gap-4">
            <SheetTrigger>
              {selectedChatID &&
                (!selectedChatInfo?.isPV ||
                selectedChatInfo?.identifier !== userDatas?.identifier ? (
                  <MainAvatar
                    imgSrc={selectedChatInfo?.cover}
                    fallBackText={selectedChatInfo?.title?.slice(0, 2)!}
                    className="md:w-10 md:h-10"
                  />
                ) : (
                  selectedChatInfo?.isPV &&
                  selectedChatInfo?.pvAccessUsers && (
                    <MainAvatar
                      imgSrc={selectedChatInfo?.pvAccessUsers[1]?.cover}
                      fallBackText={
                        selectedChatInfo?.pvAccessUsers[1]?.username?.slice(
                          0,
                          2
                        )!
                      }
                      className="md:w-10 md:h-10"
                    />
                  )
                ))}
            </SheetTrigger>
            <div className="flex flex-col gap-0.5">
              <p className="font-semibold capitalize w-60 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
                {selectedChatID
                  ? !selectedChatInfo?.isPV ||
                    selectedChatInfo?.identifier !== userDatas?.identifier
                    ? selectedChatInfo?.title
                    : selectedChatInfo?.pvAccessUsers &&
                      selectedChatInfo?.pvAccessUsers[1]?.username
                  : "select a chat to view"}
              </p>
              <p className="font-semibold text-sm text-gray-400 italic lowercase">
                {selectedChatID && userTypingData?.isTyping ? (
                  <span className="animate-pulse">
                    {userTypingData?.username} is typing...
                  </span>
                ) : selectedChatID && !selectedChatInfo?.isPV ? (
                  `${onlineUsersCount} online ${
                    onlineUsersCount <= 1 ? "user" : "users"
                  }`
                ) : null}
              </p>
            </div>
          </div>
          {selectedChatID &&
            (!selectedChatInfo?.isPV ||
            selectedChatInfo?.identifier !== userDatas?.identifier ? (
              <UserDataDrawer
                title={selectedChatInfo?.title!}
                cover={selectedChatInfo?.cover}
                identifier={selectedChatInfo?.identifier!}
                description={selectedChatInfo?.description}
              />
            ) : (
              selectedChatInfo?.isPV &&
              selectedChatInfo?.pvAccessUsers && (
                <UserDataDrawer
                  title={selectedChatInfo?.pvAccessUsers[1]?.username}
                  cover={selectedChatInfo?.pvAccessUsers[1]?.cover}
                  identifier={selectedChatInfo?.pvAccessUsers[1]?.identifier}
                  description={selectedChatInfo?.pvAccessUsers[1]?.description}
                />
              )
            ))}
        </Sheet>
      </nav>
    </header>
  );
}

export default memo(HeaderSection);
