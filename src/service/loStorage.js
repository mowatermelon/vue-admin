function setItem(name,value){
    if(localStorage.getItem(name) === null){
        localStorage.setItem(name,value);
    }    
}

function initData(init){

    for(let i=0;i<init.length;i++){
        setItem(init[i].name,init[i].value);
    }
}

export default {initData}