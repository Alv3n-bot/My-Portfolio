import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between
    border-black border-[3px] lg:border-[5px]
    px-0 py-0 bg-[#bfbfbf]">

    <div className="flex items-center gap-2">
    <img
    src={Logo}
    alt="Header Logo"
    className="w-[45px] h-[45px]"
    />
    </div>

    </div>
  );
}
