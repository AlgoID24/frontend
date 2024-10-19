import AppSidebar from "@/components/molecules/m-app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <AppSidebar />
      <ScrollArea className="h-[calc(100vh-1vh)]">{children}</ScrollArea>
    </div>
  );
};

export default AppLayout;
