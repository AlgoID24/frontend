import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[86%] mx-auto">
      <nav className="flex items-center justify-between border-red-500">
        <Image
          src="/logo.svg"
          alt="algo-id logo"
          width={100}
          height={100}
        ></Image>
        <Button className="">
          <Link href='/app'>Get Started</Link>
        </Button>
      </nav>

      <div className="mt-10">
        <div className="flex items-center justify-center">
          <div className="">
            <h1 className="p-5 text-4xl bg-gradient-to-t from-primary to-purple-100 inline-block text-transparent bg-clip-text">
              Algo-ID: Your Trusted Identity Wallet on Algorand
            </h1>

            <p className="text-2xl p-3 pt-2">
              <span className="flex items-center justify-center">
                Secure your identity on the Algorand blockchain with Algo-ID,
              </span>
              <span className="flex items-center justify-center pb-5">
                linking one user to one identity and one wallet.
              </span>
            </p>
            <hr />
            <div className=''>
              <span className="pt-2 text-lg flex items-center justify-center">Start with us today</span>
              <h1 className="p-5 flex items-center justify-center text-5xl bg-gradient-to-b from-primary to-purple-200 inline-block text-transparent bg-clip-text">What will you discover ?</h1>
            </div>
          </div>
        </div>
        <div className="pt-6 flex items-center justify-center">
          <div className="space-x-4">
            <Button>
              <Link href="/signup">Signup</Link>
            </Button>
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
