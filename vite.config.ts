import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  // GitHub Pages で公開する際にドメインをデフォルトのものにする場合
  // リポジトリと同じ名前にしないとデプロイ後に assets などを参照できなくなる
  base: '/isekai-atelier',
})
