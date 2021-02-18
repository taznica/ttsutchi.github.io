export default [
    {
        title: "Portfolio",
        subtitle: " - ",
        description: "ポートフォリオサイト。<b>Vue.js</b>、Vuetifyを用いて実装。ホスティングはGitHub Pagesを用いている。Vue.js v3 + TypeScriptに移行予定。",
        imagePath: require("/src/assets/portfolio.png"),
        links: [
            {
                title: "Code (GitHub)",
                url: "https://github.com/taznica/taznica.github.io",
            }
        ],
        techniques: [],
    },
    {
        title: "Treap",
        subtitle: "DA-TE APPs！2021 (登壇)",
        description: "月ごとの自動積立によるハイクラスな旅館・ホテルの予約によって理想的な「自分へのご褒美」としての旅行を提供するサービス。リードエンジニアとして<b>Flutter</b>によるユーザ向け<b>モバイルアプリ</b>の実装を担当。Firebase+Stripeによる決済処理はプロトタイプとしてのみ実装。",
        imagePath: require("/src/assets/treap.png"),
        links: [
            {
                title: "Slide",
                url: "https://drive.google.com/file/d/1NzKmXRNTmoAK3AMe0T_G6bg9Bpb5AOjp/view?usp=sharing",
            },
            {
                title: "Video",
                url: "https://drive.google.com/file/d/1pJ8bcMkzOE4JrW6CT-Xr9F3KnL6HBEG_/view?usp=sharing",
            },
            {
                title: "Code (GitHub)",
                url: "https://github.com/taznica/treap_app",
            },

        ],
        techniques: [
            "Flutter",
            "(Firebase)",
            "(Stripe)",
        ],
    },
    {
        title: "irodori",
        subtitle: " - ",
        description: "<a href='https://github.com/marp-team/marp-vscode'>Marp for VS Code</a> のカスタムテーマ。<b>Sass</b>で実装。",
        imagePath: require("/src/assets/irodori.png"),
        links: [
            {
                title: "Code (GitHub)",
                url: "https://github.com/taznica/marp-themes",
            },
        ],
        techniques: [
            "Flutter",
            "(Firebase)",
            "(Stripe)",
        ],
    },
    {
        title: "youtube-thumbnail",
        subtitle: " - ",
        description: "YouTubeで再生している動画のサムネイル画像をプレイヤーの下部に表示しておけるGoogle Chrome拡張。<b>JavaScript</b>で実装。",
        imagePath: require("/src/assets/youtube-thumbnail.jpg"),
        links: [
            {
                title: "Code (GitHub)",
                url: "https://github.com/taznica/chrome-extensions",
            },
        ],
        techniques: [],
    },
    {
        title: "Augmented Readability",
        subtitle: "インタラクション2020  (プレミアム発表) / 卒業論文",
        description: "自然言語処理を行いて紙面の特定のテキストをプロジェクションによりハイライトさせることで、対象テキストの閲覧性や理解度を向上させる手法およびアプリケーション。Python, OpenCV, tesseract, StanfordNLPなどを用いて実装。",
        imagePath: require("/src/assets/ar.jpg"),
        links: [
            {
                title: "Website (インタラクション2020)",
                url: "https://www.interaction-ipsj.org/proceedings/2020/data/bib/3B-30.html",
            }
        ],
        techniques: [],
    },
    {
        title: "SoTip",
        subtitle: "DA-TE APPs！2020 (最優秀賞)",
        description: "飲食店の従業員へ顧客から「いいね！」「ありがとう！」を送れるようにすることで従業員のモチベーションアップと顧客エンゲージメントの可視化を行うサービス。Webフロントエンジニアとして<b>Vue.js</b>による店舗オーナー向けWebダッシュボードサイトを実装。Firebase Cloud Functionsを用いたデータベース・サーバサイドとのやり取り、Firebase Authenticationを用いた認証・認可も実装。",
        imagePath: require("/src/assets/sotip.png"),
        links: [
            {
                title: "Slide",
                url: "https://drive.google.com/file/d/1zIEe2S7Qp04i_YRKGpsVbw_sgjVSf2hj/view?usp=sharing",
            },
            {
                title: "Video",
                url: "https://drive.google.com/file/d/1fMywBVoz0_VTly00Vdll77-mOguAx2wl/view?usp=sharing",
            },
        ],
        techniques: [
            "Vue.js",
            "Vuetify",
        ],
    },
    {
        title: "Tabletop ARrietty",
        subtitle: "IVRC2019 (審査員特別賞)",
        description: "360度カメラ映像やAR表示を組み合わせることで、小人としてVR体験するHMD装着者とスマートフォンを利用してAR体験する非HMD装着者が、別々の視点からバーチャル空間を共有する対戦型コンテンツ。<b>Unity</b>とARKitを用いたスマートフォンARを実装。",
        imagePath: require("/src/assets/arrietty.jpg"),
        links: [
            {
                title: "Website and Video (IVRC2019)",
                url: "http://ivrc.net/archive/tabletop-arrietty2019/",
            }
        ],
        techniques: [],
    },
    {
        title: "蠢刺青(シュンシセイ)",
        subtitle: "IVRC2019 (予選大会進出)",
        description: "皮膚感覚を伴って身体の表面をまるで生きているかのように蠢く刺青である「蠢刺青（シュンシセイ）」による体験および人と蠢刺青とのインタラクション。プロジェクタを用いて投影する映像コンテンツを<b>Unity</b>によって実装。",
        imagePath: require("/src/assets/shunshisei.jpg"),
        links: [
            {
                title: "Website and Video (IVRC2019)",
                url: "http://ivrc.net/archive/%E8%A0%A2%E5%88%BA%E9%9D%922019/",
            }
        ],
        techniques: [],
    },
    {
        title: "done2esa",
        subtitle: " - ",
        description: "その日のGoogleカレンダーの予定とSwarmのチェックイン履歴を日報としてまとめてesa.ioに投稿できるCLIツール。Pythonを用いて実装。各サービスのAPIを叩いている。",
        imagePath: require("/src/assets/done2esa.jpeg"),
        links: [
            {
                title: "Video",
                url: "https://drive.google.com/file/d/1EDY6iTTKV2exoK_1dQigE0MHzpavIvfO/view?usp=sharing",
            },
            {
                title: "Code (GitHub)",
                url: "https://github.com/taznica/done2esa",
            }
        ],
        techniques: [],
    },
    {
        title: "ShearSheet",
        subtitle: "ISS2019 (Best Demo Award)",
        description: "導電性素材を貼付した透明シートをタッチスクリーン上でスライドさせることで、通常のタッチ入力に影響を与えずにジョイスティックのような速度制御による入力を追加のセンサ無しで付加する新たなユーザインタフェース。<b>Unity</b>による、ペイントや動画プレイヤーといったデモアプリケーションの実装を担当。",
        imagePath: require("/src/assets/shearsheet.png"),
        links: [
            {
                title: "Paper (ISS2019)",
                url: "https://doi.org/10.1145/3343055.3359717",
            },
            {
                title: "Video",
                url: "https://www.youtube.com/watch?v=17sIGr6DT78",
            },
            {
                title: "Article (ITmedia NEWS)",
                url: "https://www.itmedia.co.jp/news/articles/1911/27/news042.html",
            }
        ],
        techniques: [],
    },
    {
        title: "Life Leaf",
        subtitle: " JPHACKS2019 (インフィニオン奨励賞)",
        description: "デスクワークにおける座り過ぎを解消する、観葉植物型デバイス・クッション型デバイスおよびWebアプリ「Life Leaf」を開発。<b>Vue.js</b>を用いたWebアプリ開発、Firebaseを用いたデータベース、センサから値を得るためのAPI、ホスティング等のサーバサイドの実装を担当した。",
        imagePath: require("/src/assets/lifeleaf.jpeg"),
        links: [
            {
                title: "Video",
                url: "https://drive.google.com/file/d/12h2Zaqg6NpZL4pPGss1bTvUfcar9f_FB/view?usp=sharing",
            },
            {
                title: "Document",
                url: "https://qiita.com/taznica/private/4238317898e4c993fc84",
            },
        ],
        techniques: [],
    },
]
