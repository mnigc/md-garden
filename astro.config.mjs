import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
mdx()

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Digital Garden',
    favicon: './src/assets/my-logo.svg',
    social: {
      github: 'https://github.com/mnigc'
    },
    components: {
      // 重写默认的 `TwoColumnContent` 组件。
      TwoColumnContent: './src/components/TwoColumn.astro',
      Footer: './src/components/Footer.astro'
    },

    logo: {
      src: './src/assets/my-logo.svg'
    },
    
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    customCss: [
    // 自定义 CSS 文件的相对路径
    './src/styles/customCss.css']
  }), 
  
 ]
});