'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";


export const Header = () => {
    const currentPath = usePathname();

    return(
        <header>
            <nav className= "flex items-center gap-6 justify-start md:justify-center bg-primary py-2 px-6" >
                <button className= "sm:hidden">
                    <MdMenu size = {24}/>
                </button>

                <ul className= "flex gap-4 items-center">
                    <li className= "my-2">
                        <Link href="/" className= "border-2 rounded-md py-1 px-2 fount-bold">
                            CODARSE
                        </Link>
                    </li>

                    <li className= "hidden sm:block">
                        <Link href="/" data-active ={currentPath === "/"} className="data-[active=true]:underline" >
                            Pagina inicial
                        </Link>
                    </li>
                    <li className= "hidden sm:block">
                        <Link href="/cursos" data-active ={currentPath === "/cursos"} className="data-[active=true]:underline">Cursos</Link>
                    </li>
                    <li className= "hidden sm:block" >
                        <Link className= "flex items-center gap-1" href="https://blog.cordase.com" target = "_blank" >
                        blog
                        <MdOutlineOpenInNew/>
                        </Link>
                    </li>
                    
                </ul>
                <h1 className="sm:hidden">
                    Codarse - pagina inicial
                </h1>
            </nav>

        </header>
    );
};