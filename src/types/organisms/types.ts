export type LayoutProps = { children: React.ReactNode };

export type folderItemsType = {
  _id: string;
  title: string;
  href: string;
  chats: [];
};

export type UserDataDrawerProps = {
  title: string;
  cover?: string;
  identifier: string;
  description?: string;
};
