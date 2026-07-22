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

{
name:"JCB Grease Gun",
category:"Tools & Maintenance",
image:"images/jcb-grease-gun.jpg",
description:"Original JCB Grease Gun engineered for reliable lubrication and long-lasting performance. Built with premium materials for heavy-duty construction and earthmoving equipment maintenance.",
whatsapp:"https://wa.me/916397684170?text=Hello%20KHAN%20EARTH%20MOVERS,%20I%20want%20to%20enquire%20about%20the%20JCB%20Grease%20Gun."
},
