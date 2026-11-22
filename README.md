# 2029CourageAcademy (team site)

Roster for the U16 NC Courage Academy (2029), NC Courage ECNL GU16. Built with [Eleventy](https://www.11ty.dev/)
and edited through [Sveltia CMS](https://sveltiacms.app/) at `/admin`.

This is the **`team-site`** branch. The `main` branch of the same repo is Audrey Derifaj's personal profile site;
don't merge the two.

## Editing content (no coding needed)

1. Go to `<team site URL>/admin/` and click **Sign In with GitHub**.
2. Open **Players**, pick a player (or click **New Player**), make changes, and click **Save**.
3. The site rebuilds automatically and goes live in a minute or two.

Each player has: Position, Jersey, Photo, High School, Class, GPA, Height, ACT/SAT (box label can be switched to
Clearing House or NCAA ID#), Major, Foot, Honors & Achievements, Email, Player Phone, Parents, Parent Phone,
Highlight Film Link, a Committed badge and Committed To. Blank fields show as TBD on the site.
**Site Settings** covers the header, head coach contact and footer.

Editors need a free GitHub account that has been invited to this repo as a collaborator with **Write** access.

## Where things live

| Path | What |
| --- | --- |
| `src/_data/players/*.json` | One file per player (what the CMS edits) |
| `src/_data/site.json` | Header, coach contact, footer |
| `src/index.njk` | Roster page template |
| `src/player-sheets.njk` | Printable roster page (`/player-sheets.html`) |
| `src/assets/` | CSS, JS, images (uploaded photos land in `src/assets/images/`) |
| `src/admin/config.yml` | CMS fields and labels |

Profiles are listed alphabetically by last name; the "Find Player" menu and printable sheet go by jersey number.

## Local development

```sh
npm install
npm start          # http://localhost:8080 (add --port=NNNN if 8080 is taken)
npm run build      # outputs to _site/
```
