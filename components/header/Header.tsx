'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";


export const Header = () => {
    const [title, setTitle] =  useState('CodarSe');
    const currentPath = usePathname();

    useEffect(() => {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTitle(document.title);
    }, [currentPath]);

    return(
        <header>
            <nav className= "flex items-center gap-6 justify-start md:justify-center bg-primary py-2 px-6" >
                <button className= "sm:hidden">
                    <MdMenu size = {24}/>
                </button>

                <ul className= "flex gap-4 items-center">
                     <li className= "">
                        <Link href="/" className= "border-2 rounded-md py-1 px-2 fount-bold">
                            CODARSE
                        </Link>
                    </li>
                </ul>

                <div className= "fixed top-0 left-0 bottom-0 right-0">

                     <ul className= "flex gap-4 flex-col  p-4 w-60 bg-background ">
                   

                    <li className= "">
                        <Link href="/" data-active ={currentPath === "/"} className="data-[active=true]:underline" >
                            Pagina inicial
                        </Link>
                    </li>

                    <li className= "">
                        <Link href="/cursos" data-active ={currentPath === "/cursos"} className="data-[active=true]:underline">Cursos</Link>
                    </li>

                    <li className= "" >
                        <Link className= "flex items-center gap-1" href="https://blog.cordase.com" target = "_blank" >
                        blog
                        <MdOutlineOpenInNew/>
                        </Link>
                    </li>
                    
                </ul>

                </div>

               
                <h1 className="sm:hidden">
                 {title}
                </h1>
            </nav>

        </header>
    );
};


