import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaTags from "@/components/MetaTags";
import { ThemeProvider } from "next-themes";

const metaData = {
    title: "Windows 11",
    description: "Portfolio website Windows 11 made with Tailwind CSS and Next.js",
    url: "https://amine.im",
    image: "/static/images/background5.jpg",
    themeColor: "#ffffff",
    keywords: "key1, key2, key3, key4, key5, key6",
    author: "Amine Ouhani",
    charSet: "utf-8",
    language: "English",
    icons: [
        {
            src: "/favicon.ico",
            sizes: "32x32",
            type: "image/ico",
        },
    ],
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <MetaTags metaData={metaData} />
            </Head>

            <ThemeProvider defaultTheme="light" attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
