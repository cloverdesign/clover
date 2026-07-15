import Link from "next/link";
import Magnetic from "@/animations/magnetic";

type LinksProps = {
  children: React.ReactNode;
  variant?: "primary-outline" | "primary-black" | "default";
  widthFull?: boolean;
  icon?: React.ReactNode;
  url: string;
};

export const Links = ({
  children,
  variant,
  widthFull,
  icon,
  url,
}: LinksProps) => {
  return (
    <Magnetic>
      <div className="flex items-center gap-4 w-fit">
        <p>{children}</p>

        <Link href={url}>
          <span
            className={`${variant === "primary-outline" ? "border-[1px] border-white text-white hover:border-green-500 hover:bg-green-500 hover:text-black" : variant === "primary-black" ? "bg-black text-white hover:bg-white hover:text-black" : variant === "default" ? "bg-white text-black hover:bg-green-500 hover:text-black" : ""} p-[10px] rounded-lg block font-body ${widthFull ? "w-[210px]" : "w-fit"} `}
          >
            {icon}
          </span>
        </Link>
      </div>
    </Magnetic>
  );
};
