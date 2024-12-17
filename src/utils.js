function formatDate(date, detailed){
    const formattedDate=date.split("T")[0].split("-")
    const months=["January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]

           {months[date[1]-1]} {date[0]}
    if(detailed){
        return `${formattedDate[2]} ${months[formattedDate[1]-1]}, ${formattedDate[0]}`
    }else{
        return `${months[formattedDate[1]-1]} ${formattedDate[0]}`
    }
}


export{formatDate}