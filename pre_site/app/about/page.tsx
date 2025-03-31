import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <div className="container mx-auto px-4 py-12">
        {/* 修改网格比例为3:1 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧栏 - 占3份宽度 */}
          <div className="lg:col-span-3 space-y-8">
            {/* 左侧内容保持不变 ... */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">关于项目</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  基于BOSS直聘数据的职业行情预测系统，帮助您为职业发展做好准备。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 右侧栏 - 占1份宽度 */}
          <section className="lg:col-span-1 lg:sticky lg:top-8 space-y-8 h-[calc(100vh-4rem)] overflow-y-auto">
            {/* 更新日志 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">更新日志</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-medium">v1.0.0 - 2023.10.15</h3>
                    <p className="text-sm text-gray-600">项目初始版本发布</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-medium">v0.1.0 - 2023.09.20</h3>
                    <p className="text-sm text-gray-600">项目开发启动</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 项目地址 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">项目地址</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">GitHub 仓库</h3>
                    <Button asChild variant="outline">
                      <Link 
                        href="https://github.com/yourusername/yourrepo" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        访问 GitHub
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">在线演示</h3>
                    <Button asChild>
                      <Link 
                        href="https://yourdemo.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        查看演示
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            </section>
          </div>
        </div>
      </div>
   
  );
}