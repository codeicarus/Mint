interface PhaseProps {
    id?:string,
    label1?:string,
    label2?:string,
    label3?:string,
    label4?:string,
    url?:string
}

const Phase:React.FC<PhaseProps> = ({
    id,
    label1,
    label2,
    label3,
    label4,
    url
}) => {
    return (
        <div className="w-[405px] h-[130px] border-solid border-[3px] border-[#23F7DD] rounded-[40px] bg-black">
            <div className="text-white flex flex-row">
                <div className="w-[275px] h-[127px] flex flex-col justify-center">
                    <div>
                        <div className="text-center">
                            &#8226; {label1} <div>{label2}</div>
                        </div>
                        <div className="text-center">
                            &#8226; {label3} <div>{label4}</div>
                        </div>
                    </div>
                </div>
                <div className="border-[18px] border-[#23F7DD] relative">
                    <p className="absolute top-8 left-[-28px] -rotate-90 text-black">PHASE{id}</p>
                </div>
                <div className="flex items-center justify-center w-[115px]">
                    <div>
                        <img src={url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phase;