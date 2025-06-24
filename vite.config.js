import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


// -----------

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/boards': {
//         target: 'https://front-mission.bigs.or.kr',
//         changeOrigin: true,
//         secure: false,
//       },
//       '/auth': {
//         target: 'https://front-mission.bigs.or.kr',
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// });