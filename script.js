const data={
"GJ96ST37":{
name:"Jigar N. Gajjar",
designation:"Assistant Director",
status:"ACTIVE",
blood:"B+",
mobile:"9825923643",
valid:"31-03-2027",
photo:"images/photo-placeholder.png"
}};
const id=new URLSearchParams(location.search).get("id")||"GJ96ST37";
const e=data[id];
if(!e){document.body.innerHTML="<h2>❌ Employee Not Found</h2>";}
else{
photo.src=e.photo;
name.textContent=e.name;
designation.textContent=e.designation;
document.getElementById("id").textContent=id;
status.textContent=e.status;
blood.textContent=e.blood;
mobile.textContent=e.mobile;
valid.textContent=e.valid;
}