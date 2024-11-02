import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsButton() {
    return (
        <Tabs defaultValue="account" className="w-[50px]">
        <TabsList>
          <TabsTrigger value="days">7 days</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
      </Tabs>
    )
};

