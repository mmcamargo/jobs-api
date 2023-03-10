import { Request, Response, NextFunction } from 'express';
import { IDefaultResponse } from '../../../shared/interfaces';

export const createAdminValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { username, password, name } = req.body;

	if (!username) {
		return res.status(400).send({
			success: false,
			message: 'USERNAME_NOT_FOUND',
		} as IDefaultResponse);
	}

	if (!password) {
		return res.status(400).send({
			success: false,
			message: 'PASSWORD_NOT_FOUND',
		} as IDefaultResponse);
	}

	if (!name) {
		return res.status(400).send({
			success: false,
			message: 'NAME_NOT_FOUND',
		} as IDefaultResponse);
	}

	next();
};
