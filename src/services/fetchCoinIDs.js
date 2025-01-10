import { TARGET_COINS } from "../constants.js";

export async function fetchCoinIds() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        
        const allCoins = await response.json();
        
        const targetCoins = TARGET_COINS;
        const coinIds = allCoins
            .filter(coin => targetCoins.includes(coin.id))
            .map(coin => coin.id);

        return coinIds;
    } catch (error) {
        console.error('Error fetching coin IDs:', error.message);
        throw error;
    }
}