
interface WalletConnectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WalletConnectionModal: React.FC<WalletConnectionModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            onClose(); // Close modal only if user clicked on the modal overlay
        }
    };
    return (
        <div className="flex fixed items-center justify-center z-40 inset-0" onClick={handleOutsideClick} >
            <div className="w-[726px] h-[454px] bg-cover bg-center relative" style={{ backgroundImage: `url("./pictures/Rectangle_bg13.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-2 bottom-2 w-1 bg-teal-400" style={{ transform: 'translateX(-50%)' }}></div>

                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-teal-400" style={{ transform: 'translateY(-50%)' }}></div>
                <div className="grid grid-cols-2 gap-20 p-20">
                    {/* First Row */}
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <img src="./pictures/XPortal.png" alt="XPortal" className="w-24 h-auto md:w-16 md:h-auto" />
                        <p className="text-white text-5 mt-4">XPORTAL APP WALLET</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ml-8 cursor-pointer">
                        <img src="./pictures/MultiversXDefi.png" alt="MultiversXDefi" className="w-24 h-auto md:w-16 md:h-auto" />
                        <p className="text-white text-5 mt-4">MULTIVERSX DEFI WALLET</p>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col items-center justify-center mt-0 cursor-pointer">
                        <img src="./pictures/MultiversXWebWallet.png" alt="MultiversXWebWallet" className="w-24 h-auto md:w-16 md:h-auto" />
                        <p className="text-white text-5 mt-4">MULTIVERSX WEB WALLET</p>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-0 ml-8 cursor-pointer">
                        <img src="./pictures/Ledger.png" alt="Ledger" className="w-24 h-auto md:w-16 md:h-auto" />
                        <p className="text-white text-5 mt-4">LEDGER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletConnectionModal;