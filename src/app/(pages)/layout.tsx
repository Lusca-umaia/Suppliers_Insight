import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import { NotificationProvider } from "@/context/NotificationContext";
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <NotificationProvider>
      <div className="mt-12 max-lg:mx-2 lg:px-2 lg:ml-14">
        <Navbar />
        <div className="max-w-7xl mx-auto mb-8">
          <Header />
          {children}
        </div>
      </div>
    </NotificationProvider>
  );
}
