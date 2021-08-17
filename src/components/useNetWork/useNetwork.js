const useNetWord = (online)=>{
    const [status,setStatus] = useState(navigator.onLine)
    const handleChange = ()=>{
      if(typeof online === "function"){
        online(navigator.onLine)
      }
      setStatus(navigator.onLine)
    }
    useEffect(()=>{
        window.addEventListener("online",handleChange)
        window.addEventListener("offline",handleChange)
        return ()=>{
          window.removeEventListener("online",handleChange)
          window.removeEventListener("offline",handleChange)
        }
    })
    return status;
}

export default useNetWord;