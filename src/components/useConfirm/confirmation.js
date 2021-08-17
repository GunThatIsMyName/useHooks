export const confrimation = (message="",onClick,onCancel)=>{
    if(!onclick || typeof onclick!== "function" ){
        return;
    }
    if(onCancel && typeof onCancel !== "function"){
        return;
    }
    const confirmAction = ()=>{
        if(window.confirm(message)){
            onClick();
        }else{
            onCancel();
        }
    }
    return confirmAction;
}

export const minji = ()=>{
    const say = console.log("say hello")
    return say;
}
export const aborted = ()=>{
    console.log("취소했습니다.")
}