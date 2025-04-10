"use client";

import { useEffect } from "react";
import { Typography } from "@/components/ui";

export default function MensajeMontaje() {
    useEffect(() => {
        console.log("Componente montado");
    }, [])

    return(<Typography>Componente montado</Typography>);

}