"use client";

import { Header } from "@/components/typography/Header";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import IcRoundPlus from "~icons/ic/round-plus";
import MdiLightArrowRight from '~icons/mdi-light/arrow-right';
import BxsWallet from "~icons/bxs/wallet";
import LogosVisa from "~icons/logos/visa";
import LogosPaypal from "~icons/logos/paypal";
import F7Creditcard from "~icons/f7/creditcard";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AvatarDemo } from "@/components/avatar/avatar";
import { TabsButton } from "@/components/tabs/tabs";
import SectionCard from "@/components/card/sectioncard";
import { AreaCard } from "@/components/charts/areachart";
import { TransactionTable } from "@/components/table/transaction";
import { Button } from "@/components/select/select";
import IconButton from "@/components/button/button";

const currency = [
  {
    currencies: "Nigerian Naira",
    amount: "6,800,675 NGN",
  },
  {
    currencies: "US Dollars",
    amount: "67,098 USD",
  },
];

const TransferPage = () => {
  return (
    <div className="p-4">
      <div className="pl-4 flex justify-between items-center">
        <div>
          <Header className="" bigger header={"Welcome back,K"} />
          <div className="text-primary ">
            Get your latest update for the last seven days
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <div className="text-2xl">
              <IoSettingsOutline />
            </div>
            <div className="text-2xl">
              <IoIosNotificationsOutline />
            </div>
            <div>
              <AvatarDemo fallback={"KA"} name={"Kitan Alli"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* transfer analysis */}
        <div className="flex-3">
          <div className="pt-6">
            <SectionCard
              header={
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between gap-10">
                      <div>
                        <Header header={"Transactions Analytics"} />
                      </div>
                      <div className="flex justify-end">
                        <TabsButton />
                      </div>
                    </div>
                  </div>
                </div>
              }
              content={
                <div>
                  <AreaCard />
                </div>
              }
            />
          </div>
          <div className="pt-8">
            <SectionCard
              header={
                <div className="pb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Header header={"Transactions History"} />
                    </div>
                    <div className="flex justify-end">
                      <Button />
                    </div>
                  </div>
                </div>
              }
              content={<TransactionTable />}
            />
          </div>

        </div>

        {/* transfer summary */}
        <div className="flex-1 pt-6">
        <div>
            <SectionCard
              header={<Header header={"Transaction Summary"} />}
              content={
                <div>
                  <div className="space-y-4">
                    <div className="pt-4 flex justify-between items-center">
                      <div>
                        <span>Mastercard Balance</span>
                      </div>
                      <div className="text-primary flex gap-1">
                        <Link href={""}>Details</Link>
                        <MdiLightArrowRight/>
                      </div>
                    </div>
                    <div className="text-lg font-bold pb-2">N 5,000,000</div>
                  </div>

                  <hr />
                  <div>
                    <div className="font-bold text-primary pt-2">
                      AVAILABLE CURRENCIES
                    </div>
                    {currency.map((money, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 gap-4 space-y-2 pt-2"
                      >
                        <div>
                          <span>{money.currencies}</span>
                        </div>
                        <div>
                          <span className="font-bold">{money.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 pt-4 gap-2 space-y-2 ">
                    <IconButton text="Add Card" icon={<IcRoundPlus />} />
                    <IconButton text="Top Up" icon={<F7Creditcard />} />
                    <IconButton text="Add Funds" icon={<IcRoundPlus />} />
                    <IconButton text="Withdraw" icon={<BxsWallet />} />
                  </div>
                  <hr />
                  <div className='pt-6 p-5 space-y-4'>
                    <div className="flex items-center justify-start gap-4 ">
                      <div className="">
                        <LogosPaypal />
                      </div>
                      <span>
                        **** **** **** ****
                      </span>
                      <div className="text-primary flex gap-1">
                        <Link href={""}>Details</Link>
                        <MdiLightArrowRight/>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4 ">
                      <div className="text-sm">
                        <LogosVisa />
                      </div>
                      <span>
                        **** **** **** ****
                      </span>
                      <div className="text-primary flex gap-1">
                        <Link href={""}>Details</Link>
                        <MdiLightArrowRight/>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className='pt-8'>
            <SectionCard
              header={<Header header={"Send Money"} />}
              content={
                <div className='p-4'>
                  <div>

                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
