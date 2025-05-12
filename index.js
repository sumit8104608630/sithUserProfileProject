

document.addEventListener("DOMContentLoaded",()=>{
    console.log('sumit')
    let load=document.getElementById("load");

    fetch(`https://randomuser.me/api/`).then(res=>res.json()).then(data=>{
        load.classList.add("hidden")
        load.style.display = "none";
        load.classList.remove("bg-white")
        let UserImage=document.getElementById("userProfileImage")
        let emailBtn=document.getElementById("userEmail")
        let headline=document.getElementById("headLine")
        let userName=document.getElementById("userName")
        let userDate=document.getElementById("userDate")
        let userPhone=document.getElementById("userPhone")
        let password=document.getElementById("password")
        let userLocation=document.getElementById("userLocation")
        let info=data.results[0]
        let name=info.name
        let date=new Date(info.dob.date)
        let location=info.location
        UserImage.src=info.picture.medium
         console.log(info)
        headline.innerText=`${name.title} ${name.first} ${name.last}`
        userInfo=data.results[0]
        emailBtn.addEventListener("mouseover", function () {headline.innerText=info.email});
        userName.addEventListener("mouseover", function () {headline.innerText=`${name.title} ${name.first} ${name.last}`});
        userDate.addEventListener("mouseover", function () {headline.innerText=`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`});
        userLocation.addEventListener("mouseover",function() {headline.innerText=`${location.postcode}/${location.state}/${location.country}`})
        userPhone.addEventListener("mouseover",function() {headline.innerText=info.phone})
        password.addEventListener("mouseover",function() {headline.innerText=info.login.password})

    })


})

