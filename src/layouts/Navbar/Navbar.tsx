"use client";
import { UseTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { Icon, Text } from "@/components";
import { IParams } from "@/typescript";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

interface Props {
  params: IParams;
}

export default function Navbar({ params }: Props) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    function handleScroll() {
      const { scrollY } = window;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  /* ------------------------------ translations ------------------------------ */
  const { t } = UseTranslation(params.lang);
  const links = {
    home: {
      name: t("navLinks.home"),
      href: "#home",
    },
    about: {
      name: t("navLinks.about"),
      href: "#about",
    },
    methodology: {
      name: t("navLinks.methodology"),
      href: "#methodology",
    },
    services: {
      name: t("navLinks.services"),
      href: "#services",
    },
    contact: {
      name: t("navLinks.contact"),
      href: "#contact",
    },
  };

  const pathname = usePathname();

  return (
    <nav
      className={styles.nav}
      style={{
        backgroundColor:
          isOpen && isScrolled
            ? "var(--color-dark)"
            : isOpen && !isScrolled
              ? "var(--color-light)"
              : !isOpen && isScrolled
                ? "var(--color-dark)"
                : "transparent",
      }}
    >
      <Text
        tag="span"
        family="title"
        transform="uppercase"
        color={isScrolled ? "light" : "dark"}
        text="haku"
      />

      <div
        className={styles.linksContainer}
        style={{
          left: isOpen ? 0 : "-100%",
          opacity: isOpen ? 1 : 0,
          backgroundColor: isScrolled
            ? "var(--color-dark-transparent)"
            : "var(--color-light-transparent)",
        }}
      >
        {/* ---------------------------------- links --------------------------------- */}
        {Object.values(links).map((link) => {
          const key = `nav-link-${link.href}`;
          const href =
            link.href === "#contact"
              ? `${link.href}`
              : `/${params.lang}/home/${link.href}`;
          const text = link.name;

          return (
            <Link
              key={key}
              href={href}
              className={styles.anchor}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Text
                tag="span"
                color={isScrolled ? "light" : "dark"}
                text={text}
              />
            </Link>
          );
        })}

        {/* ---------------------------- language switcher --------------------------- */}
        <div>
          {languages.map((lang, index) => {
            const key = `lang-link-${lang}`;
            const text = lang;
            const currentPathname = pathname
              .split("/")
              .filter(Boolean)
              .slice(1)
              .join("/");
            const href = `/${lang}/${currentPathname}`;

            return (
              <React.Fragment key={key}>
                <Link href={href} className={styles.anchor}>
                  <Text
                    tag="span"
                    family="title"
                    color={
                      params.lang === lang
                        ? "primary"
                        : isScrolled
                          ? "light"
                          : "dark"
                    }
                    transform="uppercase"
                    text={text}
                  />
                </Link>
                {/* Add a slash if it is not the last element */}
                {index < languages.length - 1 && (
                  <Text
                    tag="span"
                    family="title"
                    color={isScrolled ? "light" : "dark"}
                    text="/"
                    className={styles.separator}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ------------------------------ mobile icons ------------------------------ */}
      <div className={styles.icons} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Icon as="close" color={isScrolled ? "light" : "dark"} />
        ) : (
          <Icon as="menu" color={isScrolled ? "light" : "dark"} />
        )}
      </div>
    </nav>
  );
}
