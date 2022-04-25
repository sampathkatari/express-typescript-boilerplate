import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { User } from '../../../src/api/models/User';

export class CreateUsers implements Seeder {

    run(factory: Factory, connection: Connection): Promise<any> {
        return factory(User)().seedMany(10);
    }

}
