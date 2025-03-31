import Nav from './nav'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black px-6 py-4 lg:px-24 border-b border-gray-800 h-[80px]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* 品牌标识部分 */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src="/assets/site_pra.png" 
              alt="logo" 
              width={48} 
              height={48} 
              className="object-cover" 
            />
          </div>
          <h1 className="text-2xl font-bold text-white">
            IT Situation Analytics
          </h1>
        </div>

        {/* 导航部分 */}
        <Nav />

        {/* 右侧功能区 */}
        <div className="flex items-center space-x-4 text-white">
          github
        </div>
      </div>
    </header>
  )
}