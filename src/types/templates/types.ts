export type ChatMessages = {
  _id: string;
  message: string;
  createdAt: Date;
  sender: {
    _id: string;
    username: string;
    identifier: string;
    cover: string;
    description?: string;
  };
};

export type ChatMedias = {
  _id: string;
  media: string;
  createdAt: Date;
  sender: {
    _id: string;
    username: string;
    identifier: string;
    cover: string;
    description?: string;
  };
};

export type ChatInfos = {
  _id: string;
  title: string;
  cover?: string;
  description?: string;
  identifier: string;
  messages: ChatMessages[];
  medias: ChatMedias[];
};
