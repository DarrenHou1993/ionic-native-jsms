var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name J Sms
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { JSms } from '@ionic-native/j-sms';
 *
 *
 * constructor(private jSms: JSms) { }
 *
 * ...
 * ```
 */
var JSms = (function (_super) {
    __extends(JSms, _super);
    function JSms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
      * 初始化 JSMS 功能，主要是检测一些配置信息，如果配置错误将初始化失败，打印错误日志，调用其他接口前必须先初始化。
      */
    JSms.prototype.init = function () { };
    /**
     * 是否开启 JSMS Debug 模式
     * @param enabled 是否开启
     */
    JSms.prototype.setDebugMode = function (enabled) { return; };
    /**
     * 请求短信验证码
     * @param phoneNum 字符串，要接收短信验证码的手机号
     * @param tempId  字符串，短信模板 ID。
     */
    JSms.prototype.getSmsCode = function (phoneNum, tempId) { return; };
    /**
     * 获取语音验证码
     * @param phoneNum 字符串，手机号码。
     */
    JSms.prototype.getVoiceCode = function (phoneNum) { return; };
    /**
     * 验证用户输入的短信验证码
     * @param phoneNum 字符串，手机号码。
     * @param code 字符串，用户输入的验证码。
     */
    JSms.prototype.checkSmsCode = function (phoneNum, code) { return; };
    /**
     * 设置前后两次获取验证码的时间间隔，默认为 30 秒
     * @param intervalTime 间隔时间，单位是毫秒
     */
    JSms.prototype.setIntervalTime = function (intervalTime) { return; };
    /**
     * 获取当前设置的时间间隔
     */
    JSms.prototype.getIntervalTime = function () { return; };
    JSms.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JSms.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JSms.prototype, "init", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], JSms.prototype, "setDebugMode", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], JSms.prototype, "getSmsCode", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JSms.prototype, "getVoiceCode", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], JSms.prototype, "checkSmsCode", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], JSms.prototype, "setIntervalTime", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JSms.prototype, "getIntervalTime", null);
    JSms = __decorate([
        Plugin({
            pluginName: 'JSms',
            plugin: 'cordova-plugin-jsms',
            pluginRef: 'window.jsms',
            repo: 'https://github.com/jpush/cordova-plugin-jsms.git',
            install: 'cordova plugin add cordova-plugin-jsms',
            installVariables: ['APP_KEY'],
            platforms: ['Android', 'iOS']
        })
    ], JSms);
    return JSms;
}(IonicNativePlugin));
export { JSms };
//# sourceMappingURL=index.js.map