
import type { Metadata } from "next";
import {Section} from "@/components/section/Section"

export const metadata:Metadata = {
  title: "CodarSe - pagina inicial",
};

export default function PageHome() {
  return (
    <main>

      <Section 
      
      title="veja todos os cursos"
      variant= "h-list"

      />
   

    
    </main>
  );
}
