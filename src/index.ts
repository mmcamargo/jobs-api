import { DatabaseConnection } from './main/database/typeorm.connection';
import { runServer } from './main/server';

Promise.all([DatabaseConnection.connect()])
	.then(runServer)
	.catch((error: any) => {
		console.log(error);
	});
