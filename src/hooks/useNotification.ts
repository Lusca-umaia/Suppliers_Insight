import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function useNotification() {
  const [notifications, setNotifications] = useState<INotification[]>([])

  function hideNotification(id: string) {
    setNotifications(notifications => notifications.filter((item) => item.id != id))
  }

  function addNotification({ message, type, title }: { message: string, type: "success" | "error", title: string }) {
    const notification = {
      message,
      id: uuidv4(),
      type,
      title
    }

    setNotifications(notifications => [...notifications, notification])
    setTimeout(() => hideNotification(notification.id), 4000)
  }

  return { hideNotification, addNotification, notifications }
}