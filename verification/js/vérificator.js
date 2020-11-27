document.getElementById("boumba").addEventListener("click",bush)

function bush()
{
    let age = prompt("quelle âge avez-vous");
    txt = "vous avez bien essayer";
    let name = document.getElementById("nom").value;


   
    if (age <18 || age == null) 
    {
       alert(txt);
    }
    else 
    {
        alert("bienvenue à notre site :"+ name+ " vous avez bien:"+age+"ans");

    }
    
}