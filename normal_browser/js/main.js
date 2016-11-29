/*import common from "./common";
common();*/
let arr = [1,2,3,4];
arr.forEach(item=>{
    console.log(item);
});

class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
    setName(name){
        this.name = name;
    }
    countCoats(){
        let coats = [1,2,3,4,6];
        alert(coats.length);
    }
}

let dog = new Person('Doglas');
dog.getName();

class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }
}

class Programmer extends Animal {
    constructor(name) {
        //直接调用父类构造器进行初始化
        super(name);
    }
    program() {
        console.log("I'm coding...");
    }
}

var animal=new Animal('dummy'),
wayou=new Programmer('wayou');
animal.sayName();//输出 ‘My name is dummy’
wayou.sayName();//输出 ‘My name is wayou’
wayou.program();//输出 ‘I'm coding...’


let Str = `this is a long string info message ${animal.name}`;
console.log(Str);

//解构
var [x,y]=getVal(),//函数返回值的解构
    [name,,age]=['wayou','male','secrect'];//数组解构

function getVal() {
    return [ 1, 2 ];
}
console.log(x,y,name,age);


//函数参数默认值
function sayHello(name){
    //传统的指定默认参数的方式
    var name=name||'dude';
    console.log('Hello '+name);
}

sayHello();

//不定参数:格式是三个句点后跟代表所有不定参数的变量名
function add(...args){
 return args.reduce((m,n)=>m+n);
}

let addVal = add(1,2,3);
console.log(addVal);

//let与const 关键字:把let看成var 只是它定义的变量被限定在了特定范围内才能使用，而离开这个范围则无效。const则很直观，用来定义常量，即无法被更改值的变量。
for (let i=0;i<2;i++)console.log(i);//输出: 0,1

//for of 值遍历 : 每次循环它提供的不是序号而是值
var someArray = [ "a", "b", "c" ];
for (v of someArray) {
    console.log(v);//输出 a,b,c
}

//Map，Set 和 WeakMap，WeakSet
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size === 2);
console.log(s.has("hello") === true);

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s) == 34);

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });//因为添加到ws的这个临时对象没有其他变量引用它，所以ws不会保存它的值，也就是说这次添加其实没有意思


//Proxies

//Proxy可以监听对象身上发生了什么事情，并在这些事情发生后执行一些相应的操作。一下子让我们对一个对象有了很强的追踪能力，同时在数据绑定方面也很有用处。
//以下例子借用自这里。
//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };
//定义处理程序
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value);
    receiver[property] = value;
  }
};
//创建代理以进行侦听
engineer = new Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60;//控制台输出：salary is changed to 60


//Math，Number，String，Object 的新API
//对Math,Number,String还有Object等添加了许多新的API。下面代码同样来自es6features，对这些新API进行了简单展示。
Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

//"abcde".contains("cd") // true
console.log("abc".repeat(3))// "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
//[0, 0, 0].fill(7, 1) // [0,7,7]
let FI = [1,2,3].findIndex(x => x == 2) // 1
console.log(FI);
let iterators = ["a", "b", "c"].entries();
console.log(iterators) // iterator [0, "a"], [1,"b"], [2,"c"]
//["a", "b", "c"].keys() // iterator 0, 1, 2
//console.log(["a", "b", "c"].values()) // iterator "a", "b", "c"


//console.log(["a", "b", "c"].values() )
//Object.assign(Point, { origin: new Point(0,0) })
//
//
var promise = new Promise(function(resolve, reject) {
    // 进行一些异步或耗时操作
    let bool = false;
    setTimeout(()=>{
        bool = true;
        if ( bool ) {
            resolve("Stuff worked!");
        } else {
            reject(Error("It broke"));
        }
    }, 2000);

});
//绑定处理程序
promise.then(function(result) {
    //promise成功的话会执行这里
    console.log(result); // "Stuff worked!"
}, function(err) {
    //promise失败会执行这里
    console.log(err); // Error: "It broke"
});