import { Router } from 'express';
import usersRoutes from './users.routes';
import articlesRoutes from './article.routes';
import commentsRoutes from './comment.routes';
import consultationsRoutes from './consultation.routes';


const router = Router();

router.use('/users', usersRoutes);
router.use('/articles', articlesRoutes);
router.use('/comments', commentsRoutes);
router.use('/consultations', consultationsRoutes);


export default router;