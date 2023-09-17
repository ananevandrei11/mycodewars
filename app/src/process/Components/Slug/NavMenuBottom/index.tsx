import { useState } from "react";
import Head from "next/head";
import { Poppins } from "@next/font/google";
import clsx from "clsx";
import { Container } from "@chakra-ui/react";
import style from "./style.module.css";
import { PageProps } from "../../types";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

type NavItem = {
  name: string;
  icon: string;
  href: string;
};

const NAV_ITEM_IN_LIST = [
  { icon: "ri-home-5-line", name: "Home", href: "home" },
  { icon: "ri-user-2-line", name: "User", href: "user" },
  { icon: "ri-chat-3-line", name: "Message", href: "message" },
  { icon: "ri-mail-open-line", name: "Mail", href: "mail" },
  { icon: "ri-settings-line", name: "Settings", href: "settings" },
];

const IconNavIndicator = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="94"
    height="56"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="47" cy="28" rx="24" ry="28" />
    <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z" />
    <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z" />
  </svg>
);

const Nav = ({ list }: { list: NavItem[] }) => {
  const [active, setActive] = useState<string>(list.slice(0, 1)[0].href);

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {list.map((i) => (
          <li key={i.name} className={style.item}>
            <a
              href={`#${i.href}`}
              className={clsx(style.link, {
                [style.activeLink]: active === i.href,
              })}
              onClick={() => setActive(i.href)}
            >
              <i className={clsx(i.icon, style.icon)}></i>
              <span className={style.name}>{i.name}</span>
            </a>
          </li>
        ))}

        <IconNavIndicator className={style.indicator} />
      </ul>
    </nav>
  );
};

const Main = ({ list }: { list: NavItem[] }) => (
  <main className={style.main}>
    {list.map((i) => (
      <section key={i.name} id={i.href} className={style.section}>
        <h2 className={style.title}>{i.name}</h2>
      </section>
    ))}
  </main>
);

const NavMenuBottom = ({ page }: PageProps) => (
  <>
    <Head>
      <title>{page.name}</title>
    </Head>
    <div className={clsx(poppins.className, style.root)}>
      <Nav list={NAV_ITEM_IN_LIST} />
      <Main list={NAV_ITEM_IN_LIST} />
    </div>
  </>
);

export default NavMenuBottom;
