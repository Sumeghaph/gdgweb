import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GDG MITWPU</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">Events</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">Project</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">Members</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
