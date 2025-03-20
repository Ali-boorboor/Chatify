export type HomeMessages = {
  _id: string;
  message: string;
  sender: { _id: string; username: string; identifier: string };
};
