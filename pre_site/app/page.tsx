"use client"
import React from'react'
import { useState, useEffect } from'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import Image from "next/image";

const nav=[
  {
    title:'首页',
    href:'/',
    description:"情报战点"
  },
  {
    title:'行情总览',
    href:'/general',
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

// 在文件顶部添加useRef和useCallback
import { useRef, useCallback } from 'react';

export default function Home() {
  // 创建ref数组用于存储区块引用
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // 滚动到指定区块的函数
  const scrollToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e1a]">
      {/* 固定翻页按钮 - 添加点击事件 */}
      <div className="fixed right-8 bottom-8 z-50 flex flex-col space-y-4">
        <button 
          onClick={() => scrollToSection(0)}
          className="w-12 h-12 rounded-full bg-[#3a3a5a]/80 hover:bg-[#4a6cfa] flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="返回顶部"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        <button 
          onClick={() => scrollToSection(1)}
          className="w-12 h-12 rounded-full bg-[#3a3a5a]/80 hover:bg-[#4a6cfa] flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="下一页"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Header 高度调整为固定值 */}
      <header className="sticky top-0 z-50 bg-[#0e0e1a]/95 backdrop-blur-sm px-6 py-4 lg:px-24 border-b border-[#2a2a3a] h-[80px]">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* 左侧logo和标题 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="/assets/site_pra.png" alt="logo" width={48} height={48} className="object-cover" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              IT Situation Analytics
            </h1>
          </div>

          {/* 中间导航栏 */}
          <nav className="hidden md:flex space-x-8">
            {nav.map((item)=>(
              <a 
                key={item.href} 
                href={item.href} 
                className="relative px-4 py-2 text-[#a0a0c0] hover:text-white font-semibold transition-colors group"
              >
                {item.title}
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </a>
            ))}
          </nav>

          {/* 右侧按钮 */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-[#3a3a5a] hover:bg-[#4a4a7a] text-white rounded-full transition-colors">
              登录
            </button>
          </div>
        </div>
      </header>

      {/* Main 区域 - 模仿绝区零官网布局 */}
      <main className="flex-grow">
        {/* 英雄区域 - 修改为全屏高度 */}
        <section 
          ref={el => sectionRefs.current[0] = el}
          className="relative h-screen overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e1a]/0 to-[#0e0e1a] z-10"></div>
          {/* 这里放置主视觉图片 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src="/assets/feature_1.png" 
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-24 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">IT 行情分析与预测</h2>
            <p className="text-xl text-[#c0c0e0] max-w-2xl mb-8">
              基于BOSS直聘数据的职业行情分析与预测系统
            </p>
            <button className="px-8 py-3 bg-[#4a6cfa] hover:bg-[#5a7cff] text-white rounded-full text-lg font-medium transition-colors w-fit">
              立即体验
            </button>
          </div>
        </section>

        {/* 内容区块1 - 图片在左 */}
        <section className="py-20 px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                 src="/assets/feature_1.png" 
                alt="Feature 1"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">实时数据监控</h3>
              <p className="text-lg text-[#a0a0c0] mb-6">
                获取最新的IT行业薪资数据，了解市场动态变化趋势
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#4a6cfa] flex items-center justify-center mr-4">
                    <span className="text-white">1</span>
                  </span>
                  <span className="text-white">每日数据更新</span>
                </li>
                {/* 其他列表项... */}
              </ul>
            </div>
          </div>
        </section>

        {/* 内容区块2 - 图片在右 */}
        <section className="py-20 px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">职业发展预测</h3>
              <p className="text-lg text-[#a0a0c0] mb-6">
                基于大数据分析的职业发展建议，助您规划未来
              </p>
              {/* 内容... */}
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden order-first md:order-last">
              <Image
                src="/assets/feature_1.png" 
                alt="Feature 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 图片展示区 */}
        <section className="py-20 px-6 lg:px-24 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">数据可视化展示</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                   src="/assets/feature_1.png" 
                  alt={`Gallery ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - 模仿绝区零官网样式 */}
      <footer className="bg-[#0f1c3f] text-[#c7e5ff] py-12 px-6 lg:px-24 border-t border-[#3fd1ff]/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* 关于项目 */}
          <div className="hover:text-[#87e8de] transition-colors">
            <h3 className="text-lg font-semibold mb-4 text-[#b7eb8f]">关于项目</h3>
            <p className="text-[#a0a0c0]">
              基于BOSS直聘数据的职业行情预测系统，帮助您为职业发展做好准备。
            </p>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b7eb8f]">快速链接</h3>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[#a0a0c0] hover:text-[#3fd1ff] transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 支持我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b7eb8f]">支持我们</h3>
            <p className="text-[#a0a0c0] mb-4">
              如果这个项目对您有帮助，欢迎在GitHub上给我们一个star。
            </p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#3fd1ff] hover:text-[#87e8de] transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub 仓库
            </a>
          </div>
          
          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b7eb8f]">联系方式</h3>
            <p className="text-[#a0a0c0]">
              邮箱: contact@itsa.com
            </p>
          </div>
        </div>
        
        {/* 底部版权信息 */}
        <div className="mt-12 pt-8 border-t border-[#3fd1ff]/20 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-[#a0a0c0] hover:text-[#3fd1ff] transition-colors">隐私政策</a>
            <a href="#" className="text-[#a0a0c0] hover:text-[#3fd1ff] transition-colors">服务条款</a>
            <a href="#" className="text-[#a0a0c0] hover:text-[#3fd1ff] transition-colors">常见问题</a>
          </div>
          <p className="text-[#a0a0c0]">
            © {new Date().getFullYear()} IT Situation Analytics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
