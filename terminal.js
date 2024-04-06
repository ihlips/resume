const Resume = Object.freeze({
  education:
    "JAMES MADISON UNIVERSITY\nUndergraduate Computer Science - BS Major, 2019-2023\nUndergraduate General Business - Minor, 2019-2023",
  activitiesAndProjects:
    "Software Engineering Scrum - Complex Number Calculator, Spring Semester 2021\nTook part in the development process of an Agile Scrum with a group of four others. Was in charge of designing and fabricating the GUI of our complex number calculator which was made with Java Swing. Delivered the product to the simulated business partner who received all the asked functionality out of our calculator.\n\nSorting Algorithm Efficiency, Fall Semester 2021\nWorked on a solo project where the time efficiency of multiple sorting algorithms were tested. Learned about the time complexities of those algorithms and implemented a program Merge sort and Insertion sort combined (Introspective Sort) to make the fastest sorting algorithm.\n\nSimulated y86 Processor, Fall Semester 2021\nUtilizing the instruction set of y86, a simpler version of x86, we developed a working processor in C. This processor was able to read in memory from the computer and change the memory in order to complete the set y86 instructions given.\n\nDecaf Compiler, Fall Semester 2022\nOver the course of the semester I implemented a lexer, parser, and static analyzer of a compiler. This compiler was for Decaf, a language similar to Java that is simplified in order to fit a college semester. We implemented the compiler in C.\n\nOpenMP Program, Spring Semester 2023\nUsed the OpenMP library in order to parallelize a program doing dense matrix operations. We used the OMP directives in order to delegate to the compiler where we wanted multiple threads to be used in order to speed up computation. This was done in C.",
  workExperience:
    "Intern, Flexwind 2022 Summer Internship Program. June 2022-August 2022\nPart of a team of four developing an application with Agile Scrum\nDeveloped an application for those with allergies\nCreated a website with Angular for prototype\nSponsored for a Security Clearance (In Process)\n\nServer, The Alamo Drafthouse, Loudoun, VA June 2021-Current\nResponsible for serving multiple theaters at the same time\nShared responsibility with other servers in theaters occupied by 80+ customers\nResponsible for maintaining cleanliness of theaters\nEnsured orders were accurate and cash was collected",
  computerSkills:
    "Bash(Intermediate), Java(Advanced), C/C++(Advanced), Python(Intermediate), JavaScript(Beginner), TypeScript(Beginner), Ruby(Beginner), Haskell(Beginner), CSS(Beginner), and HTML(Intermediate)",
});

$("body").terminal(
  {
    education: function () {
      this.echo(Resume.education);
    },
    projects: function () {
      this.echo(Resume.activitiesAndProjects);
    },
    experience: function () {
      this.echo(Resume.workExperience);
    },
    skills: function () {
      this.echo(Resume.computerSkills);
    },
  },
  {
    greetings:
      greetings.innerHTML +
      "Hi, my name is Ian and this is a little about me\nHere are the options:\n\n\t*education\n\t*projects\n\t*experience\n\t*skills",
  }
);
