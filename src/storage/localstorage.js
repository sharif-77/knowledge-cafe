
const getDataFromLs=()=>{
    let data=localStorage.getItem('mark')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const setDataToLs=(dataAray)=>{

    let gettetData=[]
    dataAray.map(i=>gettetData.push(i))
    localStorage.setItem('mark',JSON.stringify(gettetData))
}

const removeDataFromLs=(havetoRemove)=>{
    let data=getDataFromLs()
   let newData= data.filter(i=>i.id!==havetoRemove.id)
    setDataToLs(newData)
}
export {getDataFromLs,setDataToLs,removeDataFromLs}