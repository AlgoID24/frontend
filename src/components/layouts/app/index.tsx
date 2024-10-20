import AppSidebar from "@/components/molecules/m-app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <AppSidebar />
      <ScrollArea className="h-[calc(100vh-1vh)]">
        <div className="min-w-full min-h-full bg-[#F8F8F8]">{children}</div>
      </ScrollArea>
    </div>
  );
};

export default AppLayout;
