import logo from '../../assets/logo.png'

const links = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Register/Login', href: '/register' },
  { label: 'Main Interface', href: '/dashboard' },
]

export default function Navbar() {
  return (
    <header className="relative h-[198px] bg-white">
      <div className="absolute overflow-hidden" style={{ top: 55, left: 27, width: 154, height: 95 }}>
        <img
          src={logo}
          alt="Mediseena"
          className="absolute max-w-none"
          style={{ top: '-34.25%', left: '-67.57%', width: '232.43%', height: '252.01%' }}
        />
      </div>
      <div
        className="flex items-center font-charon font-bold"
        style={{ top: 76, left: 188, width: 222, height: 68, position: 'absolute', fontSize: 48 }}
      >
        <span className="text-teal">Medi</span>
        <span className="text-teal-deep">seen</span>
        <span className="text-teal">a</span>
      </div>
      <nav
        className="flex font-charon font-bold text-black"
        style={{ top: 53, left: 960, width: 400, height: 23, position: 'absolute' }}
      >
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="relative -translate-x-1/2 text-[16px] no-underline"
            style={{
              left: `${link.active ? 18.5 : i === 1 ? 87 : i === 2 ? 195 : 336}px`,
            }}
          >
            {link.label}
            {link.active && (
              <span
                className="absolute left-1/2 h-[2px] -translate-x-1/2 bg-teal"
                style={{ top: 21, width: 37 }}
              />
            )}
          </a>
        ))}
      </nav>
    </header>
  )
}