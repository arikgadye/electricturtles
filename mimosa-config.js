exports.config = {
  modules:[
  "copy",
  "rename",
  "less",
  "hogan-static",
  "minify-html",
  "minify-img",
  "minify-css"],
  copy: {
    extensions:["png", "html","js", "jpg", "ico",
    "eot", "svg", "ttf", "woff", "woff2"]
  },
  minifyHtml: {
    options: {
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true
    }
  },
  minifyImg: {
    options: {
      interlaced: false,
      progressive: false,
      optimizationLevel: 2
    },
    exts: [ "gif","jpeg","jpg","png" ]
  },
  rename: {
    map:[
    [/public\/html\/([a-z]+)\.html$/, "$1.html"]
    ]
  },
  hoganStatic: {
    partials:["html/partials"],
    globals: {
      version: "2.3.32"
    },
    contexts: {
      press: {
        title:"ELECTRIC TURTLES Contact",
        desc:"ELECTRIC TURTLES Contact",
      },
      live: {
        title:"ELECTRIC TURTLES Live",
        desc:"ELECTRIC TURTLES Live",
      },
      pictures: {
        title:"ELECTRIC TURTLES Pictures",
        desc:"ELECTRIC TURTLES Pictures",
      },
      videos: {
        title:"ELECTRIC TURTLES Videos",
        desc:"ELECTRIC TURTLES Videos",
      },
      index: {
        title:"ELECTRIC TURTLES OFFICIAL WEBSITE",
        desc: "A lightning-fast build tool for modern web development. Mimosa includes support for JavaScript, CSS, and template compilers, bower, linting, optimization, serving, RequireJS support, and Live Reload. It is also modular and pluggable for authoring your own functionality.",
      }
    }
  }
}
