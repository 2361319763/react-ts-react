import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command })=>{
  const root = process.cwd();

  const env = loadEnv(mode, root);
  
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_APP_ENV } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        // 设置别名
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      // Listening on all local IPs
      host: true,
      open: true,
      https: true,
      port: VITE_PORT,
      hmr:{
        overlay:false
      }
    },
  }
})
