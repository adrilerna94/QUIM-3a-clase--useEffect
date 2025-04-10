import Contador from "./components/ContadorSimple";
import { Typography } from "@/components/ui";
import Link from "next/link";

export default function HomeContador() {
    return (
        <section>
            <Contador/>
            <Link href="/"><Typography className="font-bold" color="amber" variant="h6"> Ir a Home</Typography></Link>
        </section>
    );
}