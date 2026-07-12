import Image from "next/image";
import type { Metadata } from "next";
import { Card } from "@/components/card/Card";

export const metadata:Metadata = {
  title: "CodarSe - pagina inicial",
};

export default function PageHome() {
  return (
    <main>
   

      <Card/>
    </main>
  );
}
