import {SidebarConfig4Multiple} from "vuepress/config";

import {Reading, Photography, Web, Mathematics} from "./sidebars/sideBar";
// @ts-ignore
export default {
    "/Reading/": Reading,
    "/Photography/": Photography,
    "/Web/": Web,
    "/Mathematics/": Mathematics,
    // 降级，默认根据文章标题渲染侧边栏
    // "/": "auto",
} as SidebarConfig4Multiple;