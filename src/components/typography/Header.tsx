// import { Poppins } from "next/font/google";

export const Header = ({
  header,
  className,
  bigger = false,
}: {
  header: string;
  className?: string;
  bigger?: boolean;
    }) => {
    return (
        <div className={`${bigger ? 'text-2xl lg:text-3xl' : 'text-xl'}
        font-black
        tracking-[-3%] md:tracking-normal ${className}
        `}>
            {header}
        </div>
    )
};
