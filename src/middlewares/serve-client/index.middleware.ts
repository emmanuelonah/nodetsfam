import path from 'path';

import { Request, Response, NextFunction } from 'express';

export function serveClient(_req: Request, res: Response, _next: NextFunction) {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
}
