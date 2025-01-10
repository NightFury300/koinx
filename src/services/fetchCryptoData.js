import { fetchCoinIds } from "./fetchCoinIDs.js";

export async function fetchCryptoData() {
    try {
        const coinIds = await fetchCoinIds();

        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch cryptocurrency data: ${response.status}`);
        }

        const data = await response.json();        
        return data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error.message);
        return null;
    }
}
