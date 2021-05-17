import { Request, Response } from 'express';
import { User } from 'entities/User';

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
export const users_get_all = async (
  _: Request,
  res: Response,
): Promise<Response> => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
