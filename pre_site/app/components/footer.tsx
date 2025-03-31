export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-24 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* 关于项目 */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4">ABOUT PROJECT</h3>
          <p>
            基于BOSS直聘数据的职业行情预测系统，帮助您为职业发展做好准备。
          </p>
        </div>
        
        {/* 快速链接 */}
        <div>zs
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            {[
              { title: '首页', href: '/' },
              { title: '行情总览', href: '/general' },
              { title: '细类分析', href: '/visualization' },
              { title: '关于', href: '/about' }
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-gray-300 transition-colors">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* 支持我们 */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4">SUPPORT US</h3>
          <p className="mb-4">
            如果这个项目对您有帮助，欢迎在GitHub上给我们一个star。
          </p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GITHUB REPO
          </a>
        </div>
        
        {/* 联系方式 */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4">CONTACT</h3>
          <p>
            邮箱: contact@itsa.com
          </p>
        </div>
      </div>
      
      {/* 底部版权信息 */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
          <a href="#" className="hover:text-gray-300 transition-colors">服务条款</a>
          <a href="#" className="hover:text-gray-300 transition-colors">常见问题</a>
        </div>
        <p>
          © {new Date().getFullYear()} IT SITUATION ANALYTICS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}