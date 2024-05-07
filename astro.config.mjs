import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";mdx()
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
    title: '',
    favicon: './public/my-logo.svg',
    plugins: [starlightImageZoom()],
    social: {
      github: 'https://github.com/mnigc'
    },

    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg',
    },
    
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },

    lastUpdated: true, // 开启最近更新时间

    pagination: false, // 关闭分页组件

    tableOfContents: {
      minHeadingLevel: 2, maxHeadingLevel: 6,
    },

    customCss: [
    // 自定义 CSS 文件的相对路径
    './src/styles/customCss.css'],
  }), 
 ]
});