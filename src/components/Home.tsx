import Menu from "./Menu";
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";
import Mint from "./Mint";
import Phase from "./Phase";
import data from "../data/phase.json";
import WalletConnectionModal from "./WalletConnectionModal";
import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="hero-image">
      <div className="relative flex">
        <div>
          <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
          <div className="w-[520px] md:hidden lg:hidden"></div>
        </div>

        <div className="flex flex-col 2xl:m-20 md:mx-auto lg:mx-auto">
          <div className="flex flex-row md:flex-col md:items-center md:justify-center">
            <div>
              <img
                src="./pictures/Blonde_Trendy_Hairs.png"
                alt="Blonde_Trendy_Hairs"
                className="mix-blend-luminosity md:w-[300px] md:h-auto md:bg-cover md:mt-[0px] xl:ml-[50px]"
              />
            </div>
            <div className="2xl:ml-[50px] lg:ml-[50px] z-10">
              <div className="md:absolute md:top-[40px] md:right-[30px] md:ml-0 cursor-pointer 2xl:hidden xl:hidden lg:hidden">
                <img
                  src="./pictures/connection-button.png"
                  alt="connection-button"
                  onClick={toggleModal}
                />
              </div>
              <div className="md:absolute md:top-[20px] md:left-[16px] 2xl:hidden xl:hidden cursor-pointer lg:absolute lg:left-[10px] lg:top-[70px] ">
                <img
                  src="./pictures/Logo_1.png"
                  alt="Logo_1"
                  onClick={toggleMenu}
                />
              </div>
            </div>

            <div className="xl:ml-10">
              <div className="ml-80 md:hidden xl:absolute xl:right-10 xl:top-20 lg:absolute lg:top-20 lg:right-4 cursor-pointer">
                <img
                  src="./pictures/connection-button.png"
                  alt="connection-button"
                  onClick={toggleModal}
                />
              </div>

              <div className="text-white mt-[200px] ml-[33px] flex flex-row z-20 relative md:-mt-[150px] md:flex md:flex-row md:justify-center md:items-center md:ml-0">
                <div>
                  <Vector1 />
                </div>
                <div className="px-8 md:px-0 md:ml-8 xl:px-4">
                  <Vector2 />
                </div>
              </div>
              <div className="flex felx-row items-center justify-center">
                <Mint />
              </div>
            </div>
          </div>
          <div className="2xl:px-[100px] xl:px-[40px] lg:px-[60px] py-[70px]">
            {data.map((item, idx) => (
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "items-start" : "items-end"
                } md:flex md:flex-col md:items-center md:py-16 py-8`}
                key={idx}
              >
                <Phase
                  id={item.id}
                  label1={item.label1}
                  label2={item.label2}
                  label3={item.label3}
                  label4={item.label4}
                  url={item.url}
                />
              </div>
            ))}
          </div>
          <div className="px-[100px]">
            <div className="py-[57px] text-[60px] text-center text-white">
              <p>TEAM</p>
            </div>
            <div className="flex flex-row items-center justify-between xl:flex-col xl:items-center xl:justify-center lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center gap-8">
              <div className="cursor-pointer">
                <img src="./pictures/dr_simon.png" alt="dr_simon" />
              </div>
              <div className="cursor-pointer">
                <img src="./pictures/dr_zen.png" alt="dr_zen" />
              </div>
              <div className="cursor-pointer">
                <img src="./pictures/crosmodev.png" alt="crosmodev" />
              </div>
              <div className="cursor-pointer">
                <img src="./pictures/new_dev.png" alt="new_dev" />
              </div>
            </div>
            <div className="mt-[28px] mb-[175px] flex flex-row items-center justify-center gap-8 md:mt-5  md:flex-col md:items-center md:justify-center xl:flex-col xl:items-center xl:justify-center lg:flex-col lg:items-center lg:justify-center">
              <div className="cursor-pointer">
                <img src="./pictures/atlas_dragon.png" alt="atlas_dragon" />
              </div>
              <div className="cursor-pointer">
                <img src="./pictures/liuk.png" alt="liuk" />
              </div>
              <div className="cursor-pointer">
                <img src="./pictures/cellar_dweller.png" alt="cellar_dweller" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WalletConnectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      ></WalletConnectionModal>
    </div>
  );
};

export default Home;
