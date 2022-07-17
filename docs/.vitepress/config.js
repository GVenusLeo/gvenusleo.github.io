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
                text: '机器学习',
                link: '/machine-learning/'
            },
            {
                text: '408 考研',
                link: '/408/'
            },
            {
                text: '高等数学',
                link: '/mathematics/'
            },
            {
                text: '工具与技巧',
                link: '/tools-tips/'
            }
        ],
        sidebar: {
            '/blog/': [{
                text: '2022 年',
                collapsible: true,
                items: [{
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
            '/machine-learning/': [{
                    text: 'Python 基础',
                    collapsible: true,
                    items: [{
                            text: '01 - 数据结构',
                            link: '/machine-learning/python-language01'
                        },
                        {
                            text: '02 - 函数',
                            link: '/machine-learning/python-language02'
                        },
                        {
                            text: '03 - 常用内置模块',
                            link: '/machine-learning/python-language03'
                        },
                        {
                            text: '04 - 面向对象',
                            link: '/machine-learning/python-language04'
                        },
                        {
                            text: '05 - 生成器与迭代器',
                            link: '/machine-learning/python-language05'
                        },
                        {
                            text: '06 - 文件与目录操作',
                            link: '/machine-learning/python-language06'
                        },
                        {
                            text: '07 - 异常处理',
                            link: '/machine-learning/python-language07'
                        },
                    ]
                },
                {
                    text: '数据分析',
                    collapsible: true,
                    items: [{
                            text: '01 - NumPy (1)',
                            link: '/machine-learning/data-analysis01'
                        },
                        {
                            text: '02 - NumPy (2)',
                            link: '/machine-learning/data-analysis02'
                        },
                        {
                            text: '03 - NumPy (3)',
                            link: '/machine-learning/data-analysis03'
                        },
                        {
                            text: '04 - Pandas (1)',
                            link: '/machine-learning/data-analysis04'
                        },
                        {
                            text: '05 - Pandas (2)',
                            link: '/machine-learning/data-analysis05'
                        }
                    ]
                }
            ],
            '/408/': [{
                text: 'C 程序设计',
                collapsible: true,
                items: [{
                        text: '01 - C 语言导论',
                        link: '/408/c-language01'
                    },
                    {
                        text: '02 - 数据结构',
                        link: '/408/c-language02'
                    },
                    {
                        text: '03 - 输入与输出',
                        link: '/408/c-language03'
                    },
                    {
                        text: '04 - 选择语句',
                        link: '/408/c-language04'
                    },
                    {
                        text: '05 - 循环语句',
                        link: '/408/c-language05'
                    },
                    {
                        text: '06 - 数组',
                        link: '/408/c-language06'
                    },
                    {
                        text: '07 - 函数',
                        link: '/408/c-language07'
                    },
                    {
                        text: '08 - 指针',
                        link: '/408/c-language08'
                    },
                    {
                        text: '09 - 自定义数据类型',
                        link: '/408/c-language09'
                    },
                    {
                        text: '10 - 文件操作',
                        link: '/408/c-language10'
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
            }],
            '/tools-tips/': [{
                    text: '工具',
                    collapsible: true,
                    items: [{
                            text: '01 - 笔记软件推荐',
                            link: '/tools-tips/tools01'
                        }
                    ]
                },
                {
                    text: '技巧',
                    collapsible: true,
                    items: [{
                            text: '01 - Git 规范',
                            link: '/tools-tips/tips01'
                        },
                        {
                            text: '02 - otf 转 ttf',
                            link: '/tools-tips/tips02'
                        }
                    ]
                }
            ],

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