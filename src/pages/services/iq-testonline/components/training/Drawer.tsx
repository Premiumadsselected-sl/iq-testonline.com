import { AppProps } from "next/app";
import { GetStaticPropsContext } from "next";

import Link from "next/link";

import { HiMiniCube } from "react-icons/hi2";
import { TbBrain } from "react-icons/tb";
import { FaClipboardQuestion } from "react-icons/fa6";
import { PiMatrixLogoDuotone, PiPuzzlePieceDuotone } from "react-icons/pi";

type Props = AppProps & {
    children: React.ReactNode
}

export default function Drawer() {

    //Arreglo de ejemplo para el uso del componente Drawer
    const objTrainings = [
        {
            "nameTraining": "Box clever",
            "route": "/clever-box",
            "icon": <PiPuzzlePieceDuotone size={35} />
        },
        {
            "nameTraining": "Matrix",
            "route": "/app",
            "icon": <PiMatrixLogoDuotone size={30} />
        },
    ]

    const objTests = [
        {
            "nameTest": "IQ",
            "route": "/app",
            "icon": <TbBrain size={35} />
        },
        {
            "nameTest": "Preguntados",
            "route": "/app",
            "icon": <FaClipboardQuestion size={30} />
        },
        {
            "nameTest": "Espacial",
            "route": "/app",
            "icon": <HiMiniCube size={35} />
        }
    ]

    return (
        <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu w-80 min-h-full  text-customGray bg-white">
                    {/* Sidebar content here */}
                    <h1 className="text-start text-base md:text-xl font-semibold ">Lista de actividades</h1>
                    <h2 className="text-start">Exámenes y entrenamientos</h2>

                    <hr className="col-span-2 rounded-3xl my-5" style={{ height: ".5px", backgroundColor: "#c7c7c7" }} />

                    <div className="flex">
                        <span className="bg-[#7e22ce22] rounded-md text-[75%] text-[#7e22ce] font-semibold mb-5 inline-flex items-center p-1">
                            Exámenes
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {objTests?.map(element => (
                            <div className="grid-cols-1 w-full ">
                                <Link href={element.route}>
                                    <div className="h-[70px] border-customBorderGray border-[1.5px] rounded-xl border-[#7e22ce9a] cursor-pointer flex items-center justify-center">{element.icon}</div>
                                    <span className="text-[80%] font-semibold">{element.nameTest}</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <hr className="col-span-2 rounded-3xl my-5" style={{ height: ".5px", backgroundColor: "#c7c7c7" }} />

                    <div className="flex">
                        <span className="bg-[#7e22ce22] rounded-md text-[75%] text-[#7e22ce] font-semibold mb-5 inline-flex items-center p-1">
                            Entrenamientos
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {objTrainings?.map(element => (
                            <div className="grid-cols-1 w-full ">
                                <Link href={element.route}>
                                    <div className="h-[70px] border-customBorderGray border-[1.5px] rounded-xl border-[#7e22ce9a] cursor-pointer flex items-center justify-center">{element.icon}</div>
                                    <span className="text-[80%] font-semibold">{element.nameTraining}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
