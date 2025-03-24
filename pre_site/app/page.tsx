import Image from "next/image";

const nav=[
  {
    title:'首页',
    href:'/',
    description:"情报战点"
  },
  {
    title:'行情总览',
    href:'/data',
    description:"情报战点"
  },
  {
    title:'细类分析',
    href:'/visualization',
    description:"情报战点"
  },
  {
    title:'关于',
    href:'/about',
    description:"欢迎更新和pr"
  }
]
export default function Home() {
  return (
    <>
      <header className="page_header pl-24 pr-24 pt-8">
        <div className="header_container flex place-content-between " >
          {/* 左侧栏目 */}
          <div className="flex ">
            {/* 个人IP logo */}
            <div className="logo_container w-12 h-12">
              <Image src="/assets/site_pra.png" alt="logo1" width={100} height={100} style={{ borderRadius: '50%' }} />
            </div>
            {/* 站点IP logo */}
            <div className="logo_container w-12 h-12">
              <Image src="/assets/site_pra.png" alt="logo2" width={100} height={100} style={{ borderRadius: '50%' }} />
            </div>

          </div>
          {/* 右侧栏目 */}
          <div className="logo_container w-12 h-12">
            <div className="flex">
              {/* 第一个含有 a 标签的 logo */}
              <a href="#">
                {/* <Image src="@/assets/another_logo.png" alt="logo3" width={100} height={100} style={{ borderRadius: '50%' }} /> */}
              </a>
              {/* 第二个是 github 超链接访问的 logo */}
              <a href="https://github.com">
                <Image src="/assets/site_pra.png" alt="github logo" width={100} height={100} style={{ borderRadius: '50%' }} />
              </a>
            </div>
          </div>

        </div>
      </header>
      <main className="page_main pl-24 pr-24">
        <div>
          IT situation analytics
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
}
