
let list = (search) => {
    
    let searchInput = document.getElementById("search");
    let url = "https://restcountries.com/v3.1/all";

    if(search && searchInput.value){
        url = `https://restcountries.com/v3.1/name/${searchInput.value}`;
        console.log(searchInput.value);
    }

    fetch(url)
        .then(json => json.json())
        .then(countries => {
            let row = document.querySelector("#row");
            let countriesHtml = "";
            for (let index = 0; index < countries.length; index++) {
                const country = countries[index];
                //nome: country.translations.por.common
                //imagem:country.flags.png
                //alt:country.flags.alt
                //flag: country.flag
                //região: country.region

                countriesHtml += `
                <div class="col-4 mt-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
                        <div class="card-body">
                        <h5 class="card-title">${country.translations.por.common}</h5>
                        <p class="card-text">
                            Região: ${country.region}
                        </p>
                        </div>
                    </div>
                </div>
                `
                
            }
            
            row.innerHTML = countriesHtml;
        })
}

list();


// function comprimentar(nome){
//     console.log(`Olá ${nome}`);
// }

// comprimentar("Eric");