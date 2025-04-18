import { Button } from "@/components/ui/button";
import Image from "next/image";
import Member from "@/components/member"; // Import the correct Member component

export default function Home() {
  return (
    <main>
      {/* If using the Member component */}
      <Member />
    </main>
  );
}
