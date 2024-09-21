
export const setupSession = (res, session) => {

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  };

  res.cookie('refreshToken', session.refreshToken, cookieOptions);
  res.cookie('sessionId', session._id, cookieOptions);
};
