# better-use-angular
於 20150606(JSDC Devil Day 666) 分享更好的使用 Angular

## Q & A

```
<span>
    {{message}} <div>=)</div>
</span>
```

### 如以上該種情況，可以再不增加元素的情況對 message 使用 `ng-bind` 嗎 ?

- (待補)

### 如果資料相同 template 不一樣 (例如 class 不同) ，是否有辦法註冊 service ?

可以,  Service 跟 template 沒有直接的關係 ！

(因為 Service 就算被 controller 載入 , 沒有把變數指定到某 scope 上，其實也沒辦法影響到 tempalte)

### route 用不同 page 用不同的 controller， controller (js code) 跟 template 的儲存方式

對不起我沒有很懂種問題 ...

### 承上，不同 controller 有辦法互相調用 service

- (待補)

### Dirty check 1.x 有避免的解法 ?

這篇 [AngularJS 1.0 -> 1.2 Roadmap](http://angularjs.blogspot.tw/2012/07/angularjs-10-12-roadmap.html) 文章中有提到，

Object.observe() prototype (replace our dirty checking with O.o() )
