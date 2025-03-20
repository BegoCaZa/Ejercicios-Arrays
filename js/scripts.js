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

const isThisGmailAdress = (email)=> {
    const emailList=["cliente1@gmail.com","cliente2@hotmail.com","cliente3@gmail.com"];
    emailList.includes("gmail") ? console.log("Correo de Gmail encontrado"+ )
    
} ///necesito mas de un if para analizar cada mail