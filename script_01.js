
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays [[[]]]
// nested arrays [[],[]]
arr =   [
                 ["Ich","bin","Max"],
                 ["Ich","bin","Moritz"]
        ];

// output(arr);
// output(arr[0]);
// output(arr[0][2]);
// output(arr[0][1] + " " + arr[1][2]);

// nested loop
for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
                output("Index i: "+i+"Index j: "+j)
                output(arr[i][j]);
                
        }
}

/***** Objekte 1 Daten/Funktionen *******/





/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}