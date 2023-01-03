let i = 0;

while(i < 100) // tant que i est inferieur à 5
{
    console.log(i); // affiche i
    i = i + 1; // ajoute 1 à i
    
while(i < 50) // tant que i est inferieur à 5
{
    console.log(i); // affiche i
    i = i + 2; // ajoute 1 à i
    
    if(i%2 === 0) // si l'age est supérieur à 18
{
    console.log("Pair"); // alors affiche Majeur
}
else // sinon
{
    console.log("Inpair"); // affiche Majeur
}
}    
while ((i > 50 ) && (i < 100)) 
{
    console.log(i); // affiche i
    i = i + 3; // ajoute 1 à i
    
    if(i%2 === 0) // si l'age est supérieur à 18
{
    console.log("Impair"); // alors affiche Majeur
}
else // sinon
{
    console.log("Pair"); // affiche Majeur
}
}    


}