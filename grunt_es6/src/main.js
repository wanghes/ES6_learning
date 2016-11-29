import hello from "./lib";
let helloInfo = hello();

let evens = [1, 2, 3];
let odds = evens.map(v => v + 1);
let nums = evens.map((v, i) => v + i);

let str = `<h1>${helloInfo}</h1><br>${odds}<br>${nums}`;
document.write(str);

