"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("CodarSe");
  const currentPath = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawer(false);
    setTitle(document.title);
  }, [currentPath]);

  return (
    <header>
      <nav
        className="
          flex
          py-2 px-6
          bg-primary
          items-center gap-6 justify-start
          md:justify-center
        "
      >
        <button
          onClick={() => setDrawer(true)}
          className="
            sm:hidden
          "
        >
          <MdMenu size={24} />
        </button>

        <ul
          tabIndex={drawer ? -1 : undefined}
          className="
            flex
            gap-4 items-center
          "
        >
            <Link
              href="/"
              className="
                py-1 px-2
                border-2 rounded-md
                  font-bold
              "
            >
              CODARSE
            </Link>

            <li
               className="
                hidden sm:block
              "
            >
              <Link
                href="/"
                data-active={currentPath === "/"}
                className="
                  
                "
              >
                Pagina inicial
              </Link>
            </li>

            <li
              className="
                hidden sm:block
              "
            >
              <Link
                href="/cursos/"
                data-active={currentPath === "/cursos"}
                className="
                  
                "
              >
                Cursos
              </Link>
            </li>

            <li
              className="
               hidden sm:block   
              "
            >
              <Link
                href="https://blog.cordase.com"
                target="_blank"
                className="
                  flex
                  items-center gap-1"
              >
                blog
                <MdOutlineOpenInNew />
              </Link>
            </li>
          <li
            className="

            "
          >
          
          </li>
        </ul>

        <div
          data-open={drawer}
          tabIndex={drawer ? undefined : -1}
          onClick={() => setDrawer(false)}
          className="
            bg-gradient-to-r from-background
            transition-transform
            fixed top-0 left-0 bottom-0 right-0 data-[open=false]:-translate-x-full
          "
        >
          <ul
            onClick={(e) => e.stopPropagation()}
            className="
              flex flex-col
              w-60 h-full
              p-4
              bg-background
              gap-4
            "
          >
            <li
              className="

              "
            >
              <Link
                href="/"
                data-active={currentPath === "/"}
                className="
                  data-[active=true]:underline
                "
              >
                Pagina inicial
              </Link>
            </li>

            <li
              className="

              "
            >
              <Link
                href="/cursos/"
                data-active={currentPath === "/cursos"}
                className="
                  data-[active=true]:underline
                "
              >
                Cursos
              </Link>
            </li>

            <li
              className="

              "
            >
              <Link
                href="https://blog.cordase.com"
                target="_blank"
                className="
                  flex
                  items-center gap-1
                "
              >
                blog
                <MdOutlineOpenInNew />
              </Link>
            </li>
          </ul>
        </div>

        <h1
          className="
            sm:hidden
          "
        >
          {title}
        </h1>
      </nav>
    </header>
  );
};
