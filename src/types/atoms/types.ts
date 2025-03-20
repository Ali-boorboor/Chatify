import { JSX } from "react";

export type DividerProps = {
  className?: string;
};

export type ToolTipProps = {
  tooltipText: string;
  children: React.ReactNode;
};

export type NotificationBadgeProps = {
  className?: string;
  icon?: JSX.Element;
  notifText: string | number;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "green"
    | null
    | undefined;
};

export type UserDatasHoverCardProps = {
  imgSrc?: string;
  username: string;
  identifier: string;
  fallBackText: string;
};
