

var Count= (data,action)=>{

    if(action.type === "inc"){
        data=data+1;
    }else if(action.type === "dec"){
        data = data-1;
    } else{
        data = 0;
    }

    return data;
}


export default Count;