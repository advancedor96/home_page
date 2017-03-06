import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppStore from '../stores/AppStore.js';
import image1 from '../1.jpg'; // Tell Webpack this JS file uses this image


class HotPosts extends Component {
    componentDidMount(){

    }

  render() {
    return (
      <div>
        <h1>用直銷模式幫助街友賣大誌</h1>
        <p>
2015年2月，我加入了直銷，做了半年的nuskin，但是失敗了。哈哈。<br /><br />

直銷在台灣是很令人討厭的東西，讓我直接來告訴大家「直銷人」的生活吧。<br /><br />

早上9點到12點會上晨會。晨會有時候會是讀書會，有時候是學一些產品的
知識。讀書會，讀的書會有《有錢人跟你想的不一樣》《富爸爸商學院》、
《人生四大秘密》什麼要有愛啊，愛是一切的答案啊等等的。蠻正面的啦。<br /><br />

產品知識，大概就是有人會教你怎麼敷臉、怎麼介紹nuskin給新來的朋友、
怎麼陌生開發等等。<br /><br />

而下午，就是出去工作。 打電話給朋友約他來參加活動、在路上陌生開發
(搭訕路人，認識新朋友)  

●陌生開發

有一點有趣的事，通常出去陌生開發前，到了定點後，大家都會先自拍一張，
然後 po 到直銷人的line群組。        
        </p>
        <img src={image1} role="presentation"/>
<p>
接著大家就會回「讚」「太棒了！」「太激勵了！」等等。這些回覆你的人，都是沒有
利益關係的人。

後來我做了半年，就做失敗了，哈哈。

有一天我走路經過高雄捷運巨蛋站旁邊，看到一個在賣《大誌》的街友阿伯。做過直銷
後，便很喜歡跟路上陌生人聊天。  
</p>
      </div>
    );
  }
}

export default observer(HotPosts);
