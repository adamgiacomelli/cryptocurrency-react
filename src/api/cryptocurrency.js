export async function fetchCryptoCurrencys(currency) {

    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${currency}&limit=100`,
        {
            method: 'GET'
        });
    return await response.json();
}

export async function fetchUpdateCryptoCurrencys(currency) {

    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${currency}&limit=100`,
        {
            method: 'GET'
        });
    return await response.json();
}

export async function fetchSingleCryptocurrency(id, currency) {

    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/?convert=${currency}&limit=100`,
        {
            method: 'GET'
        });
    return await response.json();
}
