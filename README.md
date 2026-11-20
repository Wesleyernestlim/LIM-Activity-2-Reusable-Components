# StudentHub

A simple student information website built with Nuxt and Tailwind CSS. It demonstrates reusable components and props: the same header, footer, cards, and buttons are written once and used on multiple pages.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
student-info/
├── app/
│   ├── app.vue
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── StudentCard.vue
│   │   ├── InfoCard.vue
│   │   └── AppButton.vue
│   └── pages/
│       ├── index.vue
│       ├── students.vue
│       └── about.vue
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

## What each file does

### Main file

| File | Purpose |
|---|---|
| `app/app.vue` | The main layout. It places `AppHeader` at the top, the current page in the middle (`<NuxtPage />`), and `AppFooter` at the bottom, so the header and footer appear on every page. |

### Components (`app/components/`)

| File | Purpose |
|---|---|
| `AppHeader.vue` | The website navigation with links to Home, Students, and About. |
| `AppFooter.vue` | The website footer shown at the bottom of every page. |
| `StudentCard.vue` | Displays one student's information. It receives its data through props: `name`, `studentId`, `course`, `year`, and `email`. |
| `InfoCard.vue` | Displays a title and a short description. It receives them through the `title` and `description` props. |
| `AppButton.vue` | A reusable button. The `label` prop sets its text and the `color` prop sets its color (matcha, sakura, latte, or forest). The optional `to` prop turns it into a link to another page. |

### Pages (`app/pages/`)

| File | Purpose |
|---|---|
| `index.vue` | The home page. It uses `InfoCard` three times and `AppButton` for the navigation buttons. |
| `students.vue` | The students page. It keeps a list of students and uses `StudentCard` with `v-for` to display a card for each one. |
| `about.vue` | The about page. It uses `InfoCard` and shows `AppButton` in different colors. |

### Configuration files

| File | Purpose |
|---|---|
| `nuxt.config.ts` | The Nuxt settings. It enables the Tailwind CSS module. |
| `tailwind.config.ts` | Defines the custom matcha and sakura colors used in the design. |
| `package.json` | Lists the project's dependencies and the commands used to run it. |

## How components and props work

Components in `app/components/` are auto-imported by Nuxt, so they can be used in any page without an import statement. Props pass data into a component. For example:

```vue
<StudentCard name="Juan Dela Cruz" student-id="2024-0001" course="BS Information Technology" />
<AppButton label="See Students" color="matcha" />
```

The same component can show different content or colors depending on the props it receives. Changing a component file updates every page that uses it.