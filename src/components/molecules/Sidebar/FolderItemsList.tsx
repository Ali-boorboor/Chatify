import useStates from "@/hooks/useStates";
import Divider from "@/components/atoms/Divider";
import ToolTip from "@/components/atoms/ToolTip";
import FolderSkeletons from "@/components/atoms/FolderSkeletons";
import AddFolderDialogBox from "@/components/molecules/Sidebar/AddFolderDialogBox";
import { folderItemsType } from "@/types/organisms/types";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useGetReq } from "@/hooks/useRequests";
import { IoAddOutline } from "react-icons/io5";
import { memo } from "react";

function FolderItemsList() {
  const {
    setIsAddFolderModalOpen,
    isAddFolderModalOpen,
    selectedFolder,
    setSelectedFolder,
    setSelectedFolderChatValues,
  } = useStates();
  const { data: folders, isLoading } = useGetReq({
    url: "/folder",
    queryKey: "FOLDERS",
    cacheTime: 86400000,
    staleTime: 86400000,
    errorToastMsg: "Failed To Get Folders",
  });

  return (
    <SidebarGroupContent>
      <Divider />
      <nav className="flex items-center gap-4 py-1 px-3 overflow-x-auto scrollbar">
        <Button
          className={`${
            selectedFolder === "all"
              ? "bg-chart-2 hover:bg-chart-2"
              : "bg-gray-400 hover:bg-gray-400"
          } transition-all duration-300 ease-linear`}
          onClick={() => setSelectedFolder("all")}
        >
          All
        </Button>
        {isLoading ? (
          <FolderSkeletons />
        ) : (
          folders?.data?.data?.map((folder: folderItemsType) => (
            <Button
              key={folder?._id}
              className={`${
                selectedFolder === folder?._id
                  ? "bg-chart-2 hover:bg-chart-2"
                  : "bg-gray-400 hover:bg-gray-400"
              } transition-all duration-300 ease-linear`}
              onClick={() => setSelectedFolder(folder?._id)}
            >
              {folder?.title}
            </Button>
          ))
        )}
        <ToolTip tooltipText="Add Folder">
          <Dialog
            open={isAddFolderModalOpen}
            onOpenChange={() => {
              !isAddFolderModalOpen && setSelectedFolderChatValues([]);
              setIsAddFolderModalOpen(!isAddFolderModalOpen);
            }}
          >
            <DialogTrigger
              onClick={() => setIsAddFolderModalOpen(true)}
              asChild
            >
              <Button className="bg-gray-400 hover:bg-gray-400">
                <IoAddOutline />
              </Button>
            </DialogTrigger>
            <AddFolderDialogBox />
          </Dialog>
        </ToolTip>
      </nav>
      <Divider />
    </SidebarGroupContent>
  );
}

export default memo(FolderItemsList);
