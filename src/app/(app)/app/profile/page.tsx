import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import ProfileButton from "@/constants/profileButton";

export default function ProfilePage() {
  return (
    <div className="w-[97%] mx-auto">
      {/* REFACTOR THIS LATER INTO ITS OWN COMPONENT */}
      <section className="flex border-blue-950 justify-between">
        <article className=" border-r border-red-900 flex  items-center basis-[80%] justify-between pr-4">
          <div className="flex items-center border border-black rounded-lg gap-3 w-[25%] px-[1.2rem]">
            <FiSearch className="text-[1.4rem] font-bold text-dark-grey" />
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full placeholder:text-dark-grey py-[.4rem] bg-transparent rounded-lg outline-none"
            />
          </div>
          <div className="flex gap-5 items-center">
            <CiMail className="text-[1.5rem] font-bold text-black" />
            <div className="relative">
              <FiBell className="text-[1.4rem] font-bold text-black" />
              <div className="w-[.5rem] h-[.5rem] rounded-full bg-red-950 absolute top-[-.1rem] right-[.2rem]"></div>
            </div>
          </div>
        </article>
        <article className="border-blue flex items-center gap-3">
          <h3 className="text-[1rem] font-bold">Hi, Might Guy</h3>
          <div className="flex items-center gap-3">
            <div className="w-[2.2rem] h-[2.2rem] rounded-full bg-red-950 top-[-.1rem] right-[.2rem]">
              <Image
                src="/dgrovv.jpg"
                alt="avatar-icon"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <RiArrowDropDownLine className="text-[1.9rem] font-bold text-black" />
          </div>
        </article>
      </section>

      <section className="mt-7">
        <h2 className="text-[1.5rem] font-medium">My Profile</h2>
        <article className="w-full border border-dark-grey flex p-5 justify-between items-start">
          <div className="flex items-center gap-5">
              <div className="w-[4.3rem] h-[4.3rem] rounded-full bg-red-950 top-[-.1rem] right-[.2rem]">
                <Image alt="profile-icon" src="/dgrovv.jpg" width={100} height={100} className="rounded-full" />
              </div>
              <div>
                <h3>Jack Adams</h3>
                <p>Product Designer</p>
                <p>Los Angeles, California, USA</p>
              </div>
          </div>
          <ProfileButton />
        </article>
      </section>
    </div>
  );
}
