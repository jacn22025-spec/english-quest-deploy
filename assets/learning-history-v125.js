(()=>{
'use strict';
const KEY='eq38', MAX=5000;
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}}
function write(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true}catch{return false}}
function record(detail={}){
 const s=read(), rows=Array.isArray(s.learningHistory)?s.learningHistory:[];
 const row={timestamp:detail.timestamp||new Date().toISOString(),correct:Boolean(detail.correct),topic:String(detail.topic||detail.source||detail.category||'其他'),source:String(detail.source||'')};
 rows.push(row); if(rows.length>MAX)rows.splice(0,rows.length-MAX);
 s.learningHistory=rows; write(s); return row;
}
window.EnglishQuestLearningHistory={record,read:()=>[...(read().learningHistory||[])]};
window.addEventListener('english-quest:answer',e=>record(e.detail||{}));
})();