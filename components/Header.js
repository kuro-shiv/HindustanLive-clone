import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-red-600 text-white p-4 sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">LiveHindustan</Link>
        <nav className="hidden md:flex gap-4">
          <Link href="#">Home</Link>
          <Link href="#">India</Link>
          <Link href="#">World</Link>
          <Link href="#">Contacts</Link>
        </nav>
      </div>
    </header>
  )
}
