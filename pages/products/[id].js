import Head from "next/head";
import Link from "next/link";
import {Client} from "@notionhq/client";

export default function Products({Introduction, Image, blocks}) {
    return (
        <div className="flex min-h-screen flex-col py-2 font-siyuan">
            <Head>
                <title>赴山茶市</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="bg-white py-0">
                    <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 md:flex-row">
                        <div className="w-full max-w-[300px] md:sticky md:top-10 md:w-[28rem]">
                            <a href="http://localhost:3000/" className="text-md leading-8 tracking-tight underline underline-offset-2">赴山茶市</a>
                            <p className="mt-10 text-md tracking-tight">[最新简讯]</p>
                            <p className="mt-6">
                                赴山茶市首先是个工作小组，因为我们相信做产品的人更重要。
                            </p>
                            <p className="">
                                它也是一个巴刹 (Bazaar),我们乐于和同行异业一起让茶叶热闹一阵，成为人们生活的新日常。
                            </p>
                            <p className="mb-2">
                                它一开始的名字是富山茶市，灵感来源于漠河旅游夜巴座背的印刷广告，也會经想过浮山、伏山、拂山，但我们认为在现在这个时代做茶生意算得上是一场奔赴，即使仅是陪大家走一程，茶香悠远，余味绵长。
                            </p>
                            <div className="mt-16 flex flex-col">
                                <a className="text-black underline underline-offset-2">关于我们</a>
                                <a className="text-black underline underline-offset-2">新闻活动</a>
                                <a className="text-black underline underline-offset-2">如何购买</a>
                                <a className="text-black underline underline-offset-2">订阅计划</a>
                                <a className="text-black underline underline-offset-2">保持联络</a>
                            </div>
                            <img src="https://s2.loli.net/2023/03/30/k8rfFEi2Phl9YO3.png" alt="logo" className="w-40 h-auto mt-36 -ml-3" />
                        </div>
                        <div className="flex flex-col">
                            <div className="mt-5 w-full min-w-0 md:mt-0">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:max-w-5xl lg:gap-y-16">
                                    <div
                                        className="relative p-8 flex flex-row gap-10"
                                    >
                                        {Introduction.map((item) => (
                                            <div className="flex flex-col">
                                                <Link href="" className="text-md text-gray-900 underline underline-offset-2">订阅计划</Link>
                                                <dd className="mt-10 text-base leading-6 text-black max-w-md">
                                                    {item}
                                                </dd>
                                            </div>
                                        ))}
                                        <div className="flex flex-col gap-8">
                                            {Image.map((item) => (
                                                <div className="">
                                                    <img src={item} alt="photo" className="w-[600px]"/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const {Client} = require("@notionhq/client")
    const notion = new Client({
        auth: process.env.NOTION_SECRET_KEY,
    })

    const data = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "状态",
            "select": {
                "equals": "发布",
            }
        },
    })

    const paths = data.results.map((item) => {
        return {
            params: {
                id: item.id,
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params:{id}}) {
    const { Client } = require("@notionhq/client")
    const notion = new Client({
        auth: process.env.NOTION_SECRET_KEY,
    })

    const data = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "状态",
            "select": {
                "equals": "发布",
            }
        },
    })

    const blocks = await notion.blocks.children.list({
        block_id: id,
    });

    const Introduction = []
    const Image = []

    blocks.results.forEach((block) => {
        if (block.type === "paragraph") {
            const richText = block.paragraph.rich_text[0];
            if (richText) {
                Introduction.push(richText.plain_text);
            }
        }
    });

    blocks.results.forEach((block) => {
        if (block.type === "image") {
            const image = block.image.external.url;
            if (image) {
                Image.push(image);
            }
        }
    });

    return {
        props: {
            Introduction,
            Image,
        }
    }
}