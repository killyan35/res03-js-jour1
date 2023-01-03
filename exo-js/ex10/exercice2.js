const monNombre = 3 ;
let userNombre ;

while (monNombre !== userNombre)
{
userNombre = window.prompt("Saisi un nombre entre 0 et 100") ;
userNombre = parseInt(monNombre);
    
    if( monNombre > userNombre ) 
    {
        window.alert("C'est plus !");
    }
    else if( monNombre < userNombre ) 
    {
        window.alert("C'est moins !");
    }
    else 
    {
        window.alert("Bravo, tu as gagné !");
    }
} 