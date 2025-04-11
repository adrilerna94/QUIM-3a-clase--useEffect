import MensajeMontaje from "./components/MensajeMontaje";
import Link from "next/link";
import ContadorEfecto from "./components/ContadorEfecto";
import { Typography } from "@/components/ui";

export default function HomeMensaje() {
    return (
        <>
            <MensajeMontaje/>
            <ContadorEfecto/>
            <Link href="/"><Typography className="font-bold" color="amber" variant="h6"> Ir a Home</Typography></Link>
        </>
    );
}