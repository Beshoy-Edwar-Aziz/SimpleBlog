window.addEventListener("load",()=>{
    const loader=document.querySelector(".loader");
    loader.classList.add("loaditem");
    let clockApp=document.getElementById("clock")
    clockApp.classList.add('clockAppear')
})
const navel=document.querySelector('.navbar');
  window.addEventListener('scroll',()=>{
    if (window.scrollY >= 56){
      navel.classList.add('navbar-scrolled')
      let light=document.getElementById('light')
      light.classList.add('text-warning')
      light.classList.remove('fa-regular')
      light.classList.add('fa-solid')
      
    }
    else if (window.scrollY < 56){
      navel.classList.remove('navbar-scrolled')
      light.classList.remove('text-warning')
      light.classList.remove('fa-solid')
      light.classList.add('fa-regular')
    }
  })
var blogTitle=document.getElementById('blogTitle');
var blogContent=document.getElementById('blogContent');
var blogBtn=document.getElementById('blogBtn');
let updateBlog=document.getElementById('updateBlog')
var fileInput = document.getElementById('blogImg');
fileInput.addEventListener('change',function(){
    var file = this.files[0];

var reader = new FileReader();
reader.onload = function(event){
    var imageUrl=event.target.result;
    console.log(event)

var previewImage=document.getElementById('previewImage')
previewImage.src=imageUrl
};
reader.readAsDataURL(file);
})
var blogs=[]

if(localStorage.getItem('blogging')!=null){
    blogs=JSON.parse(localStorage.getItem('blogging'));
    document.addEventListener("DOMContentLoaded", function() {
        blogDisplay1();
        });
    document.addEventListener("DOMContentLoaded", function() {
        blogDisplay2();
        });
    document.addEventListener("DOMContentLoaded", function() {
        blogDisplay3();
        });
}

try{
blogBtn.addEventListener('click',function(){
    var blog={
        title:blogTitle.value,
        content:blogContent.value,
        image:document.getElementById('previewImage').src
    }
    blogs.push(blog)
    localStorage.setItem('blogging',JSON.stringify(blogs))
    blogDisplay1()
    blogDisplay2()
    blogDisplay3()
    confirmMsg()
})}
catch(error){
    console.log(error)
}

function blogDisplay1(){
    var blogger=""
    for(var i=0;i<blogs.length;i++){
        blogger+=`
        <div class="col-12 col-md-12 col-lg-4">
            <div class="card">
            <img src="${blogs[i].image}" class="w-100" alt="blogimg">
                <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                    <h2 class="fw-bold text-center">${blogs[i].title}</h2>
                    <a href="blogs.html" class="text-reset text-decoration-none"><button class="btn btn-outline-info">Display Blogs</button></a>
                    <button onclick="setBlog(${i})" class=" mt-3 btn btn-outline-warning">Update</button>
                    <button onclick="deleteBlog(${i})" class=" mt-3 btn btn-outline-danger">Delete</button>
                    </div>
            </div>
        </div>
        `
        
    }
    try{
    document.getElementById('display1').innerHTML=blogger
    }catch(error){
        console.log(error)
    }
}
function blogDisplay2(){
    var blogger=""
    for(var i=0;i<blogs.length;i++){
        blogger+=`
        <hr>
        <div class="col-md-8">
        <div class="col-md-12 ">
                <img src="${blogs[i].image}" class="w-100" alt="blogimg">
                </div>
            <div class="col-md-12 mt-3 p-2 overflow-hidden bg-body-secondary">
            <h2 class="text-center fw-bold">${blogs[i].title}</h2>
                <p>${blogs[i].content}</p>
            </div>
            </div>
            <div class="col-md-4 bg-body-secondary position-relative overflow-hidden" id="display3">
            
            </div>
            
        `
        
    }
    try{
        document.getElementById('display2').innerHTML=blogger
    }catch(error){
        console.log(error)
    }
    
}
function blogDisplay3(){
    var blogger=""
    for(var i=0;i<blogs.length;i++){
        blogger+=`
        <div class="row">
        <div class="col-md-6 mt-5">
        <img src="${blogs[i].image}" class="w-100 rounded" alt="">
        </div>
        <div class="col-md-6 mt-5">
        <h3>${blogs[i].title}</h3>
        </div>
        </div>
        `
        
    }
    try{
        document.getElementById('display3').innerHTML=blogger
    }catch(error){
        console.log(error)
    }
    
}
let gIndex=0
function setBlog(index){
    gIndex=index;
    blogTitle.value=blogs[index].title;
    blogContent.value=blogs[index].content;
    fileInput=blogs[index].image
    updateBlog.style.display="block"
    blogBtn.style.display="none"
    console.log(fileInput)
}
try{
 updateBlog.addEventListener('click',function(){
    var blog={
        title:blogTitle.value,
        content:blogContent.value,
        image:document.getElementById('previewImage').src
    }
    blogs[gIndex]=blog
    localStorage.setItem('blogging',JSON.stringify(blogs))
    blogDisplay1()
    blogDisplay2()
    blogDisplay3()
    updateBlog.style.display="none"
    blogBtn.style.display="block"
})}catch(error){
    console.log(error)
}
function deleteBlog(index){
    blogs.splice(index,1);
    localStorage.setItem('blogging',JSON.stringify(blogs))
        blogDisplay1();    
        blogDisplay2();
            
}
function confirmMsg(){
    let confirmMsg=document.getElementById('confirmMsg')
    confirmMsg.classList.add('openMsg')
    setTimeout(()=>{
        confirmMsg.classList.remove('openMsg')
    },5000)
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
    }
  document.addEventListener("DOMContentLoaded",function(){
                currentTime()})

