import { Section } from "@/components/section/Section";
import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "CodarSe - todos os cursos",
};


export default function PageCursos(){
    return (
        <main>
            <Section
            
            title="Todos os Cursos"
            variant="grid"

            />
        </main>
    );
}