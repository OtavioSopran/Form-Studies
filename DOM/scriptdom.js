/// getElementById()
// const element = document.getElementById("blog-title")
// console.log(element)


//// getElementByClassName()
// const element = document.getElementsByClassName("blog-title")
// console.log(element)


//// getElementByTagName()
// const element = document.getElementsByTagName("body")
// console.log(element)


//// querySelector()
// const element = document.querySelector("body")
// console.log(element)


//// querySelectorAll()
// const element = document.querySelectorAll(".blog-title")
// console.log(element)
//// eu só posso usar o forEach associado ao querySelectorAll
// element.forEach(el => console.log(el))


//// Qual usar?

//// getElementById        (esse retorna um Element)
//// getElementByClassName (vai dar um retorno de HTMLCollection)
//// getElementByTagName   (vai dar um retorno de HTMLCollection)
//// querySelector         (esse retorna um Element)
//// querySelectorAll      (vai dar um retorno de Nodelist)
//// no Nodelist conseguimos fazer um forEach e no HTMLCollection não


//// Manipulando contúdo
//// textContent
// const element = document.querySelector("h1")
//// com text.Content eu mudo o contúdo da tag
// element.textContent = "Olá Devs!"

//// posso também concatenar e mudar
// element.textContent += "Olá Devs!"


//// Manipulando contúdo
//// innerText
// const element2 = document.querySelector("h2")
//// com innerText eu mudo o texto da tag 
// element2.innerText = "Olá Devs!"


//// Manipulando contúdo
//// innerHtml
// const element3 = document.querySelector("body")
//// com innerHTML eu mudo o html interno
// element3.innerHTML = "Olá Devs! <small>mais!<small/>"


//// Manipulando contúdo
//// value
// const element4 = document.querySelector("input")
// element4.value = "Valor que eu quiser"
//// com o value eu posso atriburir e/ou ver o valor 


//// Manipulando contúdo
//// Atributos
// const header = document.querySelector("header")
//// com o setAttribute eu add um atributo como id="header" na tag header no HTML
// header.setAttribute("id", "header")
//// aqui eu pegeui o id criado
// const headerID = document.querySelector("#header")
//// aqui eu posso pegar atributos que tenha 
// console.log(headerID.getAttribute("class"))
//// aqui eu posso remover atributos
// header.removeAttribute("id")
// header.removeAttribute("class")



//// Alterando estilos
/// style.alguma coisa
// const element5 = document.querySelector("body")
//// aqui eu coloco uma propriedade CSS no HTML
//// no caso do background-color eu tiro o - e coloco C maiusculo
// element5.style.backgroundColor = "#6371f1"
//// posso também pegar o valor setado
// console.log(element5.style.backgroundColor = "#6371f1")



//// Alterando estilos
/// classlist
// const element6 = document.querySelector("body")
//// aqui eu adiciono um estilo ao html
// element6.classList.add("active", "green")
// console.log(element6.classList)
//// aqui eu removo um estilo ao html
// element6.classList.remove("active")
//// aqui eu adiciono novamente um estilo que foi tirado
//// caso eu tire o remove, o toggle que vai remover do classList.add (ele funciona como um interruptor on/off)
// element6.classList.toggle("active")




//// Navegando pelos elementos
//// parentNode parentElement
// const body = document.querySelector("body")
//// o nó pai é o <html> porque ele é filho do <html>
// console.log(body.parentNode)
//// o parentElement pega a mesma coisa
// console.log(body.parentElement)



//// Navegando pelos elementos
//// childNodes children
// const el = document.querySelector("body")
//// o childNodes leva em conta os espaços vazios 
// console.log(el.childNodes)
//// já o children não leva em conta os espaços vazios 
// console.log(el.children)

//// firstChild firstElementChild
// console.log(el.firstChild)
// console.log(el.firstElementChild)

//// lastChild lastElementChild
// console.log(el.lastChild)
// console.log(el.lastElementChild)



//// Sibling é irmão em inglês
//// Navegando pelos elementos
//// nextSibling nextElementSibling
// const el = document.querySelector("header")
// console.log(el.nextSibling)
// console.log(el.nextElementSibling)

//// previousSibling previousElementSibling
// console.log(el.previousSibling)
// console.log(el.previousElementSibling)



//// Criando e adicionando elementos na página
//// createElement
// const div = document.createElement("div")
// div.innerText = "Olá Devs!"
// console.log(div)

//// append prepend
// const body = document.querySelector("body")
//// aqui estou adicionando no final do body
// body.append(div)
//// aqui no inicio
// body.prepend(div)



//// Adicionando elementos
// const div = document.createElement("div")
// div.innerText = "Olá Devs!"

//// insertBefore
// const body = document.querySelector("body")
// const script = body.querySelector("script")
// body.insertBefore(div, script)



//// Eventos para teclado

// function print() {
//     console.log("print")
// }

// const input = document.querySelector("input")
// input.onkeydown = function () {
//     console.log("rodei")
// }




//// Eventos para teclado
//// Adicionando eventos via JS

const h1 = document.querySelector("h1")
/* o h1 é uma váriaval constante que selecionou o h1 do HTLML
então h1 recebeu um ouvidor de eventos que está esperando por um evento
que será o click do mouse, em seguida uma função é chamada e executada
 */
//// no lugar do click posso por vaaaarios outros tipos de eventos (explorar isso)
h1.addEventListener("click", print)
//// eu não coloco () depois de print porque quero que chame a function para ser executada
function print() {
    console.log("print")
}
//// essa é outra maneira de fazer a mesma coisa 
h1.addEventListener("click", function () {
    console.log("outra maneira")
})




//// Eventos
//// argumento event

const input = document.querySelector("input")
//// mostra as categorias de eventos
input.onkeypress = function (event) {
    console.log(event.key)
    //// posso mudar .key para outros eventos 
    //// e posso tambem por .key.value e pegar o valor do objeto 
}
