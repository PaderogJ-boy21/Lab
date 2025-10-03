const cart=[
 {name:"Shoes",q:2,p:50},
 {name:"Bag",q:1,p:120},
 {name:"Shirt",q:5,p:25},
 {name:"Watch",q:3,p:200}
];

// 1. Total cart value
const total=c=>c.reduce((a,x)=>a+x.q*x.p,0);

// 2. Filter items above price
const filter=(c,pr)=>c.filter(x=>x.p>pr);

// 3. Most expensive item
const maxItem=c=>c.reduce((a,x)=>x.p>a.p?x:a);

// 4. Group by quantity range
const group=c=>({
 Small:c.filter(x=>x.q<2),
 Medium:c.filter(x=>x.q>=2&&x.q<=4),
 Large:c.filter(x=>x.q>4)
});

// 5. Simulate async fetch
const fetch=()=>new Promise(r=>setTimeout(()=>r(
 {name:"Hat",q:2,p:35}),500));

// Example
console.log("Total:",total(cart));
console.log("Above 50:",filter(cart,50));
console.log("Most Expensive:",maxItem(cart));
console.log("Grouped:",group(cart));
fetch().then(x=>console.log("Fetched:",x));