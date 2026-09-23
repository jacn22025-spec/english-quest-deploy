(()=>{'use strict';
const sh=a=>[...a].sort(()=>Math.random()-.5);
const nouns=[['apple','countable'],['book','countable'],['chair','countable'],['student','countable'],['teacher','countable'],['dog','countable'],['cat','countable'],['car','countable'],['house','countable'],['idea','countable'],['question','countable'],['egg','countable'],['orange','countable'],['banana','countable'],['bottle','countable'],['water','uncountable'],['milk','uncountable'],['rice','uncountable'],['bread','uncountable'],['money','uncountable'],['information','uncountable'],['advice','uncountable'],['homework','uncountable'],['furniture','uncountable'],['luggage','uncountable'],['news','uncountable'],['music','uncountable'],['traffic','uncountable'],['weather','uncountable'],['sugar','uncountable'],['salt','uncountable'],['cheese','uncountable'],['butter','uncountable'],['meat','uncountable'],['sandwich','countable'],['cookie','countable'],['computer','countable'],['phone','countable'],['table','countable'],['lesson','countable']];
const pairs=[['big','small'],['happy','sad'],['easy','difficult'],['smart','foolish'],['quiet','noisy'],['strong','weak'],['clean','dirty'],['young','old'],['right','wrong'],['begin','end'],['love','hate'],['open','closed'],['safe','dangerous'],['near','far'],['brave','afraid'],['hot','cold'],['tall','short'],['fast','slow'],['heavy','light'],['full','empty'],['early','late'],['rich','poor'],['kind','cruel'],['bright','dark'],['hard','soft'],['wet','dry'],['inside','outside'],['up','down'],['left','right'],['buy','sell'],['give','take'],['push','pull'],['laugh','cry'],['remember','forget'],['arrive','leave'],['accept','refuse'],['same','different'],['possible','impossible'],['alive','dead'],['wide','narrow']];
const irr=[['be','was/were','been'],['become','became','become'],['begin','began','begun'],['break','broke','broken'],['bring','brought','brought'],['build','built','built'],['buy','bought','bought'],['catch','caught','caught'],['choose','chose','chosen'],['come','came','come'],['do','did','done'],['draw','drew','drawn'],['drink','drank','drunk'],['drive','drove','driven'],['eat','ate','eaten'],['fall','fell','fallen'],['feel','felt','felt'],['find','found','found'],['fly','flew','flown'],['forget','forgot','forgotten'],['get','got','gotten'],['give','gave','given'],['go','went','gone'],['grow','grew','grown'],['have','had','had'],['hear','heard','heard'],['keep','kept','kept'],['know','knew','known'],['leave','left','left'],['lose','lost','lost'],['make','made','made'],['meet','met','met'],['pay','paid','paid'],['read','read','read'],['ride','rode','ridden'],['run','ran','run'],['say','said','said'],['see','saw','seen'],['send','sent','sent'],['sing','sang','sung'],['sit','sat','sat']];
const distract=(ans,pool)=>sh(pool.filter(x=>x!==ans)).slice(0,3);
function nounQ([w,t],i){
 const other=t==='countable'?'uncountable':'countable',mode=Math.floor(i/nouns.length)%5;
 const forms=[
  ()=>({q:'Is "'+w+'" countable or uncountable?',a:t,opts:sh([t,other,'both','neither']),source:'可數／不可數名詞'}),
  ()=>({q:'For "'+w+'", which quantity word is normally correct?',a:t==='countable'?'many':'much',opts:sh(['many','much','both','neither']),source:'可數／不可數名詞'}),
  ()=>({q:'Choose the natural phrase with "'+w+'".',a:t==='countable'?'a few '+w+'s':'a little '+w,opts:sh(t==='countable'?['a few '+w+'s','a little '+w+'s','much '+w+'s','less '+w+'s']:['a little '+w,'a few '+w+'s','many '+w,'several '+w]),source:'可數／不可數名詞'}),
  ()=>({q:'A student is sorting the noun "'+w+'". Which category should it enter?',a:t,opts:sh([t,other,'verb','adjective']),source:'可數／不可數名詞'}),
  ()=>({q:'Which statement about "'+w+'" is correct?',a:t==='countable'?'It can normally be counted as separate items.':'It is normally treated as a mass noun.',opts:sh(['It can normally be counted as separate items.','It is normally treated as a mass noun.','It is a verb.','It is a pronoun.']),source:'可數／不可數名詞'})
 ];return forms[mode]()}
function pairQ([w,a],i){
 const all=pairs.flat(),mode=Math.floor(i/pairs.length)%5;
 const forms=[
  'Which word is the opposite of "'+w+'"?',
  'Complete the contrast: It is "'+w+'", not ___.',
  'Choose the word with the reverse meaning of "'+w+'".',
  'Complete the opposite pair: "'+w+'" ↔ ___.',
  'In this vocabulary pair, "'+w+'" contrasts with ___.'
 ];
 const opts=sh([...new Set([a,...distract(a,all)])]);
 for(const x of all){if(opts.length>=4)break;if(!opts.includes(x))opts.push(x)}
 return {q:forms[mode],a,opts:sh(opts.slice(0,4)),source:'相反詞'}
}
function irrQ([v,p,pp],i){
 const mode=Math.floor(i/irr.length)%5;
 const pastPool=irr.map(x=>x[1]),ppPool=irr.map(x=>x[2]);
 const tasks=[
  {q:'What is the past tense of "'+v+'"?',a:p,pool:pastPool},
  {q:'What is the past participle of "'+v+'"?',a:pp,pool:ppPool},
  {q:'Yesterday, I used the verb "'+v+'". Choose its simple past form.',a:p,pool:pastPool},
  {q:'Complete: I have ___ ('+v+') before.',a:pp,pool:ppPool},
  {q:'For a finished action, which form of "'+v+'" belongs in the past tense?',a:p,pool:pastPool}
 ];
 const x=tasks[mode];
 return {q:x.q,a:x.a,opts:sh([x.a,...distract(x.a,x.pool)]),source:'不規則動詞'}
}
function build(base,fn){const out=[];for(let i=0;i<200;i++){const q=fn(base[i%base.length],i);const round=Math.floor(i/base.length)+1;if(round>1)q.q+=' — Practice context '+round;out.push(q)}return out}
const coreWords=['accept','answer','ask','become','begin','believe','bring','build','buy','call','carry','catch','change','choose','clean','close','come','cook','cut','dance','decide','do','draw','drink','drive','eat','enjoy','fall','feel','find','finish','fly','forget','get','give','go','grow','happen','have','hear','help','hope','keep','know','learn','leave','like','listen','live','look','lose','love','make','meet','move','need','open','pay','play','practice','put','read','remember','ride','run','say','see','sell','send','show','sing','sit','sleep','speak','spend','stand','start','study','swim','take','talk','teach','tell','think','throw','travel','try','turn','understand','use','visit','wait','walk','want','wash','watch','wear','win','work','write'];
const meanings=['接受','回答','詢問','成為','開始（begin）','相信','帶來','建造','購買','打電話','攜帶','抓住','改變','選擇','清潔','關閉','來','烹飪','切','跳舞','決定','做','畫','喝','駕駛','吃','享受','掉落','感覺','找到','完成','飛','忘記','得到','給','去','成長','發生','有','聽見','幫助','希望','保持','知道','學習','離開','喜歡','聆聽','居住','看','失去','愛','製作','遇見','移動','需要','打開','支付','玩','練習','放置','閱讀','記得','騎乘','跑','說','看見','販售','寄送','展示','唱歌','坐','睡覺','說話','花費','站立','開始／啟動（start）','讀書','游泳','拿','談話','教','告訴','思考','丟','旅行','嘗試','轉動','了解','使用','拜訪','等待','走路','想要','清洗','觀看','穿戴','贏','工作','寫'];
const verbBase=coreWords.map((w,i)=>[meanings[i]||w,w]);
while(verbBase.length<100){const extra=[['抵達','arrive'],['借入','borrow'],['打破','break'],['爬','climb'],['收集','collect'],['哭','cry'],['進入','enter'],['跟隨','follow'],['猜','guess'],['邀請','invite'],['加入','join'],['敲','knock'],['傳遞','pass'],['計畫','plan'],['指向','point'],['拉','pull'],['推','push'],['到達／伸手觸及','reach'],['接收','receive'],['歸還','return']];for(const x of extra){if(!verbBase.some(v=>v[1]===x[1]))verbBase.push(x);if(verbBase.length>=100)break}}
function wordQ([zh,en],i,pool,source){
 const mode=(source==='千詞表'?0:Math.floor(i/pool.length)%3),all=pool.map(w=>w[1]);
 const forms=[
  '「'+zh+'」的英文是哪一個？',
  'Choose the English word meaning 「'+zh+'」.',
  'Which English vocabulary word matches the meaning 「'+zh+'」?'
 ];
 return {q:forms[mode],a:en,opts:sh([en,...distract(en,all)]),source}
}
function buildWords(base,source){const out=[];for(let i=0;i<200;i++){const w=base[i%base.length];out.push(wordQ(w,i,base,source))}return out}
const thousandBase=(()=>{const legacy=Array.isArray(window.spellWords)?window.spellWords:(typeof spellWords!=='undefined'?spellWords:[]);const seen=new Set();return legacy.filter(w=>{const k=String(w[1]||'').toLowerCase();if(!k||seen.has(k))return false;seen.add(k);return true}).slice(0,200).map(w=>String(w[1]||'').toLowerCase()==='mend'?['修補／縫補',w[1]]:w)})();
window.eq126VocabBanks={countable:build(nouns,nounQ),antonym:build(pairs,pairQ),irregular:build(irr,irrQ),verbs:buildWords(verbBase,'動詞'),thousand:buildWords(thousandBase,'千詞表')};
})();