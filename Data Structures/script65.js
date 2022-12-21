"use strict";

/*
    In a small town the population is p0 = 1000 at the beginning of a year. 
    The population regularly increases by 2 percent per year and moreover 
    50 new inhabitants per year come to live in the town. 
    How many years does the town need to see its population greater 
    or equal to p = 1200 inhabitants?.
*/

// 1500, 5, 100, 5000;
// 1500000, 2.5, 10000, 2000000;
// 1500000, 0.25, 1000, 2000000;

function nbYear(p0, percent, aug, p) {
    // your code
    // p0 = "Population of the people in town";
    // percent = "Population increase";
    // aug = "Inhabitants coming or leaving each year";
    // p = "Population forecast";

    let years = 0;
    let population = p0;

    while (population < p) {
      population += population * percent / 100 + aug;
      years++;
    //   console.log(years);

    }
    console.log(`It will take ${years} years for the population to reach ${p}.`);

    return years;

  
}

nbYear(1000,2,50,1200);
nbYear(1500, 5, 100, 5000);
nbYear(1500000, 2.5, 10000, 2000000);
nbYear(1500000, 0.25, 1000, 2000000);
