"use client"
import { createContext, ReactNode } from "react";
import NotificationContainer from "@/components/Notification/NotificaionContainer";
import useNotification from "@/hooks/useNotification";

export const NotificationContext = createContext<({ message, type, title }: Omit<INotification, 'id'>) => void>(() => { })

export function NotificationProvider({ children }: { children: ReactNode }) {
  const { addNotification, notifications } = useNotification()

  return (
    <NotificationContext.Provider value={addNotification}>
      <NotificationContainer notifications={notifications} />
      {children}
    </NotificationContext.Provider>
  )
}