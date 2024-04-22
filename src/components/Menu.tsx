import { useEffect, useRef } from "react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !e.target) return;
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-container")) {
        onClose();
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);
  return (
    <div
    ref={menuRef}
      className={`menu-container w-[520px] h-[1000px] md:w-[360px] bg-black fixed text-white px-[40px] py-[24px] md:px-[10px] md:py-[8px] z-30 transition-transform duration-300 ease-in-out transform${
        isOpen
          ? "-translate-x-full "
          : "translate-x-0 md:-translate-x-full lg:-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-row items-center">
        <div className="px-[12px] cursor-pointer" onClick={onClose}>
          <img src="./pictures/Logo.png" alt="" />
        </div>
        <div className="text-[18px] text-center">DaoLabs Ecosystem</div>
      </div>
      <div className="py-[30px] text-center text-[24px]">
        HOME | ECOSYSTEM | TEAM
      </div>
      <div className="px-[14px] py-[40px]">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[60px] h-[60px] border-[#23F7DD] border-[2px] rounded-[5px] flex items-center justify-center cursor-pointer hover:border-green-200">
            <img src="./pictures/crypto.png" alt="crypto" />
          </div>
          <div className="w-[60px] h-[60px] border-[#23F7DD] border-[2px] rounded-[5px] flex items-center justify-center cursor-pointer hover:border-green-200">
            <img src="./pictures/footer-glowing-x.png" alt="footer-glowing-x" />
          </div>
          <div className="w-[60px] h-[60px] border-[#23F7DD] border-[2px] rounded-[5px] flex items-center justify-center cursor-pointer hover:border-green-200">
            <img src="./pictures/Bitcoin.png" alt="Bitcoin" />
          </div>
          <div className="w-[60px] h-[60px] border-[#23F7DD] border-[2px] rounded-[5px] flex items-center justify-center cursor-pointer hover:border-green-200">
            <img src="./pictures/polygon.png" alt="polygon" />
          </div>
          <div className="w-[60px] h-[60px] border-[#23F7DD] border-[2px] rounded-[5px] flex items-center justify-center cursor-pointer hover:border-green-200">
            <img src="./pictures/Ethereum.png" alt="Ethereum" />
          </div>
        </div>
      </div>
      <div className="text-[66px] text-center">
        <div>MULTIDAO</div>
        <div>X MUTANT</div>
      </div>
      <div className="mt-[50px] text-[14px]">
        MultiDao X Mutant is a collection of 5,555 unique and rare NFTs, that
        are designed to offer their owners a range of benefits and advantages
        within DaoLabs ecosystem. such as:
        <div>
          1. Staking: Mutant X NFTs can be staked to earn passive income in
          $EGLD.
        </div>
        <div>
          2. Royalty Sharing: Mutant X NFT Holders are entitled to a 2.5% (of
          5%) royalty share from the sale of any Mutant X NFT on the secondary
          market.
        </div>
        <div>
          3. Game P2e: Mutant X NFTs can be used in main game and other
          activities within the daolabs ecosystem, providing their owners with a
          range of benefits and rewards.
        </div>
      </div>
      <div className="px-[100px] flex flex-row items-center justify-between mt-[20px] mb-[70px]">
        <div className="w-[20px] h-[20px] bg-cover cursor-pointer">
          <img src="./pictures/mdi_github.png" alt="" />
        </div>
        <div className="w-[20px] h-[20px] bg-cover cursor-pointer">
          <img src="./pictures/mdi_discord.png" alt="" />
        </div>
        <div className="w-[20px] h-[20px] bg-cover cursor-pointer">
          <img src="./pictures/mdi_twitter.png" alt="" />
        </div>
        <div className="w-[20px] h-[20px] bg-cover cursor-pointer">
          <img src="./pictures/Flickr.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
