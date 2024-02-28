import Image from "next/image";
import Navbar from "../app/components/ui/navbar-menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
    </main>
  );
}
