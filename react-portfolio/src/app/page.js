import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <Navbar/>
    </main>
  );
}
