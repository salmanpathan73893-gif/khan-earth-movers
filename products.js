const products = [

{
name:"Grease Gun",
category:"Tools",
image:"images/grease-gun.jpg",
description:"Heavy Duty Grease Gun",
whatsapp:"https://wa.me/916397684170"
},

{
name:"Bucket Pin Bush Kit",
category:"Bucket Parts",
image:"images/bucket-pin-bush-kit.jpg",
description:"High Quality Bucket Pin Bush Kit",
whatsapp:"https://wa.me/916397684170"
},

{
name:"Hydraulic Pipe",
category:"Hydraulic Parts",
image:"images/hydraulic-pipe.jpg",
description:"Premium Hydraulic Pipe",
whatsapp:"https://wa.me/916397684170"
}

];

const container=document.querySelector(".grid");

container.innerHTML="";

products.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}" alt="${product.name}">

<h4>${product.name}</h4>

<p>${product.description}</p>

<a href="${product.whatsapp}" target="_blank">
Enquire Now
</a>

</div>

`;

});
