let head = document.getElementsByClassName("head");
let zakaatQns = document.getElementsByClassName("zakaat-ques");

// the show, hide icon;
let show  = document.getElementsByClassName("show");
let hide = document.getElementsByClassName("hide");

console.log(head);
console.log(zakaatQns);

for(let i = 0 ;  i< head.length; i++){
    head[i].addEventListener('click', ()=>{
      let result =  zakaatQns[i].classList.toggle("show");

      
    })
}


// all hisaab n kitaab

// nisab value
var goldval = document.getElementById("gold22") ;

// maikng all input val 0;

document.querySelectorAll('input').forEach(input => input.value = 0);

let btn = document.getElementById("submit");
btn.addEventListener("click", ()=>{


  // nisab
  let nisab = 81.479 * goldval.value ; 
  // console.log(nisab);

  // on gold 
let goldP =   document.getElementById("gold-p");
let goldW = document.getElementById("gold-w");
let totalgoldp =  document.getElementById("gold-val");
totalgoldp.innerText = "Rs "+goldP.value * goldW.value ;

let gVal = goldP.value * goldW.value ;
console.log(gVal);

// on preciuos stones

let stoneVal = document.getElementById("stone").value;
let tStoneVal = parseInt(stoneVal);
console.log(typeof(tStoneVal), tStoneVal);

// on silver
let silverW = document.getElementById("silverW").value;
let silverP = document.getElementById("silverP").value;
let totalSilverP = document.getElementById("silverVal");
totalSilverP.innerText = "Rs "+silverP * silverW ;

let sVal = silverP * silverW ;
console.log(typeof(sVal));
//  on cash

let cashVal = document.querySelectorAll(".cash");

let arrCash = []
cashVal.forEach((cashVal)=>{
arrCash.push(cashVal.value);
});

// convert arr into num data type
let totalCash = arrCash.map(str => parseInt(str)).reduce((acc, num)=> acc + num , 0);
console.log(typeof(totalCash));
// print the total
document.getElementById("cashVal").innerText = "Rs "+ totalCash;

// on land 
let landVal1 = document.getElementById("landVal1");
let landVal2 = document.getElementById("landVal2");

let totalLand = parseInt(landVal1.value) + parseInt(landVal2.value) ; 
console.log(typeof(totalLand));

// on investment
let allInvest = document.querySelectorAll(".invest1");

let investVal = [];
allInvest.forEach((allInvest)=>{
    investVal.push(parseInt(allInvest.value));
})

let totalInvest = investVal.reduce((acc, num)=> acc + num,0);
console.log(typeof(totalInvest));


// on business
let busiAdd = document.querySelectorAll(".busiAdd");
let busiSub = document.querySelectorAll(".busiSub");

let TbusiAdd = [];
busiAdd.forEach((busiAdd)=>{
  TbusiAdd.push(parseInt(busiAdd.value));
})
let TbusiSub = [];
busiSub.forEach((busiSub)=>{
  TbusiSub.push(parseInt(busiSub.value));
})
let totalBusiVal = (TbusiAdd.reduce((acc , num )=> acc + num, 0)) - (TbusiSub.reduce((acc , num )=> acc + num, 0)); 
console.log(typeof(totalBusiVal));

document.querySelector(".printBusi").innerText = "Rs " + totalBusiVal;

// on partnership frims


// on agri production
let agriProd = document.querySelectorAll(".agriProd");

let totalAgri  = [];
 agriProd.forEach((agriProd)=>{
totalAgri.push(parseInt(agriProd.value))
})

let tAgriVal = totalAgri.reduce((acc , num )=> acc + num, 0)
document.querySelector(".printAgri").innerText = "Rs " + tAgriVal;
console.log(typeof(tAgriVal));

// on animals

let animalVal = document.querySelectorAll(".animalVal");

let totalAnimal  = [];
 animalVal.forEach((animalVal)=>{
totalAnimal.push(parseInt(animalVal.value))
})

let tAnimalVal = totalAnimal.reduce((acc , num )=> acc + num, 0)
console.log(typeof(tAnimalVal));

// deduction

let deductElem = document.querySelectorAll(".deductElem");
let deductVal = [];
deductElem.forEach((deductElem)=>{
  deductVal.push(parseInt(deductElem.value));
})

let tDeductVal =  deductVal.reduce((acc, num) => acc + num,0);
console.log(typeof(tDeductVal), tDeductVal);
document.querySelector(".printDeduct").innerText = "Rs " + tDeductVal
// the result 

let totalWealth = gVal + sVal + tStoneVal + totalCash + totalLand + totalInvest + totalBusiVal + tAnimalVal ;
console.log(totalWealth, typeof(totalWealth));
// not added firms part
let printTWealth = document.querySelector("#total-wealth").value = "Rs " + totalWealth;
console.log(printTWealth);
  


// printing the liability

 document.querySelector("#total-liability").value = "Rs " + tDeductVal;

//  zakaatable wealth total

 let tZakaatableW = totalWealth - tDeductVal ;
 
 document.querySelector(".TotalZakatableWealth").innerHTML = "Rs " + tZakaatableW;
 
 //  tatal zakAAT value

let totalZakaat = (2.5/100) * tZakaatableW;
console.log(totalZakaat, tZakaatableW, tDeductVal);

document.querySelector(".TotalZakat").innerHTML = `Rs ${totalZakaat}`;

});



// side bar animation

document.querySelector('#menuIcon').addEventListener("click", ()=>{
  document.querySelector(".menu-elem").classList.toggle("showSideBar");
})

