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
      <header className="page_header  box-border pl-24 pr-24 pt-8 ">
        <div className="header_container flex place-content-between " >
          {/* 左侧栏目 */}
          <div className="left_container flex  items-end">
            {/* 个人IP logo */}
            <div className="logo_container w-12 h-12">
              <Image src="/assets/site_pra.png" alt="logo1" width={100} height={100} style={{ borderRadius: '50%' }} />
            </div>
            {/* 站点IP logo */}
            <div className="logo_container w-12 h-12">
              <Image src="/assets/site_pra.png" alt="logo2" width={100} height={100} style={{ borderRadius: '50%' }} />
            </div>
            <div className="site_title_container site_name">
              IT situation analytics
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
      <main className="page_main pl-24 pr-24 w-full h-screen ">
        <div className=" ">
           IT situation analytics main banner image placeholder
           主站介绍大图/简要介绍内容和功能
          * IT行情总览
          * 更新时间
          * 按段时间获取和分析BOSS直聘数据，根据数据分析和预测现有局势，分析未来职业走向
          * 也可以为您根据行情方向，选择更加合适的提桶跑路的方向

        </div>
      </main>
      <footer className="page_footer pl-24 pr-24 w-full">
        <div>Job situation forecast based on the data from BOSS Zhipin helps everyone make preparations for fallback options.</div>
        <div>If this thing has been helpful to you, you might as well give it a star.</div>
        <div>Welcome PRs to help improve this project.</div>
      </footer>
    </>
  );
}
