import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { saveCryptoDataToDB } from "./services/saveCryptoData.js";
import cron from "node-cron"

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`⚙️   Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

await saveCryptoDataToDB();
cron.schedule('0 */2 * * *', async () => {
    console.log('Fetching and saving cryptocurrency data...');
    await saveCryptoDataToDB();
});
