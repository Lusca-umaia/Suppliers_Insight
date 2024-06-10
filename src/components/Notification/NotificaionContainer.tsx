"use client"
import NotificationElement from "@/components/Notification/NotificationElement";

export default function NotificationContainer({ notifications }: { notifications: INotification[] }) {

  return (
    <div className="z-20 fixed pointer-events-none inset-0 flex px-4 py-6 items-start sm:px-6 sm:pt-8 sm:pb-8">
      <div className="flex w-full pointer-events-none flex-col-reverse items-center gap-4 sm:items-end">
        {notifications.map((notification) => (
          <NotificationElement key={notification.id} {...notification} />
        ))}
      </div>
    </div >
  )
}