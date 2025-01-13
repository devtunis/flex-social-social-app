 
document.getElementById("notifyBtn").addEventListener("click",()=>{
    const date = new Date()
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');

    // Format time in HH:mm format
    let formattedTime = `${hours}:${minutes}`;


    const not =new Notification(`FLEX APP: Something New for You! ${formattedTime}`,{
        icon :"https://picsum.photos/id/237/200/300",
        requireInteraction:true,
        silent:null,
        body : `Click here to see the full image `,
        image : "https://picsum.photos/id/237/200/300"
      
    })
    not.onshow = e => console.log("the dime in message ",new Date(e.timeStamp))
    not.onclose = e=> console.log("tihs close by the user")
    not.onclick = e =>  console.log('%c Notification clicked!', 'color: green; font-size: 16px; background-color: red;');

    console.log(not)

})


