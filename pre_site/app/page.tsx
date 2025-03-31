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
import Footer from './components/footer'

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
    <div className="min-h-screen flex flex-col">
      {/* Main 区域 */}
      <main className="flex-grow">
        {/* 英雄区域 - 黑色背景 */}

        <section className="relative h-screen overflow-hidden bg-[#222122]">
          <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-24 max-w-7xl mx-auto">
            <h2 className="text-6xl font-extrabold text-white mb-6">IT 行情分析与预测</h2>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              基于BOSS直聘数据的职业行情分析与预测系统
            </p>
            <button className="px-8 py-3 bg-[#4a6cfa] hover:bg-[#5a7cff] text-white rounded-full text-lg font-medium transition-colors w-fit">
              立即体验
            </button>
          </div>
        </section>

        {/* 内容区块1 - 白色背景 */}
        <section className="h-screen py-20 px-6 lg:px-24 max-w-7xl mx-auto bg-white">
          <div className="h-full grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-3/4 rounded-xl overflow-hidden">
              <Image
                src="/assets/feature_1.png" 
                alt="Feature 1"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#222122] mb-6">实时数据监控</h3>
              <p className="text-lg text-[#222122]/80 mb-6">
                获取最新的IT行业薪资数据，了解市场动态变化趋势
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#4a6cfa] flex items-center justify-center mr-4">
                    <span className="text-white">1</span>
                  </span>
                  <span className="text-[#222122]">每日数据更新</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 内容区块2 - 黑色背景 */}
        {/* 英雄区域 - 深灰色背景 */}
        <section className="relative h-screen overflow-hidden bg-[#222122]">
          {/* SVG斜线背景 - 加粗版本 */}
          <div className="absolute inset-0 -z-0 opacity-30">
            <svg 
              width="100%" 
              height="100%" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <pattern 
                id="diagonalLines" 
                width="25" 
                height="25" 
                patternUnits="userSpaceOnUse"
              >
                <path 
                  d="M0,25 L25,0" 
                  stroke="#e0e0e0" 
                  strokeWidth="3"  // 从1.5加粗到3
                  strokeLinecap="square"
                />
              </pattern>
              <rect 
                width="100%" 
                height="100%" 
                fill="url(#diagonalLines)" 
              />
            </svg>
          </div>
          
          <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-24 max-w-7xl mx-auto">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">职业发展预测</h3>
              <p className="text-lg text-[#e0e0e0] mb-6">
                基于大数据分析的职业发展建议，助您规划未来
              </p>
            </div>
            <div className="relative h-3/4 rounded-xl overflow-hidden order-first md:order-last">
              <Image
                src="/assets/feature_1.png" 
                alt="Feature 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 图片展示区 - 白色背景 */}
        <section className="h-screen py-20 px-6 lg:px-24 max-w-7xl mx-auto bg-white flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-[#222122] mb-12 text-center">数据可视化展示</h3>
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

      <Footer />
    </div>
  )
}
