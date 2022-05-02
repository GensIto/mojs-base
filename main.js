import mojs from '@mojs/core';


/********************************************************************************************
=============================================================================================

    基本

=============================================================================================
********************************************************************************************/

/*================================================================
    描画される SVG はおそらく Styleが position: absolute; になっているために、
    位置を指定するのは top, right, bottom, leftやと思われる
    デフォルト値はど真ん中
================================================================*/

/*==========================================
    円
===========================================*/
// const circle = new mojs.Shape({
//     parent: '#app', // SVGの親要素を指定する
//     shape: 'circle', // 描画するSVGの指定
//     radius: 10, // 円のサイズ
//     top: '25%',
//     left: '25%',
//     fill: 'deeppink', // 塗りの色
//     isShowStart: true // 最初から描画しておくかどうか
// });

/*==========================================
    四角
===========================================*/
// const rect = new mojs.Shape({
//     parent: '#app',
//     shape: 'rect',
//     radius: 10,
//     top: '25%',
//     left: '50%',
//     fill: 'cyan',
//     isShowStart: true
// });

/*==========================================
    多角形
===========================================*/
// const polygon = new mojs.Shape({
//     parent: '#app',
//     shape: 'polygon',
//     points: 6, // 角の数 指定なしでは三角形
//     radius: 10,
//     top: '25%',
//     left: '75%',
//     fill: 'yellow',
//     isShowStart: true
// });
/*================================================================
    上記のイラストたちをアップグレードしかし
    チュートリアルコピペにもかかわらず,
    チュートリアルのあにmw-ションと何かがおかしい
    あっ。。。。おそらくΔバージョンやからです
================================================================*/
const circle = new mojs.Shape({
    parent: '#app',
    shape: 'circle',
    scale: { 0: 1 },
    top: '25%',
    left: '25%',
    fill: { 'cyan': 'yellow' },
    radius: 25,
    duration: 2000,
    repeat: 999,
}).play();

const rect = new mojs.Shape({
    parent: '#app',
    shape: 'rect',
    top: '25%',
    left: '50%',
    fill: 'none', // ベースとなる部分の opacityを 0
    radius: 20,
    stroke: { 'rgba(0,255,255, 1)': 'magenta' }, // ベースとなる部分の border的存在
    strokeWidth: { 10: 0 }, // その border的存在の太さ
    strokeDasharray: '100%', // その border的存在の区切りの長さ 100%で線 1%で点
    strokeDashoffset: { '-100%': '100%' }, //イマイチわかわんが線の変化量が変わってる
    rotate: { 0: 180 }, // 回してる

    duration: 2000,
    repeat: 999,
}).play();

const polygon = new mojs.Shape({
    parent: '#app',
    shape: 'polygon',
    points: 5,
    top: '25%',
    left: '75%',
    fill: { 'deeppink': '#00F87F' },
    x: { 'rand(-100%, -200%)': 0 },
    rotate: { 0: 'rand(0, 360)' },
    radius: 25,
    duration: 2000,
    repeat: 999,
}).play();

/*==========================================
    ジグザグ線
===========================================*/
const zigzag = new mojs.Shape({
    parent: '#app',
    shape: 'zigzag',
    points: 11,
    radius: 25,
    radiusY: 50, // radiusYはおそらく heightのようなもの
    top: '75%',
    left: '25%',
    fill: 'none',
    stroke: 'deeppink', // アウトラインの色
    isShowStart: true
});

/*==========================================
    曲線
===========================================*/
const curve = new mojs.Shape({
    parent: '#app',
    shape: 'curve',
    radius: 25,
    radiusY: 25,
    top: '75%',
    left: '50%',
    fill: 'none',
    stroke: 'cyan',
    isShowStart: true
});

/*==========================================
    交差した線
===========================================*/
const cross = new mojs.Shape({
    parent: '#app',
    shape: 'cross',
    radius: 25,
    radiusX: 50,
    top: '75%',
    left: '75%',
    stroke: 'yellow',
    isShowStart: true,
    y: -25,
});

/********************************************************************************************
=============================================================================================

    Animation

=============================================================================================
********************************************************************************************/

/*==========================================
    色が変わり大きくなる
===========================================*/
const bouncyCircle = new mojs.Shape({
    parent: '#bouncyCircle', // 描画する要素
    shape: 'circle', // 丸の描画
    fill: { '#F64040': '#FC46AD' }, // #F64040 から #FC46AD になる
    radius: { 20: 80 }, // 20 ~ 80 になる
    duration: 2000, // 2000/2秒間の Animation
    isYoyo: true, // 元に戻るAnimation 無し
    isShowStart: true, // よーわからん
    easing: 'elastic.inout',
    repeat: 1, // 回数
});

// .play() で Animationスタート!
bouncyCircle.play();

/*==========================================
    大きくなる
===========================================*/
const delta = new mojs.Shape({
    parent: '#delta',
    shape: 'circle',
    scale: { 0: 1 }, // scaleでも大きさ変えられる
    duration: 1000,
    delay: 1000,
    easing: 'cubic.out',
    repeat: 2
}).play();

/*==========================================
    ローディングスピナー
===========================================*/
const spinner = new mojs.Shape({
    parent: '#spinner',
    shape: 'circle',
    stroke: '#FC46AD',
    strokeDasharray: '125, 125',
    strokeDashoffset: { '0': '-125' },
    strokeWidth: 4,
    fill: 'none',
    left: '50%',
    top: '50%',
    rotate: { '-90': '270' },
    radius: 20,
    isShowStart: true,
    duration: 2000,
    easing: 'back.in',
})
    .then({
        rotate: { '-90': '270' },
        strokeDashoffset: { '-125': '-250' },
        duration: 3000,
        easing: 'cubic.out',
    });

spinner.play();

/*==========================================
    ローディングスピナー
===========================================*/
const triangle = new mojs.Shape({
    parent: '#triangle',
    shape: 'polygon',
    fill: 'orange',
    radius: 65,
    rotate: { [-120]: -40 },
    x: { [-200]: 20 }, // px 基礎位置からの場所 left, rightでも可 その場合%
    y: { [50]: -20 }, // px 基礎位置からの場所 top, bottomでも可 その場合%
    scaleX: { 0: 1.3 },

    repeat: 10,
    duration: 800,
    isYoyo: true,
    backwardEasing: 'sin.in',

    isShowEnd: false
})

triangle.play();

/********************************************************************************************
=============================================================================================

    What Then

=============================================================================================
********************************************************************************************/
/*================================================================
    .then({}) 初回の描画が終わったあとに作用するもの?
    thenの注意点は初回の処理の
================================================================*/
/*==========================================
    四角が回って消えていく
===========================================*/
const then = new mojs.Shape({
    parent: '#then',
    shape: 'rect',
    fill: 'none',
    stroke: '#FC46AD',
    radius: 10,
    strokeWidth: 20,
    rotate: { [-180]: 0 },

    duration: 600
}).then({
    strokeWidth: 0,
    scale: { to: 2, easing: 'sin.in' },
});

then.play();

/*==========================================
    四角が回って大きくなって消えていく
===========================================*/
const newdeltainthen = new mojs.Shape({
    parent: '#newdeltainthen',
    shape: 'rect',
    fill: 'none',
    stroke: 'cyan',
    radius: 10,
    strokeWidth: 20,
    rotate: { [-180]: 0 },

    duration: 600
}).then({
    strokeWidth: { 50: 0 },
    stroke: { 'magenta': 'yellow' }
});

newdeltainthen.play()

/*********************************************************
    Event Click
*********************************************************/
/*==========================================
    ２回波紋
===========================================*/
// const OPTS = {
//     fill: 'none',
//     radius: 25,
//     strokeWidth: { 50: 0 },
//     scale: { 0: 1 },
//     angle: { 'rand(-35, -70)': 0 },
//     duration: 500,
//     left: 0, top: 0,
//     easing: 'cubic.out'
// };
// const circle1 = new mojs.Shape({
//     ...OPTS,
//     stroke: 'cyan',
// });
// const circle2 = new mojs.Shape({
//     ...OPTS,
//     radius: { 0: 15 },
//     strokeWidth: { 30: 0 },
//     stroke: 'magenta',
//     delay: 'rand(75, 150)'
// });
// document.addEventListener('click', function (e) {
//     circle1
//         .tune({ x: e.pageX, y: e.pageY })
//         .replay();
//     circle2
//         .tune({ x: e.pageX, y: e.pageY })
//         .replay();
// });
/*==========================================
    いっぱいブクブク
===========================================*/
// const OPTS = {
//     fill: 'none',
//     radius: 25,
//     strokeWidth: { 50: 0 },
//     scale: { 0: 1 },
//     duration: 500,
//     left: 0, top: 0,
//     easing: 'cubic.out'
// };

// const mainCircle = new mojs.Shape({
//     ...OPTS,
//     stroke: 'cyan',
// });

// const smallCircles = [];
// const colors = ['deeppink', 'magenta', 'yellow', '#00F87F']

// for (let i = 0; i < 6; i++) {
//     smallCircles.push(new mojs.Shape({
//         ...OPTS,
//         parent: mainCircle.el,
//         radius: { 0: 15 },
//         strokeWidth: { 30: 0 },
//         left: '50%', top: '50%',
//         stroke: colors[i % colors.length],
//         delay: 'rand(0, 350)',
//         x: 'rand(-50, 50)',
//         y: 'rand(-50, 50)',
//         radius: 'rand(5, 20)'
//     })
//     );
// }

// document.addEventListener('click', function (e) {
//     mainCircle
//         .tune({ x: e.pageX, y: e.pageY })
//         .replay();

//     for (let i = 0; i < smallCircles.length; i++) {
//         smallCircles[i]
//             .generate()
//             .replay();
//     }

// });

// new MojsPlayer({ add: timeline });

/*==========================================
    カスタムシェイプ
===========================================*/
/*==========================================
    ハート追加
===========================================*/
/* ADD CUSTOM SHAPE SOMEWHERE IN YOUR CODE */
class Heart extends mojs.CustomShape {
    // 描画したいSVGのpathを指定
    getShape() { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
    getLength() { return 200; } // optional
}
mojs.addShape('heart', Heart); // passing name and Bubble class
/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const heart = new mojs.Shape({
    parent: '#heart',
    shape: 'heart', // <--- shape: 'heart'は存在しないが 上記によるclass宣言で登録
    fill: 'none',
    stroke: 'red',
    scale: { 0: 1 },
    strokeWidth: { 50: 0 },
    y: -20,
    duration: 1000,
});
heart.play();

/*==========================================
    3つのハート追加
===========================================*/
/* ADD CUSTOM SHAPE */
class ThreeHearts extends mojs.CustomShape {
    getShape() {
        return '<path d="M79.8226133,31.1716767 C71.2668462,22.7128894 57.4418472,22.7128894 48.8860801,31.1716767 L45.1254217,34.910784 C43.9939916,36.0098876 42.1837033,36.0206631 41.0522732,34.889233 L41.0522732,34.889233 L37.3023903,31.1716767 C28.7789498,22.7128894 14.9323997,22.7128894 6.40895921,31.1716767 C-2.13603238,39.6520152 -2.13603238,53.3800345 6.40895921,61.8280463 L25.686374,80.9653793 C25.686374,80.9761548 25.6971496,80.9761548 25.6971496,80.9869304 L37.2916148,92.4844159 C40.4919458,95.6739714 45.6857491,95.6739714 48.8860801,92.4844159 L60.4913209,80.9869304 C60.4913209,80.9869304 60.4913209,80.9761548 60.5020964,80.9761548 L79.8226133,61.8280463 C88.3352783,53.3800345 88.3352783,39.6520152 79.8226133,31.1716767 L79.8226133,31.1716767 Z"></path><path d="M87.2293862,20.3305554 C81.6681375,14.8323436 72.6818882,14.8323436 67.1206395,20.3305554 L64.6762116,22.7609751 C63.940782,23.4753925 62.7640947,23.4823966 62.0286651,22.746967 L62.0286651,22.746967 L59.5912412,20.3305554 C54.0510049,14.8323436 45.0507473,14.8323436 39.510511,20.3305554 C33.9562665,25.8427754 33.9562665,34.7659879 39.510511,40.2571956 L52.0408306,52.6964621 C52.0408306,52.7034662 52.0478347,52.7034662 52.0478347,52.7104703 L59.5842371,60.1838358 C61.6644523,62.2570469 65.0404244,62.2570469 67.1206395,60.1838358 L74.6640461,52.7104703 C74.6640461,52.7104703 74.6640461,52.7034662 74.6710502,52.7034662 L87.2293862,40.2571956 C92.7626184,34.7659879 92.7626184,25.8427754 87.2293862,20.3305554 L87.2293862,20.3305554 Z" stroke="#50E3C2"></path><path d="M97.1269756,7.85484074 C93.2768804,4.04838642 87.0556308,4.04838642 83.2055356,7.85484074 L81.5132393,9.53743902 C81.0040958,10.0320356 80.1894661,10.0368846 79.6803225,9.52774105 L79.6803225,9.52774105 L77.9928752,7.85484074 C74.157327,4.04838642 67.9263795,4.04838642 64.0908312,7.85484074 C60.245585,11.670993 60.245585,17.8486017 64.0908312,21.6502071 L72.7656679,30.2620069 C72.7656679,30.2668559 72.7705169,30.2668559 72.7705169,30.2717049 L77.9880262,35.4455734 C79.4281752,36.8808733 81.7653866,36.8808733 83.2055356,35.4455734 L88.427894,30.2717049 C88.427894,30.2717049 88.427894,30.2668559 88.4327429,30.2668559 L97.1269756,21.6502071 C100.957675,17.8486017 100.957675,11.670993 97.1269756,7.85484074 L97.1269756,7.85484074 Z"></path>'
    }
    getLength() { return 200; } // optional
}
mojs.addShape('threeHearts', ThreeHearts); // passing name and Bubble class
/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const threeHearts = new mojs.Shape({
    parent: "#threeHearts",
    shape: 'threeHearts',
    fill: 'none',
    stroke: { 'white': 'deeppink' },
    scale: { 0: 1 },
    strokeWidth: { 50: 0 },
    y: -20,
    duration: 1000,
});
threeHearts.play()

/*==========================================
    ハートが描かれる追加
===========================================*/
/* ADD CUSTOM SHAPE */
class DrawHeart extends mojs.CustomShape {
    getShape() {
        return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>';
    } // see full code here: https://codepen.io/sol0mka/pen/75894cd43b0f12ecdb425cad5149ab37
    getLength() { return 292.110107421875; } // optional
}
mojs.addShape('drawHeart', DrawHeart); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const drawHeart = new mojs.Shape({
    parent: '#drawHeart',
    shape: 'drawHeart',
    fill: 'none',
    stroke: 'pink',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    y: -20,
    duration: 1000,
});

drawHeart.play();


/********************************************************************************************
=============================================================================================

    書いてみる

=============================================================================================
********************************************************************************************/

const bound = new mojs.Shape({
    parent: '#bound',
    shape: 'circle',
    radius: 10,
    radiusX: { "12": "10" },
    fill: "pink",
    isShowStart: true,
    top: { "50%": "40%" },
    repeat: 10,
    duration: 800,
    isYoyo: true,
})

bound.play()