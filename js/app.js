(function() {
  const inputMonto = document.getElementById('monto');
  const inputAños = document.getElementById('años');
  const btnSimular = document.getElementById('simular');
  const tbody = document.getElementById('tbody');
  
  inputMonto.addEventListener('input', function(){
    inputYear.addEventListener('input',function(){
      var url = `http://lectorweb.uniclickdigital.com/api/ahorro/${inputMont.value}/${inputYear.value}`;
      btnSimular.addEventListener('click', function() {
        fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((recurso)=> {
              console.log(recurso);
            //   for(let i=0;i<){
            //     tbody.innerHTML = ` <tr>
            //   <td>${recurso.}</td>
            //   <td>${}</td>
            //   <td>${}</td>
            // </tr>`

            //   }

              
    
        });

    })
   



  })

  


  });

})();