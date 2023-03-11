import { HttpHelper } from './../../../shared/utils';
import { Request, Response, NextFunction } from 'express';

export const createUserValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { type, username, password, name } = req.body;

	if (!type) {
		return HttpHelper.badRequest(res, 'MISSING_TYPE');
	}

	if (type !== 'ADMIN' || type !== 'RECRUITER' || type !== 'APPLICANT') {
		return HttpHelper.badRequest(res, 'INVALID_TYPE');
	}

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
