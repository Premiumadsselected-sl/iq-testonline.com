'use client'
import { FaFileDownload } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GetStaticPropsContext } from 'next'
import { AppProps } from "next/app";

type Props = AppProps & {
    t: any
}

export default function MyOffer() {
    return (
        <div className="w-full lg:max-w-full lg:flex h-auto">
            <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md">
                <div className="grid grid-cols-1" >
                    <span className="col-span-1 text-xl md:text-3xl  text-customGray font-bold leading-none tracking-tight">Mis facturas</span>



                    <div className="m-2 space-y-2">
                        <div
                            className="group flex flex-col gap-2 rounded-lg bg-gray-100 p-5 text-customGray"
                            tabIndex={1}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className="font-bold"> 03/06/2024 </span>
                                <IoIosArrowDown className="transition-all duration-500 group-focus:-rotate-180 text-black" size={20} />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-baseline opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <p className="text-start col-span-2 md:col-span-1"><span>Factura:</span> 08ddbb98-d144-43fa-b2be-ec9947242c7a</p>
                                    <FaFileDownload size={30} className="justify-self-center md:justify-self-end col-span-2 md:col-span-1 text-[#7e22ce] cursor-pointer transition-transform duration-300 transform hover:scale-125 " />

                                    <hr className="col-span-2 rounded-3xl" style={{ height: ".5px", backgroundColor: "#c7c7c7" }} />

                                    <div className="col-span-2 overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr>
                                                    <th className="whitespace-nowrap px-3">Product</th>
                                                    <th className="whitespace-nowrap px-3">Price</th>
                                                    <th className="whitespace-nowrap px-3">Qty</th>
                                                    <th className="whitespace-nowrap px-3">VAT rate</th>
                                                    <th className="whitespace-nowrap px-3">VAT</th>
                                                    <th className="whitespace-nowrap px-3">Subtotal + VAT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="whitespace-nowrap">BrainTester</td>
                                                    <td className="whitespace-nowrap">41.24€</td>
                                                    <td className="whitespace-nowrap">1</td>
                                                    <td className="whitespace-nowrap">21%</td>
                                                    <td className="whitespace-nowrap">8.66€</td>
                                                    <td className="whitespace-nowrap">49.90€</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="m-2 space-y-2">
                        <div
                            className="group flex flex-col gap-2 rounded-lg bg-gray-100 p-5 text-customGray"
                            tabIndex={1}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className="font-bold"> 03/05/2024 </span>
                                <IoIosArrowDown className="transition-all duration-500 group-focus:-rotate-180 text-black" size={20} />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-baseline opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <p className="text-start col-span-2 md:col-span-1"><span>Factura:</span> 08ddbb98-d144-43fa-b2be-ec9947242c7a</p>
                                    <FaFileDownload size={30} className="justify-self-center md:justify-self-end col-span-2 md:col-span-1 text-[#7e22ce] cursor-pointer transition-transform duration-300 transform hover:scale-125 " />

                                    <hr className="col-span-2 rounded-3xl" style={{ height: ".5px", backgroundColor: "#c7c7c7" }} />

                                    <div className="col-span-2 overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr>
                                                    <th className="whitespace-nowrap px-3">Product</th>
                                                    <th className="whitespace-nowrap px-3">Price</th>
                                                    <th className="whitespace-nowrap px-3">Qty</th>
                                                    <th className="whitespace-nowrap px-3">VAT rate</th>
                                                    <th className="whitespace-nowrap px-3">VAT</th>
                                                    <th className="whitespace-nowrap px-3">Subtotal + VAT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="whitespace-nowrap">Oferta BrainTester</td>
                                                    <td className="whitespace-nowrap">0.41€</td>
                                                    <td className="whitespace-nowrap">1</td>
                                                    <td className="whitespace-nowrap">21%</td>
                                                    <td className="whitespace-nowrap">0.09€</td>
                                                    <td className="whitespace-nowrap">0.50€</td>1047.9
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}