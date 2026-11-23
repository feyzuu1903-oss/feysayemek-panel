import{s as v}from"./orderItemText-D73XSj9t.js";import{e as p,p as h}from"./index-CDsIu-W4.js";const i=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function f(e){const t=e.customization,s=[];return t?.dough&&s.push(t.dough),s.push(...v(t)),t?.extras?.length&&s.push(`Ekstra: ${t.extras.join(", ")}`),t?.removables?.length&&s.push(`Çıkar: ${t.removables.join(", ")}`),e.note&&s.push(`Not: ${e.note}`),s.join(" · ")}const x={nakit:"NAKİT",kart:"KART (POS)",multinet:"MULTINET",pluxee:"PLUXEE (SODEXO)",edenred:"EDENRED",setcard:"SETCARD",metropol:"METROPOL",tokenflex:"TOKENFLEX"},y={zile_basma:"ZİLE BASMA",kapiya_birak:"KAPIYA BIRAK",gelince_ara:"GELİNCE ARA",bebek_uyuyor:"BEBEK UYUYOR",kopek_var:"KÖPEK VAR"};function $(e,{firstOrder:t,rainAtOrder:s}){const a=e||{},o=[];return a.receipt_first&&t&&o.push("Hoş geldin komşu! İlk siparişin için teşekkür ederiz."),a.receipt_rain&&s&&o.push("Bu havada siparişini getiren kuryemize de teşekkür ederiz."),a.receipt_custom&&String(a.receipt_custom).trim()&&o.push(String(a.receipt_custom).trim().slice(0,140)),o}function b(e){const[t,...s]=String(e||"").split(" — ");return[...t.split(", "),...s].map(a=>a.trim()).filter(Boolean)}function E({restaurantName:e,order:t,items:s,kitchen:a,noteLines:o=[]}){const d=t.created_at?new Date(t.created_at):null,l=d?d.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}):"",r=d?d.toLocaleDateString("tr-TR"):"",c=(s||[]).map(n=>`
    <div class="item"><div class="row"><b>${i(n.quantity)} × ${i(n.name)}</b>${a?"":`<b>${i(p(n.unit_price_cents*n.quantity))}</b>`}</div>
    ${f(n)?`<div class="inote">${i(f(n))}</div>`:""}</div>`).join(""),m=t.note?`<div class="box"><div class="lbl">MÜŞTERİ NOTU</div><div class="big">${i(t.note)}</div></div>`:"",u=a?"":`
    <hr>
    <div class="row sm"><span>Teslimat ücreti</span><span>${i(p(t.delivery_fee_cents||0))}</span></div>
    ${t.discount_cents>0?`<div class="row sm"><span>İndirim${t.coupon_code?` (${i(t.coupon_code)})`:""}</span><span>−${i(p(t.discount_cents))}</span></div>`:""}
    <div class="row grand"><span>TOPLAM</span><span>${i(p(t.total_cents))}</span></div>
    ${t.campaign_discount_cents>0?`<div class="row sm"><span>${i(t.campaign_title||"Kampanya")}</span><span>−${i(p(t.campaign_discount_cents))}</span></div>`:""}
    ${t.stamp_discount_cents>0?`<div class="row sm"><span>Damga kartı ödülü</span><span>−${i(p(t.stamp_discount_cents))}</span></div>`:""}
    <div class="pay">ÖDEME: ${i(t.pay_detail?x[t.pay_detail]||String(t.pay_detail).toLocaleUpperCase("tr-TR"):String(h(t.payment_method||"kapida_odeme")).toLocaleUpperCase("tr-TR"))}</div>
    ${t.change_for_cents>0?`<div class="pay">${i(p(t.change_for_cents))} İLE ÖDENECEK → ${i(p(Math.max(0,t.change_for_cents-(t.total_cents||0))))} PARA ÜSTÜ</div>`:""}
    <hr>
    <div class="lbl">MÜŞTERİ</div>
    <div class="cust">${i(t.profiles?.full_name||"Müşteri")}</div>
    ${t.profiles?.phone?`<div class="cust">Tel: ${i(t.profiles.phone)}</div>`:""}
    <div class="box"><div class="lbl">TESLİMAT ADRESİ</div>${b(t.delivery_address).map(n=>`<div class="big">${i(n)}</div>`).join("")}</div>
    ${Array.isArray(t.delivery_prefs)&&t.delivery_prefs.length?`<div class="box"><div class="big">${t.delivery_prefs.map(n=>i(y[n]||n)).join(" · ")}</div></div>`:""}
    ${o.length?`<hr><div class="warm">${o.map(n=>`<div>${i(n)}</div>`).join("")}</div>`:""}`;return`<!doctype html><html><head><meta charset="utf-8"><title>${a?"Mutfak fişi":"Adisyon"}</title>
<style>
@page { margin: 4mm; }
body { font-family: Arial, sans-serif; width: 72mm; margin: 0 auto; color: #000; font-size: 14px; }
.c { text-align: center; } .name { font-size: 20px; font-weight: 800; }
.kind { font-size: 14px; font-weight: 700; letter-spacing: 2px; margin: 2px 0 6px; }
.huge { font-size: 30px; font-weight: 900; line-height: 1.1; }
hr { border: 0; border-top: 1px dashed #000; margin: 8px 0; }
.row { display: flex; justify-content: space-between; gap: 8px; } .item { margin-bottom: 8px; font-size: 17px; }
.inote { font-size: 14px; font-style: italic; } .sm { font-size: 14px; }
.grand { font-size: 20px; font-weight: 900; } .pay { font-size: 16px; font-weight: 800; margin-top: 6px; }
.box { border: 3px solid #000; padding: 8px; margin-top: 8px; } .lbl { font-size: 12px; font-weight: 900; letter-spacing: 1px; }
.big { font-size: 18px; font-weight: 800; margin-top: 2px; } .cust { font-size: 16px; font-weight: 700; }
.foot { font-size: 10px; text-align: center; margin-top: 12px; }
.warm { font-size: 15px; font-style: italic; text-align: center; line-height: 1.35; }
</style></head><body>
<div class="c name">${i(e||"Feysayemek")}</div>
<div class="c kind">${a?"MUTFAK FİŞİ":"ADİSYON"}</div>
${t.is_feysalandin?'<div class="c" style="font-size:18px;font-weight:900;border:2px solid #000;padding:4px;margin:4px 0">🎁 FEYSALANDIN PAKETİ</div>':""}
<div class="c huge">#${i((t.id||"").slice(0,8).toUpperCase())}</div>
<div class="c huge">${i(l)}</div><div class="c">${i(r)}</div>
<hr>${c}${m}${u}
<div class="foot">— Feysayemek —</div>
</body></html>`}function w(e){const t=document.createElement("iframe");t.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;",document.body.appendChild(t);const s=t.contentWindow.document;s.open(),s.write(e),s.close(),setTimeout(()=>{try{t.contentWindow.focus(),t.contentWindow.print()}catch{}setTimeout(()=>t.remove(),2e3)},300)}async function S(e,t,s,a=!1){const[o,d]=await Promise.all([e.from("orders").select("*, profiles(full_name, phone)").eq("id",t).maybeSingle(),e.from("order_items").select("id, name, unit_price_cents, quantity, customization, note").eq("order_id",t)]);if(o.error||!o.data)return"Sipariş okunamadı: "+(o.error?.message||"bulunamadı");let l=[];if(!a)try{const r=o.data,{data:c}=await e.rpc("my_restaurant_extras",{p_restaurant_id:r.restaurant_id});if(c&&(c.receipt_first||c.receipt_rain||c.receipt_custom)){let m=!1;if(c.receipt_first&&r.customer_id){const{count:_}=await e.from("orders").select("id",{count:"exact",head:!0}).eq("restaurant_id",r.restaurant_id).eq("customer_id",r.customer_id).lt("created_at",r.created_at).neq("status","İptal edildi");m=_===0}const u=new Date(r.created_at).getTime(),n=c.rain_until?new Date(c.rain_until).getTime():0,g=n>u&&n-2*36e5<=u;l=$(c,{firstOrder:m,rainAtOrder:g})}}catch{}return w(E({restaurantName:s,order:o.data,items:d.data||[],kitchen:a,noteLines:l})),""}export{w as a,S as p};
