# Test task Junior Vue.js developer

Hi! I am a beginner web developer with little experience on real projects (4 months). My knowledge is mainly focused on the front-end part, but I also know how to manage the back-end part. More information about my knowledge and me in general in my resume.

For the this task, the following was created:

- a field for entering the name of the task;
- a field for entering a description of the task(*);
- a button to add a task to the array of tasks;
- a table with a name, description, a completion checkbox and two buttons to change(*) and delete each task;
- when changing a task, it is possible to cancel the change(*);
- button to delete all tasks (for deletion, you need to confirm your intentions in the window that appears)(*);
- adaptability was created for the site(*);
- custom components and layouts;
- made a limit on the number of characters (to preserve readability)(*);
- restriction on the possibility of creating/changing a task without specifying its name (a warning will be displayed)(*);
- if the user does not specify a description of the task, it will automatically be replaced with the inscription "no description"(*).

(*) - creating or completing these tasks was not necessary in the task (I just wanted to practice and make this "website" better)

The following technologies were used in the work:

- Vue.js
- Nuxt 3
- Tailwind CSS

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
```

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
# pnpm
pnpm run dev
# yarn
yarn dev
```

## About development

It was a good project to remember the forgotten, it was also interesting to think about the most user-friendly interface. At first, I concentrated on creating the necessary functional possibilities, after which I implemented the ones that were not noted (which are more necessary to increase usability). Then once again check everything for work and began to think about the design and its options, but settled on what would be the easiest to adapt to mobile devices and understandable for the user. Created adaptability and uploaded it to GitHub (But checked everything again before sending :). 

## More about how it work

- add button - through the .push function;
- checkbox state - when the value changes, it calls the function of saving to localStorage;
- change button - the first button enters all the values ​​in the fields, and the confirmation button finds the necessary task that need changing by ID and fills in the values ​​from the fields;
- change button - through the .filter function by passed ID;
- delete all task button - through the .confirm function with on confirm calls function ClearAllTasks that clears all task in array and in localStorage by .removeItem function;

Thank you for reviewing my application!
