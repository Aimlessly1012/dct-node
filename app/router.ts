import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // 视频接口
  router.get('/dct/videoPoll', controller.home.videoPoll);
  router.post('/dct/sendVideo', controller.home.sendVideo);
  router.post('/dct/resetVideo', controller.home.resetVideo);

  // PDF接口
  router.get('/dct/pdfPoll', controller.home.pdfPoll);
  router.post('/dct/pdfChangePage', controller.home.pdfChangePage);
  router.post('/dct/resetPdf', controller.home.resetPdf);
  // 签名接口
  router.get('/dct/signaturetodo', controller.home.signaturetodo);
  router.get('/dct/signatureType', controller.home.signatureType);
  router.get('/dct/resetSignature', controller.home.signatureType);
  // 获取token
  router.get('/dct/getToken', controller.home.getToken);
};
