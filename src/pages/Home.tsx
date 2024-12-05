import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import { Component } from "@/components/ui/charts";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Button>Button</Button>
      <PinContainer
        title="Pin"
        href="https://github.com"
        // containerClassName="z-50"
        children={<h1>Hello</h1>}
      />
      <Component />
    </div>
  );
}
