import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[86%] mx-auto">
      <nav className="flex items-center justify-between border-red-500">
        <Image src="/logo.svg" alt="algo-id logo" width={100} height={100}></Image>
        <Button>Login / Signup</Button>
      </nav>

      <section className="flex items-center justify-between mt-20">
        <article className="space-y-16 border-red-500 basis-[55%]">
          <h1 className="font-bold text-[4.5rem]">Where Education Meets Innovation</h1>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button>Contact Us</Button>
          </div>
        </article>
        <article className="border-blue-500">
          <Image src="/logo.svg" alt="hero-image" width={500} height={500}></Image>
        </article>

      </section>
    </div>
  );
}
