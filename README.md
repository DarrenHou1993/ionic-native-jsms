## ionic-native-jpush

### 使用提醒
* 先安装对应的cordova插件[cordova-plugin-jsms](https://github.com/jpush/cordova-plugin-jsms)
* 安装 npm i ionic-native-jsms -S

```
  import { JSms } from 'ionic-native-jsms';

  @NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    JSms
  ]
})

  constructor(private jsms: JSms) { }
 
 this.jsms.init()

```