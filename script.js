
const $ = id => document.getElementById(id);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const today = () => new Date().toISOString().slice(0,10);

const translations = {
ar:{
introTag:"حياتك. نظامك الخاص.",welcome:"أهلاً بك في مساحتك",
loginTitle:"ابدأ نسختك الأفضل.",loginSubtitle:"مساحتك الشخصية لتنظيم حياتك.",
yourName:"اسمك",enter:"دخول إلى NEXORA",localNote:"بياناتك محفوظة على جهازك",
workspace:"مساحة العمل",overview:"نظرة عامة",tasks:"المهام",calendar:"التقويم",study:"المذاكرة",habits:"العادات",goals:"الأهداف",focus:"التركيز",wallet:"محفظتي",notes:"ملاحظاتي",analytics:"التحليلات",settings:"الإعدادات",personalSpace:"مساحتك الشخصية",systemReady:"النظام جاهز",footer:"صمم حياتك للفصل القادم",
hello:"أهلاً",today:"اليوم",overviewText:"خلّي يومك أقوى خطوة بخطوة.",totalTasks:"إجمالي المهام",completed:"مكتملة",pending:"متبقية",studyTime:"وقت المذاكرة",balance:"رصيدك الحالي",todayTasks:"مهام اليوم",viewAll:"عرض الكل",addTask:"＋ إضافة مهمة",newTask:"مهمة جديدة",taskName:"اسم المهمة",date:"التاريخ",priority:"الأولوية",low:"منخفضة",medium:"متوسطة",high:"عالية",save:"حفظ",cancel:"إلغاء",noTasks:"لا توجد مهام حتى الآن",all:"الكل",done:"مكتملة",search:"ابحث عن مهمة...",taskAdded:"تمت إضافة المهمة",calendarTitle:"تقويمك",habitsTitle:"عاداتك اليومية",habitName:"اسم العادة",addHabit:"إضافة عادة",noHabits:"أضف عادتك الأولى",doneToday:"تم اليوم ✓",goalsTitle:"أهدافك",goalName:"اسم الهدف",goalTarget:"الهدف النهائي",addGoal:"إضافة هدف",noGoals:"ابدأ بإضافة هدف",notesTitle:"ملاحظاتك",createNote:"أنشئ ملاحظة",noteTitle:"عنوان الملاحظة",noteBody:"اكتب ملاحظتك...",yourNotes:"كل ملاحظاتك",noNotes:"لا توجد ملاحظات",walletTitle:"محفظتي",editBalance:"تعديل الرصيد",currentBalance:"الرصيد الحالي",saveBalance:"حفظ الرصيد",focusTitle:"وقت التركيز",start:"ابدأ",pause:"إيقاف",reset:"إعادة",focusDone:"انتهت جلسة التركيز!",studyTitle:"جلسة مذاكرة",subject:"المادة",duration:"المدة بالدقائق",startStudy:"تسجيل جلسة",studyAdded:"تم تسجيل المذاكرة",analyticsTitle:"تحليلاتك",taskCompletion:"إنجاز المهام",tasksCompleted:"مهام مكتملة",totalStudy:"وقت المذاكرة",weekly:"آخر 7 أيام",trackedHabits:"العادات المسجلة",activeGoals:"الأهداف النشطة",language:"اللغة",appearance:"المظهر",dark:"داكن",light:"فاتح",changeName:"تغيير الاسم",export:"تصدير البيانات",import:"استيراد نسخة",backup:"نسخة احتياطية من بياناتك",resetWorkspace:"إعادة ضبط المساحة",resetData:"إعادة ضبط",resetConfirm:"هل تريد مسح بياناتك وإعادة ضبط المساحة؟",resetDone:"تمت إعادة الضبط",namePrompt:"اكتب اسمك الجديد",restored:"تم استيراد البيانات",invalidBackup:"ملف غير صالح",noteSaved:"تم حفظ الملاحظة",balanceSaved:"تم حفظ الرصيد",goalAdded:"تم إضافة الهدف",habitAdded:"تم إضافة العادة"
},
en:{
introTag:"Your Life. Your System.",welcome:"WELCOME TO YOUR SPACE",loginTitle:"Become your best version.",loginSubtitle:"Your personal space to organize life.",
yourName:"Your name",enter:"Enter NEXORA",localNote:"Your data stays on this device",
workspace:"WORKSPACE",overview:"Overview",tasks:"Tasks",calendar:"Calendar",study:"Study",habits:"Habits",goals:"Goals",focus:"Focus",wallet:"My Wallet",notes:"Notes",analytics:"Analytics",settings:"Settings",personalSpace:"Personal space",systemReady:"SYSTEM READY",footer:"Designed for your next chapter.",
hello:"Hello",today:"Today",overviewText:"Make today better, one step at a time.",totalTasks:"Total tasks",completed:"Completed",pending:"Pending",studyTime:"Study time",balance:"Current balance",todayTasks:"Today's tasks",viewAll:"View all",addTask:"＋ Add task",newTask:"New task",taskName:"Task name",date:"Date",priority:"Priority",low:"Low",medium:"Medium",high:"High",save:"Save",cancel:"Cancel",noTasks:"No tasks yet",all:"All",done:"Completed",search:"Search tasks...",taskAdded:"Task added",calendarTitle:"Your calendar",habitsTitle:"Daily habits",habitName:"Habit name",addHabit:"Add habit",noHabits:"Add your first habit",doneToday:"Done today ✓",goalsTitle:"Your goals",goalName:"Goal name",goalTarget:"Final target",addGoal:"Add goal",noGoals:"Start by adding a goal",notesTitle:"Your notes",createNote:"Create a note",noteTitle:"Note title",noteBody:"Write your note...",yourNotes:"All your notes",noNotes:"No notes yet",walletTitle:"My wallet",editBalance:"Edit balance",currentBalance:"Current balance",saveBalance:"Save balance",focusTitle:"Focus time",start:"Start",pause:"Pause",reset:"Reset",focusDone:"Focus session completed!",studyTitle:"Study session",subject:"Subject",duration:"Duration in minutes",startStudy:"Log session",studyAdded:"Study session saved",analyticsTitle:"Your analytics",taskCompletion:"Task completion",tasksCompleted:"Completed tasks",totalStudy:"Study time",weekly:"Last 7 days",trackedHabits:"Tracked habits",activeGoals:"Active goals",language:"Language",appearance:"Appearance",dark:"Dark",light:"Light",changeName:"Change name",export:"Export data",import:"Import backup",backup:"Backup your data",resetWorkspace:"Reset workspace",resetData:"Reset",resetConfirm:"Reset your workspace and erase data?",resetDone:"Workspace reset",namePrompt:"Enter your new name",restored:"Backup restored",invalidBackup:"Invalid file",noteSaved:"Note saved",balanceSaved:"Balance saved",goalAdded:"Goal added",habitAdded:"Habit added"
}};

const defaults={user:"",language:"ar",theme:"dark",tasks:[],habits:[],goals:[],notes:[],walletBalance:0,studyMinutes:0,sessions:0};
let data={...defaults,...JSON.parse(localStorage.getItem("nexoraData")||"{}")};
let page="overview",focusMode=25,focusSeconds=1500,focusRunning=false,focusInterval=null,toastTimeout;

function save(){localStorage.setItem("nexoraData",JSON.stringify(data))}
function t(key){return translations[data.language][key]||key}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function dateFmt(d){return new Date(d+"T12:00:00").toLocaleDateString(data.language==="ar"?"ar-EG":"en-US",{month:"short",day:"numeric"})}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$("toast").classList.remove("show"),2500)}
function applyTheme(){document.body.classList.toggle("light",data.theme==="light")}
function applyLanguage(){document.documentElement.lang=data.language;document.documentElement.dir=data.language==="ar"?"rtl":"ltr";document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));$("username").placeholder=data.language==="ar"?"اكتب اسمك...":"Enter your name...";document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page))}
function enterApp(){$("loginScreen").classList.add("hidden");$("app").classList.remove("hidden");$("profileName").textContent=data.user;$("avatar").textContent=data.user[0]?.toUpperCase()||"N";applyTheme();applyLanguage();render()}
function go(p){page=p;document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===p));render();window.scrollTo({top:0,behavior:"smooth"})}
function empty(msg){return `<div class="empty">${msg}</div>`}
function taskRow(x){return `<div class="item ${x.done?"done":""}"><button class="check ${x.done?"done":""}" data-task="${x.id}">${x.done?"✓":""}</button><div class="item-content"><strong>${esc(x.title)}</strong><small>${dateFmt(x.date)} · ${t(x.priority)}</small></div><button class="delete" data-del-task="${x.id}">×</button></div>`}
function stat(label,value,foot=""){return `<div class="card stat"><div class="stat-label">${label}</div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></div>`}

function dashboard(){
let done=data.tasks.filter(x=>x.done).length;
return `<div class="welcome"><h1>${t("hello")} <strong>${esc(data.user)} ✦</strong></h1><p>${t("overviewText")}</p></div>
<div class="grid">${stat(t("totalTasks"),data.tasks.length)}${stat(t("completed"),done)}${stat(t("pending"),data.tasks.length-done)}${stat(t("studyTime"),Math.floor(data.studyMinutes/60)+"h "+data.studyMinutes%60+"m")}</div>
<h3 class="section-title">${t("todayTasks")} <button class="secondary-btn" data-go="tasks">${t("viewAll")}</button></h3>
<div class="card"><div class="card-head"><h3>${t("todayTasks")}</h3><button data-go="tasks">${t("addTask")}</button></div>${data.tasks.filter(x=>x.date===today()).map(taskRow).join("")||empty(t("noTasks"))}</div>
<h3 class="section-title">${t("balance")}</h3><div class="card"><div class="big-number">${Number(data.walletBalance).toLocaleString()} <span class="muted small">EGP</span></div><button class="secondary-btn" data-go="wallet">${t("walletTitle")}</button></div>`
}
function tasksPage(){return `<div class="card"><form id="taskForm" class="inline-form"><input id="taskTitle" placeholder="${t("taskName")}" required><input id="taskDate" type="date" value="${today()}"><select id="taskPriority"><option value="low">${t("low")}</option><option value="medium" selected>${t("medium")}</option><option value="high">${t("high")}</option></select><button class="primary-btn">${t("save")}</button></form><input id="taskSearch" placeholder="${t("search")}"><div class="toolbar"><button data-filter="all">${t("all")}</button><button data-filter="pending">${t("pending")}</button><button data-filter="done">${t("done")}</button></div><div id="taskList">${data.tasks.map(taskRow).join("")||empty(t("noTasks"))}</div></div>`}
function calendarPage(){let d=new Date(),month=d.getMonth(),year=d.getFullYear(),first=new Date(year,month,1).getDay(),days=new Date(year,month+1,0).getDate();return `<div class="card"><h3>${d.toLocaleDateString(data.language==="ar"?"ar-EG":"en-US",{month:"long",year:"numeric"})}</h3><div class="calendar-grid">${Array.from({length:first},()=>"<div></div>").join("")+Array.from({length:days},(_,i)=>`<button class="calendar-day ${i+1===d.getDate()?"today":""}" data-day="${year}-${String(month+1).padStart(2,"0")}-${String(i+1).padStart(2,"0")}">${i+1}</button>`).join("")}</div><div id="selectedDay">${dayTasks(today())}</div></div>`}
function dayTasks(day){let list=data.tasks.filter(x=>x.date===day);return `<h3 class="section-title">${dateFmt(day)}</h3>${list.map(taskRow).join("")||empty(t("noTasks"))}`}
function habitsPage(){return `<div class="card"><form id="habitForm" class="inline-form"><input id="habitName" placeholder="${t("habitName")}" required><button class="primary-btn">${t("addHabit")}</button></form></div><h3 class="section-title">${t("habitsTitle")}</h3><div class="grid two">${data.habits.map(h=>`<div class="card"><div class="card-head"><h3>${esc(h.name)}</h3><button data-del-habit="${h.id}">×</button></div><div class="big-number">${h.streak||0} <span class="muted small">🔥</span></div><p class="muted small">${h.doneToday===today()?t("doneToday"):""}</p><button class="secondary-btn" data-habit="${h.id}">${h.doneToday===today()?"✓":t("doneToday")}</button></div>`).join("")||empty(t("noHabits"))}</div>`}
function goalsPage(){return `<div class="card"><form id="goalForm" class="inline-form"><input id="goalName" placeholder="${t("goalName")}" required><input id="goalTarget" type="number" min="1" placeholder="${t("goalTarget")}" required><button class="primary-btn">${t("addGoal")}</button></form></div><h3 class="section-title">${t("goalsTitle")}</h3><div class="grid two">${data.goals.map(g=>`<div class="card goal-card"><div class="card-head"><h3>${esc(g.name)}</h3><button data-del-goal="${g.id}">×</button></div><div class="big-number">${g.value}/${g.target}</div><div class="progress"><span style="width:${Math.min(100,g.value/g.target*100)}%"></span></div><button class="secondary-btn" data-goal-add="${g.id}">＋ 1</button><button class="secondary-btn" data-goal-reset="${g.id}">${t("reset")}</button></div>`).join("")||empty(t("noGoals"))}</div>`}
function studyPage(){return `<div class="card"><h3>${t("studyTitle")}</h3><form id="studyForm"><label>${t("subject")}</label><input id="studySubject" required placeholder="${t("subject")}"><label>${t("duration")}</label><input id="studyDuration" type="number" min="1" value="30" required><button class="primary-btn">${t("startStudy")}</button></form></div><div class="card" style="margin-top:20px"><div class="big-number">${data.studyMinutes} <small class="muted">${data.language==="ar"?"دقيقة":"minutes"}</small></div></div>`}
function focusPage(){return `<div class="card timer"><h3>${t("focusTitle")}</h3><div class="toolbar" style="justify-content:center"><button data-mode="25">25 min</button><button data-mode="45">45 min</button><button data-mode="60">60 min</button></div><div class="timer-ring"><strong id="timerDisplay">${String(Math.floor(focusSeconds/60)).padStart(2,"0")}:${String(focusSeconds%60).padStart(2,"0")}</strong></div><div class="timer-controls"><button class="primary-btn" id="timerStart">${focusRunning?t("pause"):t("start")}</button><button class="secondary-btn" id="timerReset">${t("reset")}</button></div></div>`}
function walletPage(){return `<div class="card"><h3>${t("walletTitle")}</h3><div class="big-number">${Number(data.walletBalance).toLocaleString()} <span class="muted small">EGP</span></div><form id="walletForm"><label>${t("currentBalance")}</label><input id="walletAmount" type="number" min="0" step=".01" value="${Number(data.walletBalance||0)}" required><button class="primary-btn">${t("saveBalance")}</button></form></div>`}
function notesPage(){return `<div class="card"><h3>${t("createNote")}</h3><form id="noteForm"><input id="noteTitle" placeholder="${t("noteTitle")}" required><textarea id="noteBody" placeholder="${t("noteBody")}" style="margin:10px 0" required></textarea><button class="primary-btn">${t("save")}</button></form></div><h3 class="section-title">${t("yourNotes")}</h3><div class="grid three">${data.notes.slice().reverse().map(n=>`<div class="card note-card"><div class="card-head"><h3>${esc(n.title)}</h3><button data-del-note="${n.id}">×</button></div><p>${esc(n.body)}</p><small class="muted">${dateFmt(n.date)}</small></div>`).join("")||empty(t("noNotes"))}</div>`}
function analyticsPage(){let done=data.tasks.filter(x=>x.done).length;return `<div class="grid three">${stat(t("taskCompletion"),data.tasks.length?Math.round(done/data.tasks.length*100)+"%":"0%")}${stat(t("tasksCompleted"),done)}${stat(t("totalStudy"),Math.floor(data.studyMinutes/60)+"h")}</div><h3 class="section-title">${t("weekly")}</h3><div class="card"><div class="chart-bars">${Array.from({length:7},(_,i)=>{let d=new Date();d.setDate(d.getDate()-6+i);let k=d.toISOString().slice(0,10),n=data.tasks.filter(x=>x.date===k&&x.done).length;return `<div style="height:${Math.max(8,n*25)}%"><small>${d.toLocaleDateString(data.language==="ar"?"ar-EG":"en-US",{weekday:"short"})}</small></div>`}).join("")}</div></div>`}
function settingsPage(){return `<div class="card"><div class="setting-row"><div><strong>${t("language")}</strong><small>Language / اللغة</small></div><select id="languageSelect" style="width:150px"><option value="ar">العربية</option><option value="en">English</option></select></div><div class="setting-row"><div><strong>${t("appearance")}</strong></div><button class="secondary-btn" id="settingTheme">${t(data.theme)}</button></div><div class="setting-row"><div><strong>${t("changeName")}</strong></div><button class="secondary-btn" id="changeName">${t("changeName")}</button></div><div class="setting-row"><div><strong>${t("export")}</strong><small>${t("backup")}</small></div><button class="secondary-btn" id="exportData">${t("export")}</button></div><div class="setting-row"><div><strong>${t("import")}</strong></div><button class="secondary-btn" id="importData">${t("import")}</button></div><div class="setting-row"><div><strong>${t("resetWorkspace")}</strong></div><button class="secondary-btn" id="resetData" style="color:var(--red)">${t("resetData")}</button></div><input type="file" id="backupFile" accept=".json" class="hidden"></div>`}
const pages={overview:dashboard,tasks:tasksPage,calendar:calendarPage,study:studyPage,habits:habitsPage,goals:goalsPage,focus:focusPage,wallet:walletPage,notes:notesPage,analytics:analyticsPage,settings:settingsPage};

function render(){
$("pageHeading").textContent=t(page);
$("currentDate").textContent=new Date().toLocaleDateString(data.language==="ar"?"ar-EG":"en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
$("pageContent").innerHTML=pages[page]();
$("taskBadge").textContent=data.tasks.filter(x=>!x.done).length;
bind();
}
function stopTimer(){focusRunning=false;clearInterval(focusInterval);focusInterval=null}
function timerStart(){
if(focusRunning){stopTimer();render();return}
focusRunning=true;
focusInterval=setInterval(()=>{
focusSeconds--;
let el=$("timerDisplay");
if(el)el.textContent=String(Math.floor(focusSeconds/60)).padStart(2,"0")+":"+String(focusSeconds%60).padStart(2,"0");
if(focusSeconds<=0){stopTimer();data.sessions++;data.studyMinutes+=focusMode;save();toast(t("focusDone"));render()}
},1000);
render();
}

function bind(){
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));
document.querySelectorAll("[data-task]").forEach(b=>b.onclick=()=>{let x=data.tasks.find(z=>z.id===b.dataset.task);if(x)x.done=!x.done;save();render()});
document.querySelectorAll("[data-del-task]").forEach(b=>b.onclick=()=>{data.tasks=data.tasks.filter(x=>x.id!==b.dataset.delTask);save();render()});
document.querySelectorAll("[data-habit]").forEach(b=>b.onclick=()=>{let h=data.habits.find(x=>x.id===b.dataset.habit);if(h){h.doneToday=h.doneToday===today()?"":today();h.streak=Math.max(0,(h.streak||0)+(h.doneToday?1:-1))}save();render()});
document.querySelectorAll("[data-del-habit]").forEach(b=>b.onclick=()=>{data.habits=data.habits.filter(x=>x.id!==b.dataset.delHabit);save();render()});
document.querySelectorAll("[data-del-goal]").forEach(b=>b.onclick=()=>{data.goals=data.goals.filter(x=>x.id!==b.dataset.delGoal);save();render()});
document.querySelectorAll("[data-goal-add]").forEach(b=>b.onclick=()=>{let g=data.goals.find(x=>x.id===b.dataset.goalAdd);if(g)g.value=Math.min(g.target,g.value+1);save();render()});
document.querySelectorAll("[data-goal-reset]").forEach(b=>b.onclick=()=>{let g=data.goals.find(x=>x.id===b.dataset.goalReset);if(g)g.value=0;save();render()});
document.querySelectorAll("[data-del-note]").forEach(b=>b.onclick=()=>{data.notes=data.notes.filter(x=>x.id!==b.dataset.delNote);save();render()});
document.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{$("selectedDay").innerHTML=dayTasks(b.dataset.day);bind()});
$("taskForm")?.addEventListener("submit",e=>{e.preventDefault();data.tasks.push({id:uid(),title:$("taskTitle").value.trim(),date:$("taskDate").value||today(),priority:$("taskPriority").value,done:false});save();render();toast(t("taskAdded"))});
$("taskSearch")?.addEventListener("input",()=>filterTasks("all"));
document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>filterTasks(b.dataset.filter));
$("habitForm")?.addEventListener("submit",e=>{e.preventDefault();data.habits.push({id:uid(),name:$("habitName").value.trim(),streak:0,doneToday:""});save();render();toast(t("habitAdded"))});
$("goalForm")?.addEventListener("submit",e=>{e.preventDefault();data.goals.push({id:uid(),name:$("goalName").value.trim(),target:Math.max(1,+$("goalTarget").value||100),value:0});save();render();toast(t("goalAdded"))});
$("studyForm")?.addEventListener("submit",e=>{e.preventDefault();let mins=Math.max(1,+$("studyDuration").value||1);data.studyMinutes+=mins;save();render();toast(t("studyAdded"))});
$("noteForm")?.addEventListener("submit",e=>{e.preventDefault();data.notes.push({id:uid(),title:$("noteTitle").value.trim(),body:$("noteBody").value,date:today()});save();render();toast(t("noteSaved"))});
$("walletForm")?.addEventListener("submit",e=>{e.preventDefault();data.walletBalance=Number($("walletAmount").value);save();render();toast(t("balanceSaved"))});
$("timerStart")?.addEventListener("click",timerStart);
$("timerReset")?.addEventListener("click",()=>{stopTimer();focusSeconds=focusMode*60;render()});
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{stopTimer();focusMode=+b.dataset.mode;focusSeconds=focusMode*60;render()});
$("languageSelect")?.addEventListener("change",e=>{data.language=e.target.value;save();applyLanguage();render()});
$("settingTheme")?.addEventListener("click",toggleTheme);
$("changeName")?.addEventListener("click",()=>{let n=prompt(t("namePrompt"),data.user);if(n?.trim()){data.user=n.trim();save();enterApp()}});
$("exportData")?.addEventListener("click",exportData);
$("importData")?.addEventListener("click",()=>$("backupFile").click());
$("backupFile")?.addEventListener("change",importData);
$("resetData")?.addEventListener("click",()=>{if(confirm(t("resetConfirm"))){data={...defaults,user:data.user,language:data.language};save();render();toast(t("resetDone"))}});
}
function filterTasks(mode){
let q=($("taskSearch")?.value||"").toLowerCase();
let list=data.tasks.filter(x=>x.title.toLowerCase().includes(q)&&(mode==="all"||(mode==="pending"&&!x.done)||(mode==="done"&&x.done)));
$("taskList").innerHTML=list.length?list.map(taskRow).join(""):empty(t("noTasks"));bind();
}
function toggleTheme(){data.theme=data.theme==="dark"?"light":"dark";save();applyTheme();render()}
function exportData(){let blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="nexora-backup.json";a.click();URL.revokeObjectURL(url)}
function importData(e){let f=e.target.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{try{data={...defaults,...JSON.parse(r.result)};save();enterApp();toast(t("restored"))}catch{toast(t("invalidBackup"))}};r.readAsText(f)}

$("loginForm").addEventListener("submit",e=>{e.preventDefault();data.user=$("username").value.trim();if(data.user){save();enterApp()}});
document.querySelectorAll(".nav-item[data-page]").forEach(b=>b.onclick=()=>go(b.dataset.page));
$("quickAdd").onclick=()=>go("tasks");
$("logoutBtn").onclick=()=>{stopTimer();$("app").classList.add("hidden");$("loginScreen").classList.remove("hidden");$("username").value=data.user};
applyTheme();
if(data.user){$("intro").style.display="none";enterApp()}else setTimeout(()=>$("loginScreen").classList.remove("hidden"),2800);
