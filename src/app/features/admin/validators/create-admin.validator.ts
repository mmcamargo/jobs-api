import { HttpHelper } from './../../../shared/utils/http.helper';
import { Request, Response, NextFunction } from 'express';

export const createAdminValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { username, password, name } = req.body;

	if (!username) {
		return HttpHelper.badRequest(res, 'MISSING_USERNAME');
	}

	if (!password) {
		return HttpHelper.badRequest(res, 'MISSING_PASSWORD');
	}

	if (!name) {
		return HttpHelper.badRequest(res, 'MISSING_NAME');
	}

	next();
};
