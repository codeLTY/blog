module.exports = {
    title: '@24', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '@24的前端记录', // meta 中的描述文字，用于SEO
    base: '/blog/',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            {rel: 'icon', href: '/lty.jpg'}
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    //下面涉及到的md文件和其他文件的路径下一步再详细解释
    themeConfig: {
        logo: '/lty.jpg',  //网页顶端导航栏左上角的图标

        //顶部导航栏
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            {text: '首页', link: '/'},

            /*格式二：添加下拉菜单，link指向的文件路径
            {
                text: '分类',  //默认显示
                ariaLabel: '分类',   //用于识别的label
                items: [
                    {text: '文章', link: '/pages/directory/test1.md'},
                    //点击标签会跳转至link的markdown文件生成的页面
                    {text: '琐碎', link: '/pages/life/test4.md'},
                ]
            },*/
            {text: '文章', link: '/pages/directory/test1.md'},
            {text: '生活', link: '/pages/life/test4.md'},

            //格式三：跳转至外部网页，需http/https前缀
            {text: 'Github', link: 'https://github.com/codeLTY'},
        ],

        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/directory/': [
                {
                    title: 'HTML',   // 一级菜单名称
                    collapsable: true, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['test1.md','HTML5和HTML4'],  //菜单名称为'子菜单1'，跳转至/pages/directory/test1.md
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['test2.md', '清除浮动方法']
                        ['test3.md', '让一个div水平垂直居中']
                    ]
                },
                {
                    title: 'JS基础',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],

            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        }
    }
}
