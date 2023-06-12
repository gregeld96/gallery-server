const routes = require('express').Router();
const { auth } = require('../../middlewares/authentication');
const ImageController = require('../../modules/image/controller');
const { upload } = require('../../utils/multer');

routes.use(auth);
routes.get('/', ImageController.getAll);
routes.get('/category', ImageController.getCategories);
routes.get('/:slug', ImageController.getDetail);
routes.post('/', upload.single('photo'), ImageController.upload);
routes.put('/:id', upload.single('photo'), ImageController.update);
routes.delete('/:id', ImageController.delete);

module.exports = routes;