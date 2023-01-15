import { Footer } from "@components/layout/Footer";
import DashboardLogin from "@components/layout/DashboardLogin";
import Image from "next/image";
import Link from "next/link";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { footer } from "./src/footer";

function ThemeToggle() {
    const [current, setCurrent] = useState<"light" | "dark" | undefined>(
        undefined
    );
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        if (resolvedTheme != undefined)
            setCurrent(resolvedTheme as "light" | "dark");
    }, [resolvedTheme]);

    return (
        <button
            aria-label="toggle dark mode"
            className="text-xl"
            onClick={() => setTheme(current === "dark" ? "light" : "dark")}
        >
            {current === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
    );
}

const config: DocsThemeConfig = {
    head: (
        <>
            <link rel="shortcut icon" href="/img/logo_128x128.png" />
        </>
    ),
    logo: (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.75rem",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Image
                alt="YEE式機器龍"
                src="/img/logo_128x128.png"
                width={32}
                height={32}
                style={{
                    borderRadius: "50%",
                }}
            />
            <strong className="text-lg">Yeecord</strong>
        </div>
    ),
    search: {
        placeholder: "搜尋文檔",
    },
    useNextSeoProps: () => {
        return {
            titleTemplate: "%s – 萬中選一的 Discord 中文機器人",
            twitter: {
                cardType: "summary_large_image",
            },
            openGraph: {
                siteName: "YEE式機器龍 – 萬中選一的 Discord 中文機器人",
                type: "website",
                images: [
                    {
                        url: "/img/branding.png",
                        alt: "YEE式機器龍",
                    },
                ],
            },
        };
    },
    docsRepositoryBase: "https://github.com/yeecord/docs",
    navbar: {
        extraContent: (
            <div className="flex flex-row gap-3">
                <ThemeToggle />
                <Link
                    href="https://app.yeecord.com/"
                    className="hidden md:block"
                >
                    <DashboardLogin />
                </Link>
            </div>
        ),
    },
    footer: {
        component: <Footer categories={footer} />,
    },
    project: {
        link: "https://github.com/yeecord",
    },
    i18n: [
        {
            locale: "zh",
            text: "繁體中文",
        },
    ],
    feedback: {
        content: "有疑問？給我們反饋 →",
    },
    toc: {
        extraContent: <></>,
        title: "目錄",
    },
    editLink: {
        text: "在 github 上編輯此頁面 →",
    },
    banner: {
        key: "new-year",
        text: <span>🎉 2023 新年快樂</span>,
    },
    gitTimestamp: ({ timestamp }) => {
        return (
            <p className="text-lg">
                最後更新於 {timestamp.toLocaleDateString()}
            </p>
        );
    },
};

export default config;
