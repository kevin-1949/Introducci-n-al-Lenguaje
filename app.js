function mostrarInput(opcion) {
  var t1 = document.querySelector('#t1');
  var t2 = document.querySelector('#t2');
  var t3 = document.querySelector('#t3');
  
  t1.disabled = true;
  t2.disabled = true;
  t3.disabled = true;
  t1.value = "";
  t2.value = "";
  t3.value = "";
  t1.placeholder = "";
  t2.placeholder = "";
  t3.placeholder = "";

  if (opcion === "2" || opcion === "4") {
      t1.disabled = false;
      t2.disabled = false;
      t3.disabled = false;

      if (opcion === "2") {
          t1.placeholder = "Nota 1";
          t2.placeholder = "Nota 2";
          t3.placeholder = "Nota 3";
      } else if (opcion === "4") {
          t1.placeholder = "Valores permitidos";
          t2.placeholder = "Columnas";
          t3.placeholder = "Filas";
      }
  } else if (opcion === "3") {
      t1.disabled = false;
      t1.placeholder = "Edad";
  }
}

function enviar() {
  var contenido = document.querySelector('#contenido');
  var v1 = document.querySelector('#t1').value;
  var v2 = document.querySelector('#t2').value;
  var v3 = document.querySelector('#t3').value;
  var url = "";

  if (document.querySelector('#opcion1').checked) {
      // Opción de mensaje
      contenido.innerHTML = "Mensaje: " + v1;
      return;
  } else if (document.querySelector('#opcion2').checked) {
      // Opción de notas
      url = '/notas/' + v1 + '/' + v2 + '/' + v3;
  } else if (document.querySelector('#opcion3').checked) {
      // Opción de edad
      url = '/edades/' + v1;
  } else if (document.querySelector('#opcion4').checked) {
      // Opción de arreglo
      url = '/arreglos/' + v1 + '/' + v2 + '/' + v3;
  } else {
      swal("Mensaje", "Seleccione una opción", "warning");
      return;
  }

  fetch(url)
      .then(function(response) {
          if (response.ok) {
              return response.text();
          } else {
              throw "Error en la llamada";
          }
      })
      .then(function(texto) {
          console.log(texto);
          contenido.innerHTML = texto;
      })
      .catch(function(error) {
          console.log(error);
          swal({
              title: "Advertencia",
              text: error,
              icon: "warning",
              buttons: true,
              dangerMode: true,
          });
      });
}

