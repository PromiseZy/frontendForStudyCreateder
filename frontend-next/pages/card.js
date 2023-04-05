const card = () => {
    return(
        <div className="bg-black h-screen flex flex-col items-center body-font font-NST">
            <div className="bg-white mt-2" style={{width: "288px", height: "449px"}}>
                <div className="bg-red-700 flex justify-between " 
                style={{width: "288px", 
                height: "162px",
                backgroundImage: `url('https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg')`}}>
                    <div className="pl-4 pt-4 flex flex-row ">
                        <div>
                            <div className="bg-green-500 rounded text-center" style={{width: "48px", height: "24px"}}>
                                <div >
                                    <span className="text-white" style={{font_size:"14px"}}>ขาย</span>
                                </div>
                            </div>
                        </div>
                        <div className="pl-2 ">
                            <div className="bg-yellow-300 rounded text-center" style={{width: "48px", height: "24px"}}>
                                <span className="text-white">เช่า</span>
                            </div>
                        </div>
                    </div>
                    <div className="pl-4 pt-4 flex flex-col">
                        <div>
                            <div className="bg-sky-400 rounded " style={{width: "97px", height: "24px"}}>
                                <div className="text-right flex ">
                                    <span className="pl-3 pt-1 pr-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_502_3891)">
                                        <path d="M3.33333 8H2L8 2L14 8H12.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.33325 8V12.6667C3.33325 13.0203 3.47373 13.3594 3.72378 13.6095C3.97382 13.8595 4.31296 14 4.66659 14H11.3333C11.6869 14 12.026 13.8595 12.2761 13.6095C12.5261 13.3594 12.6666 13.0203 12.6666 12.6667V8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.33341 8H6.66675V10.6667H9.33341V8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_502_3891">
                                        <rect width="16" height="16" fill="black"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                    <span className="text-white">อยู่อาศัย</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 flex justify-end">
                            <div className="bg-yellow-300 rounded text-right" style={{width: "80px", height: "24px"}}>
                                <div className="text-right flex ">
                                    <span className="pl-3 pt-1 pr-2">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_502_3902)">
                                        <path d="M10.6666 6C12.5075 6 13.9999 5.10457 13.9999 4C13.9999 2.89543 12.5075 2 10.6666 2C8.82564 2 7.33325 2.89543 7.33325 4C7.33325 5.10457 8.82564 6 10.6666 6Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.33325 4V6.66667C7.33325 7.77133 8.82592 8.66667 10.6666 8.66667C12.5073 8.66667 13.9999 7.77133 13.9999 6.66667V4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.33325 6.66675V9.33341C7.33325 10.4381 8.82592 11.3334 10.6666 11.3334C12.5073 11.3334 13.9999 10.4381 13.9999 9.33341V6.66675" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.33325 9.33325V11.9999C7.33325 13.1046 8.82592 13.9999 10.6666 13.9999C12.5073 13.9999 13.9999 13.1046 13.9999 11.9999V9.33325" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.66667 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8H3.66667C3.93188 8 4.18624 8.10536 4.37377 8.29289C4.56131 8.48043 4.66667 8.73478 4.66667 9C4.66667 9.26522 4.56131 9.51957 4.37377 9.70711C4.18624 9.89464 3.93188 10 3.66667 10H2" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.33325 5.33325V5.99992M3.33325 9.99992V10.6666V9.99992Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_502_3902">
                                        <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                    <span className="text-white">
                                        ธุรกิจ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white" style={{width: "288px", height: "32px"}}>
                    <div className="pl-4 pt-3 ">   
                        <div 
                            className= "border border-solid rounded border-gray-600 text-center" 
                            style={{width: "70px", height: "20px"}} >
                                <p className="leading-4">ขายแบบ</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white pl-4 pt-2 pr-4" style={{width: "288px", height: "244.73px"}}>
                    <div style={{width: "256px", height: "28px"}}>
                        ฿50,000
                    </div>
                    <div>
                        แบบทาวน์โฮม 2 ชั้น สไตล์โมเดิร์น พรีเชียส MP01 โฮมเมดดีไซน์
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;