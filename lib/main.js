var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://github.com/michalbe/tv-series/compare/gh-pages...master?expand=1",
  contentScript: 'window.alert("Page matches ruleset");'
});
