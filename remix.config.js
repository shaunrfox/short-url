const packageJson = ("./package.json");

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  ...Object.keys(packageJson.dependencies || {}).filter((dep) =>
    dep.startsWith("react-native"),
  ),
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
