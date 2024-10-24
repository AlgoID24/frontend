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
        <article className="w-full border border-dark-grey flex p-5 justify-between items-start rounded-lg mt-3">
          <div className="flex items-center gap-5">
            <div className="w-[4.3rem] h-[4.3rem] rounded-full bg-red-950 top-[-.1rem] right-[.2rem]">
              <Image
                alt="profile-icon"
                src="/dgrovv.jpg"
                width={100}
                height={100}
                className="rounded-full"
              />
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

      <section>
        <article className="w-full border border-dark-grey flex p-5 justify-between items-start rounded-lg mt-3">
          <article className=" border-blue-900 w-[45%]">
            <h2 className="text-[1.5rem] font-medium">Personal Information</h2>
            <article className="flex border-red-900 justify-between mt-3">
              <div className="flex flex-col gap-5">
                <article>
                  <h4>First Name</h4>
                  <p>Jack</p>
                </article>
                <article>
                  <h4>Email Address</h4>
                  <p>jackadams@gmail.com</p>
                </article>
                <article>
                  <h4>Bio</h4>
                  <p>Product Designer</p>
                </article>
              </div>

              <div className="flex flex-col gap-5">
                <article>
                  <h4>Last Name</h4>
                  <p>Adams</p>
                </article>
                <article>
                  <h4>Phone</h4>
                  <p>(213) 555-1234</p>
                </article>
              </div>
            </article>
          </article>
          <ProfileButton />
        </article>
      </section>

      <section>
        <article className="w-full border border-dark-grey flex p-5 justify-between items-start rounded-lg mt-3">
          <article className=" border-blue-900 w-[45%]">
            <h2 className="text-[1.5rem] font-medium">Address</h2>
            <article className="flex border-red-900 justify-between mt-3">
              <div className="flex flex-col gap-5">
                <article>
                  <h4>Country</h4>
                  <p>United States of America</p>
                </article>
                <article>
                  <h4>Postal Code</h4>
                  <p>ERT 62574</p>
                </article>
              </div>

              <div className="flex flex-col gap-5">
                <article>
                  <h4>City/State</h4>
                  <p>California, USA</p>
                </article>
                <article>
                  <h4>TAX ID</h4>
                  <p>AS3452352343523</p>
                </article>
              </div>
            </article>
          </article>
          <ProfileButton />
        </article>
      </section>
    </div>
  );
}
