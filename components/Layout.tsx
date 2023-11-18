import { NextSeo } from "next-seo";
// import Head from "next/head";
import Menu from "../components/Menu";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function Layout({ children }: Props) {
  let href = "";
  if (typeof window !== "undefined") {
    href = window.location.href;
  }
  return (
    <>
      <NextSeo
        title="Nextor - A Next Gen Code Editor"
        description="Nextor is a cutting-edge code editor designed to redefine the development experience for programmers. Packed with innovative features and a user-centric design, Nextor brings a new dimension to coding productivity. With its intuitive interface and advanced functionality, Nextor empowers developers to write, edit, and debug code with unprecedented efficiency."
        canonical={href}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.png",
          },
        ]}
      />
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>

        <div className="relative">
          <Menu />
          {children}
        </div>
      </div>
    </>
  );
}
