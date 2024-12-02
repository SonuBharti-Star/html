

let image = document.querySelector(".image");
let open = document.querySelector(".open");

function openPopup(){
    open.style.display="block";
}
function closePopup(){
    open.style.display="none";
}

let tip = document.getElementById("tip").addEventListener("click",openPopup);

let close = document.getElementById("close").addEventListener("click",closePopup);


let slideIndex = 0; 
const slides = document.getElementsByClassName("slides"); 

function showSlides() 
{
     for (let i = 0; i < slides.length; i++) 
        { 
            slides[i].style.display = "none";
        } slideIndex++; 
        if (slideIndex > slides.length) 
            {slideIndex = 1} 
        slides[slideIndex - 1].style.display = "block"; 
        setTimeout(showSlides, 2000); // Change image every 2 seconds
 } 
showSlides();

// Show additional fields based on complaint type
function showAdditionalFields() {
    const complaintType = document.getElementById("complaint_type").value;
    const productDetails = document.getElementById("productDetails");
    const productSerial = document.getElementById("productSerial");
    productDetails.classList.toggle("hidden", complaintType !== "product");
    productSerial.classList.toggle("hidden", complaintType !== "product");
}


// Preview complaint details
function previewComplaint() {
    document.getElementById("previewName").textContent = document.getElementById("name").value;
    document.getElementById("previewEmail").textContent = document.getElementById("email").value;
    document.getElementById("previewPhone").textContent = document.getElementById("phone").value;
    document.getElementById("previewType").textContent = document.getElementById("complaint_type").value;
    document.getElementById("previewDescription").textContent = document.getElementById("description").value;
    document.getElementById("previewResolution").textContent = document.getElementById("resolution").value;
    document.getElementById("previewSection").classList.remove("hidden");
}

function openForm(){
    window.open("http://127.0.0.1:5500/form.html","_blank")
}

