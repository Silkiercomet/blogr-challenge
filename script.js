//the query's for the anchors 
const drop1 = document.querySelector("#dropmenu-1");
const drop2 = document.querySelector("#dropmenu-2");
const drop3 = document.querySelector("#dropmenu-3");

//the query's of the the dropdown menu
let x = 0,y=0,z=0;
const drop11 = document.querySelector(".drop-1");
const drop12 = document.querySelector(".drop-2");
const drop13 = document.querySelector(".drop-3");

const truelyCloseAll = () =>{
    drop11.style.display = 'none'
    drop12.style.display = 'none'
    drop13.style.display = 'none'
}
const closeAll = (x) => x.style.display = 'none';

const displayNav = (j,k) =>{
    if(k == 0){
        truelyCloseAll();
        j.style.display = 'flex';
    }

}

drop1.addEventListener("click",function(){ 
    if(x==0){displayNav(drop11,x);x++;y=0;z=0}else{closeAll(drop11);x--}
    })
drop2.addEventListener("click",function(){ 
    if(y==0){displayNav(drop12,y);y++;x=0;z=0}else{closeAll(drop12);y--}
    })
drop3.addEventListener("click",function(){ 
    if(z==0){displayNav(drop13,z);z++;y=0;x=0}else{closeAll(drop13);z--}
    })


