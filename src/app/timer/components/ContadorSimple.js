"use client";
import { useState } from "react";
import { Button, Typography } from "@/components/ui";

export default function Contador() {
    const [contador,setContador] = useState(0);

    return (
        <>
        <div>
            <Typography>Contador: {contador}</Typography>
        </div>
        <Button onClick={() => setContador(contador + 1)} style={{backgroundColor: "blue"}}>Incrementar</Button>
        <Button onClick={() => contador !== 0 && setContador(contador - 1)} disabled={contador === 0} style={{backgroundColor: contador === 0 ? "gray":"green"}}>Decrementar</Button>
        <Button onClick={() => setContador(0)}>Reset</Button>
        </>
    );
    /*<Button onClick={() => {
        if (contador !== 0) {
            setContador(contador - 1);
        }
        }} disabled={contador === 0}>Decrementar</Button>*/
}