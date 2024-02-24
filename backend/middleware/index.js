import admin from '../config/firebase-config.js';
class verificationMiddleware {
	async decodeToken(req, res, next) {
		console.log("check ceck", req.body.headers.Authorization)
		const token = req.body.headers.Authorization.split(' ')[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
            console.log("hello")
			if (decodeValue) {
                console.log(decodeValue);
				return next();
			}
			return res.json({ message: 'Unauthorized' });
		} catch (e) {
			console.log(e)
			return res.json({ message: 'Internal Error' });
			
		}
	}
}
export default new verificationMiddleware();