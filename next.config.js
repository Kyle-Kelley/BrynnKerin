const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: "rqdshkzq4l5q",
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      "-yYthA8n0lfYKQwwGJN9mthkn5qS08RgJYCu7NbHZ08",
  },
});
