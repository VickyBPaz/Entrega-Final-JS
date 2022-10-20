

const traerServicios = async () => {
    const listado = document.getElementById("listado");
  
    try {
      //codigo peligroso
      const response = await fetch("./JSON/data.JSON");
      const data = await response.json();
  
      data.forEach((Servicios) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h2>${Servicios.nombre}</h2>
          <p>$${Servicios.precio}</p>
          <p>id N°${Servicios.id}</p>
          `;
  
        listado.append(li);
      });
    } catch (error) {
    //   console.log(error);
    }
  };
  
  traerServicios();



