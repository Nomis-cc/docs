import { ImageResponse, NextRequest } from "next/server";
import { CSSProperties } from "react";

export const runtime = "edge";

const rem = (size?: number) => 32 * (size ?? 1);

const rgba = (color: string, opacity: number) => {
  let _color: string;

  if (color === "white") _color = "#ffffff";
  else if (color === "black") _color = "#000000";
  else _color = color;

  const hexOpacity = Math.round((opacity * 255) / 100).toString(16);
  const hexColor = _color.replace(/^#/, "");
  const fullHex = hexColor + hexOpacity;

  return `#${fullHex}`;
};

const colors = {
  bg: "#222",

  accent: rgba("white", 100),
  primary: rgba("white", 80),
  secondary: rgba("white", 60),
  hidden: rgba("white", 40),

  accentAlt: rgba("black", 100),
};

const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.bg,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: rem(2),
    gap: rem(1),
    justifyContent: "space-between",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  logoMark: {
    display: "flex",
    width: rem(4.25),
    height: rem(4.25),
  },

  logoType: {
    display: "flex",
    fontSize: rem(1),
    color: colors.accentAlt,
    padding: `${rem(0.5)}px ${rem(1)}px`,
    lineHeight: "1em",
    background: colors.accent,
    borderRadius: 999,
  },

  body: {
    display: "flex",
    flexDirection: "column",
    gap: rem(0.75),
  },

  title: {
    display: "flex",
    fontSize: rem(2.5),
    color: colors.accent,
    lineHeight: "1em",
    fontWeight: "bold",
  },

  subtitle: {
    display: "flex",
    fontSize: rem(1.5),
    color: colors.hidden,
    lineHeight: "1em",
  },
};

const handler = async (req: NextRequest) => {
  const title = req.nextUrl.searchParams.get("title") ?? "Nomis Docs";
  const subtitle = req.nextUrl.searchParams.get("subtitle");
  const url = req.nextUrl.origin;

  return new ImageResponse(
    (
      <div
        style={{ ...styles.wrapper, background: `url(${url}/app/dots-bg.svg)` }}
      >
        <div style={styles.header}>
          <img
            style={styles.logoMark}
            src={`${url}/logos/nomis-blueprint.svg`}
          />
          <div style={styles.logoType}>Nomis Docs</div>
        </div>

        <div style={styles.body}>
          {subtitle && <div style={styles.subtitle}>{`${subtitle} /`}</div>}
          <div style={styles.title}>{title}</div>
        </div>
      </div>
    ),
    {}
  );
};

export default handler;
