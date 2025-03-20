import Layout from "@/components/organisms/Home/Layout";
import MainAvatar from "@/components/atoms/MainAvatar";
import ChatInput from "@/components/molecules/Home/ChatInput";
import ChatBubble from "@/components/molecules/Home/ChatBubble";
import UserDataDrawer from "@/components/organisms/Home/UserDataDrawer";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { memo } from "react";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col h-full justify-between relative">
        <header className="sticky top-0 z-50 drop-shadow-lg border-b border-foreground">
          <nav className="py-2.5 bg-accent flex items-center px-20 xl:px-40 relative">
            <SidebarTrigger className="bg-accent-foreground text-accent absolute left-4" />
            <Sheet>
              <div className="flex items-center gap-4">
                <SheetTrigger>
                  <MainAvatar
                    imgSrc=""
                    fallBackText="sb"
                    className="md:w-10 md:h-10"
                  />
                </SheetTrigger>
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold capitalize w-60 overflow-hidden text-ellipsis whitespace-nowrap drop-shadow-lg">
                    sarabayat
                  </p>
                  <p className="font-semibold text-sm text-gray-400 italic lowercase">
                    last seen recently
                  </p>
                </div>
              </div>
              <UserDataDrawer />
            </Sheet>
          </nav>
        </header>
        <main className="flex flex-col justify-start gap-4 py-4 px-6 md:px-20 xl:px-40">
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
          <ChatBubble
            isThisUserMessage={false}
            imgSrc=""
            fallBackText="sb"
            message="ok !"
          />
          <ChatBubble
            isThisUserMessage={true}
            imgSrc=""
            fallBackText="ab"
            message="fdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasddddddddddddddddddddddddddddddddddddddddddddfdasdddddddddddddddddddddddddddddddddddddddddddd"
          />
        </main>
        <footer className="sticky bottom-0 z-50 md:pb-4 md:px-20 xl:px-40 backdrop-blur-xs drop-shadow-lg">
          <div className="bg-accent p-4 md:rounded-xl">
            <ChatInput />
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default memo(Home);
