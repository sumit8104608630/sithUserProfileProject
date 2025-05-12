

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
        let para=document.getElementById("para")
        let date=new Date(info.dob.date)
        let location=info.location
        UserImage.src=info.picture.medium
         console.log(info)
        headline.innerText=`${name.title} ${name.first} ${name.last}`
        userInfo=data.results[0]
        emailBtn.addEventListener("mouseover", function () {headline.innerText=info.email
            para.innerText="My email is"
        });
        userName.addEventListener("mouseover", function () {headline.innerText=`${name.title} ${name.first} ${name.last}`
            para.innerText="My name is"
        });
        userDate.addEventListener("mouseover", function () {headline.innerText=`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
            para.innerText="My date of birth is"
        });
        userLocation.addEventListener("mouseover",function() {headline.innerText=`${location.postcode}/${location.state}/${location.country}`
            para.innerText="My address is"
        });
        userPhone.addEventListener("mouseover",function() {headline.innerText=info.phone
            para.innerText="My phone is"
        });
        password.addEventListener("mouseover",function() {headline.innerText=info.login.password
            para.innerText="My password is"
        });

    })


})

