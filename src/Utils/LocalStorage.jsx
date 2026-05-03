const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create responsive landing page UI",
        taskDate: "2026-04-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue",
        taskDate: "2026-04-18",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with API",
        taskDate: "2026-04-22",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ahmed",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login UI",
        taskDescription: "Create login form with validation",
        taskDate: "2026-04-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "CSS Optimization",
        taskDescription: "Improve styling performance",
        taskDate: "2026-04-17",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deployment failed due to config issue",
        taskDate: "2026-04-19",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard UI",
        taskDate: "2026-04-23",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup Routing",
        taskDescription: "Implement React Router",
        taskDate: "2026-04-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer",
        taskDescription: "Adjust footer layout",
        taskDate: "2026-04-16",
        category: "UI Fix"
      }
    ]
  },
  {
    id: 4,
    firstName: "Hassan",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all endpoints",
        taskDate: "2026-04-24",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Components",
        taskDescription: "Unit test React components",
        taskDate: "2026-04-18",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Build Error",
        taskDescription: "Webpack build failed",
        taskDate: "2026-04-19",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Design user profile UI",
        taskDate: "2026-04-25",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Auth",
        taskDescription: "Setup login authentication",
        taskDate: "2026-04-23",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Button UI",
        taskDescription: "Improve button styling",
        taskDate: "2026-04-15",
        category: "UI Fix"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return {employees,admin}
};