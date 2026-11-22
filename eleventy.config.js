export default function (eleventyConfig) {
  // Copied as-is, never processed as templates.
  eleventyConfig.ignores.add("src/admin/**");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Player data files live in src/_data/players/*.json (one per player, edited via Sveltia CMS).
  const list = (players) => Object.values(players || {});

  // Profiles are listed alphabetically by last name.
  eleventyConfig.addFilter("byLastName", (players) =>
    list(players).sort(
      (a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName)
    )
  );

  // The "Find Player" menu and the printable sheet go in jersey order.
  eleventyConfig.addFilter("byJersey", (players) =>
    list(players).sort((a, b) => Number(a.jersey) - Number(b.jersey))
  );

  // Group a jersey-sorted roster into [{ year, players }] for the "Find Player" menu.
  eleventyConfig.addFilter("byClassYear", (players) => {
    const groups = new Map();
    for (const p of players) {
      if (!groups.has(p.classYear)) groups.set(p.classYear, []);
      groups.get(p.classYear).push(p);
    }
    return [...groups].sort(([a], [b]) => a - b).map(([year, players]) => ({ year, players }));
  });

  eleventyConfig.addFilter("telHref", (s) => "tel:" + String(s || "").replace(/[^\d+]/g, ""));

  // Font sizes scale down for long text so it fits its box.
  eleventyConfig.addFilter("positionSize", (s = "") =>
    s.length <= 16 ? "text-3xl" : s.length <= 22 ? "text-2xl" : "text-xl"
  );
  eleventyConfig.addFilter("majorSize", (s = "") => (s.length <= 17 ? "text-xs" : "text-[8px]"));
  eleventyConfig.addFilter("isNA", (s) => /^n\/?a$/i.test(String(s || "").trim()));

  return {
    dir: { input: "src", output: "_site" },
    htmlTemplateEngine: "njk",
  };
}
