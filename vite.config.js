
// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';


export default defineConfig({
  base: '/point-shooter/', // set the base path
  // other configurations
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
    extensions: ['.js', '.ts'],
  },
  
  esbuild: {
    loader: 'js', // using 'js' loader for JavaScript
    include: [
      // include all .js, .ts files
      'src/**/*.js',

      // 'src/**/*.ts',
    ],
  },
  build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        js: resolve(__dirname, 'src/JS/index.html'),
        mozillaDev: resolve(__dirname, 'src/JS/MozillaDev/index.html'),
        responsiveWeb: resolve(__dirname, 'src/JS/ResponsiveWeb/index.html'),
        algDataStruct: resolve(__dirname, 'src/JS/Alg&DataStruct/index.html'),
        ytCourses: resolve(__dirname, 'src/JS/YTCourses/index.html'),
        ytCoursesFrankLabsCourse: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/index.html'),
        mozillaDevSynth: resolve(__dirname, 'src/JS/MozillaDev/Synth/index.html'),
        responsiveWebCafeMenu: resolve(__dirname, 'src/JS/ResponsiveWeb/CafeMenu/index.html'),
        responsiveWebCatPhotoApp: resolve(__dirname, 'src/JS/ResponsiveWeb/CatPhotoApp/index.html'),
        responsiveWebColoredMarkers: resolve(__dirname, 'src/JS/ResponsiveWeb/ColoredMarkers/index.html'),
        responsiveWebFlexboxPhotoGallery: resolve(__dirname, 'src/JS/ResponsiveWeb/FlexboxPhotoGallery/index.html'),
        responsiveWebNutritionLabel: resolve(__dirname, 'src/JS/ResponsiveWeb/NutritionLabel/index.html'),
        responsiveWebPiano: resolve(__dirname, 'src/JS/ResponsiveWeb/Piano/index.html'),
        responsiveWebRegistrationForm: resolve(__dirname, 'src/JS/ResponsiveWeb/RegistrationForm/index.html'),
        responsiveWebRothkoPainting: resolve(__dirname, 'src/JS/ResponsiveWeb/RothkoPainting/index.html'),
        responsiveWebSurveyForm: resolve(__dirname, 'src/JS/ResponsiveWeb/SurveyForm/index.html'),
        algDataStructMusicPlayer: resolve(__dirname, 'src/JS/Alg&DataStruct/MusicPlayer/index.html'),
        algDataStructRolePlayingGame: resolve(__dirname, 'src/JS/Alg&DataStruct/RolePlayingGame/index.html'),
        ytCoursesFrankLabsCoursePart01: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part01/index.html'),
        ytCoursesFrankLabsCoursePart02: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part02/index.html'),
        ytCoursesFrankLabsCoursePart03: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part03/index.html'),
        ytCoursesFrankLabsCoursePart04: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part04/index.html'),
        ytCoursesFrankLabsCoursePart05: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part05/index.html'),
        ytCoursesFrankLabsCoursePart06: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part06/index.html'),
        contact: resolve(__dirname, 'src/Contact/index.html')
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
