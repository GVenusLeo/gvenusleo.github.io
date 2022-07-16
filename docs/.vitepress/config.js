import {
    defineConfig
} from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
]

export default {
    lang: 'zh-CN',
    title: '应许之地',
    titleTemplate: '刘玉新的数字花园',
    description: 'Blog、CS、ML、Math',
    appearance: true,
    base: '/',
    ignoreDeadLinks: true,
    lastUpdated: false,
    // lastUpdatedText: '更新于',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/logo.png'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
        }]
    ],
    themeConfig: {
        logo: '/img/logo.png',
        socialLinks: [{
                icon: 'github',
                link: 'https://github.com/gvenusleo'
            },
            {
                icon: 'twitter',
                link: 'https://teitter.com/gvenusleo'
            }
        ],
        footer: {
            message: 'Licensed under the MIT License',
            copyright: 'Copyright © 2022 刘玉新'
        },
        nav: [{
                text: '关于',
                link: '/about'
            },
            {
                text: '我的博客',
                link: '/blog/'
            },
            {
                text: '工具与技巧',
                link: '/tools-tips/'
            },
            {
                text: 'Python 基础',
                link: '/python-language/'
            },
            {
                text: '数据分析',
                link: '/data-analysis/'
            },
            {
                text: 'C 程序设计',
                link: '/c-language/'
            },
            {
                text: '高等数学',
                link: '/mathematics/'
            }
        ],
        sidebar: {
            '/blog/': [{
                text: '2022 年',
                collapsible: true,
                items: [
                    {
                        text: '理性决策、曼德拉效应',
                        link: '/blog/220619'
                    },
                    {
                        text: '一次推广经历、重拾 LaTeX',
                        link: '/blog/220602'
                    },
                    {
                        text: '酒神精神、附带条件的知识',
                        link: '/blog/220516'
                    },
                    {
                        text: '假期回顾、最少必要知识',
                        link: '/blog/220508'
                    },
                    {
                        text: '自我主义与集体主义',
                        link: '/blog/220507'
                    }
                ]
            }],
            '/tools-tips': [{
                text: '工具与技巧',
                items: [{
                        text: 'Git 规范',
                        link: '/tools-tips/01'
                    },
                    {
                        text: 'otf 转 ttf',
                        link: '/tools-tips/02'
                    }
                ]
            }],
            'python-language': [{
                text: 'Python 基础',
                items: [{
                        text: '01 - 数据结构',
                        link: '/python-language/01'
                    },
                    {
                        text: '02 - 函数',
                        link: '/python-language/02'
                    },
                    {
                        text: '03 - 常用内置模块',
                        link: '/python-language/03'
                    },
                    {
                        text: '04 - 面向对象',
                        link: '/python-language/04'
                    },
                    {
                        text: '05 - 生成器与迭代器',
                        link: '/python-language/05'
                    },
                    {
                        text: '06 - 文件与目录操作',
                        link: '/python-language/06'
                    },
                    {
                        text: '07 - 异常处理',
                        link: '/python-language/07'
                    },
                ]
            }],
            'data-analysis': [{
                text: '数据分析',
                items: [{
                        text: '01 - NumPy (1)',
                        link: '/data-analysis/01'
                    },
                    {
                        text: '02 - NumPy (2)',
                        link: '/data-analysis/02'
                    },
                    {
                        text: '03 - NumPy (3)',
                        link: '/data-analysis/03'
                    }
                ]
            }],
            'c-language': [{
                text: 'C 程序设计',
                items: [{
                        text: '01 - C 语言导论',
                        link: '/c-language/01'
                    },
                    {
                        text: '02 - 数据结构',
                        link: '/c-language/02'
                    },
                    {
                        text: '03 - 输入与输出',
                        link: '/c-language/03'
                    },
                    {
                        text: '04 - 选择语句',
                        link: '/c-language/04'
                    },
                    {
                        text: '05 - 循环语句',
                        link: '/c-language/05'
                    },
                    {
                        text: '06 - 数组',
                        link: '/c-language/06'
                    },
                    {
                        text: '07 - 函数',
                        link: '/c-language/07'
                    },
                    {
                        text: '08 - 指针',
                        link: '/c-language/08'
                    },
                    {
                        text: '09 - 自定义数据类型',
                        link: '/c-language/09'
                    },
                    {
                        text: '10 - 文件操作',
                        link: '/c-language/10'
                    }
                ]
            }],
            '/mathematics/': [{
                text: '函数与极限',
                collapsible: true,
                items: [{
                        text: '01 - 映射与函数',
                        link: '/mathematics/01'
                    },
                    {
                        text: '02 - 数列的极限',
                        link: '/mathematics/02'
                    },
                    {
                        text: '03 - 函数的极限',
                        link: '/mathematics/03'
                    }
                ]
            }]

        },
    },
    markdown: {
        lineNumbers: true,
        config: (md) => {
            md.use(markdownItKatex)
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag)
            }
        }
    }
}