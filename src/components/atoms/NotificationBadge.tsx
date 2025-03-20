import { NotificationBadgeProps } from "@/types/atoms/types";
import { Badge } from "@/components/ui/badge";
import { memo } from "react";

function NotificationBadge({
  notifText,
  variant,
  className,
  icon,
}: NotificationBadgeProps) {
  return (
    <Badge variant={variant} className={className}>
      {notifText}
      {icon}
    </Badge>
  );
}

export default memo(NotificationBadge);
