import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
	username: 'postgres',
	password: '1110Dilz$',
	database: 'examm',
	host: 'localhost',
	dialect: 'postgres',
	logging: false,
});

!(async function () {
	try {
		await sequelize.authenticate();
		console.log('connection db');
	} catch (error) {
		console.log(error);
	}
})();

export default sequelize;
