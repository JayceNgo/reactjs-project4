import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
// reset css
import "./css/reset.css";
// App CSS
import "./css/app.css";

export const links: Route.LinksFunction = () => [
    // Favicon links
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "57x57",
    //     href: "/favicon/apple-icon-57x57.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "60x60",
    //     href: "/favicon/apple-icon-60x60.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "72x72",
    //     href: "/favicon/apple-icon-72x72.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "76x76",
    //     href: "/favicon/apple-icon-76x76.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "114x114",
    //     href: "/favicon/apple-icon-114x114.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "120x120",
    //     href: "/favicon/apple-icon-120x120.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "144x144",
    //     href: "/favicon/apple-icon-144x144.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "152x152",
    //     href: "/favicon/apple-icon-152x152.png",
    // },
    // {
    //     rel: "apple-touch-icon",
    //     sizes: "180x180",
    //     href: "/favicon/apple-icon-180x180.png",
    // },
    // {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "192x192",
    //     href: "/favicon/android-icon-192x192.png",
    // },
    // {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "32x32",
    //     href: "/favicon/favicon-32x32.png",
    // },
    // {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "96x96",
    //     href: "/favicon/favicon-96x96.png",
    // },
    // {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "16x16",
    //     href: "/favicon/favicon-16x16.png",
    // },
    // { rel: "manifest", href: "/favicon/manifest.json" },

    // Google Fonts
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap",
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <Meta />
                <title>Lucy </title>
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
