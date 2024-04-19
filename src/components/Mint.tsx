interface MintProps {
    mintamount?:number,
    totalmintamount?:number,
}

const Mint: React.FC<MintProps> = ({ mintamount, totalmintamount }) => {

    return (
        
            <div className="flex flex-col items-center text-white">
                <div className="text-center text-[20px] mt-4">
                    <p>MINT HERE YOUR</p>
                    <p>MULTIDAO &#215;	MUTANT</p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-5">
                    <div>{totalmintamount}/5555 OUT</div>
                    <div className="flex flex-row items-center gap-5">
                        <div className="relative">
                            <img src="./pictures/Polygon_1.png" alt="" />
                            <div className="absolute top-[2px] left-[17px]">&#8722;</div>
                        </div>
                        <div className="relative">
                            <img src="./pictures/Mint_button.png" alt="" />
                            <div className="absolute top-2 left-10">MINT</div>
                        </div>
                        <div className="relative">
                            <img src="./pictures/Polygon_2.png" alt="" />
                            <div className="absolute top-[10px] left-[17px]">&#43;</div>
                        </div>
                    </div>
                    <div>
                        {mintamount}
                    </div>
                </div>
            </div>
        
    )
}

export default Mint;