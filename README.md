# 张烈教授个人学术网站

这是一个原生 HTML / CSS / JavaScript 构建的中英双语静态网站，可直接部署到 GitHub Pages、Netlify、Vercel 或校内服务器。网站在图片和视频尚未补齐时会自动显示档案式占位视觉，不会出现破图。

《资料汇总》中六个代表项目的图片与详细内容已经接入网站。提交老师检查前，请同时参考 `内容核对清单.md`。

## 本地打开

推荐在项目目录运行静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。也可以直接双击 `index.html` 打开。

## 文件结构

```text
index.html              页面骨架与 SEO
css/style.css           视觉与响应式样式
js/main.js              页面渲染与交互
data/content.js         履历、论文、课题、标准、荣誉等内容数据
assets/images/          Hero、头像和项目图片
assets/videos/          Hero 和项目视频
assets/documents/       可公开下载的文档
```

## 替换导师头像

将头像保存为：

```text
assets/images/profile/portrait.jpg
```

建议使用竖版 `4:5` 图片。

## 添加 Hero 图片或视频

Hero 桌面端优先使用视频，视频不存在时自动使用图片，再缺失时显示设计占位。移动端只加载图片。

```text
assets/images/hero/hero-01.jpg
assets/videos/hero.mp4
```

视频建议使用网页优化后的 MP4，静音内容，控制文件体积。

## 补充项目图片

将图片放入项目 slug 对应目录，例如：

```text
assets/images/works/confucius-museum/cover.jpg
assets/images/works/confucius-museum/01.jpg
assets/images/works/confucius-museum/02.jpg
```

然后在 `data/content.js` 的 `WORK_DETAILS` 中修改：

```js
coverImage: "assets/images/works/confucius-museum/cover.jpg",
galleryImages: [
  "assets/images/works/confucius-museum/01.jpg",
  "assets/images/works/confucius-museum/02.jpg"
]
```

## 补充项目视频

将视频放入：

```text
assets/videos/works/confucius-museum.mp4
```

然后在 `data/content.js` 的对应项目中设置：

```js
videoUrl: "assets/videos/works/confucius-museum.mp4"
```

## 新增项目

1. 在 `data/content.js` 的 `WORKS` 数组中增加项目基本信息。
2. 在 `data/content.js` 的 `WORK_IDS` 中按同样顺序增加唯一 slug。
3. 如需补充地点、简介、图片或视频，在 `WORK_DETAILS` 中增加同名 slug 配置。
4. 如需在首页六个重点项目中展示，将 slug 加入 `FEATURED_IDS`。

每个项目数据已预留 `slug`、`coverImage`、`galleryImages`、`videoUrl`、`videoPoster`、`projectUrl` 与 `status`，后续可扩展为 `works/slug.html` 独立详情页。

## 修改中英文内容

履历和项目扩展内容均集中在 `data/content.js`。中文字段通常以 `zh` 或 `Zh` 结尾，英文字段以 `en` 或 `En` 结尾，请保持两种语言严格对应。`js/main.js` 主要负责页面渲染与交互逻辑。

首页右侧的近期活动、出席信息与采访内容位于 `data/content.js` 的 `RECENT_NEWS` 数组。新增内容时填写中英文日期、类型、标题；公开链接确认后可填入 `url` 字段。

## 素材缺失

项目的 `coverImage`、`galleryImages` 或 `videoUrl` 暂时为空，或文件路径尚不存在时，网站会自动显示占位视觉并隐藏无效媒体入口。

## 部署

- GitHub Pages：推送到仓库后，在仓库 Settings → Pages 中选择分支根目录。
- Netlify：将整个目录拖入 Netlify，或连接 Git 仓库，发布目录设为项目根目录。
- Vercel：导入 Git 仓库，Framework Preset 选择 `Other`，输出目录保持项目根目录。

部署前请确认公开联系方式与所有素材版权。
