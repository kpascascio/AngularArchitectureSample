export * from './admin.nav';
export * from './admissions.nav';
export * from './applicant.nav';
export * from './coach.nav';
export * from './instructor.nav';
export * from './student.nav';
export * from './alumni.nav';



// No role
export const navItems =
  [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Register',
      url: '/register',
      icon: 'icon-star'
    },
    {
      name: 'Student',
      url: '/student',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Dash',
          url: '/student/dash',
          icon: 'icon-puzzle'
        },
        {
          name: 'Todos',
          url: '/student/todos',
          icon: 'icon-puzzle'
        },
      ]
    },

    {
      name: 'Demographics',
      url: '/demographics',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Demographics Dash',
          url: '/demographics',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Scholarships',
      url: '/scholarships',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Scholarships Dash',
          url: '/scholarships',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        },
      ]
    },
  ];
