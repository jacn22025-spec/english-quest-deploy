/* Mobile App Shell PoC rebuild — 2026-09-26.
 * Baseline: c7259e5e96e502b2d459de80330afe34b40fbb90
 * Wardrobe is intentionally excluded.
 * Enabled by default; use ?appShellPoc=0 to disable.
 */
(()=>{'use strict';
const params=new URLSearchParams(location.search);if(params.get('appShellPoc')==='0')return;
document.documentElement.classList.add('eq-app-shell-poc');
const MAP_ART_SRC='assets/mobile-shell/adventure-map-no-nav.png';
const NAV_ID='eq-unified-nav-20260920',style=document.createElement('style');style.id='eq-mobile-app-shell-poc-style';
style.textContent=`
html.eq-app-shell-poc,html.eq-app-shell-poc body{width:100%;height:100%;margin:0;overflow:hidden;overscroll-behavior:none;background:#f8e9ee url("assets/ChatGPT 圖像 2026年9月27日 上午01_25_44.png") center top/cover no-repeat}
html.eq-app-shell-poc body{min-height:100dvh!important;max-height:100dvh!important}
html.eq-app-shell-poc [data-companion120="pet"].companion120Root{inset:0!important;width:100vw!important;height:100dvh!important;place-items:stretch!important;overflow:hidden!important}
html.eq-app-shell-poc [data-companion120="pet"] .companion120Frame{width:100vw!important;height:100dvh!important;max-width:100vw!important;max-height:100dvh!important;box-shadow:none!important;overflow:hidden!important}
html.eq-app-shell-poc [data-companion120="pet"] .companion120Art{width:100%!important;height:auto!important;min-height:0!important;object-fit:contain!important;object-position:center top!important;clip-path:none!important}


html.eq-app-shell-poc [data-companion120="pet"] .companion120Tap[data-c120="home"],html.eq-app-shell-poc [data-companion120="pet"] .companion120Tap[data-c120="map"],html.eq-app-shell-poc [data-companion120="pet"] .companion120Tap[data-c120="wardrobe"],html.eq-app-shell-poc [data-companion120="pet"] .companion120Tap[data-c120="pet"],html.eq-app-shell-poc [data-companion120="pet"] .companion120Tap[data-c120="profile"]{display:none!important}
html.eq-app-shell-poc #${NAV_ID}{position:fixed!important;z-index:2147483000!important;left:50%!important;bottom:0!important;transform:translateX(-50%)!important;width:min(calc(100vw - 20px),calc(100dvh * 560 / 884),590px)!important;display:grid!important;grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:clamp(2px,.7vw,5px)!important;background:transparent!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;padding:0 3px!important;box-sizing:border-box!important;pointer-events:none!important}
html.eq-app-shell-poc #${NAV_ID} .eqNavBtn{pointer-events:auto!important;min-width:0!important;width:100%!important;display:block!important}
html.eq-app-shell-poc #${NAV_ID} .eqNavArtwork{display:block!important;width:100%!important;height:auto!important;max-height:92px!important;object-fit:contain!important}
html.eq-app-shell-poc #${NAV_ID} .eqNavSticker{height:clamp(62px,13vw,86px)!important;border-width:2px!important;border-radius:20px!important}
html.eq-app-shell-poc #${NAV_ID} .eqNavIcon{font-size:clamp(22px,5vw,34px)!important}
html.eq-app-shell-poc #${NAV_ID} .eqNavLabel{font-size:clamp(10px,2.6vw,15px)!important}
html.eq-app-shell-poc body.eq-shell-home #${NAV_ID}{display:none!important}
html.eq-app-shell-poc body.eq-shell-home:has(#map.on) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has(#grammarForest119.on) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has(#vocabTown119.on) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has(#gameHub123.on) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has(#grammarNotes123.on) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has(#wrongBook123.on) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has([data-companion120="pet"].is-active) #${NAV_ID},
html.eq-app-shell-poc body.eq-shell-home:has([data-companion120="profile"].is-active) #${NAV_ID}{display:grid!important}
html.eq-app-shell-poc #grammarForest119 .quest119__nav,
html.eq-app-shell-poc .quest119MapStage .quest119__nav{display:none!important}
html.eq-app-shell-poc #map.quest119Map>.eq-map-backdrop{display:block!important;position:fixed!important;inset:0 0 auto!important;width:100%!important;height:var(--eq-map-art-top,0px)!important;object-fit:cover!important;object-position:center top!important;filter:none!important;opacity:0!important;pointer-events:none!important}
html.eq-app-shell-poc #map.quest119Map>.eq-map-nav-bridge{display:block!important;position:fixed!important;left:calc((100vw - var(--eq-map-art-width,100vw))/2)!important;top:calc(var(--eq-map-art-top,0px) + var(--eq-map-art-height,100dvh) - 1px)!important;bottom:0!important;width:var(--eq-map-art-width,100vw)!important;filter:none!important;pointer-events:none!important}
html.eq-app-shell-poc #map.quest119Map .quest119MapStage{top:var(--eq-map-art-top,0px)!important;left:50%!important;width:var(--eq-map-art-width,100%)!important;height:var(--eq-map-art-height,100%)!important;transform:translateX(-50%)!important}
html.eq-app-shell-poc #map.quest119Map .quest119MapStage>.quest119__art{object-fit:fill!important}
html.eq-app-shell-poc #map.quest119Map .zoneGrammar{top:31.32%!important;height:16.78%!important}
html.eq-app-shell-poc #map.quest119Map .zoneVocab{top:33.56%!important;height:16.78%!important}
html.eq-app-shell-poc #map.quest119Map .zoneMoon{top:53.69%!important;height:16.78%!important}
html.eq-app-shell-poc #map.quest119Map .zoneCastle{top:58.17%!important;height:16.78%!important}
html.eq-app-shell-poc #map.quest119Map .quest119__back{top:2.46%!important}
html.eq-app-shell-poc #grammarForest119 .quest119__art,
html.eq-app-shell-poc .quest119MapStage>.quest119__art{clip-path:none!important}
html.eq-app-shell-poc #vocabTown119 .quest119__nav,
html.eq-app-shell-poc #vocabTown119 [class*="quest119__nav"]{display:none!important}
html.eq-app-shell-poc #vocabTown119 .eq-vocab-backdrop{position:absolute!important;inset:0 0 auto!important;width:100%!important;height:var(--eq-vocab-art-top,0px)!important;object-fit:cover!important;object-position:center top!important;filter:none!important;opacity:0!important;pointer-events:none!important}
html.eq-app-shell-poc #vocabTown119 .eq-vocab-nav-bridge{position:absolute!important;left:var(--eq-vocab-art-left,0px)!important;top:calc(var(--eq-vocab-art-top,0px) + var(--eq-vocab-art-height,100dvh) - 1px)!important;bottom:0!important;width:var(--eq-vocab-art-width,100%)!important;filter:none!important;pointer-events:none!important}
html.eq-app-shell-poc #vocabTown119 .quest119__art,
html.eq-app-shell-poc #vocabTown119 img.quest119__art{
  display:block!important;
  position:absolute!important;
  inset:0!important;
  width:100vw!important;
  height:100dvh!important;
  max-width:none!important;
  max-height:none!important;
  margin:0!important;
  object-fit:fill!important;
  object-position:center top!important;
  clip-path:none!important;
  transform:none!important;
  z-index:1!important
}
html.eq-app-shell-poc #vocabTown119 .quest119__hotspot{height:calc(var(--eq-vocab-art-height,100dvh) * .23)!important}
html.eq-app-shell-poc #vocabTown119 .townVerb,
html.eq-app-shell-poc #vocabTown119 .townNoun,
html.eq-app-shell-poc #vocabTown119 .townOpp{top:calc(var(--eq-vocab-art-top,0px) + var(--eq-vocab-art-height,100dvh) * .53)!important;width:calc(var(--eq-vocab-art-width,100%) * .30)!important}
html.eq-app-shell-poc #vocabTown119 .townWords,
html.eq-app-shell-poc #vocabTown119 .townIrregular{top:calc(var(--eq-vocab-art-top,0px) + var(--eq-vocab-art-height,100dvh) * .76)!important;height:calc(var(--eq-vocab-art-height,100dvh) * .22)!important;width:calc(var(--eq-vocab-art-width,100%) * .34)!important}
html.eq-app-shell-poc #vocabTown119 .townVerb{left:calc(var(--eq-vocab-art-left,0px) + var(--eq-vocab-art-width,100%) * .04)!important}
html.eq-app-shell-poc #vocabTown119 .townNoun{left:calc(var(--eq-vocab-art-left,0px) + var(--eq-vocab-art-width,100%) * .35)!important}
html.eq-app-shell-poc #vocabTown119 .townOpp{left:calc(var(--eq-vocab-art-left,0px) + var(--eq-vocab-art-width,100%) * .67)!important;right:auto!important}
html.eq-app-shell-poc #vocabTown119 .townWords{left:calc(var(--eq-vocab-art-left,0px) + var(--eq-vocab-art-width,100%) * .16)!important}
html.eq-app-shell-poc #vocabTown119 .townIrregular{left:calc(var(--eq-vocab-art-left,0px) + var(--eq-vocab-art-width,100%) * .51)!important;right:auto!important}
html.eq-app-shell-poc #vocabTown119 .quest119__back{top:calc(var(--eq-vocab-art-top,0px) + var(--eq-vocab-art-height,100dvh) * .02)!important;left:calc(var(--eq-vocab-art-left,0px) + var(--eq-vocab-art-width,100%) * .035)!important}
html.eq-app-shell-poc #grammarForest119 .eq-grammar-backdrop{position:absolute!important;inset:0 0 auto!important;width:100%!important;height:var(--eq-grammar-art-top,0px)!important;object-fit:cover!important;object-position:center top!important;filter:none!important;opacity:0!important;pointer-events:none!important}
html.eq-app-shell-poc #grammarForest119 .eq-grammar-nav-bridge{position:absolute!important;left:var(--eq-grammar-art-left,0px)!important;top:calc(var(--eq-grammar-art-top,0px) + var(--eq-grammar-art-height,100dvh) - 1px)!important;bottom:0!important;width:var(--eq-grammar-art-width,100%)!important;filter:none!important;pointer-events:none!important}
html.eq-app-shell-poc #grammarForest119 img.quest119__art{position:absolute!important;inset:auto!important;left:var(--eq-grammar-art-left,0px)!important;top:var(--eq-grammar-art-top,0px)!important;width:var(--eq-grammar-art-width,100%)!important;height:var(--eq-grammar-art-height,100%)!important;max-width:none!important;max-height:none!important;object-fit:fill!important;object-position:center top!important;transform:none!important;z-index:1!important}
html.eq-app-shell-poc #grammarForest119 .quest119__hotspot{left:calc(var(--eq-grammar-art-left,0px) + var(--eq-grammar-art-width,100%) * var(--eq-x))!important;right:auto!important;top:calc(var(--eq-grammar-art-top,0px) + var(--eq-grammar-art-height,100dvh) * var(--eq-y))!important;width:calc(var(--eq-grammar-art-width,100%) * var(--eq-w))!important;height:calc(var(--eq-grammar-art-height,100dvh) * var(--eq-h))!important}
html.eq-app-shell-poc #grammarForest119 .stage1{--eq-x:0.439;--eq-y:0.208;--eq-w:0.3;--eq-h:0.081}
html.eq-app-shell-poc #grammarForest119 .stage2{--eq-x:0.699;--eq-y:0.309;--eq-w:0.274;--eq-h:0.08}
html.eq-app-shell-poc #grammarForest119 .stage3{--eq-x:0.245;--eq-y:0.326;--eq-w:0.307;--eq-h:0.077}
html.eq-app-shell-poc #grammarForest119 .stage4{--eq-x:0.62;--eq-y:0.418;--eq-w:0.304;--eq-h:0.075}
html.eq-app-shell-poc #grammarForest119 .stage5{--eq-x:0.231;--eq-y:0.451;--eq-w:0.282;--eq-h:0.073}
html.eq-app-shell-poc #grammarForest119 .stage6{--eq-x:0.63;--eq-y:0.526;--eq-w:0.288;--eq-h:0.075}
html.eq-app-shell-poc #grammarForest119 .stage7{--eq-x:0.204;--eq-y:0.563;--eq-w:0.309;--eq-h:0.076}
html.eq-app-shell-poc #grammarForest119 .stage8{--eq-x:0.607;--eq-y:0.656;--eq-w:0.307;--eq-h:0.077}
html.eq-app-shell-poc #grammarForest119 .stage9{--eq-x:0.137;--eq-y:0.693;--eq-w:0.319;--eq-h:0.081}
html.eq-app-shell-poc #grammarForest119 .stage10{--eq-x:0.547;--eq-y:0.774;--eq-w:0.349;--eq-h:0.083}
html.eq-app-shell-poc #grammarForest119 .grammar121Level{display:none!important}
html.eq-app-shell-poc #grammarForest119 .quest119__back{top:calc(var(--eq-grammar-art-top,0px) + var(--eq-grammar-art-height,100dvh) * .02)!important;left:calc(var(--eq-grammar-art-left,0px) + var(--eq-grammar-art-width,100%) * .035)!important}
html.eq-app-shell-poc .eq-shell-clean-hub .hub123Frame{left:var(--eq-hub-left,0px)!important;top:var(--eq-hub-top,0px)!important;width:var(--eq-hub-width,100%)!important;height:var(--eq-hub-height,100%)!important;transform:none!important;max-width:none!important}
html.eq-app-shell-poc .eq-shell-clean-hub .hub123Art{object-fit:fill!important;z-index:1!important}
html.eq-app-shell-poc .eq-shell-clean-hub .eq-hub-backdrop{position:absolute!important;left:var(--eq-hub-left,0px)!important;top:0!important;width:var(--eq-hub-width,100%)!important;height:var(--eq-hub-top,0px)!important;object-fit:cover!important;object-position:center top!important;filter:none!important;opacity:0!important;pointer-events:none!important}
html.eq-app-shell-poc .eq-shell-clean-hub .eq-hub-nav-bridge{position:absolute!important;left:var(--eq-hub-left,0px)!important;top:calc(var(--eq-hub-top,0px) + var(--eq-hub-height,100dvh) - 1px)!important;bottom:0!important;width:var(--eq-hub-width,100%)!important;filter:none!important;pointer-events:none!important}
html.eq-app-shell-poc .eq-shell-clean-hub [data-hub123-nav]{display:none!important}
html.eq-app-shell-poc #learningReport124 .hub123Frame{left:50%!important;top:0!important;transform:translateX(-50%)!important;width:min(100vw,620px)!important;height:var(--eq-shell-nav-top,calc(100dvh - 96px))!important;max-height:none!important}
html.eq-app-shell-poc #eqLearningHistoryPoc{position:fixed!important;inset:0!important;z-index:12400!important;background:#fff8f4!important;overflow:hidden!important}
html.eq-app-shell-poc #eqLearningHistoryPoc:not(.on){display:none!important}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-frame{width:min(100vw,620px);height:var(--eq-shell-nav-top,calc(100dvh - 96px));margin:auto;padding:18px 20px 24px;box-sizing:border-box;overflow:auto;overscroll-behavior:contain;font-family:system-ui,"Noto Sans TC",sans-serif;color:#684c5c}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-head{display:flex;align-items:center;gap:12px;margin-bottom:12px}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-head button{width:40px;height:40px;border:0;border-radius:50%;background:white;font-size:25px;color:#9a5475}
html.eq-app-shell-poc #eqLearningHistoryPoc h2{margin:0;font-size:20px}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-summary{margin:0 0 14px;font-size:13px}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-row{display:grid;grid-template-columns:1fr auto;gap:6px;margin:8px 0;padding:12px 14px;border-radius:16px;background:white;box-shadow:0 4px 12px #815f7012;font-size:13px}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-row small{grid-column:1/-1;color:#987f8b}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-ok{color:#5a9a62;font-weight:800}
html.eq-app-shell-poc #eqLearningHistoryPoc .eq-history-wrong{color:#c15b83;font-weight:800}
html.eq-app-shell-poc #learningReport124 .eq-history-open{margin-left:auto;padding:8px 10px;border:1px solid #e8c9d5;border-radius:12px;background:white;color:#8c526b;font-weight:800;font-size:12px;white-space:nowrap}
html.eq-app-shell-poc body>nav#${NAV_ID}{background:transparent!important;border:0!important;box-shadow:none!important}
html.eq-app-shell-poc #home,html.eq-app-shell-poc #map,html.eq-app-shell-poc #pet,html.eq-app-shell-poc #profile,html.eq-app-shell-poc #grammarForest119,html.eq-app-shell-poc #vocabTown119,html.eq-app-shell-poc #quiz,html.eq-app-shell-poc #result{max-height:100dvh!important;overflow:hidden!important}
html.eq-app-shell-poc body.eq-shell-gamebox #games{position:fixed!important;inset:0!important;height:100dvh!important;max-height:100dvh!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch;padding-top:max(0px,env(safe-area-inset-top))!important;padding-bottom:calc(104px + env(safe-area-inset-bottom))!important;box-sizing:border-box!important}
html.eq-app-shell-poc body.eq-shell-gamebox .app>header{display:none!important}
html.eq-app-shell-poc body.eq-shell-gamebox #games>#gamebox{margin-top:0!important;min-height:0!important;max-height:none!important}
html.eq-app-shell-poc body.eq-shell-gamebox #games>*:not(#gamebox){display:none!important}
html.eq-app-shell-poc body.eq-shell-gamebox #gamebox .v81ExamCard{min-height:calc(var(--eq-shell-nav-top,100dvh) - 8px)!important;margin:0!important;box-sizing:border-box!important}
html.eq-app-shell-poc #profile,html.eq-app-shell-poc #pet,html.eq-app-shell-poc #quiz,html.eq-app-shell-poc #wrongBank,html.eq-app-shell-poc #learningReport,html.eq-app-shell-poc .v81ExamCard,html.eq-app-shell-poc .v81Result{overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch;padding-bottom:calc(104px + env(safe-area-inset-bottom))!important;scroll-padding-bottom:calc(104px + env(safe-area-inset-bottom))!important;box-sizing:border-box!important}
html.eq-app-shell-poc [data-companion120="profile"] .companion120Frame{position:relative!important;height:var(--eq-shell-nav-top,calc(100dvh - 92px))!important;overflow:hidden!important}
html.eq-app-shell-poc [data-companion120="profile"] .companion120Art{width:100%!important;height:auto!important;object-fit:contain!important;object-position:center top!important}
html.eq-app-shell-poc [data-companion120="profile"] .eq-profile-owned-art{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;object-position:center top!important;z-index:2!important;pointer-events:none!important}
html.eq-app-shell-poc [data-companion120="profile"] .companion120Art[data-eq-profile-covered="1"]{visibility:hidden!important}
html.eq-app-shell-poc [data-companion120="profile"] .companion120Tap[data-c120="home"],
html.eq-app-shell-poc [data-companion120="profile"] .companion120Tap[data-c120="map"],
html.eq-app-shell-poc [data-companion120="profile"] .companion120Tap[data-c120="wardrobe"],
html.eq-app-shell-poc [data-companion120="profile"] .companion120Tap[data-c120="pet"],
html.eq-app-shell-poc [data-companion120="profile"] .companion120Tap[data-c120="room"],
html.eq-app-shell-poc [data-companion120="profile"] .companion120Tap[data-c120="profile"]{display:none!important}
html.eq-app-shell-poc [data-companion120="home"]{isolation:isolate}
html.eq-app-shell-poc [data-companion120="home"] [data-c120="gameHub123"]{left:26%!important;top:69.5%!important;width:25%!important;height:21.5%!important}
html.eq-app-shell-poc [data-companion120="home"] .eq-shell-art-backdrop{position:fixed!important;inset:-18px!important;width:calc(100% + 36px)!important;height:calc(100% + 36px)!important;object-fit:cover!important;filter:blur(18px) saturate(.82)!important;opacity:.55!important;transform:scale(1.06)!important;pointer-events:none!important;z-index:-1!important}

html.eq-app-shell-poc .eq-map-backdrop,
html.eq-app-shell-poc .eq-vocab-backdrop,
html.eq-app-shell-poc .eq-grammar-backdrop,
html.eq-app-shell-poc .eq-hub-backdrop,
html.eq-app-shell-poc .eq-map-nav-bridge,
html.eq-app-shell-poc .eq-vocab-nav-bridge,
html.eq-app-shell-poc .eq-grammar-nav-bridge,
html.eq-app-shell-poc .eq-hub-nav-bridge{display:none!important}
html.eq-app-shell-poc #map.quest119Map .quest119MapStage{
  left:0!important;right:0!important;top:var(--eq-map-art-top,0px)!important;bottom:auto!important;
  width:var(--eq-map-art-width,100vw)!important;height:var(--eq-map-art-height,100dvh)!important;transform:none!important
}
html.eq-app-shell-poc #${NAV_ID}{
  bottom:max(4px,env(safe-area-inset-bottom))!important;
  width:min(calc(100vw - 8px),620px)!important;
  z-index:2147483000!important;
  background:transparent!important;
  border:0!important;
  box-shadow:none!important;
  padding:0 3px!important
}
html.eq-app-shell-poc #map.quest119Map{padding-bottom:0!important;background:transparent!important}
html.eq-app-shell-poc #map.quest119Map .quest119MapStage{padding-bottom:0!important;margin-bottom:0!important}

html.eq-app-shell-poc body:not(.eq-shell-home){padding-bottom:0!important}
/* Native no-nav artwork: preserve source aspect ratio; no bridge/backdrop/stretch. */
html.eq-app-shell-poc [data-companion120="pet"] .companion120Art,
html.eq-app-shell-poc [data-companion120="play"] .companion120Art{width:100%!important;height:auto!important;object-fit:contain!important;object-position:center top!important}
html.eq-app-shell-poc [data-companion120="play"].companion120Root{inset:0!important;width:100vw!important;height:100dvh!important;place-items:stretch!important;overflow:hidden!important}
html.eq-app-shell-poc [data-companion120="play"] .companion120Frame{width:100vw!important;height:100dvh!important;max-width:100vw!important;max-height:100dvh!important;box-shadow:none!important;overflow:hidden!important}
html.eq-app-shell-poc #learningReport124 .hub123Frame.lr124{position:relative!important}
html.eq-app-shell-poc #learningReport124 .eq-learning-radar-art{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center top;z-index:0;pointer-events:none}
html.eq-app-shell-poc #learningReport124 .hub123Frame.lr124>*:not(.eq-learning-radar-art){position:relative;z-index:1}
html.eq-app-shell-poc #vocabTown119 img.quest119__art{width:var(--eq-vocab-art-width,100%)!important;height:var(--eq-vocab-art-height,auto)!important;object-fit:contain!important;object-position:center top!important}
html.eq-app-shell-poc #vocabTown119{position:fixed!important;inset:0!important;width:100vw!important;height:100dvh!important;overflow:hidden!important;background:#f8e9ee!important}
html.eq-app-shell-poc #vocabTown119.on img.quest119__art{position:absolute!important;left:var(--eq-vocab-art-left,0px)!important;top:var(--eq-vocab-art-top,0px)!important;inset:auto!important;width:var(--eq-vocab-art-width,100vw)!important;height:var(--eq-vocab-art-height,100dvh)!important;object-fit:cover!important;object-position:center top!important}
html.eq-app-shell-poc body:has(#vocabTown119.on) #${NAV_ID}{display:grid!important;bottom:max(4px,env(safe-area-inset-bottom))!important;background:transparent!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
html.eq-app-shell-poc #eq-vocab-mobile-view{display:none;position:fixed;inset:0;z-index:2147482000;overflow:hidden;background:#f8e9ee}
html.eq-app-shell-poc #eq-vocab-mobile-view.on,html.eq-app-shell-poc body:has(#vocabTown119:not([hidden])) #eq-vocab-mobile-view{display:block}
html.eq-app-shell-poc #eq-vocab-mobile-view .eq-vocab-mobile-art{position:absolute;inset:0;width:100%;height:100%;object-fit:fill;object-position:center top}
html.eq-app-shell-poc #eq-vocab-mobile-view .eq-vocab-mobile-back{position:absolute;z-index:2;left:2%;top:1%;width:12%;height:8%;border:0;background:transparent}
html.eq-app-shell-poc #eq-vocab-mobile-view .eq-vocab-mobile-hotspot{position:absolute;z-index:2;border:0;background:transparent;padding:0}
html.eq-app-shell-poc #eq-vocab-mobile-view .townVerb{left:4%;top:51%;width:30%;height:20%}
html.eq-app-shell-poc #eq-vocab-mobile-view .townNoun{left:35%;top:51%;width:30%;height:20%}
html.eq-app-shell-poc #eq-vocab-mobile-view .townOpp{left:67%;top:51%;width:30%;height:20%}
html.eq-app-shell-poc #eq-vocab-mobile-view .townWords{left:16%;top:72%;width:34%;height:20%}
html.eq-app-shell-poc #eq-vocab-mobile-view .townIrregular{left:51%;top:72%;width:34%;height:20%}
html.eq-app-shell-poc body:has(#eq-vocab-mobile-view.on) #vocabTown119,html.eq-app-shell-poc body:has(#vocabTown119:not([hidden])) #vocabTown119{visibility:hidden!important;pointer-events:none!important}
html.eq-app-shell-poc body:has(#eq-vocab-mobile-view.on) #${NAV_ID},html.eq-app-shell-poc body.eq-shell-home:has(#vocabTown119:not([hidden])) #${NAV_ID}{display:grid!important;z-index:2147483000!important;background:transparent!important;border:0!important;box-shadow:none!important}
html.eq-app-shell-poc #vocabTown119[data-eq-visual-owner="vocab"]{z-index:12350!important;background:transparent!important}
html.eq-app-shell-poc #vocabTown119[data-eq-visual-owner="vocab"]>.quest119__art,
html.eq-app-shell-poc #vocabTown119[data-eq-visual-owner="vocab"]>img.quest119__art{z-index:1!important}
html.eq-app-shell-poc body:has(#vocabTown119[data-eq-visual-owner="vocab"].on) #${NAV_ID}[data-eq-visual-owner="vocab"]{z-index:2147483000!important;left:0!important;right:0!important;transform:none!important;width:100vw!important;max-width:none!important;padding:0 8px max(2px,env(safe-area-inset-bottom))!important;gap:0!important}
html.eq-app-shell-poc body:has(#vocabTown119[data-eq-visual-owner="vocab"].on) #${NAV_ID}[data-eq-visual-owner="vocab"] .eqNavArtwork{max-height:92px!important;width:100%!important}
html.eq-app-shell-poc #gameHub123 .hub123Art{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center top!important}
html.eq-app-shell-poc #gameHub123 .hub123Frame{left:50%!important;top:0!important;width:min(100vw,590px)!important;height:100dvh!important;max-width:none!important;transform:translateX(-50%)!important}
html.eq-app-shell-poc #gameHub123 .hub123Art{object-fit:fill!important}
/* Grammar notes artwork already contains the present-simple note; do not cover it twice. */
html.eq-app-shell-poc #grammarNotes123:has([data-hub123-note="0"].selected) .hub123NotesPanel{display:none!important}
html.eq-app-shell-poc #grammarNotes123:has([data-hub123-note="0"].selected) [data-hub123-note="0"].selected{outline:0!important;background:transparent!important}
html.eq-app-shell-poc #grammarNotes123:has([data-hub123-note="0"].selected) [data-hub123-note="0"].selected{border:0!important;box-shadow:none!important}
html.eq-app-shell-poc #grammarNotes123:has([data-hub123-note="0"].selected) [data-hub123-note="0"].selected::after{display:none!important}
html.eq-app-shell-poc #grammarNotes123 .hub123NotesPanel{left:36%!important;top:16%!important;width:49%!important;height:48%!important;box-sizing:border-box!important;background:#fffaf8!important}
html.eq-app-shell-poc #grammarNotes123 .hub123NoteTab.selected{outline:0!important;border:0!important;box-shadow:none!important;background:transparent!important}
html.eq-app-shell-poc #grammarNotes123 .hub123NoteTab.selected::after{display:none!important}
html.eq-app-shell-poc #grammarNotes123:has(.hub123NoteTab.selected:not([data-hub123-note="0"])) [data-hub123-note="0"]{background:#e9edff!important;color:#34457b!important;border:2px solid #c7cbe3!important;border-radius:17px!important;font:700 clamp(12px,2.4vw,18px)/1.2 system-ui!important}
html.eq-app-shell-poc #grammarNotes123:has(.hub123NoteTab.selected:not([data-hub123-note="0"])) .hub123NoteTab.selected{background:#ffd2e4!important;color:#8b376a!important;border:2px solid #ed92b8!important;border-radius:17px!important;font:700 clamp(12px,2.4vw,18px)/1.2 system-ui!important}
html.eq-app-shell-poc #wrongBook123 .hub123WrongTabs button.on{box-shadow:none!important;outline:0!important;border:2px solid #e99ab9!important;background:#fbe6ef!important}
html.eq-app-shell-poc #grammarNotes123 .hub123Frame,html.eq-app-shell-poc #wrongBook123 .hub123Frame{left:50%!important;top:0!important;width:min(100vw,590px)!important;height:100dvh!important;transform:translateX(-50%)!important;max-width:none!important}
html.eq-app-shell-poc #grammarNotes123 .hub123Art,html.eq-app-shell-poc #wrongBook123 .hub123Art{width:100%!important;height:100%!important;object-fit:fill!important}
html.eq-app-shell-poc #grammarNotes123 [data-hub123-nav],html.eq-app-shell-poc #wrongBook123 [data-hub123-nav]{display:none!important}
html.eq-app-shell-poc #grammarNotes123 .hub123Back,html.eq-app-shell-poc #wrongBook123 .hub123Back{position:absolute;z-index:6;left:2.5%;top:1.5%;width:clamp(36px,10vw,50px);height:clamp(36px,10vw,50px);display:grid;place-items:center;border:2px solid #eda2be;border-radius:50%;background:#fffdf9ee;color:#8b3b68;font:700 34px/1 system-ui;box-shadow:0 3px 9px #5b314533}
html.eq-app-shell-poc #wrongBook123 .hub123WrongPanel{border:0!important;box-shadow:none!important;background:#fffaf7!important}

/* Grammar forest: show the existing map-back control without changing its route. */
html.eq-app-shell-poc #grammarForest119 .quest119__back{display:grid!important;place-items:center!important;width:clamp(42px,12vw,58px)!important;height:clamp(42px,12vw,58px)!important;aspect-ratio:auto!important;border:2px solid #eda2be!important;border-radius:50%!important;background:rgba(255,255,255,.96)!important;box-shadow:0 3px 9px rgba(91,49,69,.2)!important;font-size:0!important}
html.eq-app-shell-poc #grammarForest119 .quest119__back::before{content:'‹';color:#8b3b68;font:700 38px/1 system-ui,sans-serif;transform:translateY(-2px)}
/* Keep the original pet/profile artwork and place the shared six-key nav over its bottom edge. */
html.eq-app-shell-poc [data-companion120="pet"].companion120Root{place-items:center!important}
html.eq-app-shell-poc [data-companion120="pet"] .companion120Frame{width:min(100vw,590px)!important;max-width:590px!important}
html.eq-app-shell-poc [data-companion120="pet"] .companion120Art{width:100%!important;height:100%!important;object-fit:fill!important}
html.eq-app-shell-poc [data-companion120="profile"] .companion120Frame{height:100dvh!important}
html.eq-app-shell-poc [data-companion120="profile"] .eq-profile-owned-art{width:100%!important;height:100%!important;object-fit:fill!important}
`;document.head.appendChild(style);
function visible(el){if(!el)return false;const c=getComputedStyle(el),r=el.getBoundingClientRect();return c.display!=='none'&&c.visibility!=='hidden'&&r.width>0&&r.height>0}
function gamebox(){const g=document.getElementById('games'),b=document.getElementById('gamebox');const active=!!(g&&b&&visible(g)&&(b.querySelector('.shopTabs')||b.querySelector('.v81ExamCard')||b.querySelector('.v81Result')));document.body.classList.toggle('eq-shell-gamebox',active)}
function backdrop(){document.querySelectorAll('.eq-shell-art-backdrop').forEach(el=>el.remove())}
const homeNavObserved=new WeakSet();
function watchHomeNav(){
  for(const root of document.querySelectorAll('[data-companion120="home"],[data-companion120="pet"],[data-companion120="profile"]')){
    if(homeNavObserved.has(root))continue;
    homeNavObserved.add(root);new MutationObserver(homeNav).observe(root,{attributes:true,attributeFilter:['class','hidden']});
  }
}
function homeNav(){
  const home=document.querySelector('[data-companion120="home"]');
  const homeShown=!!home?.classList.contains('is-active')&&!home.hidden&&visible(home);
  const nonHome=[
    document.getElementById('map'),document.getElementById('grammarForest119'),document.getElementById('vocabTown119'),
    document.getElementById('profile'),document.getElementById('pet'),document.getElementById('quiz'),
    document.querySelector('[data-companion120="pet"]')
  ].some(el=>visible(el)&&!el.closest?.('[data-companion120="home"]'));
  document.body.classList.toggle('eq-shell-home',homeShown&&!nonHome);
  const nav=document.getElementById(NAV_ID);
  if(homeShown&&nav){nav.style.setProperty('display','none','important');nav.dataset.eqHomeHidden='1'}
  else if(nav&&document.querySelector('[data-companion120="pet"].is-active,[data-companion120="profile"].is-active')){nav.style.setProperty('display','grid','important');delete nav.dataset.eqHomeHidden}
  else if(nav?.dataset.eqHomeHidden==='1'){nav.style.removeProperty('display');delete nav.dataset.eqHomeHidden}
}
function routeCompanionNav(e){
  const button=e.target.closest?.('#'+NAV_ID+' [data-eq-nav-key]'),key=button?.dataset.eqNavKey;
  if(key!=='home'&&key!=='pet'&&key!=='profile')return;
  e.preventDefault();e.stopImmediatePropagation();
  const root=document.querySelector('[data-companion120="'+key+'"]');
  if(!root?.classList.contains('is-active')||root.hidden||!visible(root)){
    if(key==='home'&&typeof window.go==='function')window.go('home');
    else if(key==='pet'&&typeof window.go==='function')window.go('pet');
    else if(key==='profile')document.querySelector('[data-companion120="home"] [data-c120="profile"]')?.click();
  }
  homeNav();scheduleShellSync();
}
function routeShellNav(e){
  const button=e.target.closest?.('#'+NAV_ID+' [data-eq-nav-key]');if(!button)return;
  const key=button.dataset.eqNavKey;if(!['map','pet','profile','wardrobe'].includes(key))return;
  if(key==='map'&&typeof window.go==='function')window.go('map');
  else if(key==='pet'&&typeof window.go==='function')window.go('pet');
  else if(key==='profile')document.querySelector('[data-companion120="home"] [data-c120="profile"]')?.click();
  else if(key==='wardrobe'&&typeof window.go==='function')window.go('wardrobe');
}
function routeHomeGameHub(e){
  const button=e.target.closest?.('[data-companion120="home"] [data-c120="gameHub123"]');
  if(!button)return;
  e.preventDefault();e.stopImmediatePropagation();
  if(typeof window.go==='function')window.go('gameHub123');
  requestAnimationFrame(()=>{homeNav();layoutHubArt()});
}
function routeMapLearning(e){
  const grammar=e.target.closest?.('#map.quest119Map .zoneGrammar');
  const vocab=e.target.closest?.('#map.quest119Map .zoneVocab');
  if(!grammar&&!vocab)return;
  if(vocab){
    // The legacy hotspot opens this custom screen; sync its mobile art after that handler runs.
    setTimeout(scheduleShellSync,0);
    return;
  }
  setTimeout(()=>{if(typeof window.go==='function')window.go('grammarForest119');scheduleShellSync()},0);
}
let answerEvents=0;
function keepHistoryInLiveState(){
  answerEvents++;
  queueMicrotask(()=>{
    if(typeof S!=='undefined'&&window.EnglishQuestLearningHistory)S.learningHistory=window.EnglishQuestLearningHistory.read();
  });
}
function captureLegacyAnswer(e){
  const selected=e.target.closest?.('#gamebox [data-v81ans],#quiz [data-answer]');if(!selected||selected.disabled)return;
  const grammar=selected.hasAttribute('data-answer'),card=grammar?document.getElementById('quiz'):selected.closest('.v81ExamCard');
  if(grammar&&card?.querySelector('[data-answer].good'))return;
  const question=grammar?document.getElementById('qtext')?.textContent||'':card?.querySelector('h2')?.textContent||'';
  const type=grammar||card?.querySelector('.v81ExamTop b')?.textContent?.includes('文法')?'grammar':'vocab';
  const before=answerEvents,choice=grammar?selected.dataset.answer:selected.dataset.v81ans;
  setTimeout(()=>{
    if(answerEvents!==before||!window.EnglishQuestLearningHistory)return;
    const correct=grammar?card?.querySelector('[data-answer].good')?.dataset.answer:card?.querySelector('[data-v81ans].good')?.dataset.v81ans;
    if(!correct||(!grammar&&!selected.disabled))return;
    const topic=grammar?document.getElementById('qtitle')?.textContent?.replace(/\s+\d+\/10.*/, '')||'文法森林':type==='grammar'?'文法大會考':'字彙小鎮';
    window.dispatchEvent(new CustomEvent('english-quest:answer',{detail:{correct:choice===correct,topic,source:type,question}}));
  },0);
}
function ensureVocabMobileView(){
  let view=document.getElementById('eq-vocab-mobile-view');
  if(view)return view;
  view=document.createElement('div');view.id='eq-vocab-mobile-view';view.setAttribute('aria-hidden','true');
  const art=document.createElement('img');art.className='eq-vocab-mobile-art';art.src='assets/mobile-shell/vocabulary-town-no-nav.png';art.alt='';
  view.appendChild(art);
  const back=document.createElement('button');back.type='button';back.className='eq-vocab-mobile-back';back.setAttribute('aria-label','返回冒險地圖');view.appendChild(back);
  for(const cls of ['townVerb','townNoun','townOpp','townWords','townIrregular']){
    const b=document.createElement('button');b.type='button';b.className='eq-vocab-mobile-hotspot '+cls;b.dataset.vocabProxy=cls;b.setAttribute('aria-label',cls);view.appendChild(b);
  }
  document.body.appendChild(view);return view;
}
function syncVocabMobileView(){
  const legacy=document.getElementById('vocabTown119'),view=ensureVocabMobileView(),active=!!legacy&&!legacy.hidden;
  legacy?.classList.toggle('on',active);
  view.classList.toggle('on',active);view.setAttribute('aria-hidden',active?'false':'true');
  if(active){const nav=document.getElementById(NAV_ID);if(nav)nav.style.setProperty('display','grid','important')}
}
function routeVocabMobileView(e){
  const back=e.target.closest?.('#eq-vocab-mobile-view .eq-vocab-mobile-back');
  if(back){e.preventDefault();e.stopImmediatePropagation();document.querySelector('#vocabTown119 .quest119__back')?.click();scheduleShellSync();return}
  const b=e.target.closest?.('#eq-vocab-mobile-view [data-vocab-proxy]');if(!b)return;
  e.preventDefault();e.stopImmediatePropagation();
  const legacy=document.querySelector('#vocabTown119 .'+b.dataset.vocabProxy);
  legacy?.click();
}
function ownVocabPage(){
  const box=document.getElementById('vocabTown119'),nav=document.getElementById(NAV_ID);
  if(!box||box.hidden)return;
  box.dataset.eqVisualOwner='vocab';
  cleanVocabArt();
  if(nav){
    nav.dataset.eqVisualOwner='vocab';
    nav.style.setProperty('display','grid','important');
    nav.style.setProperty('background','transparent','important');
    nav.style.setProperty('border','0','important');
    nav.style.setProperty('box-shadow','none','important');
    nav.style.setProperty('backdrop-filter','none','important');
    nav.style.setProperty('-webkit-backdrop-filter','none','important');
  }
  requestAnimationFrame(layoutVocabArt);
}
function cleanVocabArt(){
  const img=document.querySelector('#vocabTown119 img.quest119__art,#vocabTown119 .quest119__art');
  if(!img||img.tagName!=='IMG')return;
  const src='assets/mobile-shell/vocabulary-town-no-nav.png';
  const changed=decodeURI(img.getAttribute('src')||'')!==src;
  if(changed)img.src=src;
  img.dataset.eqCleanVocab='1';img.dataset.eqNoNavArt='1';
  if(!img.complete||!img.naturalWidth)img.addEventListener('load',()=>requestAnimationFrame(layoutVocabArt),{once:true});
  else requestAnimationFrame(layoutVocabArt);
}
function boxBackdrop(img,backdrop){img.parentElement.insertBefore(backdrop,img)}
function artNavBridge(cv,parent,className){
  const crisp=true;
  const row=document.createElement('canvas');row.width=cv.width;row.height=1;
  const ctx=row.getContext('2d');if(!ctx)return;ctx.drawImage(cv,0,cv.height-1,cv.width,1,0,0,cv.width,1);
  const bridge=document.createElement('div');bridge.className=className;bridge.setAttribute('aria-hidden','true');
  bridge.style.backgroundImage='url("'+row.toDataURL('image/png')+'")';
  bridge.style.backgroundRepeat='repeat-y';
  bridge.style.backgroundSize='100% 1px';
  bridge.style.backgroundPosition='center top';
  parent.appendChild(bridge);
}
function useNewMapArt(){
  const img=document.querySelector('#map.quest119Map .quest119MapStage>img.quest119__art');
  if(!img)return;
  const current=decodeURI(img.getAttribute('src')||'');
  if(current!==MAP_ART_SRC){img.src=MAP_ART_SRC;img.dataset.eqCleanMap='1';img.dataset.eqNewMap='1'}
  else {img.dataset.eqCleanMap='1';img.dataset.eqNewMap='1'}
}
function useUploadedMapArt(){const img=document.querySelector('#map.quest119Map .quest119MapStage>img.quest119__art');if(!img||img.dataset.eqUploadedMap==='1')return;img.src=MAP_ART_SRC;img.dataset.eqUploadedMap='1';img.dataset.eqCleanMap='1';img.dataset.eqNoNavArt='1'}
function cleanMapArt(){
  const img=document.querySelector('#map.quest119Map .quest119MapStage>img.quest119__art');
  if(!img)return;
  if(decodeURI(img.getAttribute('src')||'')!==MAP_ART_SRC)img.src=MAP_ART_SRC;
  img.dataset.eqCleanMap='1';img.dataset.eqNewMap='1';img.dataset.eqNoNavArt='1';
}
function layoutMapArt(){
  const box=document.querySelector('#map.quest119Map'),img=box?.querySelector('.quest119MapStage>img.quest119__art'),nav=document.getElementById(NAV_ID);
  if(!box||!img||!nav||img.dataset.eqCleanMap!=='1'||!img.complete||!img.naturalWidth||!visible(nav))return;
  const navTop=innerHeight,gap=0,available=Math.max(1,navTop-gap);
  const width=innerWidth,height=available;
  const values={'--eq-map-art-width':width.toFixed(2)+'px','--eq-map-art-height':height.toFixed(2)+'px','--eq-map-art-top':'0px'};
  for(const [key,value] of Object.entries(values))if(box.style.getPropertyValue(key)!==value)box.style.setProperty(key,value);
}
function cleanGrammarArt(){
  const img=document.querySelector('#grammarForest119 img.quest119__art');
  if(!img)return;
  const src='assets/mobile-shell/grammar-forest-cafe-20261001.jpg';
  const changed=decodeURI(img.getAttribute('src')||'')!==src;
  if(changed)img.src=src;
  img.dataset.eqCleanGrammar='1';img.dataset.eqNoNavArt='1';
  if(!img.complete||!img.naturalWidth)img.addEventListener('load',()=>requestAnimationFrame(layoutGrammarArt),{once:true});
  else requestAnimationFrame(layoutGrammarArt);
}
function layoutGrammarArt(){
  const box=document.getElementById('grammarForest119'),img=box?.querySelector('img.quest119__art');
  if(!box||box.hidden||!img||img.dataset.eqCleanGrammar!=='1'||!img.complete||!img.naturalWidth)return;
  const w=box.clientWidth,h=box.clientHeight;
  const values={'--eq-grammar-art-width':w+'px','--eq-grammar-art-height':h+'px','--eq-grammar-art-left':'0px','--eq-grammar-art-top':'0px'};
  for(const [key,value] of Object.entries(values))if(box.style.getPropertyValue(key)!==value)box.style.setProperty(key,value);
}
function cleanHubArt(){
  const artwork={
    gameHub123:'assets/mobile-shell/game-hub-no-nav.png',
    grammarNotes123:'assets/mobile-shell/grammar-notes-no-nav.png',
    wrongBook123:'assets/mobile-shell/wrong-book-no-nav.png',
    grammarExam123:'assets/mobile-shell/grammar-exam-selection.png',
    vocabExam123:'assets/mobile-shell/vocabulary-exam-selection.png'
  };
  for(const [id,src] of Object.entries(artwork)){
    const img=document.querySelector('#'+id+' img.hub123Art');
    if(!img)continue;
    const changed=decodeURI(img.getAttribute('src')||'')!==src;
    if(changed)img.src=src;
    img.dataset.eqCleanHub='1';img.dataset.eqNoNavArt='1';
    img.closest('.hub123Frame')?.parentElement?.classList.add('eq-shell-clean-hub');
    if(!img.complete||!img.naturalWidth)img.addEventListener('load',()=>requestAnimationFrame(layoutHubArt),{once:true});
    else requestAnimationFrame(layoutHubArt);
  }
}
function layoutHubArt(){
  const nav=document.getElementById(NAV_ID);if(!nav||!visible(nav))return;
  const top=nav.getBoundingClientRect().top;
  const navTop=top.toFixed(2)+'px';if(document.body.style.getPropertyValue('--eq-shell-nav-top')!==navTop)document.body.style.setProperty('--eq-shell-nav-top',navTop);
  for(const id of ['gameHub123','grammarNotes123','grammarExam123','vocabExam123']){
    const page=document.getElementById(id),img=page?.querySelector('img.hub123Art'),frame=img?.closest('.hub123Frame');
    if(!page||!frame||img.dataset.eqCleanHub!=='1'||!img.complete||!img.naturalWidth)continue;
    const available=Math.max(1,top-6),ratio=img.naturalWidth/img.naturalHeight;
    const width=Math.min(innerWidth,available*ratio),height=width/ratio;
    const values={'--eq-hub-width':width.toFixed(2)+'px','--eq-hub-height':height.toFixed(2)+'px',
      '--eq-hub-left':((innerWidth-width)/2).toFixed(2)+'px','--eq-hub-top':(available-height).toFixed(2)+'px'};
    for(const [key,value] of Object.entries(values))if(page.style.getPropertyValue(key)!==value)page.style.setProperty(key,value);
  }
}
function ensureHistoryPage(){
  const report=document.getElementById('learningReport124'),head=report?.querySelector('.lr124Head');
  if(!head||document.getElementById('eqLearningHistoryPoc'))return;
  const open=document.createElement('button');open.type='button';open.className='eq-history-open';open.textContent='作答紀錄';head.appendChild(open);
  const page=document.createElement('section');page.id='eqLearningHistoryPoc';page.className='page hub123Page';
  page.innerHTML='<div class="eq-history-frame"><div class="eq-history-head"><button type="button" aria-label="返回學習報告">‹</button><h2>作答紀錄</h2></div><p class="eq-history-summary"></p><div class="eq-history-list"></div></div>';
  document.querySelector('main')?.appendChild(page);
  const back=()=>{if(typeof window.go==='function')window.go('learningReport124')};
  page.querySelector('.eq-history-head button').addEventListener('click',back);
  open.addEventListener('click',()=>{
    let rows=[];try{rows=window.EnglishQuestLearningHistory?.read()||JSON.parse(localStorage.getItem('eq38')||'{}').learningHistory||[]}catch{}
    const list=page.querySelector('.eq-history-list');list.replaceChildren();
    page.querySelector('.eq-history-summary').textContent='共 '+rows.length+' 筆紀錄；顯示最近 100 筆';
    if(!rows.length){const empty=document.createElement('p');empty.textContent='尚無作答紀錄。完成文法或字彙題目後再來查看。';list.appendChild(empty)}
    for(const row of rows.slice(-100).reverse()){
      const item=document.createElement('div');item.className='eq-history-row';
      const topic=document.createElement('b');topic.textContent=String(row.topic||row.source||'其他');
      const result=document.createElement('span');result.className=row.correct?'eq-history-ok':'eq-history-wrong';result.textContent=row.correct?'答對':'答錯';
      const date=document.createElement('small');const time=new Date(row.timestamp||row.date||row.at);date.textContent=Number.isNaN(+time)?'日期未記錄':time.toLocaleString('zh-TW');
      item.append(topic,result,date);list.appendChild(item);
    }
    if(typeof window.go==='function')window.go('eqLearningHistoryPoc');
  });
}
function layoutVocabArt(){
  const box=document.getElementById('vocabTown119'),img=box?.querySelector('img.quest119__art'),nav=document.getElementById(NAV_ID);
  if(!box||!img||img.dataset.eqCleanVocab!=='1'||!img.complete||!img.naturalWidth)return;
  const frame=box.getBoundingClientRect(),ratio=img.naturalWidth/img.naturalHeight;
  const width=frame.width,naturalHeight=width/ratio,height=Math.max(frame.height,naturalHeight);
  const values={'--eq-vocab-art-width':width.toFixed(2)+'px','--eq-vocab-art-height':height.toFixed(2)+'px',
    '--eq-vocab-art-left':'0px','--eq-vocab-art-top':'0px'};
  for(const [key,value] of Object.entries(values))if(box.style.getPropertyValue(key)!==value)box.style.setProperty(key,value);
  if(box.classList.contains('on')&&nav){
    nav.style.setProperty('display','grid','important');
    nav.style.setProperty('background','transparent','important');
  }
}

function eqSelector(el){if(!el||el.nodeType!==1)return '';if(el.id)return '#'+CSS.escape(el.id);const parts=[];let n=el;while(n&&n.nodeType===1&&parts.length<5){let s=n.localName||n.tagName.toLowerCase();if(n.classList&&n.classList.length)s+='.'+[...n.classList].slice(0,3).map(x=>CSS.escape(x)).join('.');const p=n.parentElement;if(p){const same=[...p.children].filter(x=>x.localName===n.localName);if(same.length>1)s+=':nth-of-type('+(same.indexOf(n)+1)+')'}parts.unshift(s);n=p}return parts.join(' > ')}
function inspectLearningBottom(label='manual'){
  const roots=[document.getElementById('grammarForest119'),document.getElementById('vocabTown119'),...document.querySelectorAll('.quest119MapStage')].filter(Boolean);
  const vh=innerHeight,seen=new Set(),rows=[];
  const add=(el,kind,src,nw=0,nh=0)=>{
    if(seen.has(el))return;const r=el.getBoundingClientRect(),cs=getComputedStyle(el);
    if(r.bottom<vh*.55||r.top>vh||r.width<=0||r.height<=0)return;
    seen.add(el);rows.push({kind,selector:eqSelector(el),src, naturalWidth:nw||null,naturalHeight:nh||null,
      boundingRect:{x:+r.x.toFixed(1),y:+r.y.toFixed(1),width:+r.width.toFixed(1),height:+r.height.toFixed(1),top:+r.top.toFixed(1),bottom:+r.bottom.toFixed(1)},
      zIndex:cs.zIndex,position:cs.position,display:cs.display,visibility:cs.visibility,objectFit:cs.objectFit,objectPosition:cs.objectPosition,clipPath:cs.clipPath});
  };
  roots.forEach(root=>{[root,...root.querySelectorAll('*')].forEach(el=>{
    if(el.tagName==='IMG')add(el,'img',el.currentSrc||el.src,el.naturalWidth,el.naturalHeight);
    const bg=getComputedStyle(el).backgroundImage;if(bg&&bg!=='none')add(el,'background-image',bg);
  })});
  const nav=document.getElementById(NAV_ID);if(nav){const r=nav.getBoundingClientRect(),cs=getComputedStyle(nav);rows.push({kind:'formal-bottom-nav',selector:'#'+NAV_ID,src:null,naturalWidth:null,naturalHeight:null,boundingRect:{x:+r.x.toFixed(1),y:+r.y.toFixed(1),width:+r.width.toFixed(1),height:+r.height.toFixed(1),top:+r.top.toFixed(1),bottom:+r.bottom.toFixed(1)},zIndex:cs.zIndex,position:cs.position,display:cs.display,visibility:cs.visibility})}
  console.group('[EQ Runtime Inspector] '+label);console.table(rows);rows.forEach((row,i)=>console.log(i,row));console.groupEnd();
  window.__EQ_RUNTIME_INSPECTOR_LAST__=rows;return rows;
}
window.eqInspectLearningBottom=inspectLearningBottom;

function useNoNavPetArt(){
  const img=document.querySelector('[data-companion120="pet"] .companion120Art');
  if(!img||img.tagName!=='IMG')return;
  const src='assets/mobile-shell/pet-no-nav.png';
  if(decodeURI(img.getAttribute('src')||'')!==src)img.src=src;
  img.dataset.eqNoNavArt='1';
}
function useNoNavPlayArt(){
  const img=document.querySelector('[data-companion120="play"] .companion120Art');
  if(!img||img.tagName!=='IMG')return;
  const src='assets/mobile-shell/pet-game-no-nav.png';
  if(decodeURI(img.getAttribute('src')||'')!==src)img.src=src;
  img.dataset.eqNoNavArt='1';
}
function useNoNavProfileArt(){
  const root=document.querySelector('[data-companion120="profile"]'),frame=root?.querySelector('.companion120Frame'),legacy=frame?.querySelector('.companion120Art');
  if(!root||!frame)return;
  let owned=frame.querySelector(':scope > .eq-profile-owned-art');
  if(!owned){
    owned=document.createElement('img');
    owned.className='eq-profile-owned-art';
    owned.alt='';
    owned.setAttribute('aria-hidden','true');
    owned.addEventListener('load',()=>{if(legacy)legacy.dataset.eqProfileCovered='1';scheduleShellSync()},{once:true});
    frame.appendChild(owned);
  }
  const src='assets/mobile-shell/learning-radar-no-nav.png';
  if(decodeURI(owned.getAttribute('src')||'')!==src)owned.src=src;
  if(owned.complete&&owned.naturalWidth&&legacy)legacy.dataset.eqProfileCovered='1';
}
function suppressLegacyCompanionNav(){document.querySelectorAll('[data-companion120="pet"] .companion120Tap,[data-companion120="play"] .companion120Tap,[data-companion120="profile"] .companion120Tap').forEach(btn=>{if(parseFloat(btn.style.top||'0')>=88)btn.style.setProperty('display','none','important')})}
function sync(){watchHomeNav();gamebox();backdrop();suppressLegacyCompanionNav();useNoNavPetArt();useNoNavPlayArt();cleanVocabArt();ownVocabPage();syncVocabMobileView();useNewMapArt();cleanMapArt();cleanGrammarArt();cleanHubArt();ensureHistoryPage();useNoNavProfileArt();layoutVocabArt();layoutMapArt();layoutGrammarArt();layoutHubArt();homeNav()}
function scheduleShellSync(){requestAnimationFrame(()=>requestAnimationFrame(sync));setTimeout(sync,120)}
function installRouteOwner(){
  if(window.__eqMobileShellGoOwned||typeof window.go!=='function')return;
  const legacyGo=window.go;
  window.__eqMobileShellGoOwned=true;
  window.go=function(page,...args){
    let target=page;
    const home=document.querySelector('[data-companion120="home"]');
    const homeActive=!!home?.classList.contains('is-active');
    if(homeActive&&page==='games')target='gameHub123';
    const result=legacyGo.call(this,target,...args);
    scheduleShellSync();
    return result;
  };
}
function init(){const forest=document.getElementById('grammarForest119');if(forest)new MutationObserver(()=>{layoutGrammarArt();homeNav()}).observe(forest,{attributes:true,attributeFilter:['hidden']});document.addEventListener('click',routeCompanionNav,true);installRouteOwner();const vocab=document.getElementById('vocabTown119');if(vocab)new MutationObserver(()=>{syncVocabMobileView();ownVocabPage();layoutVocabArt();homeNav()}).observe(vocab,{attributes:true,attributeFilter:['hidden']});window.addEventListener('english-quest:answer',keepHistoryInLiveState);document.addEventListener('click',captureLegacyAnswer,true);document.addEventListener('click',routeMapLearning,true);document.addEventListener('click',routeVocabMobileView,true);document.addEventListener('click',routeHomeGameHub,true);document.addEventListener('click',routeShellNav,false);document.addEventListener('click',scheduleShellSync,false);sync();addEventListener('resize',scheduleShellSync,{passive:true});addEventListener('load',()=>{installRouteOwner();sync()},true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
