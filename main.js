function loadjson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState==4&&xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
    xhr.send(null);
}

loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  education(data.education);
  tech(data.technicalskills);
})
var left=document.querySelector(".leftchild");
function details(det)
 {
   var image=document.createElement("img");
   image.src=det.image;
   left.appendChild(image);

   var name=document.createElement("h3");
   name.textContent=det.name;
   left.appendChild(name);

   var number=document.createElement("p");
   number.textContent=det.number;
   left.appendChild(number);

   var email=document.createElement("a");
   email.textContent=det.email;
   left.appendChild(email);

   var college=document.createElement("p");
   college.textContent=det.college;
   left.appendChild(college);

   var address=document.createElement("p");
   address.textContent=det.address;
   left.appendChild(address);
 }
var right=document.querySelector(".rightchild");
function careerinfo(career)
{
  var ci=document.createElement("h2");
  ci.textContent="Career Objectives";
  right.appendChild(ci);

  var add=document.createElement("p");
  add.textContent=career.info;
  right.appendChild(add);

   var hr=document.createElement("hr");
   right.appendChild(hr);
 }

 function education(edu)
 {
     var add1=document.createElement("h3");
     add1.textContent="educational qualification";
     right.appendChild(add1);

     var hr=document.createElement("hr");
     right.appendChild(hr);

     var table=document.createElement("table");
     table.border="1";
     var tr1="<tr><th>Institute</th><th>Degree</th><th>Passout</th></tr>";
     var tr2="";

     for(var i=0;i<edu.length;i++)
     {
       tr2+="<tr><td>"+edu[i].Institute+"</td><td>"+edu[i].Degree+"</td><td>"+edu[i].Passout+"</td></tr>";
     }
     table.innerHTML=tr1+tr2;
     right.appendChild(table);
 }
 function tech(sk)
 {
   var s1=document.createElement("h3");
   s1.textContent="Technical skills";
   right.appendChild(s1);

   var hr=document.createElement("hr");
   right.appendChild(hr);

   var title1=document.createElement("p");
   title1.textContent=sk.title1;
   right.appendChild(title1);

   var title2=document.createElement("p");
   title2.textContent=sk.title2;
   right.appendChild(title2);

   var title3=document.createElement("p");
   title3.textContent=sk.title3;
   right.appendChild(title3);
 }
