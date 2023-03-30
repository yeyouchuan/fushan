import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = (books) => {
  return (
      <div className="flex min-h-screen flex-col py-2">
          <Head>
              <title>临终书店</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
              <div className="bg-white py-0">
                  <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 md:flex-row">
                      <div className="w-full max-w-[300px] md:sticky md:top-10 md:w-[28rem]">
                          <p className="text-md leading-8 tracking-tight underline underline-offset-2">赴山茶市</p>
                          <p className="mt-10 text-md tracking-tight">[最新简讯]</p>
                          <p className="mb-2 mt-6 leading-6">
                              赴山茶市首先是个工作小组，因为我们相信做产品的人更重要。它也是一个巴刹 (Bazaar),我们乐于和同行异业一起让茶叶热闹一阵，成为人们生活的新日常。它一开始的名字是富山茶市，灵感来源于漠河旅游夜巴座背的印刷广告，也會经想过浮山、伏山、拂山，但我们认为在现在这个时代做茶生意算得上是一场奔赴，即使仅是陪大家走一程，茶香悠远，余味绵长。
                          </p>
                          <div className="mt-16 flex flex-col">
                              <a className="text-black underline underline-offset-2">关于我们</a>
                              <a className="text-black underline underline-offset-2">新闻活动</a>
                              <a className="text-black underline underline-offset-2">如何购买</a>
                              <a className="text-black underline underline-offset-2">订阅计划</a>
                              <a className="text-black underline underline-offset-2">保持联络</a>
                          </div>
                          <img src="https://s2.loli.net/2023/03/30/k8rfFEi2Phl9YO3.png" alt="logo" className="w-40 h-auto mt-48 -ml-3"></img>
                      </div>
                      <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
                          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:max-w-xl lg:max-w-none lg:gap-y-16">
                              <div className="relative rounded-lg bg-gray-50 p-10">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                      </svg>
                                  </div>

                                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Push to deploy</dt>
                                  <dd className="mt-2 text-base leading-7 text-black">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                              </div>

                              <div className="relative rounded-lg bg-gray-50 p-10">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                      </svg>
                                  </div>
                                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">SSL certificates</dt>
                                  <dd className="mt-2 text-base leading-7 text-black">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
                              </div>

                              <div className="relative rounded-lg bg-gray-50 p-10">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                      </svg>
                                  </div>
                                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Simple queues</dt>
                                  <dd className="mt-2 text-base leading-7 text-black">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
                              </div>

                              <div className="relative rounded-lg bg-gray-50 p-10">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                      </svg>
                                  </div>
                                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Advanced security</dt>
                                  <dd className="mt-2 text-base leading-7 text-black">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                              </div>
                          </dl>
                      </div>
                  </div>
              </div>

          </main>
      </div>
  )
}

export default Home