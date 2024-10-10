
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const btnPredict= document.getElementById('btn-predict')
  const response = document.getElementById('resultado')
  const body = document.getElementById('body')

  btnCalculate.addEventListener('click', calculateNote )
  btnPredict.addEventListener('click', predictNote )

  function calculateNote(event) {

    event.preventDefault()

    let tipe = data1
    const note1 = validateNotes(tipe)  
    tipe = data2
    const note2 = validateNotes(tipe)     
    tipe = data3
    const note3 = validateNotes(tipe)

    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
    
    response.style.fontWeight = "800"

    if (!isNaN(result)) { 

        if (result > 4.5) {
          //si la nota definitiva es mayor a 4.5 debe informar al usuario que su nota es sobresaliente en color verde.
          response.style.color = "green"
          body.style.backgroundColor = "green"
        } else if (result >= 3.5 && result <= 4.5) {
          //si la nota definitiva es está entre 3.5 y 4.5 debe informar al usuario que ganó la materia en color naranja
          response.style.color = "orange"
          body.style.backgroundColor = "orange"
        }
        else {
          response.style.color = "black"
          body.style.backgroundColor = "#e9ecef"
        }

        response.textContent = `${username.value} su nota definitiva es: ${result}`

    }
    if (isNaN(result)) { 
      body.style.backgroundColor = "red"
      response.style.color = "red"
      response.textContent = `${username.value} su resultado no es valido`
    }
    
    console.log(result);
    
  }

  //Al dar click en el botón predecir, el sistema deberá agregar de manera automática la nota mínima en el input de la nota3(Dícese de nota mínima la nota que debe sacar para que su definitiva quede en 3.5)
  
function predictNote(event) {

    event.preventDefault()

    let tipe = data1
    const note1 = validateNotes(tipe)  
    tipe = data2
    const note2 = validateNotes(tipe)


    let need = (3.5 - (note1*0.3) - (note2*0.3))/0.4
    
    response.textContent = `la nota faltante es ${need}`
}

  //validar las  notas
  function validateNotes(tipe) {

    let note

      note = parseFloat(tipe.value)
      
    if (note >= 0 && note <= 5) {
      tipe.style.color = "black"
      tipe.style.fontWeight = "100"
      return note
    } else {
      tipe.style.fontWeight = "800"
      tipe.style.color = "red"
      body.style.backgroundColor = "red"
    }

  }
