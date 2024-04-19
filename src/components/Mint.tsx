import { useState } from "react"


interface MintProps {
    mintamount?: number,
    totalmintamount?: number,
}

const Mint: React.FC<MintProps> = ({ mintamount=0, totalmintamount=0 }) => {

    const[currentMintAmount, setCurrentMintAmount] = useState(mintamount);
    const[currentTotalMintAmount, setCurrentTotalMintAmount] = useState(totalmintamount);

    const minusMint = () => {
        if(currentMintAmount > 0) {
            setCurrentMintAmount(currentMintAmount - 1) ;
        }
    }

    const plusMint = () => {
        setCurrentMintAmount(currentMintAmount + 1);
    }

    const mint = () => {
        const newTotalMintAmount = currentTotalMintAmount + currentMintAmount;
        setCurrentTotalMintAmount(newTotalMintAmount);
        setCurrentMintAmount(0)
    }

    if(currentTotalMintAmount > 5555) {
        setCurrentTotalMintAmount(0);
    }

    return (

        <div className="flex flex-col items-center text-white">
            <div className="text-center text-[20px] mt-4">
                <p>MINT HERE YOUR</p>
                <p>MULTIDAO &#215;	MUTANT</p>
            </div>
            <div className="flex flex-col items-center gap-2 mt-5">
                <div>{currentTotalMintAmount}/5555 OUT</div>
                <div className="flex flex-row items-center gap-5">
                    <div className="relative cursor-pointer" onClick={minusMint}>
                        <img src="./pictures/Polygon_1.png" alt="Polygon_1" />
                        <div className="absolute top-[2px] left-[17px]">&#8722;</div>
                    </div>
                    <div className="relative cursor-pointer" onClick={mint}>
                        <img src="./pictures/Mint_button.png" alt="Mint_button" />
                        <div className="absolute top-2 left-10">MINT</div>
                    </div>
                    <div className="relative cursor-pointer" onClick={plusMint}>
                        <img src="./pictures/Polygon_2.png" alt="Polygon_2" />
                        <div className="absolute top-[10px] left-[17px]">&#43;</div>
                    </div>
                </div>
                <div>
                    {currentMintAmount}
                </div>
            </div>
        </div>

    )
}

export default Mint;