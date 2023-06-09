class cryptoAPI{
    
    async queryAPI(currency,cryptoCurrency){
        const apiKey = '9dc9af95-9b6d-44ef-865c-6f2b5636a1c1'
        const url= await fetch(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion';
        `);
        

        const result = await url.json();

        return{
            result
        }
    }
    //GET all the Cryptocurrencies 
    async getCryptoCurrenciesList(){
        const url = await fetch('https://pro-api.coinmarketcap.com//');

        //Returning this as a JSON
        const Cryptocurrencies= await url.json();

        //Returning the object
        return{
            Cryptocurrencies
        }
    }
}