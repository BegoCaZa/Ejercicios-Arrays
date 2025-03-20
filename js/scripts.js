//1️⃣ Camila está organizando la lista de asistentes para una conferencia. Tiene un array con nombres, por ejemplo: ["Pedro", "Ana", "Sofía", "Luis"]. Quiere saber si "Ana" está en la lista y, si es así, debe imprimir "Invitada confirmada en la posición X". Si no está, debe imprimir "Invitada no encontrada".
const whosInThisList=(name)=>{
    const nameList=["Pedro","Ana","Sofía","Luis"];

    nameList.includes(name) ? console.log("Invitada confirmada en la posición " + nameList.indexOf(name)): console.log("Invitada no encontrada")

}

whosInThisList("Julian")

//2️⃣ Bego está buscando un producto específico en su tienda. La lista de productos es: ["Camiseta", "Pantalón", "Gorra", "Zapatos"]. Necesita saber en qué posición se encuentra "Gorra". Si lo encuentra, debe mostrar su posición. Si no lo encuentra, debe mostrar "Producto no disponible".

const isTheProductAvailable = (product)=> {
    const productList=["Camiseta","Pantalón","Gorra","Zapatos"];
    
    productList.includes(product) ? console.log("El prducto está en la posicón " + productList.indexOf(product)) : console.log("Producto no disponible")
}

isTheProductAvailable("Gorra")
isTheProductAvailable("Abrigo")

//3️⃣ Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".

const isThisGmailAdress = ()=> {
    const emailList=["cliente1@gmail.com","cliente2@hotmail.com","cliente3@gmail.com"];

    if(emailList[0].includes("gmail") || emailList[1].includes("gmail") || emailList[2].includes("gmail")) { 
        console.log("Correo de Gmail encontrado")
    } else {
        console.log("No hay correos de Gmail")
    }
}

isThisGmailAdress("cliente1@gmail.com")

//4️⃣ Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

const identifyUserName =()=>{
    const name1=['Enrique','Sofresco'];
    const name2=['Esther','Colero'];
    const name3=['Leandro','Gabo'];
    // const nameList=[name1, name2, name3];
    const aleatoryNumber=Math.floor(Math.random()*(99-10)+10);
    //extraer una por una las palabras y sacar constante de numros aleatorias
    
    console.log(name1[0].slice(0,2).toUpperCase() + name1[1].slice(0,2).toUpperCase() + aleatoryNumber); //decirle que parta desde posicion2 en ambas palabras y agregue el numero aleatorio

    console.log(name2[0].slice(0,2).toUpperCase() + name2[1].slice(0,2).toUpperCase() + aleatoryNumber); 

    console.log(name3[0].slice(0,2).toUpperCase() + name3[1].slice(0,2).toUpperCase() + aleatoryNumber); 
}

identifyUserName('Enrique Sofresco','Esther Colero', 'Leandro Gado')
//ENSO8

//5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const accessCodeCorrect =()=>{
    const code=[1,5,3,8];

    if((code[0]+code[3])%2===0){
        console.log("Acceso Concebido")
    } else {
        console.log("Acesso Denegado")
    }
}

accessCodeCorrect();

//6️⃣ Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.

const randomNumberGenerator=( emptyArray )=>{
    const number1=Math.floor(Math.random()*100);
    const number2=Math.floor(Math.random()*100);

    if (number1>number2){
        emptyArray.unshift(number1); //paso al principio el 1
        emptyArray.push(number2); //paso al final el 2
    } else if (number2>number1){
        emptyArray.unshift(number2); 
        emptyArray.push(number1);
    } 
    
    if (number1===number2){
        console.log("Empate")
    } else {
        console.log(emptyArray)
    }
    }
randomNumberGenerator([]); //no se si funciona

//7️⃣ Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.

// Ejemplo de cómo debería verse el resultado:
// Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
// Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
// Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)

const applyDiscount=()=>{
    const price=[120, 75, 40];
    const aleatoryNumber=Math.floor(Math.random()*101); //generar un numero aleatorio por cada precio? o en general
    

    if (aleatoryNumber<50){
        console.log( price[0] + "Número Generado" + aleatoryNumber + "Precio final: " + (price[0]*.10) + "(10% de descuento)");
    } else if (price[0]>=50) {
        console.log( price[0] + "Número Generado" + aleatoryNumber + "Precio final: " + (price[0]*.20) + "(20% de descuento)")
}
    }