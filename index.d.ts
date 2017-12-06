import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class JSms extends IonicNativePlugin {
    /**
      * 初始化 JSMS 功能，主要是检测一些配置信息，如果配置错误将初始化失败，打印错误日志，调用其他接口前必须先初始化。
      */
    init(): void;
    /**
     * 是否开启 JSMS Debug 模式
     * @param enabled 是否开启
     */
    setDebugMode(enabled: boolean): Promise<any>;
    /**
     * 请求短信验证码
     * @param phoneNum 字符串，要接收短信验证码的手机号
     * @param tempId  字符串，短信模板 ID。
     */
    getSmsCode(phoneNum: string, tempId: string): Promise<any>;
    /**
     * 获取语音验证码
     * @param phoneNum 字符串，手机号码。
     */
    getVoiceCode(phoneNum: string): Promise<any>;
    /**
     * 验证用户输入的短信验证码
     * @param phoneNum 字符串，手机号码。
     * @param code 字符串，用户输入的验证码。
     */
    checkSmsCode(phoneNum: string, code: string): Promise<any>;
    /**
     * 设置前后两次获取验证码的时间间隔，默认为 30 秒
     * @param intervalTime 间隔时间，单位是毫秒
     */
    setIntervalTime(intervalTime: number): Promise<any>;
    /**
     * 获取当前设置的时间间隔
     */
    getIntervalTime(): Promise<number>;
}
