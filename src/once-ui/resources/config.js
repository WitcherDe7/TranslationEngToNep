const baseURL = "translation-git-main-iamdeenes-projects.vercel.app";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Transaltion Eng to Nep Word Meaning",
  description:
    "Transaltion Eng to Nep Word Meaning",
};

// default open graph data
const og = {
  title: "Transaltion Eng to Nep Word Meaning",
  description: "Transaltion Eng to Nep Word Meaning",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Transaltion Eng to Nep Word Meaning",
  description: "Transaltion Eng to Nep Word Meaning",
  email: "",
};

// social links
const social = {
  twitter: "https://www.twitter.com/falwickx",
  linkedin: "https://www.linkedin.com/company/deenesacharya",
  discord: "https://discord.com/invite/",
};

export { baseURL, style, meta, og, schema, social };
