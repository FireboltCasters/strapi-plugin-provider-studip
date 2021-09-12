import {Connector} from "studip-api";

export default class StudipProvider{
    static async handleAuth(domain: string , access_token: any, callback: any){
        const username = access_token.username || null;
        const password = access_token.password || null;

        try{
            const client = await Connector.getClient(domain, username, password);
            const user = client.getUser();
            await callback(null, {
                username: user.username,
                email: user.email,
            });
        } catch (err){
            await callback(new Error('incorrect credentials'));
        }
    }
}