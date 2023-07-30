window.addEventListener("load",()=>{
    const loader=document.querySelector(".loader");
    loader.classList.add("loaditem");
})
const date=new Date()
var blogTitle=document.getElementById('blogTitle');
var blogContent=document.getElementById('blogContent');
var blogBtn=document.getElementById('blogBtn');
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
}

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
})

function blogDisplay1(){
    var blogger=""
    for(var i=0;i<blogs.length;i++){
        blogger+=`
        <div class="col-md-4">
            <div class="card">
            <img src="${blogs[i].image}" class="w-100" alt="blogimg">
                <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
                    <h2 class="fw-bold text-center">${blogs[i].title}</h2>
                    <a href="blogs.html" class="text-reset text-decoration-none"><button class="btn btn-outline-info">Display Blogs</button></a>
                    <button onclick="deleteBlog(${i})" class=" mt-3 btn btn-outline-warning">Delete</button>
                    </div>
            </div>
        </div>
        `
        
    }
    document.getElementById('display1').innerHTML=blogger
}
function blogDisplay2(){
    var blogger=""
    for(var i=0;i<blogs.length;i++){
        blogger+=`
        <hr>
        <div class="col-md-6 h-50 bg-dark p-5">
                <img src="${blogs[i].image}" class="w-100" alt="blogimg">
            </div>
            <div class="col-md-6 p-5 overflow-hidden bg-body-secondary">
            <p class="fw-bold position-relative date">${date}</p>
            <h2 class="text-center fw-bold">${blogs[i].title}</h2>
                <p>${blogs[i].content}</p>
            </div>
        </div>
        </div>
        `
    }
    document.getElementById('display2').innerHTML=blogger
}
function deleteBlog(index){
    blogs.splice(index,1);
    localStorage.setItem('blogging',JSON.stringify(blogs))
        blogDisplay1();    
        blogDisplay2();
            
}
