import Image from "next/image";
import Link from "next/link";

interface ICardPropos{
    href: string;
    image: string;
    title: string;
    description: string;

}
export const Card = ({title, image, description, href} :ICardPropos) => {
    return(
        <Link href ={href} className="hover:no-underline">
            <article className= "flex flex-col gap-2 p-2 rounded sm:hover:bg-primary"> 
                
            <Image
            alt={'Curso de NextJs, TailwindCSS e TypeScript'}
            src={image}
            width={1000}
            height={0}
            draggable={false}
            className= "aspcet-video object-cove rounded-2xl"
            />
                <h4 className= "font-extrabold text-lg">
                    {title}
                </h4>

                <p className= "line-clamp-3">
                  {description}
                </p>
            </article>
        </Link>
    );
};