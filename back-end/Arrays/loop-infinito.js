//Casos de Loop Infinito!


for (let i = 0; i < 10; i++){
    i--
    console.log(i)
   }

   for (let i = 0; i < 10; ){
    console.log(i)
   }

   for (let i = 0; ; i++){
    console.log(i)
   }