import { CryptoData } from "../models/CryptoData.model.js";
import { fetchCryptoData } from "./fetchCryptoData.js";

export async function saveCryptoDataToDB(){
    try{
        const cryptoData = await fetchCryptoData();

        const addedDocuments = [];
        for (const [coinName, coin] of Object.entries(cryptoData)) {
            const coin = cryptoData[coinName];
            const cryptoDoc = await CryptoData.create({
            coin: coinName,
            price: coin.usd,
            market_cap: coin.usd_market_cap,
            change_24h: coin.usd_24h_change});
            addedDocuments.push(cryptoDoc)
        }
        return addedDocuments;
    }catch (error) {
        console.error('Error fetching cryptocurrency data:', error.message);
        throw error;
    }
}