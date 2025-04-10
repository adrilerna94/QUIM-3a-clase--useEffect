import {Card, CardBody, Typography } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  const rutaTimer = "/timer";
  return (
    <main className="flex items-center min-h-screen justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
        <CardBody className="text-center flex flex-col gap-4">
          <Typography variant="h2" color="amber" className="font-bold">
            🚀 Bienvenidos a la Misión: use State
          </Typography>
        </CardBody>
        <Link href={rutaTimer} className="text-center"><Typography className="font-bold text-white" variant="h3"> Ir a Contador</Typography></Link>
      </Card>
    </main>
  );

}
