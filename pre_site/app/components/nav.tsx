'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { title: '首页', href: '/', description: "情报战点" },
  { title: '行情总览', href: '/general', description: "情报战点" },
  { title: '细类分析', href: '/visualization', description: "情报战点" },
  { title: '关于', href: '/about', description: "欢迎更新和pr" }
]

export default function Nav() {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    return pathname === href || (href === '/' && pathname === null);
  }

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`relative px-4 py-2 font-semibold transition-colors group ${
            isActive(item.href) 
              ? 'text-black' 
              : 'text-[#787878] hover:text-black'
          }`}
        >
          <span className="relative z-10">
            {item.title}
          </span>
          {isActive(item.href) && (
            <span className="absolute inset-0 bg-[#FFFFFF] rounded-full z-0"></span>
          )}
        </Link>
      ))}
    </nav>
  );
}