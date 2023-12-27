// import { externalGlobalPlugin } from "esbuild-plugin-external-global";
// console.log("externalGlobalPlugin", externalGlobalPlugin);

// import EsmExternals from '@esbuild-plugins/esm-externals'
// import { build } from 'esbuild'

// console.log(EsmExternals);

// build({
//   plugins: [EsmExternals({ externals: ['react', 'react-dom'] })],
// })

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native-svg': '@tamagui/react-native-svg',
      '@expo/vector-icons': '@tamagui/proxy-worm'
    },
  }
}
