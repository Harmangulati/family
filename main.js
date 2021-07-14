var imgs=["dadu.jpg",
"dadi.jpg",
"gyg.jpg",
"harmanand papa.jpg",
"mekhu.jpg",
];
var names=["Tardeeppal singh","Tejpal singh","Manpreet","Harmanjot singh","Mehakpreetkaur" ];
var i=0;
function update(){
 i++;
 var number_of_family_member_in_array=5
 if(i> number_of_family_member_in_array)
 {   
  i=0;  
  }
  var updatedImage= images[i];
  var updatedName= names[i];
   +
 document.getElementById("family_image").src = updatedImage
 document.getElementById("family_name").innerHtml=updatedName
}
