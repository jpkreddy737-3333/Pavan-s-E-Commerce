


const Namereducer=(state,action)=>{
    var data;
    if(action.type === "name"){
        data = {
            ...state,
            name: action.payload,
        };
    }

    return data;
}

export default Namereducer;