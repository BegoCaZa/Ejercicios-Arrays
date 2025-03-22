//1️⃣ Camila está organizando la lista de asistentes para una conferencia. Tiene un array con nombres, por ejemplo: ["Pedro", "Ana", "Sofía", "Luis"]. Quiere saber si "Ana" está en la lista y, si es así, debe imprimir "Invitada confirmada en la posición X". Si no está, debe imprimir "Invitada no encontrada".
const whosInThisList=(name)=>{
    const nameList=["Pedro","Ana","Sofía","Luis"];

    nameList.includes(name) ? console.log("Invitada confirmada en la posición " + nameList.indexOf(name)): console.log("Invitada no encontrada")

}

whosInThisList("Julian")

//2️⃣ Bego está buscando un producto específico en su tienda. La lista de productos es: ["Camiseta", "Pantalón", "Gorra", "Zapatos"]. Necesita saber en qué posición se encuentra "Gorra". Si lo encuentra, debe mostrar su posición. Si no lo encuentra, debe mostrar "Producto no disponible".

const isTheProductAvailable = (product)=> {
    const productList=["Camiseta","Pantalón","Gorra","Zapatos"];
    
    productList.includes(product) ? console.log("El producto está en la posicón " + productList.indexOf(product)) : console.log("Producto no disponible")
}

isTheProductAvailable("Gorra")
isTheProductAvailable("Abrigo")

//3️⃣ Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".

const isThisGmailAdress = ()=> {
    const emailList=["cliente1@gmail.com","cliente2@hotmail.com","cliente3@gmail.com"];

    if(emailList[0].includes("gmail") || emailList[1].includes("gmail") || emailList[2].includes("gmail")) { //al menos UNO de esos, tiene gmail
        console.log("Correo de Gmail encontrado")
    } else {
        console.log("No hay correos de Gmail")
    }
}

isThisGmailAdress("cliente1@gmail.com")

//4️⃣ Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

const extractTwoFirstLetter=(fullname)=>{ //PRIMERO UNA FUNCION para extraer las 2 primeras letras, las pasa a mayusculas 
    const letters=
    fullname.substring(0,fullname.indexOf(" ")).charAt(0).toUpperCase() + // primera letra del nombre //lee posicion 0 de la palabra="enrique sofresco". ".substring" coge la primer palabra, y lo pasa a mayusculas
    fullname.substring(0,fullname.indexOf(" ")).charAt(1).toUpperCase() + // segunda letra del NOMBRE 

    fullname.substring(fullname.indexOf(" ")+1).charAt(0).toUpperCase() + // primera letra del APELLIDO

    fullname.substring(fullname.indexOf(" ")+2).charAt(0).toUpperCase(); // segunda letra del APELLIDO

    return letters; //junta todas las constantes y las guarda para después
};

const identifyUserName =(names)=>{
    const firstName = extractTwoFirstLetter(names[0]) + Math.floor(Math.random()*(99-10)+10); // genera una constante con las 2 primeras letras del NOMBRE y APELLIDO usando la FUNCION anterior y agrega un numero aleatorio
    const secondName = extractTwoFirstLetter(names[1]) + Math.floor(Math.random()*(99-10)+10);
    const thirdName = extractTwoFirstLetter(names[2]) + Math.floor(Math.random()*(99-10)+10);

    console.log(firstName,secondName,thirdName);
}

identifyUserName(['Enrique Sofresco','Esther Colero', 'Leandro Gado'])
//ENSO8

//5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

// const accessCodeCorrect =()=>{
//     // const code=[1,5,3,8]; 
//     // if((code[0]+code[3])%2===0){
//     //     console.log("Acceso Concebido")
//     // } else {
//     //     console.log("Acesso Denegado");
//     // } FORMA ESPECIFICA PARA 4 DIGITOS

    //FORMA GENERAL PARA MAS DIGITOS
const accessCodeCorrect =(numbers)=>{
    if((numbers[0] + numbers[numbers.length-1])%2===0) { //numero en posicion 0 y numero en la ultima posicion (largo del array-1)
        console.log("Acceso Concebido");
        } else {
        console.log("Acesso Denegado");
}
    };

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
randomNumberGenerator([]); //emptyarray sirve para guardar la informacion y luego mostrarla

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

//primer numero
    if (aleatoryNumber1<50){
        console.log( price[0] + " | Número Generado " + aleatoryNumber1 + " |Precio final: " + (price[0]*.10) + " (10% de descuento)");
    } else if (aleatoryNumber1>=50) {
        console.log( price[0] + " | Número Generado " + aleatoryNumber1 + " |Precio final: " + (price[0]*.20) + " (20% de descuento)")
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


 //8️⃣ Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.

// Ejemplo de cómo debería verse el resultado:
// Cuenta original: 120 | Dividido: 40 | Precio final: 40
// Cuenta original: 75 | Dividido: 25 | Precio final: 26 (Redondeado al número par más cercano)
// Cuenta original: 93 | Dividido: 31 | Precio final: 32 (Redondeado al número par más cercano)

const splitBills =(bills)=>{
    //por cada cuenta
    const bill1= bills[0]/3;
    const bill1Final= 
    (bill1%2!==0)? 
    Math.round(bill1): bill1;
    console.log("Cuenta Original: "+ bills[0] + "| Precio dividido: "+ bill1 + "| Precio final: " + bill1Final);
    
    const bill2= bills[1]/3;
    const bill2Final= 
    (bill2%2!==0)? 
    Math.round(bill2): bill2;
    console.log("Cuenta Original: "+ bills[1] + "| Precio dividido: "+ bill2 + "| Precio final: " + bill2Final);

    const bill3= bills[2]/3;
    const bill3Final= (bill3%2!==0)? 
    Math.round(bill3): bill3;
    console.log("Cuenta Original: "+ bills[2] + "| Precio dividido: "+ bill3 + "| Precio final: " + bill3Final);
    
} 


splitBills([120,75,94]); //probe con un numero no dividible entre 3

//9️⃣ Macarena quiere calcular la edad de tres clientes. Recibe un array con tres años de nacimiento entre 1950 y 2010. Sabiendo que estamos en el año 2025, debe calcular la edad de cada uno y determinar si al menos uno es mayor de 18. Si hay al menos un cliente mayor de edad, imprimirá "Hay un cliente mayor de edad", si no, "Todos son menores de edad".

const calculateAges =(years)=>{ //como yo le dare los años, no existe const de arrays
    const currentYear= 2025;

    //calcular la edad y guardarla en una constante
    const ages= [
        //edad1
        currentYear-years[0],
        currentYear-years[1],
        currentYear-years[2]
    ];

    // revisar si es mayor de edad
    if( ages[0]<18 && ages[1]<18 && ages[2]<18 ){
        console.log("Todos son menores de edad");
    } else{
        console.log("Hay un cliente mayor de edad")
    }


}
calculateAges([2007,1998,2020]);

//🔟 Abby encontró un código de seguridad con tres números entre 100 y 999. Si el primer número es mayor que el segundo pero menor que el tercero, imprimirá "Código válido", si no, "Código incorrecto".

const verifyCode=(code)=>{
    if ( code[0]>code[1] && code[0]<code[2]){
        console.log("Código válido")
    } else{
        console.log("Código inválido")
    }
}

verifyCode([8,5,10]);

//1️⃣1️⃣ Camila está organizando la lista de clientes de su tienda. Un cliente nuevo, "Lucía", llega y debe agregarse al final de la lista de clientes: ["Carlos", "María", "Sofía"]. Luego, debe mostrar cuántos clientes hay en la lista.

const organizeClientList=()=>{
    const currentList= ["Carlos", "María", "Sofía"];

    currentList.push("Lucía");

    console.log(currentList + " || El número de clientes es: ", currentList.length);
}

organizeClientList();

//1️⃣2️⃣ Bego está revisando el stock de su tienda. Un producto aleatorio ya no está disponible y debe ser eliminado de la lista: ["Pan", "Leche", "Huevos"]. Después, debe mostrar cuántos productos quedan.

const productStock =()=>{
    const stockList= ["Pan", "Leche", "Huevos"];
    const aleatoryProduct = Math.floor(Math.random()*stockList.length);

    //crea una nueva lista como array para imprimir y luego contar cantidad
    const newStockList=[
        stockList.slice(0,aleatoryProduct),
        stockList.slice(aleatoryProduct+1)
    ];

    console.log(newStockList + "|| Quedan disponibles " + newStockList.length + " productos" )
    
}

productStock();

//Sabrina está registrando pedidos en un restaurante. Un nuevo pedido, "Pizza", ha sido añadido en primer lugar a la lista de pedidos: ["Hamburguesa", "Ensalada"]. Luego, debe imprimir el primer pedido en la lista.

const addToList =(newProduct)=>{
    const currentList= ["Hamburguesa", "Ensalada"];

    currentList.unshift(newProduct);

    console.log(currentList);
    
}
addToList("Pizza");

//1️⃣4️⃣ Macarena está revisando las reservas de su hotel. Un cliente canceló su reserva en la lista: ["Habitación 101", "Habitación 203", "Habitación 305"]. Luego, debe mostrar cuántas reservas quedan.

const reservationList=()=>{
    const clientList= ["Habitación 101", "Habitación 203", "Habitación 305"];
    const aleatoryClient = Math.floor(Math.random()*clientList.length);

    const newClientList= [
        clientList.slice(0,aleatoryClient),
        clientList.slice(aleatoryClient+1)
    ];

    console.log(newClientList + " | Número de reservas :"+ newClientList.length);
}

reservationList(); //no me encanta como se imprime

//1️⃣5️⃣ Abby encontró una lista de suministros en un refugio, por ejemplo: ["Botiquín", "Munición", "Agua", "Comida"]. Necesita asegurarse de que hay "Munición" y "Comida" disponibles. Si ambos están en la lista, debe mostrar "Suministros completos". Si falta alguno, debe mostrar "Suministros incompletos".

const supplyListCheck=(supplies)=>{
    supplies.includes("Munición") && supplies.includes("Comida") 
    ? console.log("Suministros completos") 
    : console.log("Suministros incompletos");
}

supplyListCheck(["Botiquín", "Munición", "Agua", "Comida"]);

//1️⃣6️⃣ Camila está organizando una lista de espera. Un cliente importante, "Fernando", debe ser colocado en la primera posición de la lista: ["Ana", "Luis", "Elena"]. Luego, debe mostrar quién es el último en la lista.

const organizeWaitList=()=> {
    const currentWaitList = ["Ana", "Luis", "Elena","Julieta"];
    currentWaitList.unshift("Fernando");

    const lastCustomer = currentWaitList[currentWaitList.length-1];//le estoy diciendo que me diga el nombre de la ultima posicion en la lista, o sea 3

    console.log (lastCustomer);
    
}

organizeWaitList();
