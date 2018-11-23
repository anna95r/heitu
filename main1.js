Vue.component("the-novel", {
    props: ["book"],
    template: `
    <div  v-bind:key="book.id">
        <div class="row">
            <div class="col-md-3 col-xs-3">
                <a v-bind:href="book.address" target="_blank">
                    <img v-bind:src="book.img" alt="" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-9 col-xs-9">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <h4><a v-bind:href="book.address" target="_blank">{{book.title}}</a></h4>
                    </div>
                    <div class="panel-body">
                        <p>{{book.lead}}</p>
                        <pre>{{book.ins}}</pre>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
    `
})


var app1 = new Vue({
    el: "#novelbook",
    data: {
        xuanyi: [
            {
                id: "cx1",
                address: "http://yunqi.qq.com/bk/xdyq/216147.html",
                img: "woniucover.jpg",
                title: "如果蜗牛有爱情",
                lead: "季白&许诩",
                ins: `世上最美好的一种感情，就是两情相悦，心有灵犀。
某天，例行谈完工作，男人话锋一转：“追了你这么久，有什么想法？”
许诩诧异：“你在追我？”
男人忍耐的点了根烟，黑眸紧盯着她：“每天陪你晨练、手把手教你射击、整个警队的人叫你嫂子……你以为我在干什么？”
许诩沉默片刻：“哦……不用追。”
男人心头一沉，语气冷下来：“什么意思？”
“我也喜欢你，所以不用追。”
“……”
她喜欢这个男人。虽然看起来桀骜又毒舌，实际上性感又爷们儿。
                `,
            },
            {
                id: "cx2",
                address: "http://yunqi.qq.com/bk/xdyq/234538.html",
                img: "biyancover.jpg",
                title: "他来了，请闭眼",
                lead: "薄靳言&简瑶",
                ins: `当你拥有了一个聪明、傲娇又忠犬的男友……
约会时，他说：“我对这种事没兴趣。不过如果你每十分钟亲我一下，我可以陪你做任何无聊的事。”
吃醋时，他说：“与我相比，这个男人从头到脚写满愚蠢。唯一不蠢的地方，是他也知道你是个好女人。”
做~爱时，他说：“虽然我没有经验，但资质和领悟力超群。顺便提一句，我的观察力也很好。”
求婚时，他说：“言语无法表达。如果一定要概括，那就是——我爱你，以我全部的智慧和生命。”
我把他从孤独的世界，带回繁华温暖的都市。
他却牵引着我，从平静平凡的生活，走向刺激又肆意的人生。
                `,
            },
            {
                id: "cx3",
                address: "http://yunqi.qq.com/bk/xdyq/392495.html",
                img: "meirencover.jpg",
                title: "美人为馅",
                lead: "韩沉&苏眠",
                ins: `在外人面前，韩沉这个男人，从来都是英俊冷酷，生人勿近。他似皑皑霜雪般皎洁清冷，又似黑夜流水般沉静动人。是众人眼中难以企及的绝对男神。
只有在白锦曦面前，这位名动天下的一级警司，才会暴露出隐藏很深的流氓本质。
“坐过来一点，我不会吃了你。至少不是现在吃。”
“我没碰过别的女人。要验身吗？”
“白锦曦，永远不要离开我。年年月月，时时刻刻，分分秒秒。”
他的心中，一直住着个固执的老男人。经年累月、不知疲惫地深爱着她
                `,
            },
            {
                id: "cx4",
                address: "http://yunqi.qq.com/bk/xdyq/14141771.html",
                img: "anlincover.jpg",
                title: "他来了请闭眼之暗粼",
                lead: "薄靳言&简瑶",
                ins: `《他来了请闭眼》第二部
山上，住着一个奇怪的人。他从不跟人交谈，出门总是戴着墨镜围巾口罩，还很傲慢。但是听说，他是一个神探。
我知道。
为什么？
因为我曾经与他相遇过。
但是他现在……
别说了。我知道，我什么都知道。
——————
                `,
            },
            {
                id: "cx5",
                address: "http://yunqi.qq.com/bk/xdyq/20403787.html",
                img: "wuyuncover.jpg",
                title: "乌云遇皎月",
                lead: "邬遇&谭皎",
                ins: `她就像个小太阳，
而我是躺在太阳下的旅人。
因她照耀，终于抬头哭了。
——
硬汉汽车修理工VS二萌女作家的爱情故事。
                `,
            },
        ],
        kehuan: [
            {
                id: "ck1",
                address: "http://yunqi.qq.com/bk/khkj/142825.html",
                img: "junzicover.jpg",
                title: "君子好囚",
                lead: "叶焱&程清蓝",
                ins: `当大陆失去秩序，战争危机四伏；
当资源极度匮乏，生存成为最大挑战。
遵循，弱肉强食的定律，
人类的爱情、理想、人伦、道德统统消失！
程清蓝进入这个世界，成为所有雄性追逐的对象！
                `,
            },
            {
                id: "ck2",
                address: "http://yunqi.qq.com/bk/khkj/372652.html",
                img: "xiaochongcover.jpg",
                title: "乖宠",
                lead: "孟熙琮&苏弥",
                ins: `街灯的流光中，男人的侧脸，比夜色还要冷漠坚硬。
“我从不帮人。”男人看着她扣在自己长裤上、污渍斑斑的手指。
几个宪兵走上前，准备将她拖走。她已经没有力气挣扎，瘫在他们的臂弯中。
却在这时，他冷冷清清的声音道：“我只做利益交换。你用什么,换你的命？”
                `,
            },
            {
                id: "ck3",
                address: "http://yunqi.qq.com/bk/xdyq/217603.html",
                img: "dujiacover.jpg",
                title: "独家占有",
                lead: "穆弦&华瑶",
                ins: `某天，华遥收到份意外的礼物——一截雪白阴森恐怖的人骨。
送礼的机器人解释：“这是指挥官的断骨。三年前他在天狼星战役中负伤，换了金属腿骨。”
华遥跑去问某人：“为什么把你的骨头送给我？”
某人平静而威严的注视她：“那是我身体的一部分。”声音低哑下来：“都属于你。”
华遥默默泪流——尼玛好想拒收啊！
                `,
            },
            {
                id: "ck4",
                address: "http://yunqi.qq.com/bk/xdyq/535661.html",
                img: "yueguangcover.jpg",
                title: "他与月光为邻",
                lead: "应寒时&谢槿知",
                ins: `第一次见面，她非要赠送给他一枚糕点。尽管他最讨厌甜食，还是努力吃掉了；
第二次，她因为害怕伸手抱了他。他脸色微红：“这位小姐，请先松手。”
第三次，她不小心亲了他，他一副见了鬼的表情，她却说：“意外而已，你不必介怀。”
作为一名接受过良好教育、身心健康的优秀军官，应寒时无法不介怀自己的初吻。
经过慎重考虑，他决定……对她负责。
——当他负手站在星空下，温柔凝视着我。
我看到星星化为流光，在他身后坠落。
Star-Drift，他们敬畏地称他为“星流”。
                `,
            },
        ],
        dushi: [
            {
                id: "cd1",
                address: "http://yunqi.qq.com/bk/xdyq/187848.html",
                img: "cibeicover.jpg",
                title: "慈悲城",
                lead: "陈北尧&慕善",
                ins: `她以为早已将他从时光中抹去，却原来，命运早已埋下伏线。久别重逢，无意撞见他布下的杀局，真相变成一把锁，将她牢牢困住。一切来得太快，来不及。八年前眸若夜星笑容温暖的恋人，重逢后趁她睡眠中俯身亲吻她脚踝的男子，或是眼前执枪冷眼望着她的凶案主谋？为什么偏偏是他？
“不要用那种眼神看我。”他低声道，“像看一堆垃圾。”
                `,
            },
            {
                id: "cd2",
                address: "http://yunqi.qq.com/bk/xdyq/318165.html",
                img: "qingchengcover.jpg",
                title: "你和我的倾城时光",
                lead: "厉致诚&林浅",
                ins: `林浅曾经以为，自己想要的男人
应当英俊、强大，在商界翻手为云覆手为雨，令她仰望，无所不能
可真遇到合适的人才发觉
她是这么喜欢他的清冷、沉默、坚毅和忠诚
喜欢到愿意跟他一起，在腥风血雨的商场并肩而立，肆意年华，不问前程
——————
一场淡若流水的邂逅
造就了他和她，最惊心动魄的倾城时光
                `,
            },
            {
                id: "cd3",
                address: "http://yunqi.qq.com/bk/xdyq/738342.html",
                img: "mofucover.jpg",
                title: "莫负寒夏",
                lead: "林莫臣&木寒夏",
                ins: `你终于回来，在我还没孤独终老的时候。
————
后来，林莫臣已是坐拥百亿资产的集团董事长，国内商界最年轻的大佬之一。
有人问他：“她究竟有哪里好，让你这么多年也忘不掉？”
林莫臣答：“曾经我也以为，自己值得更好的。可这世上，谁能及我爱的女人好？”
                `,
            },
            {
                id: "cd4",
                address: "http://yunqi.qq.com/bk/xdyq/21767552.html",
                img: "zhiyecover.jpg",
                title: "挚野",
                lead: "岑野&许寻笙",
                ins: `那时候他还很穷，输了比赛心情不好。她偷偷买饭给他吃，还差使他去院子拔草干活。
他蹲在满地野草中，一脸悲壮：“看，寻笙，这都是朕为你打下的江山！”
许寻笙：“白痴。”
……
后来，他走到了千万人面前，江山在他身后。他想问的却只有一句话：“我们能不能继续相爱？”
就像当年，你爱上一无所有的我。
                `,
            },
        ],
        guyan: [
            {
                id: "cg1",
                address: "http://yunqi.qq.com/bk/gdyq/13540002.html",
                img: "jiangshancover.jpg",
                title: "江山不悔",
                lead: "步千衍&颜破月",
                ins: `她为了他，披荆斩棘、寒光铁衣。
他有他的执念，她有她的贪恋。
江湖、江山与她，他皆不忍负。
那便由她来抉择吧。
待来年春风拂遍江山、尘世重回安宁，
或许一切自会分晓…
她一辈子都记得，
那夜他双眼已盲、遍体鳞伤，
却依旧固执地背着她，在漫天冰霜中发足狂奔。`,
            },
        ],
    }
})

var app2 = new Vue({
    el: "#extras",
    data: {
        items: [
            {
                id: "e1",
                href: "#lianhe",
                idname: "lianhe",
                name: "联合小剧场",
                address: {
                    "男主排名1": "https://weibo.com/1894289457/BpSGo9o8h",
                    "侦探类别": "https://weibo.com/1894289457/BCimjhJxV",
                    "男神们的新年祝福": "https://weibo.com/1894289457/BDoDvsqj7",
                    "男神们的脱衣舞": "https://weibo.com/1894289457/C2W2Nztso",
                    "调教": "https://weibo.com/p/1001603810818260085016",
                    "没有她的那些年": "https://weibo.com/p/1001603813025260898906",
                    "众男主初吻之后": "https://weibo.com/1894289457/C7j2xcqJ7",
                    "总裁们的助理是男or女": "https://weibo.com/1894289457/Cea2z919R",
                    "坐高铁时都在干什么": "https://weibo.com/1894289457/CkP836uvE",
                    "男主排名2": "https://weibo.com/1894289457/CkZd6y1E8",
                    "韩神与薄神的再次相逢": "https://weibo.com/1894289457/CrbUEalph",
                    "冷or暖": "https://weibo.com/1894289457/CzRQOjqIV",
                    "口头禅": "https://weibo.com/1894289457/D5iGDfXIO",
                    "当她邀请他去坐过山车": "https://weibo.com/1894289457/F471X2AlZ",
                    "众男主喜欢吃的粽子属性": "https://weibo.com/1894289457/F5tSg3vJy",
                    "2018年春的新年愿望": "https://weibo.com/1894289457/G3d3ZDJSt",
                    "身高": "https://mp.weixin.qq.com/s/RNwNhucn0I-meax9aZ33kQ",
                    "众男主各项之最资料大起底": "https://mp.weixin.qq.com/s/N8nbsY2Y709G-96wzD24zQ",
                    "你们这些幼稚的四肢发达的军警们！": "https://mp.weixin.qq.com/s/FbhxXKEeyP2eAGO7vSLrRQ",
                    "联合幼儿园番外之男人帮": "https://mp.weixin.qq.com/s/_QtcEI9p3KCOwX70E7C0SQ",
                    "感冒": "https://mp.weixin.qq.com/s/riLhhfIZvAvTQySiKPKKHg",
                    "春望": "https://mp.weixin.qq.com/s/NjWNKKAeoRzK3ccT2xH-1Q",
                    "端午趣味龙舟赛": "https://mp.weixin.qq.com/s/-HWzrlrrtb_jahG_UhouZw",
                    "她来听我的演唱会": "https://mp.weixin.qq.com/s/HE-YPzGHTACnhQyVQIZA1Q",
                    "男主们最近都在干什么": "https://mp.weixin.qq.com/s/n7gPKyP-eZeIcTazARaZOQ",
                }
            },
            {
                id: "e2",
                href: "#woniu",
                idname: "woniu",
                name: "如果蜗牛有爱情",
                address: {
                    "普法栏目": "https://weibo.com/1894289457/Axq5sEYQs",
                    "《吃蟹记》": "https://weibo.com/1894289457/B0MysptG1",
                    "天然黒+天然呆": "https://weibo.com/1894289457/AFO56o2bB",
                    "好歌曲": "https://weibo.com/1894289457/AE6GD4CPY",
                    "我想对你说": "https://weibo.com/1894289457/BbY2aAn66",
                    "签名": "https://mp.weixin.qq.com/s/nZ5SByYBz6N2pcyltjZacA",
                }
            },
            {
                id: "e3",
                href: "#biyan",
                idname: "biyan",
                name: "他来了请闭眼",
                address: {
                    "普法栏目": "https://weibo.com/1894289457/AxoUnAa6U",
                    "喝醋": "https://weibo.com/1894289457/BbY2aAn66",
                    "六一家庭节目": "https://weibo.com/1894289457/Bc97Hpjsk",
                    "扫地机器人": "https://weibo.com/1894289457/BcjfojGtU",
                    "签名": "https://weibo.com/1894289457/BcDEw4yPo",
                    "Sweet heart": "https://weibo.com/1894289457/BnrLjcEuB",
                    "顾此失彼": "https://weibo.com/1894289457/BpqWvplID",
                    "灭门案的完整评价": "https://weibo.com/1894289457/Bpr3L9PRJ",
                    "入冬": "https://weibo.com/1894289457/BAsXCuPL",
                    "男神们的钱包": "https://weibo.com/1894289457/BFMuR9TBF",
                    "拔牙记": "https://weibo.com/1894289457/C0U3L1Bmo",
                    "软饭记": "https://weibo.com/p/1001603814202396514037",
                    "故人记": "https://weibo.com/p/1001603814848889803575",
                    "最喜欢的花": "https://weibo.com/1894289457/CymlBuFMv",
                    "如果蜗牛有爱情": "https://weibo.com/1894289457/CFFVKvLv4",
                    "签名": "https://mp.weixin.qq.com/s/3_P48Rg1JDi3Bf22cvKMfw",
                }
            },
            {
                id: "e4",
                href: "#qingcheng",
                idname: "qingcheng",
                name: "你和我的倾城时光",
                address: {
                    "普法栏目": "https://weibo.com/1894289457/Axp4jp5ig",
                    "入冬": "https://weibo.com/1894289457/Bzermwacy",
                    "林莫臣之寻不到的女神": "https://weibo.com/1894289457/C25WQ0grD",
                    "倾城一梦": "https://weibo.com/p/1001603815182311773764",
                }
            },
            {
                id: "e5",
                href: "#meiren",
                idname: "meiren",
                name: "美人为馅",
                address: {
                    "手机里的秘密": "https://weibo.com/1894289457/BmXGg7Svk",
                    "第一次的赌约&韩处长的学习": "https://weibo.com/1894289457/Bo2YtD2Kp",
                    "无情冷面（1）&韩沉的财产": "https://weibo.com/1894289457/BuSAffwM8",
                    "无情冷面2": "https://weibo.com/1894289457/BwF8NuJcP",
                    "无情冷面3": "https://weibo.com/1894289457/BwFR3suVt",
                    "无情冷面4": "https://weibo.com/1894289457/BwQGU69l1",
                    "无情冷面5": "https://weibo.com/1894289457/BxjOcmbZx",
                    "入冬": "https://weibo.com/1894289457/BAsAzuN41",
                    "圣诞记": "https://weibo.com/1894289457/BCkP3fIov",
                    "地理学上的犯罪心理告白": "https://weibo.com/1894289457/BEsoxrEL1",
                    "男神们的钱包": "https://weibo.com/1894289457/BFM7xA6ki",
                    "次年花开": "https://weibo.com/1894289457/CwH1U3RGE",
                    "画": "https://weibo.com/1894289457/D0Xf0gQI5",
                    "暴雨": "https://mp.weixin.qq.com/s/_WmStzosqK8BsKGcSvF4Ng",
                    "签名": "https://mp.weixin.qq.com/s/nZ5SByYBz6N2pcyltjZacA",
                }
            },
            {
                id: "e6",
                href: "#yueguang",
                idname: "yueguang",
                name: "他与月光为邻",
                address: {
                    "电动的尾巴": "https://weibo.com/1894289457/Ch0KgDvBJ",
                    "铁棒": "https://mp.weixin.qq.com/s/bKzXBIER-eW8EyAZvQt7tQ",
                    "万千星流": "https://mp.weixin.qq.com/s/sBCXvJvmlwgN5KmIIt0Ppw",                   
                }
            },
            {
                id: "e7",
                href: "#mofu",
                idname: "mofu",
                name: "莫负寒夏",
                address: {
                    "雪山小憩": "https://weibo.com/1894289457/EDp8l4YKI",
                    "短信": "https://weibo.com/1894289457/Fr5Nxxuf2",
                    "孵化": "https://mp.weixin.qq.com/s/bKzXBIER-eW8EyAZvQt7tQ",
                }
            },
            {
                id: "e8",
                href: "#wuyun",
                idname: "wuyun",
                name: "乌云遇皎月",
                address: {
                    "男人的身材": "https://weibo.com/1894289457/Faf55vjZW",
                    "租房的误会": "https://weibo.com/1894289457/FxEGjnlJD",
                    "小剧场——人物资料大起底": "https://weibo.com/1894289457/FzT0qr7NU",
                    "“资料”": "https://weibo.com/1894289457/GawCM5cvJ",
                    "洗车": "https://mp.weixin.qq.com/s/ApWCPliURlWqQ_wsrD_Z7A",
                    "谭皎邬遇二三事": "https://mp.weixin.qq.com/s/SSzGsSS44rCSOW6M9dd_ZQ",  
                }
            },
            {
                id: "e9",
                href: "#zhiye",
                idname: "zhiye",
                name: "挚野",
                address: {
                    "当年志向（20180714以图片形式更新于微信公众号，请自行翻阅公众号全部消息）": "#",
                    "坛子（上）": "https://mp.weixin.qq.com/s/oru_WBjJZpUThMkMiKuJJg",
                    "坛子（中）": "https://mp.weixin.qq.com/s/831gLWeoTJfxH2hpbczh4w",
                    "坛子（完）": "https://mp.weixin.qq.com/s/feA3J_e2sP8Vqjlg82Fjrw",
                    "舞": "https://mp.weixin.qq.com/s/OBt7Ti8XdxAE7kN0Nqi1rQ",
                }
            },
        ],
    }
})

var app3 = new Vue({
    el: "#shortstorys",
    data: {
        items: [
            {
                id: "s1",
                href: "#kcnav",
                idname: "kcnav",
                name: "客从何处来",
                ins: `雨下得好大。
                天像一面巨大的黑窟窿，整条街上寂静得只有雨的声音。有的客栈亮着灯，有的黑灯瞎火。洛晓握着伞，听雨砸在头顶的声音，像有人不停敲击着。
                她不知道去住哪家客栈好。
                这是云南边境一个偏僻的小镇，虽然也有古城发展旅游，但在如今“古城满天下”的旅游环境中，这里显然毫无竞争力，游客稀少。
                这也是洛晓挑选这里的原因。清静，遥远。仿佛一个人就能在这里呆到天荒地老。
                洛晓沿石板长街走了一段，不经意间，瞥见旁边一家客栈的招牌。
                `,
                links: [
                    "https://mp.weixin.qq.com/s/HMxJKWUc1VVmOrmQzhVlSQ",
                    "https://mp.weixin.qq.com/s/uJHSL8MFKq7_FkXS9PlwqA",
                    "https://mp.weixin.qq.com/s/SKvmh3bj0tf6QVURJhVxdA",
                    "https://mp.weixin.qq.com/s/4PC3XWXL_KGwPYv_mf4lvQ",
                    "https://mp.weixin.qq.com/s/U6ZSWKMt_-1bDSMPOCuKDg",
                    "https://mp.weixin.qq.com/s/Y0P-euyGdl1NWI5V57ZBYA",
                    "https://mp.weixin.qq.com/s/-0MeTjTCCdsdgtSrODKssg",
                    "https://mp.weixin.qq.com/s/kKXH6ObcjSCLqGXXgcvt2w",
                    "https://mp.weixin.qq.com/s/elKyOEQFPSxIis8-Q-8Czg",
                    "https://mp.weixin.qq.com/s/sX6gQtG4kzfZwYLyO66m_g",
                ]
            },
            {
                id: "s2",
                href: "#msnav",
                idname: "msnav",
                name: "暮色降临时（本文已坑，慎跳）",
                ins: `喜欢沈蓝的人，喜欢得要死。讨厌她的，也讨厌到了骨子里。

                沈蓝相信，她的亲弟弟沈轩城，也是其中一个。1米85的男人，24岁，公安大学毕业，市重案组菜鸟。性格完全与她不同， 沉默、孤僻又忧郁。长得也有棱有角，简直符合最近很热的“悬疑爱情剧”男主角人设。但沈蓝毫不怀疑，身为“局花”的沈轩城鄙视她的平庸，嫉妒她的快乐。所以姐弟俩的关系，真不算亲近。
                
                但是没有关系，沈蓝从来不需要任何人的仰慕和亲近，也能活得很好。`,
                links: [
                    "https://mp.weixin.qq.com/s/6O4aj_nKNROJligda4gJHg",
                    "https://mp.weixin.qq.com/s/ZLhUZfSZzUuCg-43Y-BfiA",
                    "https://mp.weixin.qq.com/s/ReqcZHUl9G_sRyuMtGpq_A",
                ]

            },
            {
                id: "s3",
                href: "#dxnav",
                idname: "dxnav",
                name: "住在地下的人",
                ins: `这一片洞穴，位于贵州南部。是迄今为止国内发现的最大最变幻瑰丽的地下洞穴。自十年前景点开放，洞穴就这样沉默不变地迎接着世人的观赏赞叹。



                白天，人类精心藏于洞穴各处的五彩灯光亮起，这里是一个人流如织、鬼斧天工的世界。你看那成百上千形态各异的钟乳石，堆积成亚洲最大的“立式山水画卷”；你看那两人高的白玉石笋，一瓣瓣仿如莲花盛开。而在她身后，还有几根小石笋，仿佛企图牵着她裙袢的小姑娘们，依依不舍；还有倒挂于洞壁穹顶的琵琶石、猴子石、婆媳画像……几乎是一步一景。每个来到这里的人都会流连忘返，仿佛进入了闻所未闻、如梦似幻的世界。`,
                links: [
                    "https://mp.weixin.qq.com/s/xxO5XXUItzHcKZmRxMQetg",
                    "https://mp.weixin.qq.com/s/Nbv-lSigUP77QDtjLplz_A",
                    "https://mp.weixin.qq.com/s/cFgsV-o67NtwhZDL15QIZQ",
                    "https://mp.weixin.qq.com/s/pPibyxCEY1bnPwGtI8riGA",
                    "https://mp.weixin.qq.com/s/dLMjb2gj6mJx_6L6tiy3bg",
                    "https://mp.weixin.qq.com/s/aGVTGItyvdkleuaIfhCh4g",
                    "https://mp.weixin.qq.com/s/bf-Zo6AjfG9Ax5A5lR8wzQ",
                ]
            },
            {
                id: "s4",
                href: "#qqnav",
                idname: "qqnav",
                name: "清清",
                ins: ` 唐清清总觉得这几天有些不顺，可具体是什么，又说不出来。

                豆包趴在地上玩积木，唐清清做完工作一抬头，看到他，柔声说:“豆包，不要趴着，地上凉，坐起来。”今天也不知道怎么回事，豆包就跟没听见似的。唐清清又有点烦了，喊道:“豆包，坐起来！”
         
                豆包这才慢慢爬起。
         
                4岁的孩子也会有精神恍惚的时候吗？唐清清脑子里冒出这个奇怪的念头，摇摇头，孩子发呆吧。
         
                好容易把孩子哄睡着了，可他却破天荒睡得不安稳。没多久就哭醒，要妈妈，迷迷糊糊的，手在空中乱抓。唐清清赶紧跑过去，轻拍他的背，他才渐渐安稳。`,
                links: [
                    "https://mp.weixin.qq.com/s/ns4-MwVdk4VxtuLqghpxvA",
                ]
            },
            {
                id: "s5",
                href: "#wyrnav",
                idname: "wyrnav",
                name: "无眼人",
                ins: `我们从那个地方逃离，是在春天。



                至今我还记得被劫持那天的情形。那是个晴天，空气特别好。我在办公室里，跟一个同事起了争执。
                
                她说：“你怎么这么固执呢？”
                
                我笑着答：“我就是这么固执，怎么样？找外星人抓走我啊。”
                
                本来只是一句玩笑话，可说完后，我就眼前一黑，陷入昏迷。
                
                
                
                等我醒来时，发现自己被关在一个很大的房间里。旁边还有别的人。周围特别静，大家低声交谈着。每个人的表情都很不安。从他们的穿着打扮，我可以推测出身份：公司小白领、老板、IT宅男、小卖部少女……甚至还有两颊被太阳晒得通红的农民。`,
                links: [
                    "https://mp.weixin.qq.com/s/t8kSQKpw8pBv-wYgvhUSKg",
                ]
            },
            {
                id: "s6",
                href: "#jhnav",
                idname: "jhnav",
                name: "江河有时尽",
                ins: `沅水的水是绿的，冬天也不结冰。早晨会有雾，但是太阳出来就散，露出一条碧绿的河。两岸的山不高，一个深绿一个浅绿，显得寂静得很。

                明澹的船就停靠在沅水边上，有时白天出去，有时夜晚也见一人站在船头，摇橹至江中央。那是他兴致所至，去打渔了。明澹的船大，每次捕的鱼又大又好，县城里有几家餐馆老板是他中学同学，明澹的鱼专供给他们。所以在打渔的人里头，明澹是个小富户。
                
                他的船也是最好的。这个好不是说有多豪华，而是质地好，品味好。全木船身，桐油也上得很老道。他与那些老渔民是不同的，船舱雕得有窗，还有花，挂着素净的窗帘，就像是个修在水上的小房子。船尾甚至还放了盆花，江面阳光充足，长得很放肆。`,
                links: [
                    "https://mp.weixin.qq.com/s/yuunJsEKdhzTsiF-o2Vdwg",
                    "https://mp.weixin.qq.com/s/9z45IJ4fHjdvcUKvdd518g",
                    "https://mp.weixin.qq.com/s/aSo3lmyY5lNClyK3mNiJ8Q",
                    "https://mp.weixin.qq.com/s/6EVTPK319SCPrv6FMYoRRw",
                    "https://mp.weixin.qq.com/s/-GPGES0OjTtx9AFpMuZOJg",
                    "https://mp.weixin.qq.com/s/ViQScV8dbnw5Z6VNlGMAyA",
                    "https://mp.weixin.qq.com/s/O_EJQGysbe3f47TOHPkfyA",
                    "https://mp.weixin.qq.com/s/tOu-5kJEAXaQgBcwlxBVIg",
                    "https://mp.weixin.qq.com/s/Qnav79YjpMwCit1uAoLdlQ",
                    "https://mp.weixin.qq.com/s/zbOZx8pzOO9hPOmwtSPxTQ",
                ],
            },
            {
                id: "s7",
                href: "#jbnav",
                idname: "jbnav",
                name: "江边",
                ins: `她住在江边，连日大雨，这天一早醒来，高楼竟成孤岛，且断水断电断粮。她饿得饥肠辘辘，趴在阳台上想，这个时候谁来接她，那八成是要以身相许了。

                没过多久听到“突突”的引擎声，她探头一看，他站在艘皮划艇上，抬头冲她笑：“喂，下楼，救你出去。”旁边的邻居全在张望。最后她带了好几个邻居上船。雨还在下，他坐在船头划，把伞给了她。她在蒙蒙雨中，望着他被打湿的背部轮廓。常年玩户外打零工的男人，身材是极好的。虽然脸黑了点，男人味却十足。坐在她前面隔壁的美女小姐姐，已经开始跟他搭讪了，以为他是哪里来的志愿者。他却说：嗯，我老婆在船上了。我来接她的。`,
                links: [
                    "https://mp.weixin.qq.com/s/n2j7UOOodk1RVqpivyaXxQ",
                ]
            },
            {
                id: "s8",
                href: "#yrnav",
                idname: "yrnav",
                name: "遇榕",
                ins: `祝阳是在凤青山的一片林子里，见着她的。

                那日下了很大的雨，原始森林里蒙蒙一片，顷刻如夜。祝阳本是上山来采些菌子，哪料到天气突变。不过山里人早已习惯这样的天气，他也没太慌张，寻了棵茂密的大树，坐在极粗的树根上等，身上甚至没有湿太多。
                
                她便是在这时，从树根后冒了头。
                
                饶是胆大如祝阳，也吓了一跳。定睛一看，是个穿着白裙的少女，长发披肩，浑身湿透，一只雪白的手抓着树根，抬起苍白的脸看着他。
                
                祝阳想起长辈们说过的山里树精女鬼的传说，不过眼前分明是个人。他站起来，问：“你怎么在这里？”`,
                links: [
                    "https://mp.weixin.qq.com/s/32fM3mjaKsrb_Cl-Y2Ldsg",
                ]
            },
            {
                id: "s9",
                href: "#gznav",
                idname: "gznav",
                name: "昨夜瓜子香",
                ins: `谢芙蕊坐在火炉前，正在刷手机。周围暮色降临，行人减少。



                “滴——”手机响了一声，“您好，有新的订单。”
                
                
                
                谢芙蕊扫了眼这个外卖订单，3斤炒瓜子，1斤原味，2斤五香，订单地址……她愣了一下，抬头看了看街道深处，放下瓜子，骂了句脏话。
                
                
                
                瓜子都是她今天炒好的，还在火上热着。谢芙蕊按订单装好，让旁边摊位的大哥帮忙看了一会儿，自己就拎起袋子。
                
                
                
                她数过，只要走30步，就能从她的炒货摊位，走到本城最大的夜宵店“醉香”门口。
                `,
                links: [
                    "https://mp.weixin.qq.com/s/LtPn4-_i8er5sWemG5DHjA",
                    "https://mp.weixin.qq.com/s/xelHNsekeppErc-N9DdX_Q",
                    "https://mp.weixin.qq.com/s/xOPQCRQGT-kMxmC6R7exbA",
                ]
            },
            {
                id: "s10",
                href: "#jlnav",
                idname: "jlnav",
                name: "借来的一晚",
                ins: `冯玥玥心满意足地走在马路上。

                明月高悬，夜空很深。学校后门的这一条街，寂静无比，微湿的路面映着路灯，光盈盈的。她回来得太晚了，街上一个人都没有。可她身体的热血，仿佛还没降温。
                
                她最喜欢的歌手、偶像——岑野，今天来这个城市开演唱会了。身为死忠粉的冯玥玥，怎么可能不跑去看呢？尽管岑野在演唱会最后，还叮嘱大家回家路上注意安全、结伴而行，不要让她担心。可与冯玥玥同行的舍友，看完演唱会就回家了。冯玥玥明天一早还有课，不敢耽误，也觉得不会有什么问题，倒了两趟夜班公交，又走了两站路，现在就快抵达了。`,
                links: [
                    "https://mp.weixin.qq.com/s/02wjWg4MzfdWmWjtlu0I_w",
                ],
            },
            {
                id: "s11",
                href: "#flnav",
                idname: "flnav",
                name: "禁欲芳邻",
                ins: `薛冉冉第一次看见他，是在某个办事机关的柜台后。

                很禁欲的一张脸，平头，肤白，肩宽而腰瘦。深深的双眼皮，鼻子嘴巴长得却很干净利落。属于那种第一眼不会特别惊艳，再仔细看就会被吸引住那种。
                
                他穿着暗蓝色制服，旁边的其他职员都矮挫得像一片冬瓜，唯独他挺得像根饱满的大黄瓜。他的手指也很长很秀气，拈着她交过去的申请资料页，看得薛冉冉有点走神。
                
                他的脸色也很平静，既没有一丁点亲切笑容，也没有不耐烦。就是跟看根木桩似的看着薛冉冉，带着点天生的矜持与傲气。薛冉冉则不动声色地打量着他。`,
                links: [
                    "https://mp.weixin.qq.com/s/_bTFZrxrVpvWufn7BHU1AQ",
                    "https://mp.weixin.qq.com/s/TtDpa0vINwbyTOyecF-F6A",
                    "https://mp.weixin.qq.com/s/4oWKCH1xOFiG-THfIaVx_A",
                ],
            },
            {
                id: "s12",
                href: "#cznav",
                idname: "cznav",
                name: "持镜探木",
                ins: `陈凝没想到，会在这个关头，遇上他。



                周遭是歌舞升平，卫视里数一数二的晚会平台。烟雾缭绕，灯光妖娆，她是领舞者，也是歌唱者，正带着一群舞者，逼近台前。
                
                
                
                台下，朦胧灯光中，她的粉丝们举着应援牌，正在发出尖叫。而她原本身如鸿雁，跳得翩翩又自在。
                
                
                
                直至从她登台那一刻，就始终扛着摄影机跟拍的男人，稍稍侧转身，叫她无意间瞧见了他的侧脸。
                
                
                
                陈凝动作一滞，就慢了半拍。好在她赶紧跟上，没有和音乐和舞者们脱节。她微微喘了口气，眼角余光却瞥见那摄影师笑了，是几乎微不可察的一个笑，她却偏偏瞧见了。一个念头猛地冲进她的脑海里——他的个子还是那么高啊，肩膀宽宽的，她第一次瞧见有人把摄影师的马甲穿得那么帅。他留的是寸头，和大学时一样。硬朗的、阳刚的轮廓清晰无比。只是读书时，他可是风云人物风流无比，身后永远跟着一帮兄弟，还和系花好过一段时间。后来据说系花不太懂分寸惹恼了他，被甩了。`,
                links: [
                    "https://weibo.com/ttarticle/p/show?id=2309404202193019388040",
                    "https://weibo.com/ttarticle/p/show?id=2309404202947629175211",
                    "https://weibo.com/ttarticle/p/show?id=2309404203316425926192",
                    "https://weibo.com/ttarticle/p/show?id=2309404203719737635096",
                ],
            },
            {
                id: "s13",
                href: "#xsnav",
                idname: "xsnav",
                name: "相随",
                ins:`
                陈复明注意到街对面那个女人，已经有好几天了。

平心而论，其实那个女孩本不是他喜欢的类型。他是干金融的，身边出现的都是些高知独立女性，且不乏美女。陈复明也谈过两个，但一到感情加深，谈婚论嫁了，总觉得少了点什么意思。最后要么他变卦，要么对方走人，总是落个无疾而终。

后来陈复明思来想去，觉得缺少的正是“心动”的感觉。少年时还会为个女孩怦然心动，如今老大不小了，心却好像也被涂上了一层城市的钢筋水泥。
                `,
                links: [
                    "https://mp.weixin.qq.com/s/u_WdCG1sf57BSeMTriq8Ow",
                    "https://mp.weixin.qq.com/s/_N4FiNtI-LrffZBtdj6x2A",
                    "https://mp.weixin.qq.com/s/mQd9-XHPX6BSuozwi1FoIg",
                    "https://mp.weixin.qq.com/s/1rdJee3B8opraogO3WgGkg",
                ],
            },
            {
                id: "s14",
                href: "#sfzynav",
                idname: "sfzynav",
                name: "十分之一",
                ins:`
                申莘第一次遇见他，他的状况其实很糟糕。
她清楚记得，那是二十三岁那年的冬夜，临近春节。城市里的人明显都少了很多，都往家里跑了。但四处都是过年的气息，商场张灯结彩，到处贴着对联福娃，路上行走的每个人，身上仿佛都带着热乎快乐的一股劲儿。
只除了那些没有家的人。
那天申莘走进一家24小时自动银行，想要取款。一眼就看到有个人躺地上。
她愣了愣。
ATM机这里到底有层玻璃门，阻断了外头寒冷的空气。那人裹着很厚很脏，看不出原本颜色的棉大衣，从头几乎裹到脚，只露出黑色发顶。脚上是双很单薄破烂的鞋。
                `,
                links: [
                    "https://mp.weixin.qq.com/s/yQ2mE8kZteONjWCwtoLuaA",
                ],
            },
        ],
    }
})
