/* ===== 냥코다이어리 · 고양이 건강 다이어리 ===== */

/* ---------- 다국어 (i18n) ---------- */
const I18N = {
  ko:{
    appTitle:'냥코다이어리', count:'마리',
    home_cat:'🐾 카테고리', catg_add_tile:'카테고리 추가',
    home_today:'📝 오늘 기록', today_done:'오늘 기록 완료', today_do:'기록하기',
    today_do_full:'오늘 건강 기록하기', today_view:'오늘 기록 보기', today_status_done:'기록 완료', today_status_todo:'아직 기록 전',
    home_alert:'⚠️ 관찰이 필요해요',
    home_upcoming:'🎉 다가오는 생일 · 기념일', no_anniv:'등록된 기념일이 없어요',
    home_note:'우리 고양이 건강 변화, 병원 가기 전에 한눈에 정리하세요. 매일 30초 기록하면 병원 상담이 쉬워져요. 설정(⚙)에서 클라우드 연동·언어를 바꿀 수 있어요.',
    home_start_title:'먼저 카테고리를 만들어 주세요 🐾',
    home_start_note:'예) 우리집 냥이, 본가 냥이, 회사 길냥이\n카테고리 안에서 고양이를 등록하고 매일 건강 기록을 남길 수 있어요.',
    home_start_btn:'＋ 우리 아이 등록하기',
    home_addcat_title:'우리 아이를 등록해 주세요 🐱',
    home_addcat_note:'이름만 입력해도 바로 시작! 식사·물·배변·구토·체중을 매일 30초만 기록하면 병원 상담용 요약이 자동으로 정리돼요.',
    default_catg:'우리집 냥이',
    sum7_norec:'아직 기록 없음', sum7_recorded:'일 기록',
    birthday_word:'생일',
    cat_empty:'아직 등록된 아이가 없어요 🐾',
    cat_register_btn:'＋ 아이 등록하기',
    reg_hint:'이름만 입력해도 시작할 수 있어요. 건강 정보는 나중에 천천히 추가해도 돼요.',
    reg_sec_basic:'기본 정보', reg_sec_health:'건강 정보', reg_sec_extra:'추가 메모',
    bday_hint:'예) 2022.03.15',
    tab_profile:'프로필', tab_record:'건강기록', tab_stats:'통계', tab_report:'리포트', tab_vet:'병원',
    edit_profile:'✏️ 프로필 수정', photo_pick:'🖼 사진 선택', photo_take:'📷 사진 촬영',
    f_name:'이름', f_cat:'카테고리', f_sex:'성별', male:'남아', female:'여아',
    f_bday:'생일', f_nick:'애칭', f_desc:'소개',
    f_neutered:'중성화', neutered_y:'완료', neutered_n:'안 함', neutered_x:'미설정',
    f_breed:'품종', f_weight_now:'현재 몸무게(kg)', f_disease:'질병/알레르기', f_vet:'다니는 병원', f_care:'관심 관리',
    ph_name:'예) 나비', ph_nick:'예) 우리집 대장', ph_desc:'성격, 특징 등을 적어주세요',
    ph_breed:'예) 코리안숏헤어', ph_disease:'예) 만성신장병, 닭고기 알레르기', ph_vet:'예) ○○동물병원',
    prof_basic:'기본 정보', prof_health:'건강 메모',
    care_vomit:'구토가 잦아요', care_water:'물을 적게 마셔요', care_weight:'체중 관리', care_meds:'약 복용 중', care_kidney:'신장·방광 관리', care_daily:'일상 기록',
    catNew:'새 아이 등록', catEdit:'프로필 수정', save:'💾 저장', add:'💾 추가',
    catDelete:'🗑 이 아이 삭제', alert_name:'이름을 입력해 주세요',
    confirm_delcat:'{name}을(를) 삭제할까요? 기록·기념일·병원기록도 함께 삭제됩니다.',
    anniv_word:'기념일', add_anniv:'＋ 기념일', anniv_empty:'기념일을 등록해 보세요 🎉',
    del:'🗑 삭제', confirm_deldiary:'이 기록을 삭제할까요?',
    anniv_new:'새 기념일', anniv_edit:'기념일 수정', anniv_name:'기념일 이름',
    ph_anniv:'예) 우리집 온 날, 입양기념일',
    anniv_note:'매년 같은 날(월·일) 기준으로 D-day를 계산해 홈 화면에 표시돼요.',
    alert_anniv:'이름을 입력해 주세요', anniv_common:'공통 (특정 아이 없음)', anniv_cat:'대상 아이',
    f_date:'날짜', f_mood:'기분',
    rec_new:'오늘 기록', rec_edit:'기록 수정', rec_empty:'아직 기록이 없어요.<br>아래 ＋ 로 오늘을 기록해요 ✍️',
    rec_basic:'기본 건강 체크', rec_more:'자세히 기록하기 (구토·놀이·몸무게·약·사진·메모)', rec_more_close:'간단히 보기',
    rel_today:'오늘', rel_yesterday:'어제',
    view_list:'목록', view_cal:'캘린더',
    f_condition:'😺 컨디션', f_meal:'🍚 식사', f_water:'💧 물', f_poop:'💩 대변', f_pee:'🚽 소변', f_vomit:'🤮 구토', f_play:'🧶 놀이',
    f_weight:'⚖️ 몸무게(kg)', f_meds:'💊 약(투약 메모)', f_memo:'📝 메모',
    ph_meds:'예) 신장약 1회', ph_memo:'오늘 우리 아이 모습, 특이사항…',
    saved_feedback:'오늘 기록 완료 🐾', recent7:'최근 7일',
    cal_legend_v:'구토', cal_legend_p:'묽은 변', cal_legend_m:'약', cal_legend_h:'병원', cal_legend_g:'사진',
    stats_weight:'⚖️ 몸무게 변화', stats_30:'📊 최근 30일 요약', stats_none:'몸무게 기록이 2회 이상 쌓이면 그래프가 표시돼요',
    st_vomit:'구토', st_loose:'묽은 변', st_lowappe:'식욕저하', st_lowwater:'물 부족', st_vet:'병원', st_wchange:'몸무게 변화',
    unit_times:'회', unit_days:'일',
    rep_title:'🏥 병원 제출용 요약', rep_print:'🖨 인쇄 / PDF 저장', rep_30d:'최근 30일',
    rep_period:'기간', rep_summary:'요약', rep_events:'증상 기록', rep_meds:'복용약', rep_vet:'병원 방문', rep_weight:'몸무게',
    rep_none:'특이사항 없음', rep_made_pre:'냥코다이어리에서 작성 · ', rep_records:'기록 수',
    vet_new:'병원 기록 추가', vet_edit:'병원 기록 수정', vet_empty:'병원 방문을 기록해 보세요 🏥',
    f_vdate:'방문일', f_symptom:'증상', f_diagnosis:'진단', f_prescription:'처방', f_cost:'진료비(원)', f_next:'다음 방문일', f_vmemo:'메모/검사결과',
    ph_symptom:'예) 이틀째 구토, 식욕저하', ph_diagnosis:'예) 위장염 의심', ph_prescription:'예) 항구토제 3일분',
    next_visit:'다음 방문', alert_vet:'증상이나 진단을 입력해 주세요', confirm_delvet:'이 병원 기록을 삭제할까요?',
    catg_add:'카테고리 추가', catg_name:'카테고리 이름', ph_catg:'예) 우리집 냥이, 본가 냥이, 회사 길냥이', catg_emoji:'이모지 선택',
    catg_delete:'🗑 이 카테고리 삭제',
    confirm_delcatg:'"{name}" 카테고리를 삭제할까요?',
    confirm_delcatg_cats:'"{name}" 카테고리의 아이 {n}마리와 모든 기록이 함께 삭제됩니다. 삭제할까요?',
    settings:'설정 ⚙', lang_title:'언어',
    set_general:'일반 설정', set_advanced:'⚙ 고급 설정 (클라우드 직접 연동)',
    sync_title:'클라우드 동기화', sync_state:'현재 저장 방식',
    sync_cloud:'● 클라우드 동기화 켜짐', sync_local:'● 이 기기에만 저장 중 (로컬)',
    sync_note:'클라우드를 켜면 폰·아이패드·PC 어디서 열어도 같은 기록을 봅니다. 켜려면 아래 “고급 설정”에서 Firebase 정보를 넣어주세요. (무료)',
    cloud_help:'• 클라우드를 쓰지 않으면 기록·사진은 지금 이 기기에만 저장됩니다.\n• 클라우드를 켜면 사진까지 가족과 실시간으로 함께 봅니다.',
    room_title:'가족 공유 코드', room_label:'방 코드 (가족이 같은 값을 쓰면 데이터 공유)',
    room_note:'• 가족끼리만 같은 코드를 쓰세요. 이 코드를 아는 사람은 누구나 같은 기록을 볼 수 있어요.\n• ‘myhome’처럼 쉬운 코드는 피하고, 추측하기 어려운 값(가족만 아는 단어+숫자)을 쓰세요.\n• 코드는 언제든 바꿀 수 있고, 클라우드를 켰을 때만 공유에 사용됩니다.',
    export_title:'데이터 백업 · 복원', export_note:'기록과 사진을 파일(catdiary_backup.json) 하나로 내려받아 보관해요. 기기를 바꾸거나 만약을 대비할 때 좋아요. 백업 파일은 아래 ‘복원’으로 다시 불러올 수 있어요.',
    import:'📥 백업 파일 불러오기(복원)',
    import_confirm:'백업 파일을 불러오면 지금 이 기기의 기록을 덮어씁니다. 계속할까요?',
    import_done:'복원이 완료되었어요 ✓', import_err:'백업 파일을 읽을 수 없어요. 올바른 catdiary_backup.json 파일인지 확인해 주세요.',
    aria_back:'뒤로 가기', aria_settings:'설정 열기', aria_add:'추가', aria_addanniv:'기념일 추가', aria_del:'삭제', aria_prevmonth:'이전 달', aria_nextmonth:'다음 달',
    fb_title:'Firebase 연동 (클라우드 DB)',
    fb_setup:'설정법: ① console.firebase.google.com 접속 → 프로젝트 만들기 ② Firestore Database 만들기(테스트 모드) ③ 프로젝트 설정 → 웹앱 추가 → 표시되는 값 복사 ④ 위 칸에 붙여넣기. 자세한 건 README 참고.',
    fb_save:'💾 저장 후 적용', fb_clear:'클라우드 끄기 (로컬만)', export:'📤 데이터 백업(내보내기)',
    reload_apply:'저장했어요. 적용을 위해 새로고침합니다.', to_local:'로컬 모드로 전환합니다.',
    toast_saved:'저장됨 ✓', loading:'불러오는 중…', none_dash:'-',
    rec:{
      condition:{good:'좋음',normal:'보통',bad:'나쁨'},
      meal:{well:'잘 먹음',normal:'보통',little:'적게',none:'안 먹음'},
      water:{much:'많음',normal:'보통',little:'적음'},
      poop:{normal:'정상',loose:'묽음',constip:'변비',none:'없음'},
      pee:{normal:'정상',little:'적음',much:'많음',abnormal:'이상'},
      vomit:{none:'없음',yes:'있음'},
      play:{'0':'0분','10':'10분','20':'20분+'}
    }
  },
  ja:{
    appTitle:'ニャンコダイアリー', count:'匹',
    home_cat:'🐾 カテゴリー', catg_add_tile:'カテゴリー追加',
    home_today:'📝 今日の記録', today_done:'今日の記録 完了', today_do:'記録する',
    today_do_full:'今日の健康を記録', today_view:'今日の記録を見る', today_status_done:'記録済み', today_status_todo:'まだ未記録',
    home_alert:'⚠️ 観察が必要です',
    home_upcoming:'🎉 近づく誕生日・記念日', no_anniv:'登録された記念日がありません',
    home_note:'うちの子の健康の変化を、病院に行く前にひと目で整理。毎日30秒の記録で診察相談がラクになります。設定(⚙)でクラウド連携や言語を変更できます。',
    home_start_title:'まずカテゴリーを作りましょう 🐾',
    home_start_note:'例) うちの猫、実家の猫、会社の野良猫\nカテゴリーの中で猫を登録し、毎日健康記録を残せます。',
    home_start_btn:'＋ うちの子を登録する',
    home_addcat_title:'うちの子を登録しましょう 🐱',
    home_addcat_note:'名前だけでもすぐ開始！食事・水・排泄・嘔吐・体重を毎日30秒記録すれば、診察相談用のまとめが自動で整理されます。',
    default_catg:'うちの猫',
    sum7_norec:'まだ記録なし', sum7_recorded:'日記録',
    birthday_word:'誕生日',
    cat_empty:'まだ登録された猫がいません 🐾',
    cat_register_btn:'＋ 猫を登録する',
    reg_hint:'名前だけでも始められます。健康情報は後からゆっくり追加できます。',
    reg_sec_basic:'基本情報', reg_sec_health:'健康情報', reg_sec_extra:'追加メモ',
    bday_hint:'例) 2022.03.15',
    tab_profile:'プロフィール', tab_record:'健康記録', tab_stats:'統計', tab_report:'レポート', tab_vet:'病院',
    edit_profile:'✏️ プロフィール編集', photo_pick:'🖼 写真を選択', photo_take:'📷 写真を撮る',
    f_name:'名前', f_cat:'カテゴリー', f_sex:'性別', male:'男の子', female:'女の子',
    f_bday:'誕生日', f_nick:'愛称', f_desc:'紹介',
    f_neutered:'去勢・避妊', neutered_y:'済み', neutered_n:'未', neutered_x:'未設定',
    f_breed:'品種', f_weight_now:'現在の体重(kg)', f_disease:'疾患/アレルギー', f_vet:'かかりつけ病院', f_care:'気になる管理',
    ph_name:'例) たま', ph_nick:'例) うちの大将', ph_desc:'性格や特徴などを書いてください',
    ph_breed:'例) 日本猫', ph_disease:'例) 慢性腎臓病、鶏肉アレルギー', ph_vet:'例) ○○動物病院',
    prof_basic:'基本情報', prof_health:'健康メモ',
    care_vomit:'嘔吐が多い', care_water:'水をあまり飲まない', care_weight:'体重管理', care_meds:'投薬中', care_kidney:'腎臓・膀胱の管理', care_daily:'日常記録',
    catNew:'新しい猫を登録', catEdit:'プロフィール編集', save:'💾 保存', add:'💾 追加',
    catDelete:'🗑 この猫を削除', alert_name:'名前を入力してください',
    confirm_delcat:'{name}を削除しますか？記録・記念日・病院記録も一緒に削除されます。',
    anniv_word:'記念日', add_anniv:'＋ 記念日', anniv_empty:'記念日を登録してみましょう 🎉',
    del:'🗑 削除', confirm_deldiary:'この記録を削除しますか？',
    anniv_new:'新しい記念日', anniv_edit:'記念日の編集', anniv_name:'記念日の名前',
    ph_anniv:'例) 我が家に来た日、譲渡記念日',
    anniv_note:'毎年同じ日(月・日)を基準にD-dayを計算してホーム画面に表示されます。',
    alert_anniv:'名前を入力してください', anniv_common:'共通(特定の猫なし)', anniv_cat:'対象の猫',
    f_date:'日付', f_mood:'気分',
    rec_new:'今日の記録', rec_edit:'記録の編集', rec_empty:'まだ記録がありません。<br>下の ＋ で今日を記録しましょう ✍️',
    rec_basic:'基本の健康チェック', rec_more:'詳しく記録する (嘔吐・遊び・体重・薬・写真・メモ)', rec_more_close:'簡単表示',
    rel_today:'今日', rel_yesterday:'昨日',
    view_list:'リスト', view_cal:'カレンダー',
    f_condition:'😺 体調', f_meal:'🍚 食事', f_water:'💧 水', f_poop:'💩 便', f_pee:'🚽 尿', f_vomit:'🤮 嘔吐', f_play:'🧶 遊び',
    f_weight:'⚖️ 体重(kg)', f_meds:'💊 薬(投薬メモ)', f_memo:'📝 メモ',
    ph_meds:'例) 腎臓薬 1回', ph_memo:'今日のうちの子の様子、気づいたこと…',
    saved_feedback:'今日の記録 完了 🐾', recent7:'最近7日',
    cal_legend_v:'嘔吐', cal_legend_p:'軟便', cal_legend_m:'薬', cal_legend_h:'病院', cal_legend_g:'写真',
    stats_weight:'⚖️ 体重の変化', stats_30:'📊 最近30日のまとめ', stats_none:'体重記録が2回以上たまるとグラフが表示されます',
    st_vomit:'嘔吐', st_loose:'軟便', st_lowappe:'食欲低下', st_lowwater:'水不足', st_vet:'病院', st_wchange:'体重の変化',
    unit_times:'回', unit_days:'日',
    rep_title:'🏥 病院提出用まとめ', rep_print:'🖨 印刷 / PDF保存', rep_30d:'最近30日',
    rep_period:'期間', rep_summary:'まとめ', rep_events:'症状の記録', rep_meds:'服用薬', rep_vet:'通院', rep_weight:'体重',
    rep_none:'特記事項なし', rep_made_pre:'ニャンコダイアリーで作成 · ', rep_records:'記録数',
    vet_new:'病院記録の追加', vet_edit:'病院記録の編集', vet_empty:'通院を記録してみましょう 🏥',
    f_vdate:'受診日', f_symptom:'症状', f_diagnosis:'診断', f_prescription:'処方', f_cost:'診療費(円)', f_next:'次回受診日', f_vmemo:'メモ/検査結果',
    ph_symptom:'例) 2日続けて嘔吐、食欲低下', ph_diagnosis:'例) 胃腸炎の疑い', ph_prescription:'例) 制吐剤3日分',
    next_visit:'次回受診', alert_vet:'症状か診断を入力してください', confirm_delvet:'この病院記録を削除しますか？',
    catg_add:'カテゴリー追加', catg_name:'カテゴリー名', ph_catg:'例) うちの猫、実家の猫、会社の野良猫', catg_emoji:'絵文字を選択',
    catg_delete:'🗑 このカテゴリーを削除',
    confirm_delcatg:'「{name}」カテゴリーを削除しますか？',
    confirm_delcatg_cats:'「{name}」カテゴリーの猫 {n}匹とすべての記録が一緒に削除されます。削除しますか？',
    settings:'設定 ⚙', lang_title:'言語',
    set_general:'一般設定', set_advanced:'⚙ 詳細設定 (クラウド直接連携)',
    sync_title:'クラウド同期', sync_state:'現在の保存方法',
    sync_cloud:'● クラウド同期オン', sync_local:'● この端末のみ保存中(ローカル)',
    sync_note:'クラウドをオンにすると、スマホ・iPad・PCどこで開いても同じ記録が見られます。オンにするには下の「詳細設定」でFirebase情報を入力してください。(無料)',
    cloud_help:'• クラウドを使わない場合、記録と写真は今この端末だけに保存されます。\n• クラウドをオンにすると写真まで家族とリアルタイムで共有できます。',
    room_title:'家族共有コード', room_label:'ルームコード(家族が同じ値を使うとデータ共有)',
    room_note:'• 家族だけで同じコードを使ってください。このコードを知っている人は誰でも同じ記録を見られます。\n• ‘myhome’のような簡単なコードは避け、推測されにくい値(家族だけが分かる単語＋数字)を使ってください。\n• コードはいつでも変更でき、クラウドをオンにしたときだけ共有に使われます。',
    export_title:'データのバックアップ・復元', export_note:'記録と写真を1つのファイル(catdiary_backup.json)に保存します。端末を変えるときや万が一に備えて便利です。バックアップは下の「復元」で読み込めます。',
    import:'📥 バックアップを読み込む(復元)',
    import_confirm:'バックアップを読み込むと、今この端末の記録を上書きします。続けますか？',
    import_done:'復元が完了しました ✓', import_err:'バックアップファイルを読み込めません。正しい catdiary_backup.json か確認してください。',
    aria_back:'戻る', aria_settings:'設定を開く', aria_add:'追加', aria_addanniv:'記念日を追加', aria_del:'削除', aria_prevmonth:'前の月', aria_nextmonth:'次の月',
    fb_title:'Firebase連携(クラウドDB)',
    fb_setup:'設定方法: ① console.firebase.google.com にアクセス→プロジェクト作成 ② Firestore Database作成(テストモード) ③ プロジェクト設定→Webアプリ追加→表示される値をコピー ④ 上の欄に貼り付け。詳細はREADME参照。',
    fb_save:'💾 保存して適用', fb_clear:'クラウドをオフ(ローカルのみ)', export:'📤 データバックアップ(書き出し)',
    reload_apply:'保存しました。適用のため再読み込みします。', to_local:'ローカルモードに切り替えます。',
    toast_saved:'保存しました ✓', loading:'読み込み中…', none_dash:'-',
    rec:{
      condition:{good:'良い',normal:'普通',bad:'悪い'},
      meal:{well:'よく食べた',normal:'普通',little:'少なめ',none:'食べない'},
      water:{much:'多い',normal:'普通',little:'少ない'},
      poop:{normal:'正常',loose:'軟便',constip:'便秘',none:'なし'},
      pee:{normal:'正常',little:'少ない',much:'多い',abnormal:'異常'},
      vomit:{none:'なし',yes:'あり'},
      play:{'0':'0分','10':'10分','20':'20分+'}
    }
  }
};
let LANG = localStorage.getItem('cd_lang') || 'ko';
function t(k){ return (I18N[LANG] && I18N[LANG][k]!==undefined) ? I18N[LANG][k] : (I18N.ko[k]!==undefined?I18N.ko[k]:k); }
function L(){ return (I18N[LANG] && I18N[LANG].rec) || I18N.ko.rec; }
function setLang(l){ LANG=l; localStorage.setItem('cd_lang',l); document.documentElement.lang=l; render(); }

/* 기록 항목 옵션 (코드 → 라벨은 L() 사용) */
const REC_OPTS = {
  condition:['good','normal','bad'],
  meal:['well','normal','little','none'],
  water:['much','normal','little'],
  poop:['normal','loose','constip','none'],
  pee:['normal','little','much','abnormal'],
  vomit:['none','yes'],
  play:['0','10','20']
};
const CARE_TOPICS=['vomit','water','weight','meds','kidney','daily'];

/* ---------- 데이터 계층 (Firebase 또는 localStorage) ---------- */
const LS = window.localStorage;
const DB = {
  mode:'local', state:null, photos:{}, fb:null, onChange:null, room:'',
  async init(onChange){
    this.onChange = onChange;
    this.room = LS.getItem('cd_room') || 'myhome';
    let cfg = null;
    try{ cfg = JSON.parse(LS.getItem('cd_fbcfg')||'null'); }catch(e){}
    if(cfg && cfg.apiKey && cfg.projectId){
      try{ await this._initFirebase(cfg); this.mode='cloud'; return; }
      catch(e){ console.warn('Firebase 연결 실패, 로컬 모드로 전환', e); }
    }
    this._initLocal();
  },
  _emptyState(){ return {categories:[],cats:[],anniversaries:[],diary:[],vet:[]}; },
  _normalize(){
    const s=this.state; if(!s) return;
    s.categories=s.categories||[]; s.cats=s.cats||[]; s.anniversaries=s.anniversaries||[]; s.diary=s.diary||[]; s.vet=s.vet||[];
    s.cats.forEach(c=>{ if(!Array.isArray(c.careTopics)) c.careTopics=[]; });
  },
  _seedIfEmpty(){
    if(this.state && this.state.cats && this.state.cats.length) return false;
    this.state = JSON.parse(JSON.stringify(window.__SEED__));
    this.photos = Object.assign({}, window.__SEED_PHOTOS__);
    return true;
  },
  _initLocal(){
    this.mode='local';
    let s=null; try{ s=JSON.parse(LS.getItem('cd_state')||'null'); }catch(e){}
    this.state = s || null;
    this.photos = {};
    if(!this.state){ this._seedIfEmpty(); this._normalize(); this._saveLocal(); }
    else { this._normalize(); this._loadLocalPhotos(); }
    this.onChange && this.onChange();
  },
  _loadLocalPhotos(){
    this.photos={};
    for(let i=0;i<LS.length;i++){ const k=LS.key(i); if(k && k.indexOf('cd_photo_')===0){ this.photos[k.slice(9)]=LS.getItem(k); } }
  },
  _saveLocal(){
    LS.setItem('cd_state', JSON.stringify(this.state));
    Object.keys(this.photos).forEach(id=>LS.setItem('cd_photo_'+id, this.photos[id]));
  },
  async _initFirebase(cfg){
    const appMod = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const fs = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = appMod.initializeApp(cfg);
    const db = fs.getFirestore(app);
    this.fb = {fs, db, app};
    const roomDoc = fs.doc(db,'rooms',this.room);
    const photosCol = fs.collection(db,'rooms',this.room,'photos');
    fs.onSnapshot(roomDoc, snap=>{
      if(snap.exists()){ this.state = Object.assign(this._emptyState(), snap.data()); this._normalize(); }
      else { this._seedIfEmpty(); this._normalize(); this._pushAll(); }
      this.onChange && this.onChange();
    }, err=>{ console.warn(err); });
    fs.onSnapshot(photosCol, snap=>{
      snap.forEach(d=>{ this.photos[d.id]=d.data().d; });
      this.onChange && this.onChange();
    }, err=>{ console.warn(err); });
  },
  async _pushAll(){
    const {fs,db}=this.fb;
    await fs.setDoc(fs.doc(db,'rooms',this.room), this._stateOnly());
    for(const id of Object.keys(this.photos)){
      await fs.setDoc(fs.doc(db,'rooms',this.room,'photos',id), {d:this.photos[id]});
    }
  },
  _stateOnly(){ const s=this.state; return {categories:s.categories,cats:s.cats,anniversaries:s.anniversaries,diary:s.diary,vet:s.vet}; },
  async saveState(){
    toast(t('toast_saved'));
    if(this.mode==='cloud'){ const {fs,db}=this.fb; await fs.setDoc(fs.doc(db,'rooms',this.room), this._stateOnly()); }
    else { this._saveLocal(); this.onChange && this.onChange(); }
  },
  async setPhoto(id,data){
    this.photos[id]=data; toast(t('toast_saved'));
    if(this.mode==='cloud'){ const {fs,db}=this.fb; await fs.setDoc(fs.doc(db,'rooms',this.room,'photos',id), {d:data}); }
    else { LS.setItem('cd_photo_'+id, data); this.onChange && this.onChange(); }
  },
  async removePhoto(id){
    delete this.photos[id];
    if(this.mode==='cloud'){ const {fs,db}=this.fb; try{ await fs.deleteDoc(fs.doc(db,'rooms',this.room,'photos',id)); }catch(e){} }
    else { LS.removeItem('cd_photo_'+id); }
  },
  async importData(obj){
    if(!obj || !obj.state || typeof obj.state!=='object') throw new Error('invalid backup');
    this.state = Object.assign(this._emptyState(), obj.state);
    this._normalize();
    this.photos = Object.assign({}, obj.photos||{});
    if(this.mode==='cloud'){ await this._pushAll(); }
    else {
      const del=[]; for(let i=0;i<LS.length;i++){ const k=LS.key(i); if(k && k.indexOf('cd_photo_')===0) del.push(k); }
      del.forEach(k=>LS.removeItem(k));
      this._saveLocal();
    }
    this.onChange && this.onChange();
  }
};

/* ---------- 유틸 ---------- */
const $ = s=>document.querySelector(s);
const HOME_TITLE_HTML = (()=>{ const el=document.querySelector('#title'); return el?el.innerHTML:''; })();
function setHomeTitle(){ const el=$('#title'); if(HOME_TITLE_HTML.indexOf('cavatar')>=0){ el.innerHTML=HOME_TITLE_HTML; const tx=$('#titletext'); if(tx) tx.textContent=t('appTitle'); } else { el.textContent=t('appTitle'); } }
let pillTmr; function toast(msg){ const p=$('#pill'); if(msg)p.textContent=msg; p.classList.add('show'); clearTimeout(pillTmr); pillTmr=setTimeout(()=>p.classList.remove('show'),1200); }
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
const SEXEMO = s=> s==='여아'?'♀':'♂';
function parseMMDD(b){ if(!b) return null; const m=b.match(/(\d{1,2})\D+(\d{1,2})\D*$/); if(m) return [parseInt(m[1]),parseInt(m[2])]; const m2=b.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/); if(m2) return [parseInt(m2[2]),parseInt(m2[3])]; return null; }
function fmtBday(b){ const p=parseMMDD(b); if(!p) return b||'-'; return LANG==='ja'? `${p[0]}月${p[1]}日` : `${p[0]}월 ${p[1]}일`; }
function fmtDate(s){ if(!s||s.length<10) return s||'-'; const p=s.split('-'); const y=+p[0],m=+p[1],d=+p[2]; const mm=String(m).padStart(2,'0'),dd=String(d).padStart(2,'0'); return LANG==='ja'? `${y}年${m}月${d}日` : `${y}.${mm}.${dd}`; }
function fmtDateRel(s){ if(!s||s.length<10) return fmtDate(s); if(s===todayStr()) return t('rel_today')+' · '+fmtDate(s); if(s===daysAgoStr(1)) return t('rel_yesterday')+' · '+fmtDate(s); return fmtDate(s); }
function nextOcc(mm,dd){ const now=new Date(); const today=new Date(now.getFullYear(),now.getMonth(),now.getDate()); let d=new Date(today.getFullYear(),mm-1,dd); if(d<today) d=new Date(today.getFullYear()+1,mm-1,dd); return d; }
function daysUntil(d){ const now=new Date(); const today=new Date(now.getFullYear(),now.getMonth(),now.getDate()); return Math.round((d-today)/86400000); }
function ddayLabel(n){ return n===0?'D-DAY':(n>0?'D-'+n:'D+'+(-n)); }
function todayStr(){ const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function daysAgoStr(n){ const d=new Date(); d.setDate(d.getDate()-n); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function ymStr(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'); }
function catById(id){ return DB.state.cats.find(c=>c.id===id); }
function catsIn(cat){ return DB.state.cats.filter(c=>c.cat===cat); }
function recsOf(catId){ return DB.state.diary.filter(e=>e.catId===catId); }
function vetsOf(catId){ return DB.state.vet.filter(v=>v.catId===catId); }
function recordedToday(catId){ const td=todayStr(); return DB.state.diary.some(e=>e.catId===catId && e.date===td); }

/* 이상신호 판정 */
function recWarns(e){
  const w=[];
  if(e.vomit==='yes') w.push('vomit');
  if(e.poop==='loose'||e.poop==='constip') w.push('poop');
  if(e.pee==='abnormal'||e.pee==='little') w.push('pee');
  if(e.meal==='little'||e.meal==='none') w.push('meal');
  return w;
}
/* 최근 7일 건강 요약 (홈 카드용 한 줄) */
function summary7(catId){
  const cut=daysAgoStr(7);
  const rs=recsOf(catId).filter(e=>(e.date||'')>=cut).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  if(!rs.length) return t('recent7')+' · '+t('sum7_norec');
  let vomit=0,loose=0,low=0,lowwater=0;
  rs.forEach(e=>{ if(e.vomit==='yes')vomit++; if(e.poop==='loose'||e.poop==='constip')loose++; if(e.meal==='little'||e.meal==='none')low++; if(e.water==='little')lowwater++; });
  const parts=[];
  if(vomit) parts.push(`${t('st_vomit')} ${vomit}${t('unit_times')}`);
  if(loose) parts.push(`${t('st_loose')} ${loose}${t('unit_times')}`);
  if(low) parts.push(`${t('st_lowappe')} ${low}${t('unit_days')}`);
  if(lowwater) parts.push(`${t('st_lowwater')} ${lowwater}${t('unit_days')}`);
  const ws=rs.filter(e=>e.weight!=='' && e.weight!=null).map(e=>parseFloat(e.weight)).filter(n=>!isNaN(n));
  if(ws.length>=2){ const d=ws[ws.length-1]-ws[0]; if(Math.abs(d)>=0.1) parts.push(`${t('st_wchange')} ${d>0?'+':''}${d.toFixed(1)}kg`); }
  if(!parts.length) return `${t('recent7')} · ${t('rep_none')} (${rs.length}${t('unit_days')})`;
  return `${t('recent7')} · ${parts.join(' · ')}`;
}
/* '우리 아이 등록' 시작 — 카테고리가 없으면 기본 카테고리 자동 생성 */
function startRegister(){
  let cat=DB.state.categories[0];
  if(!cat){ cat={id:uid(),name:t('default_catg'),emoji:'🏠'}; DB.state.categories.push(cat); DB.saveState(); }
  go('editCat',{cat:cat.id});
}
function catAlert(catId){
  const cut=daysAgoStr(7); const rs=recsOf(catId).filter(e=>(e.date||'')>=cut);
  let vomit=0,loose=0,low=0,pee=0;
  rs.forEach(e=>{ if(e.vomit==='yes')vomit++; if(e.poop==='loose'||e.poop==='constip')loose++; if(e.meal==='little'||e.meal==='none')low++; if(e.pee==='abnormal')pee++; });
  const reasons=[];
  if(vomit>=2) reasons.push(`${L().vomit.yes} ${vomit}${t('unit_times')}`);
  if(loose>=2) reasons.push(`${t('st_loose')} ${loose}${t('unit_times')}`);
  if(low>=2) reasons.push(`${t('st_lowappe')} ${low}${t('unit_days')}`);
  if(pee>=1) reasons.push(`${t('f_pee')} ${L().pee.abnormal}`);
  return reasons.length? reasons : null;
}

/* ---------- 라우팅 ---------- */
let stack=[{v:'home'}];
function cur(){ return stack[stack.length-1]; }
function go(v,params){ stack.push(Object.assign({v},params)); render(); }
function back(){ if(stack.length>1){ stack.pop(); render(); } }
function reset(v,params){ stack=[Object.assign({v:v||'home'},params)]; render(); }
$('#back').onclick=back;
$('#gear').onclick=()=>go('settings');

/* ---------- 테마 ---------- */
function setTheme(accent,soft){ document.documentElement.style.setProperty('--accent',accent||'#ff8fab'); document.documentElement.style.setProperty('--soft',soft||'#ffe3ec'); }
const PALETTE={home:['#ff8fab','#ffe3ec'],street:['#7fb5e6','#e3f1ff']};
function catAccent(c){ return c&&c._accent ? [c._accent,c._soft] : (PALETTE[c?c.cat:'']||['#ff8fab','#ffe3ec']); }

/* ---------- 렌더 디스패치 ---------- */
function render(){
  const v=cur().v;
  if(v==='editCatg') return renderCatgAdd();
  if(!DB.state){ $('#view').innerHTML='<div class="empty">'+t('loading')+'</div>'; return; }
  DB._normalize();
  const c=cur();
  $('#back').style.visibility = stack.length>1 ? 'visible':'hidden';
  $('#back').setAttribute('aria-label', t('aria_back'));
  $('#gear').setAttribute('aria-label', t('aria_settings'));
  const old=$('.fab'); if(old) old.remove();
  if(v==='home') return renderHome();
  if(v==='category') return renderCategory(c.cat);
  if(v==='cat') return renderCat(c.id, c.tab||'profile');
  if(v==='editCat') return renderEditCat(c.cat, c.id);
  if(v==='editRecord') return renderEditRecord(c.catId, c.id, c.date);
  if(v==='editAnniv') return renderEditAnniv(c.catId, c.id);
  if(v==='editVet') return renderEditVet(c.catId, c.id);
  if(v==='settings') return renderSettings();
}
function addFab(fn){ const b=document.createElement('button'); b.className='fab'; b.textContent='＋'; b.setAttribute('aria-label', t('aria_add')); b.onclick=fn; document.body.appendChild(b); }

/* ---------- 홈 ---------- */
function renderHome(){
  setTheme('#ff8fab','#ffe3ec');
  setHomeTitle();
  const cats=DB.state.categories;
  let tiles=cats.map(cat=>{
    const n=catsIn(cat.id).length;
    return `<div class="tile" onclick="go('category',{cat:'${cat.id}'})">
      <div class="emo">${cat.emoji||'🐱'}</div><div class="nm">${esc(cat.name)}</div>
      <div class="ct">${n}${t('count')}</div></div>`;
  }).join('');
  tiles += `<div class="tile add" onclick="go('editCatg')"><div class="emo">＋</div><div class="nm">${t('catg_add_tile')}</div></div>`;

  // 첫 사용자 안내 — 카테고리보다 '우리 아이 등록'을 먼저
  let startGuide='';
  if(!DB.state.cats.length){
    startGuide=`<div class="startbox"><div class="t">${t('home_addcat_title')}</div>
      <div class="s">${esc(t('home_addcat_note'))}</div>
      <button class="bigbtn" onclick="startRegister()">${t('home_start_btn')}</button></div>`;
  }

  // 오늘 기록
  let todo='';
  if(DB.state.cats.length){
    todo = '<h3 class="sec">'+t('home_today')+'</h3>'+DB.state.cats.map(c=>{
      const ph=DB.photos[c.id];
      const av= ph? `<div class="avatar sm" style="background-image:url('${ph}')"></div>` : `<div class="avatar sm ph">🐱</div>`;
      const done=recordedToday(c.id);
      const status= done? `<span class="stat done">✓ ${t('today_status_done')}</span>` : `<span class="stat todo">${t('today_status_todo')}</span>`;
      const btn= done
        ? `<button class="act view" onclick="event.stopPropagation();go('cat',{id:'${c.id}',tab:'record'})">${t('today_view')}</button>`
        : `<button class="act go" onclick="event.stopPropagation();go('editRecord',{catId:'${c.id}'})">${t('today_do_full')}</button>`;
      return `<div class="todo${done?' done':''}" onclick="go('cat',{id:'${c.id}',tab:'record'})">${av}
        <div class="meta"><div class="nm">${esc(c.name)}</div><div class="sub">${fmtDate(todayStr())} ${status}</div>
        <div class="sum7">${esc(summary7(c.id))}</div></div>${btn}</div>`;
    }).join('');
  }

  // 관찰 필요
  let alerts='';
  DB.state.cats.forEach(c=>{ const r=catAlert(c.id); if(r){ alerts+=`<div class="alertcard" onclick="go('cat',{id:'${c.id}',tab:'stats'})"><div class="nm">${esc(c.name)}</div><div class="rs">${t('recent7')} · ${r.join(' · ')}</div></div>`; }});
  if(alerts) alerts = '<h3 class="sec">'+t('home_alert')+'</h3>'+alerts;

  // 생일/기념일
  let items=[];
  DB.state.cats.forEach(c=>{ const p=parseMMDD(c.birthday); if(p){ const d=nextOcc(p[0],p[1]); items.push({kind:'b',catId:c.id,days:daysUntil(d),title:c.name+' '+t('birthday_word'),sub:'🎂 '+fmtBday(c.birthday),accent:catAccent(c)[0]}); }});
  DB.state.anniversaries.forEach(a=>{ const p=parseMMDD(a.date); if(p){ const d=nextOcc(p[0],p[1]); const c=a.catId?catById(a.catId):null; items.push({kind:'a',id:a.id,catId:a.catId||'',days:daysUntil(d),title:a.title,sub:'✨ '+(c?c.name+' · ':'')+fmtBday(a.date),accent:c?catAccent(c)[0]:'#ff8fab'}); }});
  items.sort((x,y)=>x.days-y.days);
  let up = items.length? items.map(it=>{
    const click = it.kind==='b'?`go('cat',{id:'${it.catId}'})`:`go('editAnniv',{id:'${it.id}',catId:'${it.catId}'})`;
    const x = it.kind==='a'?`<button class="xdel" aria-label="${t('aria_del')}" onclick="event.stopPropagation();delAnnivQuick('${it.id}')">✕</button>`:'';
    return `<div class="anniv" onclick="${click}"><div class="dday" style="color:${it.accent}">${ddayLabel(it.days)}</div>
       <div class="info"><div class="t">${esc(it.title)}</div><div class="s">${esc(it.sub)}</div></div>${x}</div>`;
  }).join('') : '<div class="empty">'+t('no_anniv')+'</div>';

  $('#view').innerHTML=`
    ${startGuide}
    ${alerts}
    ${todo}
    <h3 class="sec">${t('home_cat')}</h3>
    <div class="grid">${tiles}</div>
    <div class="sechead"><h3>${t('home_upcoming')}</h3><button class="addmini" aria-label="${t('aria_addanniv')}" onclick="go('editAnniv',{})">＋</button></div>
    ${up}
    <div class="note">${t('home_note')}</div>`;
}

async function delAnnivQuick(id){
  if(!confirm(t('confirm_delanniv'))) return;
  DB.state.anniversaries=DB.state.anniversaries.filter(a=>a.id!==id);
  await DB.saveState(); render();
}

/* ---------- 카테고리 ---------- */
function renderCategory(catId){
  const cat=DB.state.categories.find(x=>x.id===catId); if(!cat){ reset('home'); return; }
  setTheme(...(PALETTE[catId]||['#ff8fab','#ffe3ec']));
  $('#title').textContent=(cat.emoji||'')+' '+cat.name;
  const list=catsIn(catId);
  let html = list.length ? list.map(c=>{
    const ph=DB.photos[c.id];
    const av= ph? `<div class="avatar" style="background-image:url('${ph}')"></div>` : `<div class="avatar ph">🐱</div>`;
    const alert=catAlert(c.id)? ' <span style="color:#cf5b5b">⚠️</span>':'';
    const done=recordedToday(c.id);
    const dchip= done? `<span class="dchip done">✓ ${t('today_status_done')}</span>` : `<span class="dchip todo">${t('today_status_todo')}</span>`;
    return `<div class="catcard" onclick="go('cat',{id:'${c.id}'})">${av}
      <div class="meta"><div class="nm">${esc(c.name)} ${SEXEMO(c.sex)}${alert}</div>
      <div class="sub">🎂 ${fmtBday(c.birthday)} · ${esc(c.nick||'')}</div>
      <div style="margin-top:5px">${dchip}</div></div>
      <div class="chev">›</div></div>`;
  }).join('') : `<div class="startbox"><div class="t">${t('cat_empty')}</div>
      <button class="bigbtn" onclick="go('editCat',{cat:'${catId}'})">${t('cat_register_btn')}</button></div>`;
  $('#view').innerHTML = html + `<button class="btn danger" id="delCatg">${t('catg_delete')}</button>`;
  addFab(()=>go('editCat',{cat:catId}));
  $('#delCatg').onclick=()=>delCategory(catId);
}

async function delCategory(catId){
  const cat=DB.state.categories.find(x=>x.id===catId); if(!cat) return;
  const inCats=catsIn(catId);
  if(inCats.length){
    if(!confirm(t('confirm_delcatg_cats').replace('{name}',cat.name).replace('{n}',inCats.length))) return;
    const ids=inCats.map(c=>c.id);
    DB.state.cats=DB.state.cats.filter(c=>c.cat!==catId);
    DB.state.diary=DB.state.diary.filter(x=>!ids.includes(x.catId));
    DB.state.anniversaries=DB.state.anniversaries.filter(x=>!ids.includes(x.catId));
    DB.state.vet=DB.state.vet.filter(x=>!ids.includes(x.catId));
    for(const id of ids){ await DB.removePhoto(id); }
  } else {
    if(!confirm(t('confirm_delcatg').replace('{name}',cat.name))) return;
  }
  DB.state.categories=DB.state.categories.filter(x=>x.id!==catId);
  await DB.saveState();
  reset('home');
}

/* ---------- 고양이 상세 (탭) ---------- */
function renderCat(id, tab){
  const c=catById(id); if(!c){ back(); return; }
  const [accent,soft]=catAccent(c); setTheme(accent,soft);
  $('#title').textContent=c.name;
  const TABS=[['profile','tab_profile'],['record','tab_record'],['stats','tab_stats'],['report','tab_report'],['vet','tab_vet']];
  const tabbar='<div class="tabs2">'+TABS.map(([k,lab])=>`<button class="${tab===k?'on':''}" onclick="setTab('${k}')">${t(lab)}</button>`).join('')+'</div>';
  let body='';
  if(tab==='profile') body=catProfile(c);
  else if(tab==='record') body=catRecord(c);
  else if(tab==='stats') body=catStats(c);
  else if(tab==='report') body=catReport(c);
  else if(tab==='vet') body=catVet(c);
  $('#view').innerHTML = tabbar + body;
  if(tab==='record'){ wireCalendar(c); addFab(()=>go('editRecord',{catId:id})); }
  else if(tab==='vet') addFab(()=>go('editVet',{catId:id}));
  else if(tab==='report') wireReport(c);
}
function setTab(tab){ cur().tab=tab; render(); }

function catProfile(c){
  const id=c.id; const ph=DB.photos[id];
  const hero = ph ? `<div class="hero"><img src="${ph}"><div class="cap"><h2>${esc(c.name)}</h2>
      <div class="badges"><span class="badge">${SEXEMO(c.sex)} ${c.sex==='여아'?t('female'):t('male')}</span>
      <span class="badge">🎂 ${fmtBday(c.birthday)}</span>${c.star?`<span class="badge">✨ ${esc(c.star)}</span>`:''}</div></div></div>`
    : `<div class="hero ph">🐱</div>`;
  const D=t('none_dash');
  const neut = c.neutered==='y'?t('neutered_y'):(c.neutered==='n'?t('neutered_n'):D);
  let basic=`<div class="card"><h4>${t('prof_basic')}</h4>
    <div class="kv"><span class="k">${t('f_breed')}</span><span class="v">${esc(c.breed||D)}</span></div>
    <div class="kv"><span class="k">${t('f_neutered')}</span><span class="v">${neut}</span></div>
    <div class="kv"><span class="k">${t('f_weight_now')}</span><span class="v">${c.weight?esc(c.weight)+' kg':D}</span></div>
    <div class="kv"><span class="k">${t('f_vet')}</span><span class="v">${esc(c.vet||D)}</span></div></div>`;
  let health='';
  if(c.disease || (c.careTopics&&c.careTopics.length)){
    const chips=(c.careTopics||[]).map(k=>`<span class="chip">${t('care_'+k)}</span>`).join('');
    health=`<div class="card"><h4>${t('prof_health')}</h4>
      ${c.disease?`<p class="desc" style="font-size:15px">🩺 ${esc(c.disease)}</p>`:''}
      ${chips?`<div class="chips">${chips}</div>`:''}</div>`;
  }
  const annivs=DB.state.anniversaries.filter(a=>a.catId===id)
    .map(a=>{const p=parseMMDD(a.date);const d=p?nextOcc(p[0],p[1]):null;return {a,days:d?daysUntil(d):9999};})
    .sort((x,y)=>x.days-y.days);
  const annivBody = annivs.length ? annivs.map(({a,days})=>`<div class="anniv" onclick="go('editAnniv',{catId:'${id}',id:'${a.id}'})">
      <div class="dday">${days<9999?ddayLabel(days):''}</div>
      <div class="info"><div class="t">${esc(a.title)}</div><div class="s">✨ ${fmtBday(a.date)}</div></div></div>`).join('')
    : '<div class="empty">'+t('anniv_empty')+'</div>';
  return `${hero}
    <div class="card"><div class="nick">💟 ${esc(c.nick||'')}</div><p class="desc" style="margin-top:6px">${esc(c.desc||'')}</p></div>
    ${basic}${health}
    <div class="sechead"><h3>🎉 ${t('anniv_word')}</h3><button class="addmini" aria-label="${t('aria_addanniv')}" onclick="go('editAnniv',{catId:'${id}'})">＋</button></div>
    ${annivBody}
    <button class="btn ghost" onclick="go('editCat',{cat:'${c.cat}',id:'${id}'})">${t('edit_profile')}</button>`;
}

/* 건강기록 탭: 목록 / 캘린더 */
function recChips(e){
  const out=[]; const warns=recWarns(e);
  const add=(field,emoji)=>{ if(e[field]){ const lab=L()[field][e[field]]; if(lab){ const w=warns.indexOf(field)>=0?' warn':''; out.push(`<span class="rchip${w}">${emoji}${lab}</span>`);} } };
  add('condition','😺'); add('meal','🍚'); add('water','💧'); add('poop','💩'); add('pee','🚽'); add('vomit','🤮'); add('play','🧶');
  if(e.weight) out.push(`<span class="rchip">⚖️${esc(e.weight)}kg</span>`);
  if(e.meds) out.push(`<span class="rchip">💊${esc(e.meds)}</span>`);
  return out.length? `<div class="rchips">${out.join('')}</div>`:'';
}
function catRecord(c){
  const id=c.id; const view=cur().rview||'list';
  const seg=`<div class="seg"><button class="${view==='list'?'on':''}" onclick="setRView('list')">${t('view_list')}</button>
    <button class="${view==='cal'?'on':''}" onclick="setRView('cal')">${t('view_cal')}</button></div>`;
  if(view==='cal') return seg + calHtml(c);
  const list=recsOf(id).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const body = list.length ? list.map(e=>{
    const ph=DB.photos['r_'+e.id];
    return `<div class="entry" onclick="go('editRecord',{catId:'${id}',id:'${e.id}'})">
      <div class="d"><span>📅 ${fmtDateRel(e.date)}</span><span class="mood">${e.mood||''}</span></div>
      ${recChips(e)}
      ${e.body?`<div class="b">${esc(e.body)}</div>`:''}
      ${ph?`<img class="thumb" src="${ph}">`:''}</div>`;
  }).join('') : '<div class="empty">'+t('rec_empty')+'</div>';
  return seg + body;
}
function setRView(v){ cur().rview=v; render(); }

/* 캘린더 */
function calHtml(c){
  const id=c.id; const cal = cur().cal || ymStr(new Date());
  const [yy,mm]=cal.split('-').map(Number);
  const first=new Date(yy,mm-1,1); const startDow=first.getDay();
  const dim=new Date(yy,mm,0).getDate();
  const recByDay={}; recsOf(id).forEach(e=>{ if(e.date&&e.date.slice(0,7)===cal){ recByDay[+e.date.slice(8,10)]=e; }});
  const vetByDay={}; vetsOf(id).forEach(v=>{ if(v.date&&v.date.slice(0,7)===cal){ vetByDay[+v.date.slice(8,10)]=true; }});
  const dows=LANG==='ja'?['日','月','火','水','木','金','土']:['일','월','화','수','목','금','토'];
  const td=todayStr();
  let cells=dows.map(d=>`<div class="cal-dow">${d}</div>`).join('');
  for(let i=0;i<startDow;i++) cells+='<div class="cal-cell blank"></div>';
  for(let day=1;day<=dim;day++){
    const ds=`${yy}-${String(mm).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const e=recByDay[day]; const hasVet=vetByDay[day];
    let dots='';
    if(e){ const w=recWarns(e);
      if(w.indexOf('vomit')>=0) dots+='<span class="cdot v"></span>';
      if(w.indexOf('poop')>=0) dots+='<span class="cdot p"></span>';
      if(e.meds) dots+='<span class="cdot m"></span>';
      if(DB.photos['r_'+e.id]) dots+='<span class="cdot g"></span>';
    }
    if(hasVet) dots+='<span class="cdot h"></span>';
    const cls=(e?' has':'')+(ds===td?' today':'');
    cells+=`<div class="cal-cell${cls}" data-d="${ds}">${day}${dots?`<div class="dots">${dots}</div>`:''}</div>`;
  }
  const moLabel=LANG==='ja'?`${yy}年${mm}月`:`${yy}년 ${mm}월`;
  const legend=`<div class="calleg">
    <span><span class="cdot v"></span>${t('cal_legend_v')}</span>
    <span><span class="cdot p"></span>${t('cal_legend_p')}</span>
    <span><span class="cdot m"></span>${t('cal_legend_m')}</span>
    <span><span class="cdot h"></span>${t('cal_legend_h')}</span>
    <span><span class="cdot g"></span>${t('cal_legend_g')}</span></div>`;
  return `<div class="cal"><div class="cal-head">
      <button id="calPrev" aria-label="${t('aria_prevmonth')}">‹</button><div class="mo">${moLabel}</div><button id="calNext" aria-label="${t('aria_nextmonth')}">›</button></div>
    <div class="cal-grid">${cells}</div>${legend}</div>`;
}
function wireCalendar(c){
  const prev=$('#calPrev'), next=$('#calNext'); if(!prev) return;
  const cal = cur().cal || ymStr(new Date());
  const shift=(n)=>{ const [y,m]=cal.split('-').map(Number); const d=new Date(y,m-1+n,1); cur().cal=ymStr(d); render(); };
  prev.onclick=()=>shift(-1); next.onclick=()=>shift(1);
  $('#view').querySelectorAll('.cal-cell[data-d]').forEach(cell=>{
    cell.onclick=()=>{ const ds=cell.dataset.d; const ex=recsOf(c.id).find(e=>e.date===ds);
      go('editRecord', ex?{catId:c.id,id:ex.id}:{catId:c.id,date:ds}); };
  });
}

/* 통계 */
function weightSeries(catId){
  return recsOf(catId).filter(e=>e.weight&&!isNaN(parseFloat(e.weight)))
    .map(e=>({date:e.date,w:parseFloat(e.weight)})).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
}
function weightChart(pts){
  if(pts.length<2) return '<div class="empty">'+t('stats_none')+'</div>';
  const ws=pts.map(p=>p.w); let lo=Math.min(...ws), hi=Math.max(...ws); const pad=(hi-lo)*0.2||0.3; lo-=pad; hi+=pad;
  const W=300,H=120,PX=12,PY=14,n=pts.length;
  const xs=i=>PX+(W-2*PX)*(n===1?0.5:i/(n-1));
  const ys=w=>PY+(H-2*PY)*(1-(w-lo)/(hi-lo||1));
  const d=pts.map((p,i)=>`${i?'L':'M'}${xs(i).toFixed(1)} ${ys(p.w).toFixed(1)}`).join(' ');
  const dots=pts.map((p,i)=>`<circle cx="${xs(i).toFixed(1)}" cy="${ys(p.w).toFixed(1)}" r="3" fill="var(--accent)"/>`).join('');
  return `<div class="chartwrap"><svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
    <path d="${d}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>${dots}</svg></div>
    <div class="wlabel"><span>${fmtDate(pts[0].date)} · ${pts[0].w}kg</span><span>${fmtDate(pts[n-1].date)} · ${pts[n-1].w}kg</span></div>`;
}
function summary30(catId){
  const cut=daysAgoStr(30); const rs=recsOf(catId).filter(e=>(e.date||'')>=cut);
  let vomit=0,loose=0,low=0,lowwater=0;
  rs.forEach(e=>{ if(e.vomit==='yes')vomit++; if(e.poop==='loose'||e.poop==='constip')loose++; if(e.meal==='little'||e.meal==='none')low++; if(e.water==='little')lowwater++; });
  const vet=vetsOf(catId).filter(v=>(v.date||'')>=cut).length;
  const wp=weightSeries(catId).filter(p=>p.date>=cut);
  let wchange='-'; if(wp.length>=2){ const diff=(wp[wp.length-1].w-wp[0].w); wchange=(diff>=0?'+':'')+diff.toFixed(1)+'kg'; }
  return {vomit,loose,low,lowwater,vet,wchange};
}
function catStats(c){
  const pts=weightSeries(c.id); const s=summary30(c.id);
  const box=(n,l,warn)=>`<div class="statbox"><div class="n${warn?' warn':''}">${n}</div><div class="l">${l}</div></div>`;
  return `<div class="card"><h4>${t('stats_weight')}</h4>${weightChart(pts)}</div>
    <div class="card"><h4>${t('stats_30')}</h4><div class="statgrid">
      ${box(s.vomit+t('unit_times'),t('st_vomit'),s.vomit>=2)}
      ${box(s.loose+t('unit_times'),t('st_loose'),s.loose>=2)}
      ${box(s.low+t('unit_days'),t('st_lowappe'),s.low>=2)}
      ${box(s.lowwater+t('unit_days'),t('st_lowwater'),false)}
      ${box(s.vet+t('unit_times'),t('st_vet'),false)}
      ${box(s.wchange,t('st_wchange'),false)}
    </div></div>`;
}

/* 병원 제출용 리포트 */
function catReport(c){
  const days=cur().rep||30; const cut=daysAgoStr(days);
  const rs=recsOf(c.id).filter(e=>(e.date||'')>=cut).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  const vets=vetsOf(c.id).filter(v=>(v.date||'')>=cut).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  const s=summary30(c.id);
  const seg=`<div class="seg noprint"><button class="${days===7?'on':''}" onclick="setRep(7)">${t('recent7')}</button>
    <button class="${days===30?'on':''}" onclick="setRep(30)">${t('rep_30d')}</button></div>`;
  const wp=weightSeries(c.id).filter(p=>p.date>=cut);
  let wtext='-'; if(wp.length>=1){ wtext=wp.length>=2? `${wp[0].w}kg → ${wp[wp.length-1].w}kg`: `${wp[0].w}kg`; }
  // 증상 이벤트
  const labels={vomit:t('st_vomit'),poop:t('st_loose'),pee:t('f_pee'),meal:t('st_lowappe')};
  let events=[];
  rs.forEach(e=>{ const w=recWarns(e); if(w.length){ events.push(`<div class="evline"><span class="dt">${fmtDate(e.date)}</span>${w.map(k=>labels[k]).join(', ')}${e.body?' · '+esc(e.body):''}</div>`); }});
  const meds=[...new Set(rs.filter(e=>e.meds).map(e=>e.meds.trim()))];
  const vetLines=vets.map(v=>`<div class="evline"><span class="dt">${fmtDate(v.date)}</span>${esc(v.symptom||'')}${v.diagnosis?' · '+esc(v.diagnosis):''}</div>`).join('');
  const D=t('none_dash');
  const rrow=(k,v,warn)=>`<div class="rrow"><span class="k">${k}</span><span class="v${warn?' warn':''}">${v}</span></div>`;
  const periodLabel=days===7?t('recent7'):t('rep_30d');
  return seg + `<div class="report card">
    <div class="rhead"><h2>${esc(c.name)} 🐈</h2><div class="sub">${SEXEMO(c.sex)} · 🎂 ${fmtBday(c.birthday)}${c.breed?' · '+esc(c.breed):''}${c.disease?' · '+esc(c.disease):''}</div></div>
    <h4>${t('rep_summary')} (${periodLabel})</h4>
    ${rrow(t('rep_weight'), wtext, false)}
    ${rrow(t('st_vomit'), s.vomit+t('unit_times'), s.vomit>=2)}
    ${rrow(t('st_loose'), s.loose+t('unit_times'), s.loose>=2)}
    ${rrow(t('st_lowappe'), s.low+t('unit_days'), s.low>=2)}
    ${rrow(t('st_lowwater'), s.lowwater+t('unit_days'), false)}
    ${rrow(t('rep_vet'), s.vet+t('unit_times'), false)}
    ${rrow(t('rep_records'), rs.length+t('unit_times'), false)}
    <h4 style="margin-top:12px">${t('rep_events')}</h4>
    ${events.length?events.join(''):'<div class="evline">'+t('rep_none')+'</div>'}
    <h4 style="margin-top:12px">${t('rep_meds')}</h4>
    <div class="evline">${meds.length?meds.map(esc).join(', '):D}</div>
    <h4 style="margin-top:12px">${t('rep_vet')}</h4>
    ${vetLines||'<div class="evline">'+D+'</div>'}
    <div class="sub" style="text-align:center;color:#c4b3a8;margin-top:14px;font-size:12px">${t('rep_made_pre')}${fmtDate(todayStr())}</div>
  </div>
  <button class="btn primary noprint" id="repPrint">${t('rep_print')}</button>`;
}
function setRep(d){ cur().rep=d; render(); }
function wireReport(c){ const b=$('#repPrint'); if(b) b.onclick=()=>window.print(); }

/* 병원 기록 탭 */
function catVet(c){
  const list=vetsOf(c.id).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  return list.length ? list.map(v=>`<div class="entry" onclick="go('editVet',{catId:'${c.id}',id:'${v.id}'})">
      <div class="d"><span>🏥 ${fmtDate(v.date)}</span>${v.cost?`<span>${Number(v.cost).toLocaleString()}</span>`:''}</div>
      ${v.symptom?`<div class="t">${esc(v.symptom)}</div>`:''}
      ${v.diagnosis?`<div class="b">🩺 ${esc(v.diagnosis)}</div>`:''}
      ${v.prescription?`<div class="b">💊 ${esc(v.prescription)}</div>`:''}
      ${v.next?`<div class="b" style="color:var(--accent)">📅 ${t('next_visit')}: ${fmtDate(v.next)}</div>`:''}</div>`).join('')
    : '<div class="empty">'+t('vet_empty')+'</div>';
}

/* ---------- 프로필 편집 ---------- */
function renderEditCat(catId, id){
  const editing = !!id; const c = editing ? catById(id) : {cat:catId,sex:'남아',careTopics:[]};
  const [accent,soft]=editing?catAccent(c):(PALETTE[catId]||['#ff8fab','#ffe3ec']); setTheme(accent,soft);
  $('#title').textContent = editing?t('catEdit'):t('catNew');
  const ph = id?DB.photos[id]:null;
  const opts = DB.state.categories.map(x=>`<option value="${x.id}" ${x.id===(c.cat||catId)?'selected':''}>${esc(x.emoji||'')} ${esc(x.name)}</option>`).join('');
  const careChips = CARE_TOPICS.map(k=>`<button type="button" data-care="${k}" class="${(c.careTopics||[]).indexOf(k)>=0?'on':''}">${t('care_'+k)}</button>`).join('');
  $('#view').innerHTML=`
    ${editing?'':`<div class="note">${t('reg_hint')}</div>`}
    <div class="formsec">${t('reg_sec_basic')}</div>
    <div class="photo-pick">
      <div class="pv" id="pv" style="${ph?`background-image:url('${ph}')`:''}">${ph?'':'🐱'}</div>
      <div><button class="btn ghost" style="margin:0" onclick="document.getElementById('photoInput').click()">${t('photo_pick')}</button>
      <input type="file" id="photoInput" accept="image/*" style="display:none"></div>
    </div>
    <label class="fld">${t('f_name')}</label><input type="text" id="f_name" value="${esc(c.name||'')}" placeholder="${t('ph_name')}">
    <label class="fld">${t('f_cat')}</label><select id="f_cat">${opts}</select>
    <div class="row2"><div><label class="fld">${t('f_sex')}</label>
      <select id="f_sex"><option value="남아" ${c.sex==='남아'?'selected':''}>${t('male')}</option><option value="여아" ${c.sex==='여아'?'selected':''}>${t('female')}</option></select></div>
      <div><label class="fld">${t('f_bday')}</label><input type="date" id="f_bday" value="${(c.birthday&&c.birthday.length===10)?c.birthday:''}"><div class="hint">${t('bday_hint')}</div></div></div>
    <div class="row2"><div><label class="fld">${t('f_weight_now')}</label><input type="number" step="0.1" id="f_weight" value="${esc(c.weight||'')}" inputmode="decimal"></div>
      <div><label class="fld">${t('f_breed')}</label><input type="text" id="f_breed" value="${esc(c.breed||'')}" placeholder="${t('ph_breed')}"></div></div>
    <div class="formsec">${t('reg_sec_health')}</div>
    <label class="fld">${t('f_neutered')}</label>
    <select id="f_neut"><option value="" ${!c.neutered?'selected':''}>${t('neutered_x')}</option><option value="y" ${c.neutered==='y'?'selected':''}>${t('neutered_y')}</option><option value="n" ${c.neutered==='n'?'selected':''}>${t('neutered_n')}</option></select>
    <label class="fld">${t('f_disease')}</label><input type="text" id="f_disease" value="${esc(c.disease||'')}" placeholder="${t('ph_disease')}">
    <label class="fld">${t('f_vet')}</label><input type="text" id="f_vet" value="${esc(c.vet||'')}" placeholder="${t('ph_vet')}">
    <label class="fld">${t('f_care')}</label><div class="recseg" id="careSeg">${careChips}</div>
    <div class="formsec">${t('reg_sec_extra')}</div>
    <label class="fld">${t('f_nick')}</label><input type="text" id="f_nick" value="${esc(c.nick||'')}" placeholder="${t('ph_nick')}">
    <label class="fld">${t('f_desc')}</label><textarea id="f_desc" placeholder="${t('ph_desc')}">${esc(c.desc||'')}</textarea>
    <button class="btn primary" id="saveCat">${t('save')}</button>
    ${editing?`<button class="btn danger" id="delCat">${t('catDelete')}</button>`:''}`;

  let care=(c.careTopics||[]).slice();
  $('#careSeg').querySelectorAll('button').forEach(b=>b.onclick=()=>{ const k=b.dataset.care; const i=care.indexOf(k); if(i>=0){care.splice(i,1);b.classList.remove('on');}else{care.push(k);b.classList.add('on');} });
  let newPhoto = null;
  $('#photoInput').onchange=e=>{ const f=e.target.files[0]; if(!f)return; resizeImage(f,720,d=>{ newPhoto=d; const pv=$('#pv'); pv.style.backgroundImage=`url('${d}')`; pv.textContent=''; }); };
  $('#saveCat').onclick=async ()=>{
    const name=$('#f_name').value.trim(); if(!name){ alert(t('alert_name')); return; }
    let bday=$('#f_bday').value; if(c.birthday && c.birthday.length===5 && !bday) bday=c.birthday;
    const obj={ id: id||uid(), cat:$('#f_cat').value, name, sex:$('#f_sex').value, birthday:bday,
      neutered:$('#f_neut').value, weight:$('#f_weight').value.trim(), breed:$('#f_breed').value.trim(),
      vet:$('#f_vet').value.trim(), disease:$('#f_disease').value.trim(), careTopics:care,
      nick:$('#f_nick').value.trim(), desc:$('#f_desc').value.trim(), star:c.star||'' };
    if(editing){ const i=DB.state.cats.findIndex(x=>x.id===id); DB.state.cats[i]=Object.assign(c,obj); }
    else DB.state.cats.push(obj);
    await DB.saveState();
    if(newPhoto) await DB.setPhoto(obj.id,newPhoto);
    reset('category',{cat:obj.cat});
  };
  if(editing) $('#delCat').onclick=async ()=>{
    if(!confirm(t('confirm_delcat').replace('{name}',c.name))) return;
    DB.state.cats=DB.state.cats.filter(x=>x.id!==id);
    DB.state.diary=DB.state.diary.filter(x=>x.catId!==id);
    DB.state.anniversaries=DB.state.anniversaries.filter(x=>x.catId!==id);
    DB.state.vet=DB.state.vet.filter(x=>x.catId!==id);
    await DB.removePhoto(id); await DB.saveState();
    reset('category',{cat:c.cat});
  };
}

/* ---------- 30초 건강기록 편집 ---------- */
function recSeg(field,val){
  const opts=REC_OPTS[field];
  return `<div class="recfield"><div class="rl">${t('f_'+field)}</div>
    <div class="recseg" data-f="${field}">${opts.map(v=>`<button type="button" class="${val===v?'on':''}" data-v="${v}">${L()[field][v]}</button>`).join('')}</div></div>`;
}
function renderEditRecord(catId, id, presetDate){
  const c=catById(catId); if(!c){ back(); return; }
  const [a,s]=catAccent(c); setTheme(a,s);
  let e;
  if(id){ e=DB.state.diary.find(x=>x.id===id); }
  else { const d=presetDate||todayStr(); e=DB.state.diary.find(x=>x.catId===catId && x.date===d); }
  const editing=!!e;
  if(!e){ e={ catId, date:presetDate||todayStr(), mood:'' }; }
  const rid=e.id||uid();
  $('#title').textContent= c.name+' · '+(editing?t('rec_edit'):t('rec_new'));
  const moods=['😻','😺','😴','😋','🥺','😾'];
  const ph=DB.photos['r_'+rid];
  const basicFields=['condition','meal','water','poop','pee'].map(f=>recSeg(f,e[f])).join('');
  const moreFields=['vomit','play'].map(f=>recSeg(f,e[f])).join('');
  const hasMore = !!(e.vomit||e.play||e.weight||e.meds||e.body||ph);
  $('#view').innerHTML=`
    <label class="fld">${t('f_date')}</label><input type="date" id="r_date" value="${esc(e.date||todayStr())}">
    <h4 class="recsec">${t('rec_basic')}</h4>
    <label class="fld">${t('f_mood')}</label>
    <div class="moodpick" id="moods">${moods.map(m=>`<button class="${e.mood===m?'on':''}" data-m="${m}">${m}</button>`).join('')}</div>
    ${basicFields}
    <button type="button" class="moretoggle" id="moreToggle">${hasMore?'▴ '+t('rec_more_close'):'▾ '+t('rec_more')}</button>
    <div class="morewrap" id="moreWrap" style="display:${hasMore?'block':'none'}">
      ${moreFields}
      <div class="recfield"><div class="rl">${t('f_weight')}</div><input type="number" step="0.1" id="r_weight" inputmode="decimal" value="${esc(e.weight||'')}"></div>
      <div class="recfield"><div class="rl">${t('f_meds')}</div><input type="text" id="r_meds" value="${esc(e.meds||'')}" placeholder="${t('ph_meds')}"></div>
      <div class="photo-pick" style="margin-top:14px">
        <div class="pv" id="pv" style="${ph?`background-image:url('${ph}')`:''}">${ph?'':'📷'}</div>
        <div class="photo-btns">
          <button type="button" class="btn ghost" style="margin:0" onclick="document.getElementById('rphotoCam').click()">${t('photo_take')}</button>
          <button type="button" class="btn ghost" style="margin:0" onclick="document.getElementById('rphoto').click()">${t('photo_pick')}</button>
          <input type="file" id="rphotoCam" accept="image/*" capture="environment" style="display:none">
          <input type="file" id="rphoto" accept="image/*" style="display:none">
        </div>
      </div>
      <label class="fld">${t('f_memo')}</label><textarea id="r_body" placeholder="${t('ph_memo')}">${esc(e.body||'')}</textarea>
    </div>
    <button class="btn primary" id="saveR">${t('save')}</button>
    ${editing?`<button class="btn danger" id="delR">${t('del')||'🗑 삭제'}</button>`:''}`;
  const mt=$('#moreToggle'), mw=$('#moreWrap');
  mt.onclick=()=>{ const open=mw.style.display!=='none'; mw.style.display=open?'none':'block'; mt.textContent=open?'▾ '+t('rec_more'):'▴ '+t('rec_more_close'); };
  const sel={};
  ['condition','meal','water','poop','pee','vomit','play'].forEach(f=>{ if(e[f]) sel[f]=e[f]; });
  $('#view').querySelectorAll('.recseg[data-f]').forEach(seg=>{
    seg.querySelectorAll('button').forEach(b=>b.onclick=()=>{ const f=seg.dataset.f;
      if(sel[f]===b.dataset.v){ sel[f]=''; b.classList.remove('on'); }
      else { sel[f]=b.dataset.v; seg.querySelectorAll('button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); } });
  });
  let mood=e.mood||'';
  $('#moods').querySelectorAll('button').forEach(b=>b.onclick=()=>{ if(mood===b.dataset.m){mood='';b.classList.remove('on');} else {mood=b.dataset.m; $('#moods').querySelectorAll('button').forEach(x=>x.classList.remove('on')); b.classList.add('on');} });
  let newPhoto=null;
  const onPhoto=ev=>{ const f=ev.target.files[0]; if(!f)return; resizeImage(f,720,d=>{ newPhoto=d; const pv=$('#pv'); pv.style.backgroundImage=`url('${d}')`; pv.textContent=''; }); ev.target.value=''; };
  $('#rphoto').onchange=onPhoto;
  $('#rphotoCam').onchange=onPhoto;
  $('#saveR').onclick=async ()=>{
    const obj={ id:rid, catId, date:$('#r_date').value||todayStr(), mood,
      condition:sel.condition||'', meal:sel.meal||'', water:sel.water||'', poop:sel.poop||'', pee:sel.pee||'', vomit:sel.vomit||'', play:sel.play||'',
      weight:$('#r_weight').value.trim(), meds:$('#r_meds').value.trim(), body:$('#r_body').value.trim() };
    if(editing){ const i=DB.state.diary.findIndex(x=>x.id===rid); DB.state.diary[i]=obj; } else DB.state.diary.push(obj);
    await DB.saveState();
    if(newPhoto) await DB.setPhoto('r_'+rid,newPhoto);
    toast(t('saved_feedback')); back();
  };
  if(editing) $('#delR').onclick=async ()=>{ if(!confirm(t('confirm_deldiary')||'이 기록을 삭제할까요?'))return; DB.state.diary=DB.state.diary.filter(x=>x.id!==rid); await DB.removePhoto('r_'+rid); await DB.saveState(); back(); };
}

/* ---------- 기념일 편집 ---------- */
function renderEditAnniv(catId, id){
  const editing=!!id;
  const e = editing? DB.state.anniversaries.find(x=>x.id===id) : {date:todayStr(), catId:(catId||'')};
  const selCat = (e.catId!==undefined)? e.catId : (catId||'');
  const cc = selCat?catById(selCat):null;
  const [a,s]= cc?catAccent(cc):['#ff8fab','#ffe3ec']; setTheme(a,s);
  $('#title').textContent= editing?t('anniv_edit')||'기념일 수정':t('anniv_new')||'새 기념일';
  const opts = `<option value="">${t('anniv_common')||'공통'}</option>`+DB.state.cats.map(c=>`<option value="${c.id}" ${c.id===selCat?'selected':''}>${esc(c.name)}</option>`).join('');
  $('#view').innerHTML=`
    <label class="fld">${t('anniv_name')||'기념일 이름'}</label><input type="text" id="a_title" value="${esc(e.title||'')}" placeholder="${t('ph_anniv')||''}">
    <label class="fld">${t('anniv_cat')||'대상 아이'}</label><select id="a_cat">${opts}</select>
    <label class="fld">${t('f_date')}</label><input type="date" id="a_date" value="${(e.date&&e.date.length===10)?e.date:todayStr()}">
    <div class="note">${t('anniv_note')||''}</div>
    <button class="btn primary" id="saveA">${t('save')}</button>
    ${editing?`<button class="btn danger" id="delA">${t('del')||'🗑 삭제'}</button>`:''}`;
  $('#saveA').onclick=async ()=>{
    const tt=$('#a_title').value.trim(); if(!tt){ alert(t('alert_anniv')||t('alert_name')); return; }
    const obj={ id:id||uid(), catId:$('#a_cat').value, title:tt, date:$('#a_date').value };
    if(editing){ const i=DB.state.anniversaries.findIndex(x=>x.id===id); DB.state.anniversaries[i]=obj; } else DB.state.anniversaries.push(obj);
    await DB.saveState(); back();
  };
  if(editing) $('#delA').onclick=async ()=>{ if(!confirm(t('confirm_delanniv')))return; DB.state.anniversaries=DB.state.anniversaries.filter(x=>x.id!==id); await DB.saveState(); back(); };
}

/* ---------- 병원 기록 편집 ---------- */
function renderEditVet(catId, id){
  const c=catById(catId); const [a,s]=c?catAccent(c):['#ff8fab','#ffe3ec']; setTheme(a,s);
  const editing=!!id; const e=editing? DB.state.vet.find(x=>x.id===id) : {date:todayStr()};
  $('#title').textContent= editing?t('vet_edit'):t('vet_new');
  $('#view').innerHTML=`
    <label class="fld">${t('f_vdate')}</label><input type="date" id="v_date" value="${esc(e.date||todayStr())}">
    <label class="fld">${t('f_symptom')}</label><input type="text" id="v_sym" value="${esc(e.symptom||'')}" placeholder="${t('ph_symptom')}">
    <label class="fld">${t('f_diagnosis')}</label><input type="text" id="v_diag" value="${esc(e.diagnosis||'')}" placeholder="${t('ph_diagnosis')}">
    <label class="fld">${t('f_prescription')}</label><input type="text" id="v_pre" value="${esc(e.prescription||'')}" placeholder="${t('ph_prescription')}">
    <div class="row2"><div><label class="fld">${t('f_cost')}</label><input type="number" id="v_cost" inputmode="numeric" value="${esc(e.cost||'')}"></div>
      <div><label class="fld">${t('f_next')}</label><input type="date" id="v_next" value="${esc(e.next||'')}"></div></div>
    <label class="fld">${t('f_vmemo')}</label><textarea id="v_memo" placeholder="">${esc(e.memo||'')}</textarea>
    <button class="btn primary" id="saveV">${t('save')}</button>
    ${editing?`<button class="btn danger" id="delV">${t('del')||'🗑 삭제'}</button>`:''}`;
  $('#saveV').onclick=async ()=>{
    const sym=$('#v_sym').value.trim(), diag=$('#v_diag').value.trim();
    if(!sym && !diag){ alert(t('alert_vet')); return; }
    const obj={ id:id||uid(), catId, date:$('#v_date').value||todayStr(), symptom:sym, diagnosis:diag,
      prescription:$('#v_pre').value.trim(), cost:$('#v_cost').value.trim(), next:$('#v_next').value, memo:$('#v_memo').value.trim() };
    if(editing){ const i=DB.state.vet.findIndex(x=>x.id===id); DB.state.vet[i]=obj; } else DB.state.vet.push(obj);
    await DB.saveState(); back();
  };
  if(editing) $('#delV').onclick=async ()=>{ if(!confirm(t('confirm_delvet')))return; DB.state.vet=DB.state.vet.filter(x=>x.id!==id); await DB.saveState(); back(); };
}

/* ---------- 카테고리 추가 ---------- */
function renderCatgAdd(){
  setTheme('#ff8fab','#ffe3ec'); $('#title').textContent=t('catg_add');
  $('#back').style.visibility='visible';
  const old=$('.fab'); if(old) old.remove();
  const CHOICES=['🐾','🐱','😺','😻','🐈','🐈‍⬛','🦁','🐯','🐶','🐰','🐹','🐭',
    '🏠','🏡','🏢','🏬','🏥','🏫','🌳','🌲','🌷','🌙','☀️','⭐',
    '❤️','💛','💚','💙','💜','🧡','🤍','🐟','🍗','🍼','🧶','👑'];
  let sel='🐾';
  const btns=CHOICES.map(e=>`<button type="button" class="emoopt${e===sel?' on':''}" data-e="${e}">${e}</button>`).join('');
  $('#view').innerHTML=`
    <label class="fld">${t('catg_name')}</label><input type="text" id="cg_name" placeholder="${t('ph_catg')}">
    <label class="fld">${t('catg_emoji')}</label>
    <div class="emopick" id="cg_emopick">${btns}</div>
    <button class="btn primary" id="cgSave">${t('add')}</button>`;
  const opts=$('#cg_emopick').querySelectorAll('.emoopt');
  opts.forEach(b=>{ b.onclick=()=>{ sel=b.dataset.e; opts.forEach(x=>x.classList.toggle('on',x===b)); }; });
  $('#cgSave').onclick=async ()=>{ const n=$('#cg_name').value.trim(); if(!n){alert(t('alert_name'));return;}
    DB.state.categories.push({id:uid(),name:n,emoji:sel}); await DB.saveState(); reset('home'); };
}

/* ---------- 설정 ---------- */
function renderSettings(){
  setTheme('#ff8fab','#ffe3ec'); $('#title').textContent=t('settings');
  let cfg={}; try{cfg=JSON.parse(LS.getItem('cd_fbcfg')||'{}');}catch(e){}
  const room=LS.getItem('cd_room')||'myhome';
  const st = DB.mode==='cloud'
    ? '<span class="status cloud">'+t('sync_cloud')+'</span>'
    : '<span class="status local">'+t('sync_local')+'</span>';
  $('#view').innerHTML=`
    <h3 class="sec">${t('set_general')}</h3>
    <div class="card"><h4>🌐 ${t('lang_title')}</h4>
      <div class="seg"><button class="${LANG==='ko'?'on':''}" onclick="setLang('ko')">한국어</button>
      <button class="${LANG==='ja'?'on':''}" onclick="setLang('ja')">日本語</button></div></div>
    <div class="card"><h4>☁️ ${t('sync_title')}</h4>
      <div class="kv"><span class="k">${t('sync_state')}</span><span class="v">${st}</span></div>
      <div class="note">${t('cloud_help')}</div></div>
    <div class="card"><h4>👨‍👩‍👧 ${t('room_title')}</h4>
      <label class="fld">${t('room_label')}</label>
      <input type="text" id="s_room" value="${esc(room)}">
      <div class="note">${t('room_note')}</div>
    </div>
    <div class="card"><h4>💾 ${t('export_title')}</h4>
      <div class="note" style="margin-top:0">${t('export_note')}</div>
      <button class="btn ghost" id="s_export">${t('export')}</button>
      <button class="btn ghost" id="s_import">${t('import')}</button>
      <input type="file" id="s_importfile" accept="application/json,.json" style="display:none"></div>
    <h3 class="sec">${t('set_advanced')}</h3>
    <details class="adv"><summary>${t('fb_title')}</summary>
      <div class="inner">
      <label class="fld">apiKey</label><input type="text" id="s_api" value="${esc(cfg.apiKey||'')}">
      <label class="fld">authDomain</label><input type="text" id="s_auth" value="${esc(cfg.authDomain||'')}">
      <label class="fld">projectId</label><input type="text" id="s_proj" value="${esc(cfg.projectId||'')}">
      <label class="fld">appId</label><input type="text" id="s_app" value="${esc(cfg.appId||'')}">
      <button class="btn primary" id="s_save">${t('fb_save')}</button>
      <button class="btn ghost" id="s_clear">${t('fb_clear')}</button>
      <div class="note">${t('fb_setup')}</div>
      </div>
    </details>`;
  $('#s_save').onclick=()=>{
    const cc={apiKey:$('#s_api').value.trim(),authDomain:$('#s_auth').value.trim(),projectId:$('#s_proj').value.trim(),appId:$('#s_app').value.trim()};
    cc.storageBucket=(cc.projectId?cc.projectId+'.appspot.com':'');
    LS.setItem('cd_fbcfg',JSON.stringify(cc)); LS.setItem('cd_room',$('#s_room').value.trim()||'myhome');
    alert(t('reload_apply')); location.reload();
  };
  $('#s_clear').onclick=()=>{ LS.removeItem('cd_fbcfg'); alert(t('to_local')); location.reload(); };
  $('#s_export').onclick=()=>{ const data={state:DB.state,photos:DB.photos}; const blob=new Blob([JSON.stringify(data)],{type:'application/json'}); const u=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=u; a.download='catdiary_backup.json'; a.click(); };
  $('#s_import').onclick=()=>$('#s_importfile').click();
  $('#s_importfile').onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    if(!confirm(t('import_confirm'))){ e.target.value=''; return; }
    const r=new FileReader();
    r.onload=async ev=>{ try{ const obj=JSON.parse(ev.target.result); await DB.importData(obj); alert(t('import_done')); reset('home'); }catch(err){ console.warn(err); alert(t('import_err')); } e.target.value=''; };
    r.onerror=()=>{ alert(t('import_err')); e.target.value=''; };
    r.readAsText(f);
  };
}

/* 이미지 리사이즈 (아이패드/사파리 호환: FileReader + canvas) */
function resizeImage(file, max, cb){
  const r=new FileReader();
  r.onload=ev=>{ const img=new Image(); img.onload=()=>{
    let w=img.naturalWidth, h=img.naturalHeight; const sc=Math.min(1, max/Math.max(w,h));
    w=Math.round(w*sc); h=Math.round(h*sc);
    const cv=document.createElement('canvas'); cv.width=w; cv.height=h;
    cv.getContext('2d').drawImage(img,0,0,w,h);
    cb(cv.toDataURL('image/jpeg',0.82));
  }; img.onerror=()=>alert('이미지를 불러올 수 없어요'); img.src=ev.target.result; };
  r.readAsDataURL(file);
}

/* 시작 */
document.documentElement.lang=LANG;
DB.init(()=>render());
