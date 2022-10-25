document.addEventListener('DOMContentLoaded', () => {

    //Mind
    document.getElementById('mind').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();
        adatMegjelenites(eredmeny.products);
    });

    //ABC sorrend
    document.getElementById('abc').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let sorrend = eredmeny.products.sort(function(a, b){
            let elso = a.title.toUpperCase();
            let masodik = b.title.toUpperCase();

            if(elso < masodik){
                return -1;
            }else if( elso > masodik){
                return 1;
            }else{
                return 0;
            }
        });
        adatMegjelenites(sorrend);
    });

    //Legdrágább
    document.getElementById('legdragabb').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let expensive = eredmeny.products.sort((a, b) => {
            if(a.price < b.price){
                return 1;
            }else if(a.price > b.price){
                return -1;
            }else {
                return 0;
            }
        });
        adatMegjelenites(expensive);
    });
    
    //Leírás
    document.getElementById('leiras').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let filterezes = eredmeny.products.filter(e => e.description.toUpperCase().includes(document.getElementById('szovegmezo').value.toUpperCase()));
        adatMegjelenites(filterezes);
    });

    //Ajánlat
    document.getElementById('ajanlat').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let occo = eredmeny.products.filter(e => e.price <=100);
        let sorrend = occo.sort((a, b) => {
            if(a.rating < b.rating){
                return 1;
            }else if(a.rating > b.rating){
                return -1;
            }else {
                return 0;
            }
        });

        adatMegjelenites(sorrend);
    });

    function adatMegjelenites(termekek){
        let termekLista = document.getElementById('adatok');
        termekLista.textContent = '';

        for (let p of termekek){
            let li = document.createElement('li');
            li.innerHTML = p.id + ". " + p.title + " - " + p.description 
            + "<br>Price: " + p.price + " - Discount: " + p.discountPercentage 
            + "%<br>Rating: " + p.rating + " - Stock: " + p.stock + "<br>Brand: " + p.brand
            + " - Category: " + p.category + "<hr>";
            termekLista.appendChild(li);
        }
    }
});

//let appleTermekek = eredmeny.products.filter(e => e.brand === 'Apple')