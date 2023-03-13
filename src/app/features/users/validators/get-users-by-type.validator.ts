import { HttpHelper } from './../../../shared/utils';
import { Request, Response, NextFunction } from 'express';

export const getUsersByTypeValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { type } = req.params;

	if (type !== 'ADMIN' && type !== 'RECRUITER' && type !== 'APPLICANT') {
		return HttpHelper.badRequest(res, 'INVALID_TYPE');
	}

	next();
};
