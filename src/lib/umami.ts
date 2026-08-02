export const UMAMI_SRC = process.env.UMAMI_DOMAIN || "";

export const UMAMI_ORIGIN = URL.canParse(UMAMI_SRC)
  ? new URL(UMAMI_SRC).origin
  : "";