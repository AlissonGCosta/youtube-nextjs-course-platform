'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineOpenInNew } from "react-icons/md";


export const Header = () => {
    const currentPath = usePathname();

    return(
        <header>
            <nav className= "flex items-center justify-center bg-primary py-2" >
                <ul className= "flex gap-4 items-center">
                    <li className= "my-2">
                        <Link href="/" className= "border-2 rounded-md py-1 px-2 fount-bold">
                            CODARSE
                        </Link>
                    </li>
                    <li>
                        <Link href="/" data-active ={currentPath === "/"} className="data-[active=true]:underline" >
                            Pagina inicial
                        </Link>
                    </li>
                    <li>
                        <Link href="/cursos" data-active ={currentPath === "/cursos"} className="data-[active=true]:underline">Cursos</Link>
                    </li>
                    <li >
                        <Link className= "flex items-center gap-1" href="https://blog.cordase.com" target = "_blank" >
                        blog
                        <MdOutlineOpenInNew/>
                        </Link>
                    </li>
                    
                </ul>
            </nav>

        </header>
    );
};