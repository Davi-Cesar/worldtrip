import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker';
type Country = {
    name: string;
    description: string;
    image: string;
}

export function makeServer() {
    const server = createServer({
       
       models: {
            country: Model.extend<Partial<Country>>({
                
            })
       },

       factories: {
            country: Factory.extend({
                name() {
                    return faker.address.county
                },
                description() {
                    return faker.address.country
                }
            })
       },

       seeds(server) {

       },
        
        routes() {
            this.namespace = 'api';
            this.timing = 750;
            
            this.get('/country');
            this.post('/country');

            this.namespace = '';
        },
    })
    return server;
}