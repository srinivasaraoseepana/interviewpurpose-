// data/courses.ts
export const courses = [
  {
    label: "Frontend",
    children: [
      { label: "HTML" },
      { label: "CSS" },
      {
        label: "JavaScript",
        children: [
          {
            label: "React JS",
            children: [
              {
                label: "Next.js",
                children: [
                  { label: "App Routing" },
                  { label: "Image Optimization" },
                ],
              },
              { label: "TypeScript" },
              { label: "Material UI" },
            ],
          },
          {
            label: "Angular JS",
            children: [{ label: "RxJS" }, { label: "NgRx" }],
          },
          {
            label: "Vue JS",
            children: [{ label: "Vuex" }, { label: "Composition API" }],
          },
        ],
      },
    ],
  },
  {
    label: "Backend",
    children: [
      {
        label: "Node.js",
        children: [
          {
            label: "Express",
            children: [
              { label: "Middlewares" },
              { label: "Routing" },
              { label: "JWT Auth" },
              { label: "Validation" },
            ],
          },
          { label: "NestJS" },
          { label: "MongoDB" },
        ],
      },
      {
        label: "Java",
        children: [
          { label: "Spring Boot" },
          { label: "JPA" },
          { label: "Hibernate" },
        ],
      },
    ],
  },
];
