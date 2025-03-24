export type ChatMessages = {
  _id: string;
  message: string;
  sender: { _id: string; username: string; identifier: string; cover: string };
};

export type ChatInfos = {
  _id: string;
  title: string;
  cover?: string;
  description?: string;
  identifier: string;
};
