import Link from "next/link";
import { useRouter } from "next/router";

import React, { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Link {
  href: string;
  texto: string;
}

export const ActiveLink: FC<Link> = ({ href, texto }: Link) => {
  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{texto}</a>
    </Link>
  );
};
