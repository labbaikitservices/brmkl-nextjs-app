import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-12 flex gap-6 bg-blue-400 text-white text-center py-3 px-5 justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
