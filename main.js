document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('mind').addEventListener('click', async () =>{
        adatBetoltes();
    });

    async function adatBetoltes(){
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        //let appleTermekek = eredmeny.products.filter(e => e.brand === 'Apple')

        let termekLista = document.getElementById('termeklista');
        termekLista.textContent = '';
        // ha apple kell akkor appleTermekek a forba
        for (let p of eredmeny.products){
            let li = document.createElement('li');
            li.textContent = p.id + " - " + p.title + " - " + p.description 
            + " - Price: " + p.price + " - Discount: " + p.discountPercentage 
            + "% - Rating: " + p.rating + " - Stock: " + p.stock + " - Brand: " + p.brand
            + " - Category: " + p.category;
            termekLista.appendChild(li);
        }
    }
});