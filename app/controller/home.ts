import { Controller } from "egg";
const mockVideoPoll = require("../mock/videoPoll.json");
const mockPdftype = require("../mock/pdftype.json");
const mockSignatureType = require("../mock/signatureType.json");
const mockTokenType = require("../mock/token.json");
const {
  RtcTokenBuilder,
  // RtmTokenBuilder,
  // RtcRole,
  // RtmRole,
} = require("agora-access-token");

export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi.egg";
  }
  async videoPoll() {
    const { ctx } = this;

    ctx.body = mockVideoPoll;
  }
  async sendVideo() {
    const { ctx } = this;
    mockVideoPoll.data = true;
    ctx.body = {
      success: true,
    };
  }
  async resetVideo() {
    const { ctx } = this;
    mockVideoPoll.data = false;
    ctx.body = {
      success: true,
    };
  }

  async pdfPoll() {
    const { ctx } = this;
    ctx.body = mockPdftype;
  }
  async pdfChangePage() {
    const { ctx } = this;
    mockPdftype.data = +mockPdftype.data + 1;
    ctx.body = {
      success: true,
    };
  }
  async resetPdf() {
    const { ctx } = this;
    mockPdftype.data = 1;
    ctx.body = {
      success: true,
    };
  }
  async signaturetodo() {
    const { ctx } = this;
    mockSignatureType.data = true;
    ctx.body = {
      success: true,
    };
  }
  async signatureType() {
    const { ctx } = this;
    ctx.body = {
      data: mockSignatureType,
      success: true,
    };
  }
  async resetSignature() {
    const { ctx } = this;
    mockSignatureType.data = false;
    ctx.body = {
      success: true,
    };
  }

  async getToken() {
    //   Rtc Examples
    const appID = "91087211e39d4868a9f791fde2ea1d27";
    const appCertificate = "e4182d177dbc44eea21315c8601ad77c";
    const channelName = "peco";
    const uid = "0";
    const tokenA = RtcTokenBuilder.buildTokenWithUid(
      appID,
      appCertificate,
      channelName,
      uid
    );
    const { ctx } = this;
    mockTokenType.data = tokenA;
    ctx.body = mockTokenType;
  }
}
