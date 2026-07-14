# 数智氢芯官网 - 部署指南

## 方式一：GitHub + Vercel（推荐）

### 步骤 1：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 仓库名填写：`shuzhi-h2`
3. 选择 **Private** 或 **Public**
4. **不要**勾选 "Add a README file"
5. 点击 **Create repository**

### 步骤 2：推送代码到 GitHub

在 PowerShell 中运行：

```powershell
cd C:\Users\22014\.qclaw\workspace-op-5f04fe9a-0fae-4012-a46c-d9e235f99c8d\shuzhi-h2

git remote add origin https://github.com/你的用户名/shuzhi-h2.git
git branch -M main
git push -u origin main
```

> 如果提示登录，输入你的 GitHub 账号密码（密码需使用 Personal Access Token）

### 步骤 3：Vercel 一键部署

1. 打开 https://vercel.com
2. 点击 **Sign Up** → 选择 **Continue with GitHub**
3. 登录后点击 **Add New...** → **Project**
4. 选择你刚创建的 `shuzhi-h2` 仓库
5. 点击 **Deploy**
6. 等待 1-2 分钟，部署完成后会给你一个永久外网地址，如：
   - `https://shuzhi-h2.vercel.app`
   - 或自定义域名

---

## 方式二：Netlify（无需 GitHub）

1. 打开 https://app.netlify.com
2. 注册/登录后，直接把 `dist` 文件夹拖到页面上
3. 立即获得外网地址

---

## 方式三：Surge（最简单，命令行一键）

```powershell
cd C:\Users\22014\.qclaw\workspace-op-5f04fe9a-0fae-4012-a46c-d9e235f99c8d\shuzhi-h2
npx surge dist shuzhi-h2.surge.sh
```

首次使用会提示输入邮箱注册，之后会生成 `http://shuzhi-h2.surge.sh` 地址。

---

## 本地预览

```powershell
cd C:\Users\22014\.qclaw\workspace-op-5f04fe9a-0fae-4012-a46c-d9e235f99c8d\shuzhi-h2
npm run dev
```

访问 http://localhost:5177

---

## 生产构建

```powershell
npm run build
```

构建产物在 `dist/` 目录。

---

**推荐使用方式一（GitHub + Vercel）**，可以获得：
- ✅ 免费 HTTPS
- ✅ 自动部署（推送代码自动更新）
- ✅ 自定义域名绑定
- ✅ 预览环境
