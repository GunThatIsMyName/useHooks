const useNotification = (title,options)=>{
    console.log("!@@@")
      if(!("Notification" in window)){
        alert("This browser does not support desktop notification");
      }
      if(Notification.permission !== "granted"){
        Notification.requestPermission().then((permission)=>{
          if(permission === "granted"){
            new Notification(title,options)    
          }
        })
      }else{
        new Notification(title,options)
      }
  }