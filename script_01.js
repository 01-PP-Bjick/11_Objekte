
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays [[[]]]
// nested arrays [[],[]]
// arr =   [
//                  ["Ich","bin","Max"],
//                  ["Ich","bin","Moritz"]
//         ];

// // output(arr);
// // output(arr[0]);
// // output(arr[0][2]);
// // output(arr[0][1] + " " + arr[1][2]);

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//                 output("Index i: "+i+"Index j: "+j)
//                 output(arr[i][j]);
                
//         }
// }

/***** Objekte 1 Daten/Funktionen *******/
let person =    {
                        firstName:"Thomas",
                        familyName:"Korn",
                        salary: [120000,160000],
                        permission: true,
                        sayHello:
                                function(){
                                        return "Hello, ich bin "+
                                        this.firstName+"!";
                                }
                };

// output(person);
// output(person.firstName);
// output(person.familyName);
// output(person.salary[1]);
// output(person.permission);
// output(person.sayHello());

const txt =      person.sayHello() + " Ich bin " + person.firstName + " " +
                 person.familyName +
                 " und verdiene " +
                 person.salary[1] + " p.a";

output(txt)


/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}