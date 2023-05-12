const clock = () => {
    
    let needleSecs = document.getElementById("needleSeconds")
    let needleMins = document.getElementById("needleMinute")
    let needleHrs = document.getElementById("needleHour")
    let date = new Date()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()

    const disTime = () => {
        let angleSecs = secs * 6
        let angleMins = mins * 6
        let angleHrs = (hrs * 30) + (mins / 2)
        needleSecs.style.setProperty("--rotation", angleSecs + "deg")
        needleMins.style.setProperty("--rotation", angleMins + "deg")
        needleHrs.style.setProperty("--rotation", angleHrs + "deg")
    }

    disTime()

}

clock()

setInterval(()=>{
    clock()
},1000)