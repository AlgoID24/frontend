import { Header } from "@/components/typography/Header";
import { MdOutlineSavings , MdOutlineFormatIndentIncrease} from "react-icons/md";
import { RiPassPendingLine } from "react-icons/ri";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import CountCard from "@/components/card/countcard";
import SectionCard from "@/components/card/sectioncard";
import BarChart from "@/components/charts/barchart";
import { TableComponent } from "@/components/table/table";
import { Button } from "@/components/select/select";
import { IoSettingsOutline,  IoDocumentTextSharp } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";
import { FaCoins } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { AvatarDemo } from "@/components/avatar/avatar";
import { RadicalChart } from "@/components/charts/radicalchart";
import SavingsCard from "@/components/card/savingscard";

const data = [
  {
    time: 12,
    total: 1771001,
    count: 500,
  },
  {
    time: 1,
    total: 713500,
    count: 100,
  },
  {
    time: 2,
    total: 240501,
    count: 500,
  },
  {
    time: 3,
    total: 56500,
    count: 100,
  },
  {
    time: 4,
    total: 0,
    count: 200,
  },
  {
    time: 5,
    total: 49000,
    count: 200,
  },
  {
    time: 6,
    total: 411000,
    count: 300,
  },
  {
    time: 7,
    total: 4110,
    count: 400,
  },
  {
    time: 8,
    total: 41100,
    count: 300,
  },
  {
    time: 9,
    total: 41000,
    count: 100,
  },
  {
    time: 10,
    total: 4000,
    count: 500,
  },
  {
    time: 11,
    total: 411000,
    count: 200,
  },
];

const AppDashboard = () => {
  const labels = data.map((item) => item.time);
  const values1 = data.map((item) => item.total);

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
        <div className="flex-3">
          <div>
            <div
              className="grid grid-flow-row
					grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 p-8"
            >
              <CountCard
                count={100000}
                text="Total income"
                IconComponent={FaMoneyBillWaveAlt}
                percentageChange={15}
              />
              <CountCard
                count={40000}
                text="Total Expand"
                IconComponent={RiPassPendingLine}
                percentageChange={25}
              />
              <CountCard
                count={101111109}
                text="Total Saving"
                IconComponent={MdOutlineSavings}
                percentageChange={58}
              />
            </div>

            <div className="">
              <SectionCard
                header={
                  <div>
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="flex items-center">
                        <Header header={"Total Balance"} />
                      </div>
                      <div className="flex justify-end">
                        <Button />
                      </div>
                    </div>

                    <div className="text-3xl pt-2 pb-2">N150</div>
                  </div>
                }
                content={
                  <div>
                    <BarChart
                      xGridDisplay={true}
                      yGridDisplay={false}
                      responsive
                      labels={labels ?? []}
                      data={values1 ?? []}
                      barThickness={24}
                    />
                  </div>
                }
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="pt-10 shadow-lg p-8 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <Header className="pb-4" header={"Payment History"} />
                </div>
                <div className="text-primary">
                  <Link href={""}>Show all</Link>
                </div>
              </div>
              <div>
                <TableComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-6 space-y-4 rounded-lg">
          <div className="">
            <SectionCard
              header={
                <div>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="flex items-center">
                      <Header header={"Savings Plan"} />
                    </div>
                    <div className="flex justify-end">
                      <Button />
                    </div>
                  </div>
                </div>
              }
              content={
                <div>
                  <div>
                    <SavingsCard
                      count={34.6}
                      text="Mutual Funds"
                      IconComponent={FaCoins}
                      income={58}
                    />
                    <SavingsCard
                      count={56.9}
                      text="Investment in"
                      IconComponent={IoDocumentTextSharp}
                      income={58}
                    />
                    <SavingsCard
                      count={14.6}
                      text="Earnings in"
                      IconComponent={SiCashapp}
                      income={58}
                    />
                    <SavingsCard
                      count={32.8}
                      text="Increment "
                      IconComponent={MdOutlineFormatIndentIncrease}
                      income={58}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="">
            <RadicalChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDashboard;
