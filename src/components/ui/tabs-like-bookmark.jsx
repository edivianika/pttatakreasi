import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

function TabDemo({ defaultValue, tabs, children, onValueChange }) {
  return (
    <Tabs defaultValue={defaultValue} onValueChange={onValueChange} className="w-full">
      <TabsList className="relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}

export { TabDemo };
