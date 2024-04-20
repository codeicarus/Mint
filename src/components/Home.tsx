import Menu from "./Menu"
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
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCloseModal =() => {
        setIsModalOpen(false);
    }

    return (

        <div className="hero-image">
            <div className="relative flex">
                <div className="xl:hidden md:hidden lg:hidden">
                    <Menu isOpen={isMenuOpen} />
                    <div className="w-[520px]"></div>
                </div>

                <div className="flex flex-col 2xl:m-20 md:mx-auto xl:mx-auto lg:mx-auto">
                    <div className="flex flex-row md:flex-col md:items-center md:justify-center">

                        <div className="2xl:ml-[100px] xl:ml-[80px] lg:ml-[50px] z-10 mix-blend-luminosity md:w-[300px] md:h-auto md:bg-cover md:mt-[0px]">
                            <img className="mix-blend-luminosity" src="./pictures/Blonde_Trendy_Hairs.png" alt="Blonde_Trendy_Hairs" />
                        </div>
                        <div>
                            <div className="ml-80 md:absolute md:top-[40px] md:right-[30px] md:ml-0 xl:absolute xl:mt-20 lg:absolute lg:mt-20 cursor-pointer" onClick={toggleModal}>
                                <img src="./pictures/connection-button.png" alt="connection-button" />
                            </div>
                            <div className="md:absolute md:top-[20px] md:left-[16px] 2xl:hidden xl:absolute xl:mt-[78px] lg:absolute lg:mt-[78px] cursor-pointer" onClick={toggleMenu}>
                                <img src="./pictures/Logo_1.png" alt="Logo_1" />
                            </div>
                            <div className="text-white mt-[200px] ml-[33px] flex flex-row md:-mt-[150px] z-30 relative md:flex md:flex-row md:justify-center md:items-center md:ml-0">
                                <div>
                                    <Vector1 />
                                </div>
                                <div className="px-16 md:px-0 md:ml-8">
                                    <Vector2 />
                                </div>
                            </div>
                            <div className="flex felx-row items-center justify-center">
                                <Mint/>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:px-[150px] xl:px-[100px] py-[70px]">
                        {
                            data.map((item, idx) => (
                                <div className={`flex flex-col ${idx % 2 === 0 ? "items-start" : "items-end"} md:flex md:flex-col md:items-center md:py-16`} key={idx}>
                                    <Phase
                                        id={item.id}
                                        label1={item.label1}
                                        label2={item.label2}
                                        label3={item.label3}
                                        label4={item.label4}
                                        url={item.url}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="px-[100px]">
                        <div className="py-[57px] text-[60px] text-center text-white"><p>TEAM</p></div>
                        <div className="flex flex-row items-center justify-between md:flex-col md:items-center md:justify-center gap-8">
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
                        <div className="mt-[28px] mb-[175px] flex flex-row items-center justify-center gap-8 md:mt-5 md:flex-col md:items-center md:justify-center">
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
            <WalletConnectionModal isOpen={isModalOpen} onClose={handleCloseModal}></WalletConnectionModal>
        </div>
    )
}

export default Home