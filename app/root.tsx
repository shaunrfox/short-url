import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  // Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "@tamagui/core/reset.css";

import { TamaguiProvider } from "@tamagui/web";
import tamaguiConfig from "../tamagui.config";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
      </head>
      <body>
        <TamaguiProvider config={tamaguiConfig}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </TamaguiProvider>
      </body>
    </html>
  );
}
