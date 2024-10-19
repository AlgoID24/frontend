import NavItem from "@/components/atoms/a-nav-item";
import APP_NAVIGATION from "@/constants/navigation/app";
import Image from "next/image";

const AppSidebar = () => {
  return (
    <aside className="bg-black w-full max-w-[280px]">
      <div className="p-4">
        <Image
          className="max-w-[150px]"
          width={230}
          height={80}
          src="/logo-light.svg"
          alt="AlgoID"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        {APP_NAVIGATION.map((nav) => (
          <NavItem key={nav.href} nav={nav} />
        ))}
      </div>
    </aside>
  );
};

export default AppSidebar;
