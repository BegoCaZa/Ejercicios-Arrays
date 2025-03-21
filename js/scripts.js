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

const extractTwoFirstLetter=(fullname)=>{ //extraer las 2 primeras letras, las pasa a mayusculas
    const letters=
    fullname.substring(0,fullname.indexOf(" ")).chartAt(0).toUpperCase() + // primera letra del nombre //lee posicion 0 de la palabra="enrique sofresco". ".substring" coge la primer palabra, y lo pasa a mayusculas
    fullname.substring(fullname.indexOf(" ")).chartAt(1).toUpperCase() + // segunda letra del nombre 

    fullname.substring(fullname.indexOf(" ")+1).chartAt(0).toUpperCase() + // primera letra del apellido

    fullname.substring(fullname.indexOf(" ")+2).chartAt(0).toUpperCase(); // segunda letra del apellido

    return letters; //junta todas las constantes y las guarda para después
};
const identifyUserName =(name)=>{
    const firstName = name[0].substring(0,name[0].indexOf(" ")).chartAt(0); //lee posicion 0 del primer array="enrique sofresco". ".substring" coge el pedazo del array, o sea de la posicion 0 a el espacio)
    const firstSurname = name[0].substring(name[0].indexOf(" ")+1).chartAt(0); //agrego+1 para que salete el espacio y no lo considere en el substring

    const secondName = name[1].substring(0,name[1].indexOf(" ")).chartAt(0);
    const secondSurname = name[1].substring(name[1].indexOf(" ")+1).chartAt(0);

    const thirdName = name[2].substring(0,name[2].indexOf(" ")).chartAt(0);
    const thirdSurname = name[2].substring(name[2].indexOf(" ")+1).chartAt(0);

    const aleatoryNumber=Math.floor(Math.random()*(99-10)+10);
    // //extraer una por una las palabras y sacar constante de numeros aleatorias
    
    console.log(
        firstName.slice(0,2).toUpperCase() + firstSurname.slice(0,2).toUpperCase() + aleatoryNumber); //decirle que parta desde posicion2 en ambas palabras y agregue el numero aleatorio

    // console.log(name2[0].slice(0,2).toUpperCase() + name2[1].slice(0,2).toUpperCase() + aleatoryNumber); 

    // console.log(name3[0].slice(0,2).toUpperCase() + name3[1].slice(0,2).toUpperCase() + aleatoryNumber); 
}

identifyUserName(['Enrique Sofresco','Esther Colero', 'Leandro Gado'])
//ENSO8

//5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const accessCodeCorrect =(code)=>{
    const code=[1,5,3,8]; 
    if((code[0]+code[3])%2===0){
        console.log("Acceso Concebido")
    } else {
        console.log("Acesso Denegado")
    // } FORMA ESPECIFICA PARA 4 DIGITOS

    // //FORMA GENERAL PARA MAS DIGITOS
    // const accessCodeCorrect =(numbers)=>{
    // if((numbers[0]+numbers[3])%2===0){
    //     console.log("Acceso Concebido")
    //     } else {
    //     console.log("Acesso Denegado")

    
}

accessCodeCorrect([1, 5, 3, 8]);

//6️⃣ Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.

const randomNumberGenerator=( emptyArray )=>{
    const number1=Math.floor(Math.random()*100);//5
    const number2=Math.floor(Math.random()*100);//8

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
    const aleatoryNumber1=Math.floor(Math.random()*101); //generar un numero aleatorio por cada precio? o en general
    const aleatoryNumber2=Math.floor(Math.random()*101);
    const aleatoryNumber3=Math.floor(Math.random()*101);


    if (aleatoryNumber1<50){
        console.log( price[0] + " | Número Generado" + aleatoryNumber1 + " |Precio final: " + (price[0]*.10) + " (10% de descuento)");
    } else if (aleatoryNumber1>=50) {
        console.log( price[0] + " | Número Generado" + aleatoryNumber1 + " |Precio final: " + (price[0]*.20) + " (20% de descuento)")
}
//segundo numero
if (aleatoryNumber2<50){
    console.log( price[1] + " | Número Generado " + aleatoryNumber2 + " |Precio final: " + (price[1]*.10) + " (10% de descuento)");
} else if (aleatoryNumber2>=50) {
    console.log( price[1] + " | Número Generado " + aleatoryNumber2 + " |Precio final: " + (price[1]*.20) + " (20% de descuento)")
}
//tercer numero
if (aleatoryNumber3<50){
    console.log( price[2] + " | Número Generado " + aleatoryNumber3 + " |Precio final: " + (price[2]*.10) + " (10% de descuento)");
} else if (aleatoryNumber3>=50) {
    console.log( price[2] + " | Número Generado " + aleatoryNumber3 + " |Precio final: " + (price[2]*.20) + " (20% de descuento)")
}

    }

    applyDiscount();