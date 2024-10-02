
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const btnPredict= document.getElementById('btn-predict')
  const response = document.getElementById('resultado')
  
  btnCalculate.addEventListener('click', calculateNote )
  btnPredict.addEventListener('click', predictNote )

  function calculateNote(event) {

    event.preventDefault()

    const note1 = parseFloat(data1.value)        
    const note2 = parseFloat(data2.value)        
    const note3 = parseFloat(data3.value)

    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)

    if (result > 4.5) {
      //si la nota definitiva es mayor a 4.5 debe informar al usuario que su nota es sobresaliente en color verde.
      response.style.color = "green"
    } else if (result >= 3.5 && result <= 4.5) {
      //si la nota definitiva es está entre 3.5 y 4.5 debe informar al usuario que ganó la materia en color naranja
      response.style.color = "orange"
    }
    else {
      response.style.color = "black"
    }
    response.style.fontWeight = "800"
    response.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${result}`    
  }

  //Al dar click en el botón predecir, el sistema deberá agregar de manera automática la nota mínima en el input de la nota3(Dícese de nota mínima la nota que debe sacar para que su definitiva quede en 3.5)
  
function predictNote(event) {

    event.preventDefault()

    const note1 = parseFloat(data1.value)        
    const note2 = parseFloat(data2.value) 

    let result = - 3.5 - (note1 * 0.3) + (note2 * 0.3) 
    let need = 

    console.log(result)
}



