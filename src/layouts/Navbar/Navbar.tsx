"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Icon, Text } from "@/components";
export default function Navbar() {
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
  const links = [
    {
      name: "anchot",
      pathname: "pathname",
    },
    {
      name: "anchot",
      pathname: "pathname",
    },
    {
      name: "anchot",
      pathname: "pathname",
    },
    {
      name: "anchot",
      pathname: "pathname",
    },
  ];
  const langauges = ["es", "en"];
  const param = "es";
  return (
    <nav
      className={styles.nav}
      style={{
        backgroundColor: isScrolled ? "var(--color-dark)" : "transparent",
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
        {links.map((link) => {
          const key = `nav-link-${link.pathname}`;
          const href = link.pathname;
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
          {langauges.map((lang, index) => {
            const key = `lang-link-${lang}`;
            const text = lang;
            const href = lang;
            return (
              <React.Fragment key={key}>
                <Link href={href} className={styles.anchor}>
                  <Text
                    tag="span"
                    family="title"
                    color={
                      param === lang ? "primary" : isScrolled ? "light" : "dark"
                    }
                    transform="uppercase"
                    text={text}
                  />
                </Link>
                {/* Add a slash if it is not the last element */}
                {index < langauges.length - 1 && (
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
