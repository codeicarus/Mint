import Menu from "./Menu"
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";
import Mint from "./Mint";
import Phase from "./Phase";
import data from "../data/phase.json"

const Home = () => {

    return (

        <div className="hero-image">
            <div className="relative flex">
                <div className="xl:hidden md:hidden lg:hidden sm:hidden">

                    <Menu />
                    <div className="w-[520px]"></div>
                </div>

                <div className="flex flex-col 2xl:m-20">
                    <div className="flex flex-row">

                        <div className="ml-[100px]">
                            <img className="mix-blend-luminosity" src="./pictures/Blonde_Trendy_Hairs.png" alt="Blonde_Trendy_Hairs" />
                        </div>
                        <div>
                            <div className="ml-80">
                                <img src="./pictures/connection-button.png" alt="" />
                            </div>
                            <div className="text-white mt-[200px] ml-[33px] flex flex-row">
                                <div>
                                    <Vector1 />
                                </div>
                                <div className="px-16">
                                    <Vector2 />
                                </div>
                            </div>
                            <div className="flex felx-row items-center justify-center">
                                <Mint
                                    mintamount={20}
                                    totalmintamount={2222}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="2xl:px-[50px] xl:px-[100px] py-[70px] md:px-[80px]">
                        {
                            data.map((item, idx) => (
                                <div className={`flex flex-col ${idx % 2 === 0 ? "items-start" : "items-end"}`} key={idx}>
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
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <img src="./pictures/dr_simon.png" alt="" />
                            </div>
                            <div>
                                <img src="./pictures/dr_zen.png" alt="" />
                            </div>
                            <div>
                                <img src="./pictures/crosmodev.png" alt="" />
                            </div>
                            <div>
                                <img src="./pictures/new_dev.png" alt="" />
                            </div>
                        </div>
                        <div className="mt-[28px] mb-[175px] flex flex-row items-center justify-center gap-5">
                            <div>
                                <img src="./pictures/atlas_dragon.png" alt="" />
                            </div>
                            <div>
                                <img src="./pictures/liuk.png" alt="" />
                            </div>
                            <div>
                                <img src="./pictures/cellar_dweller.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home