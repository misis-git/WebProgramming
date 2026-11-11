import { defineConfig } from '@quasar/app-vite'

export default defineConfig(() => {
  return {
    boot: [],

    css: ['app.sass'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node22',
      },
      vueRouterMode: 'hash',
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {},
      plugins: [],
    },

    animations: [],
  }
})

