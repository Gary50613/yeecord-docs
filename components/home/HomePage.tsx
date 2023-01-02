import { Community } from "./Community";
import { Customers } from "./Customers";
import { Hero } from "./Hero";
import { Music } from "./Music";
import { Powerful } from "./Powerful";
import { RpgSystem } from "./RpgSystem";

export type HomeProps = {
  serverMembers: number;
  usedBy: number;
};

export function HomePage(props: HomeProps) {
  return (
    <div className="bg-white dark:bg-black font-apple">
      <div className="flex flex-col relative px-3 md:px-6 max-w-[1400px] mx-auto">
        <Hero />
        <Music />
        <Powerful />
        <RpgSystem />
        <Customers usedBy={props.usedBy} />
      </div>
      <Community joined={props.serverMembers} />
    </div>
  );
}