# better-use-angular
於 20150606(JSDC Devil Day 666) 分享更好的使用 Angular

## Slide

[http://www.slideshare.net/YanruLi/better-use-angular](http://www.slideshare.net/YanruLi/better-use-angular)

## Q & A

```
<span>
    {{message}} <div>=)</div>
</span>
```

#### 1. 如以上該種情況，可以再不增加元素的情況對 message 使用 `ng-bind` 嗎 ?

看了文章顯然不行，但如果想避免增加結構與使用 `{{}}` 載入太慢時看到，可以參考 [ngBindHtml](https://docs.angularjs.org/api/ng/directive/ngBindHtml)

#### 如果資料相同 template 不一樣 (例如 class 不同) ，是否有辦法註冊 service ?

可以,  Service 跟 template 沒有直接的關係 ！

(因為 Service 就算被 controller 載入 , 沒有把變數指定到某 scope 上，其實也沒辦法影響到 tempalte)

#### 2. route 用不同 page 用不同的 controller， controller (js code) 跟 template 的儲存方式

對不起，沒有很懂這個問題的意思 ...

#### 3. 承上，不同 controller 有辦法互相調用 service

基本上 service 就是可以跨 controller ，應該要比較小心的是如果跨 module 的話，

記得要在需要載入 service 的地方在


#### 4. Dirty check 1.x 有避免的解法 ?

這篇 [AngularJS 1.0 -> 1.2 Roadmap](http://angularjs.blogspot.tw/2012/07/angularjs-10-12-roadmap.html) 文章中有提到，

Object.observe() prototype (replace our dirty checking with O.o() )


#### 6. 什麼時候使用 Service ?
當你發現程式碼重複
當你發現功能性相關可提出時

歡迎一起模組化 =D [!]


#### 7. 還沒開始學 1.x 的話，是不是直接學 2.0 比較好 ?

恩，長遠來看是 2.0，[可以看看這個，裡面有一些簡報不錯](http://www.angularjs.cn/A19e)

- 關於 1.x 如何轉換到 2.0
- 關於 Angular + React = ?
- 關於 什麼是 Angular 2.0 ?
