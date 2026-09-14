const devotionals = {
  blessing: {
    title: "Blessed for the journey",
    verse: "“The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.”",
    reference: "Numbers 6:24–25",
    reflection: [
      "God’s blessing is more than an easy road. It is His presence riding with us through every open stretch, detour, delay, and unexpected reroute. The blessing of the Lord does not always remove the weight of the day, but it reminds us that we are not carrying that weight by ourselves.",
      "Some days His goodness looks obvious: a safe delivery, a clear sunrise, a kind word at the fuel island, or a phone call that comes right when your heart needed it. Other days His goodness is quieter. It may be the patience to wait, the wisdom to slow down, or the strength to answer a hard moment with grace.",
      "As you move through today, practice noticing the mercy already around you. Ask God to make your life a signpost of His kindness. Wherever you stop, whoever you speak with, and whatever load you are carrying, you can be someone who brings peace into the room because the Lord has first spoken peace over you."
    ],
    prayer: "Lord, open my eyes to Your goodness today. Let Your blessing settle my heart, guide my words, and spill over into every person I meet.",
    scriptures: [["Jeremiah 29:11","God’s plans hold hope and a future."],["Psalm 23:6","Goodness and mercy follow us."],["James 1:17","Every good gift comes from above."],["Philippians 4:19","God supplies every need."],["Ephesians 3:20","He is able to do immeasurably more."],["Psalm 1:1–3","A life rooted in God bears fruit."]]
  },
  fear: {
    title: "Courage in the cab",
    verse: "“When I am afraid, I put my trust in you.”",
    reference: "Psalm 56:3",
    reflection: [
      "Fear gets loud when the road ahead is hard to see. It can turn a small unknown into a heavy load and make tomorrow feel like more than we can handle. Scripture does not shame us for feeling afraid. It gives us somewhere to take that fear.",
      "Faith does not mean pretending the storm is not real. Faith means choosing whose voice gets the final word. When anxiety starts telling the story, pause and tell the truth back to your own soul: God is near, God is steady, and God is not surprised by what is ahead.",
      "You do not have to carry the whole journey at once. Give Jesus the next mile, the next conversation, the next decision, and the next breath. Courage often grows in small acts of trust repeated over and over until peace begins to sound louder than panic."
    ],
    prayer: "Jesus, quiet the noise in my heart. Remind me that You are near, give me courage for the next mile, and teach me to trust Your voice above my fear.",
    scriptures: [["Isaiah 41:10","Do not fear; God is with you."],["Joshua 1:9","Be strong and courageous."],["Psalm 34:4","The Lord delivers us from fear."],["2 Timothy 1:7","God gives power, love, and self-control."],["John 14:27","Christ gives a different kind of peace."],["Psalm 23:4","We are not alone in the darkest valley."]]
  },
  struggle: {
    title: "Strength for the hard miles",
    verse: "“I can do all this through him who gives me strength.”",
    reference: "Philippians 4:13",
    reflection: [
      "Some days feel like a climb with no summit in sight. The schedule is tight, the body is tired, the heart is stretched thin, and even ordinary responsibilities can feel heavier than usual. In those moments, it is easy to believe that strength is something we have to manufacture on our own.",
      "Paul’s words are not a slogan for pretending everything is easy. They are a testimony from someone who had learned dependence. Christ’s strength meets us inside real weakness. He gives enough grace for the work in front of us, enough wisdom for the decision at hand, and enough endurance to keep walking with Him.",
      "Today, do not measure God’s faithfulness by how quickly the struggle disappears. Look for how He sustains you in the middle of it. Take the next right step. Speak the next honest prayer. Receive the strength He gives, and remember that needing help is not failure; it is the doorway to grace."
    ],
    prayer: "Father, meet me in today’s struggle. Give me endurance, wisdom, and the grace to keep going with You one faithful step at a time.",
    scriptures: [["James 1:2–4","Trials can produce perseverance."],["Romans 8:28","God works through every circumstance."],["Psalm 46:1","God is our present help in trouble."],["2 Corinthians 4:8–9","Pressed, but not abandoned."],["Galatians 6:9","Do not grow weary in doing good."],["Matthew 11:28","Jesus gives rest to the burdened."]]
  },
  healing: {
    title: "Held while you heal",
    verse: "“He heals the brokenhearted and binds up their wounds.”",
    reference: "Psalm 147:3",
    reflection: [
      "Healing is often a road, not a single moment. Some wounds are visible, and others stay hidden under responsibilities, schedules, smiles, and the pressure to keep moving. God sees both. He is not hurried by your process, and He is not distant from your pain.",
      "Psalm 147 says the Lord binds up wounds. That is tender language. He does not treat brokenhearted people like projects to be fixed quickly. He comes close with compassion, truth, patience, and steady love. The places you are afraid to name are still safe in His hands.",
      "Bring Him the ache you understand and the ache you cannot explain. Let prayer be honest before it is polished. Let Scripture remind you that healing belongs to the character of God. The road may take time, but the Healer is with you for every mile of it."
    ],
    prayer: "God of compassion, touch the places in me that hurt. Give me patience in the process, courage to be honest, and hope in Your faithful love.",
    scriptures: [["Jeremiah 17:14","The Lord is our healer."],["Isaiah 53:5","By His wounds we are healed."],["Exodus 15:26","God reveals Himself as healer."],["Psalm 103:2–3","He forgives and heals."],["Proverbs 17:22","A cheerful heart is good medicine."],["1 Peter 5:7","Give Him every anxiety; He cares."]]
  }
};

const themes = ["blessing","fear","struggle","healing"];
const today = new Date();
const dailyTheme = themes[Math.floor(today.getTime() / 86400000) % themes.length];

function showTheme(requested) {
  const key = requested === "daily" ? dailyTheme : requested;
  const item = devotionals[key];
  document.getElementById("verseText").textContent = item.verse;
  document.getElementById("verseReference").textContent = item.reference;
  document.getElementById("devotionalTitle").textContent = item.title;
  const reflection = document.getElementById("devotionalReflection");
  reflection.replaceChildren(...item.reflection.map(paragraph => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    return element;
  }));
  document.getElementById("devotionalPrayer").textContent = item.prayer;
  document.getElementById("themeName").textContent = (requested === "daily" ? "DAILY WORD · " : "") + key.toUpperCase();
  document.getElementById("devotionalNumber").textContent = String(themes.indexOf(key) + 1).padStart(2,"0");
  document.getElementById("scriptureShelf").innerHTML = item.scriptures.map(([ref,copy]) => `<div class="scripture-chip"><b>${ref}</b><p>${copy}</p></div>`).join("");
}

document.querySelectorAll(".theme-tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".theme-tab").forEach(tab => { tab.classList.remove("active"); tab.setAttribute("aria-selected","false"); });
  button.classList.add("active"); button.setAttribute("aria-selected","true"); showTheme(button.dataset.theme);
}));

document.getElementById("todayDate").textContent = today.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}).toUpperCase();
showTheme("daily");

const nextSunday = new Date(today);
let daysUntilSunday = (7 - today.getDay()) % 7;
if (daysUntilSunday === 0) daysUntilSunday = 7;
nextSunday.setDate(today.getDate() + daysUntilSunday);
nextSunday.setHours(18,0,0,0);
const studyEnd = new Date(nextSunday.getTime() + 60 * 60 * 1000);
const stamp = d => d.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");
document.getElementById("studyMonth").textContent = nextSunday.toLocaleDateString("en-US",{month:"short"}).toUpperCase();
document.getElementById("studyDay").textContent = nextSunday.getDate();
document.getElementById("studyTime").textContent = nextSunday.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"}) + " · 6:00 PM PT";
document.getElementById("googleCalendarLink").href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Good News OTR — Sunday Bible Study")}&dates=${stamp(nextSunday)}/${stamp(studyEnd)}&details=${encodeURIComponent("Join us to study the Bible and this week's Good News OTR devotional themes.")}`;

document.getElementById("prayerForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim() || "Anonymous";
  const email = document.getElementById("email").value.trim() || "Not provided";
  const request = document.getElementById("request").value.trim();
  const privacy = document.getElementById("privateRequest").checked ? "Yes" : "No";
  const subject = encodeURIComponent(`Good News OTR prayer request from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPrivate request: ${privacy}\n\nPrayer request:\n${request}`);
  document.getElementById("formStatus").textContent = "Opening your email app so you can review and send your request.";
  window.location.href = `mailto:birdsoftware@gmail.com?subject=${subject}&body=${body}`;
});
