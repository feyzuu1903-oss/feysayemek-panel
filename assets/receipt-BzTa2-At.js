import{e as r,p as v}from"./index-Dxkh_3RK.js";const e=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function f(i){const t=i.customization,n=[];return t?.dough&&n.push(t.dough),t?.extras?.length&&n.push(`Ekstra: ${t.extras.join(", ")}`),t?.removables?.length&&n.push(`Çıkar: ${t.removables.join(", ")}`),i.note&&n.push(`Not: ${i.note}`),n.join(" · ")}const h={nakit:"NAKİT",kart:"KART (POS)",multinet:"MULTINET",pluxee:"PLUXEE (SODEXO)",edenred:"EDENRED",setcard:"SETCARD",metropol:"METROPOL",tokenflex:"TOKENFLEX"},x={zile_basma:"ZİLE BASMA",kapiya_birak:"KAPIYA BIRAK",gelince_ara:"GELİNCE ARA",bebek_uyuyor:"BEBEK UYUYOR",kopek_var:"KÖPEK VAR"};function y(i,{firstOrder:t,rainAtOrder:n}){const a=i||{},o=[];return a.receipt_first&&t&&o.push("Hoş geldin komşu! İlk siparişin için teşekkür ederiz."),a.receipt_rain&&n&&o.push("Bu havada siparişini getiren kuryemize de teşekkür ederiz."),a.receipt_custom&&String(a.receipt_custom).trim()&&o.push(String(a.receipt_custom).trim().slice(0,140)),o}function $(i){const[t,...n]=String(i||"").split(" — ");return[...t.split(", "),...n].map(a=>a.trim()).filter(Boolean)}function b({restaurantName:i,order:t,items:n,kitchen:a,noteLines:o=[]}){const d=t.created_at?new Date(t.created_at):null,l=d?d.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}):"",p=d?d.toLocaleDateString("tr-TR"):"",c=(n||[]).map(s=>`
    <div class="item"><div class="row"><b>${e(s.quantity)} × ${e(s.name)}</b>${a?"":`<b>${e(r(s.unit_price_cents*s.quantity))}</b>`}</div>
    ${f(s)?`<div class="inote">${e(f(s))}</div>`:""}</div>`).join(""),m=t.note?`<div class="box"><div class="lbl">MÜŞTERİ NOTU</div><div class="big">${e(t.note)}</div></div>`:"",u=a?"":`
    <hr>
    <div class="row sm"><span>Teslimat ücreti</span><span>${e(r(t.delivery_fee_cents||0))}</span></div>
    ${t.discount_cents>0?`<div class="row sm"><span>İndirim${t.coupon_code?` (${e(t.coupon_code)})`:""}</span><span>−${e(r(t.discount_cents))}</span></div>`:""}
    <div class="row grand"><span>TOPLAM</span><span>${e(r(t.total_cents))}</span></div>
    ${t.campaign_discount_cents>0?`<div class="row sm"><span>${e(t.campaign_title||"Kampanya")}</span><span>−${e(r(t.campaign_discount_cents))}</span></div>`:""}
    ${t.stamp_discount_cents>0?`<div class="row sm"><span>Damga kartı ödülü</span><span>−${e(r(t.stamp_discount_cents))}</span></div>`:""}
    <div class="pay">ÖDEME: ${e(t.pay_detail?h[t.pay_detail]||String(t.pay_detail).toLocaleUpperCase("tr-TR"):String(v(t.payment_method||"kapida_odeme")).toLocaleUpperCase("tr-TR"))}</div>
    ${t.change_for_cents>0?`<div class="pay">${e(r(t.change_for_cents))} İLE ÖDENECEK → ${e(r(Math.max(0,t.change_for_cents-(t.total_cents||0))))} PARA ÜSTÜ</div>`:""}
    <hr>
    <div class="lbl">MÜŞTERİ</div>
    <div class="cust">${e(t.profiles?.full_name||"Müşteri")}</div>
    ${t.profiles?.phone?`<div class="cust">Tel: ${e(t.profiles.phone)}</div>`:""}
    <div class="box"><div class="lbl">TESLİMAT ADRESİ</div>${$(t.delivery_address).map(s=>`<div class="big">${e(s)}</div>`).join("")}</div>
    ${Array.isArray(t.delivery_prefs)&&t.delivery_prefs.length?`<div class="box"><div class="big">${t.delivery_prefs.map(s=>e(x[s]||s)).join(" · ")}</div></div>`:""}
    ${o.length?`<hr><div class="warm">${o.map(s=>`<div>${e(s)}</div>`).join("")}</div>`:""}`;return`<!doctype html><html><head><meta charset="utf-8"><title>${a?"Mutfak fişi":"Adisyon"}</title>
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
<div class="c name">${e(i||"Feysayemek")}</div>
<div class="c kind">${a?"MUTFAK FİŞİ":"ADİSYON"}</div>
${t.is_feysalandin?'<div class="c" style="font-size:18px;font-weight:900;border:2px solid #000;padding:4px;margin:4px 0">🎁 FEYSALANDIN PAKETİ</div>':""}
<div class="c huge">#${e((t.id||"").slice(0,8).toUpperCase())}</div>
<div class="c huge">${e(l)}</div><div class="c">${e(p)}</div>
<hr>${c}${m}${u}
<div class="foot">— Feysayemek —</div>
</body></html>`}function E(i){const t=document.createElement("iframe");t.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;",document.body.appendChild(t);const n=t.contentWindow.document;n.open(),n.write(i),n.close(),setTimeout(()=>{try{t.contentWindow.focus(),t.contentWindow.print()}catch{}setTimeout(()=>t.remove(),2e3)},300)}async function T(i,t,n,a=!1){const[o,d]=await Promise.all([i.from("orders").select("*, profiles(full_name, phone)").eq("id",t).maybeSingle(),i.from("order_items").select("id, name, unit_price_cents, quantity, customization, note").eq("order_id",t)]);if(o.error||!o.data)return"Sipariş okunamadı: "+(o.error?.message||"bulunamadı");let l=[];if(!a)try{const p=o.data,{data:c}=await i.rpc("my_restaurant_extras",{p_restaurant_id:p.restaurant_id});if(c&&(c.receipt_first||c.receipt_rain||c.receipt_custom)){let m=!1;if(c.receipt_first&&p.customer_id){const{count:_}=await i.from("orders").select("id",{count:"exact",head:!0}).eq("restaurant_id",p.restaurant_id).eq("customer_id",p.customer_id).lt("created_at",p.created_at).neq("status","İptal edildi");m=_===0}const u=new Date(p.created_at).getTime(),s=c.rain_until?new Date(c.rain_until).getTime():0,g=s>u&&s-2*36e5<=u;l=y(c,{firstOrder:m,rainAtOrder:g})}}catch{}return E(b({restaurantName:n,order:o.data,items:d.data||[],kitchen:a,noteLines:l})),""}export{E as a,T as p};
