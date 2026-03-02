// FlowLink - Vanilla JS Logic
// -------------------------------------------------------------------

// Mock Application State
const state = {
    user: null, // { uid, alias, isHelper }
    requests: [],
    currentChatId: null,
};

// Aliases for anonymity
const adjectives = ['Quiet', 'Brave', 'Smart', 'Kind', 'Calm', 'Swift'];
const nouns = ['Library', 'Cafe', 'Office', 'Lab', 'Studio', 'Garden'];

function generateAlias() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const num = Math.floor(Math.random() * 99);
    return `${adj}_${noun}_${num}`;
}

// -------------------------------------------------------------------
// DOM Elements
// -------------------------------------------------------------------

// Views
const views = {
    auth: document.getElementById('auth-view'),
    roleSelect: document.getElementById('role-select-view'),
    dashboard: document.getElementById('dashboard-view'),
    feed: document.getElementById('feed-view'),
    chat: document.getElementById('chat-view'),
};

// Auth Elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userAliasDisplay = document.getElementById('user-alias-display');

// Role Select Elements
const roleNeedBtn = document.getElementById('role-need-btn');
const roleHaveBtn = document.getElementById('role-have-btn');

// Dashboard Elements
const requestForm = document.getElementById('new-req-form');

// Feed Elements
const requestsList = document.getElementById('requests-list');

// Chat Elements
const backToDashBtn = document.getElementById('back-to-dash-btn');
const chatMessagesContainer = document.getElementById('chat-messages-container');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMeta = document.getElementById('chat-request-meta');

// -------------------------------------------------------------------
// View Router Methods
// -------------------------------------------------------------------

function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
    window.scrollTo(0, 0);
}

// -------------------------------------------------------------------
// Authentication Logic
// -------------------------------------------------------------------

function handleLogin() {
    const originalText = loginBtn.innerHTML;
    loginBtn.innerText = "Verifying...";

    // Simulate network delay
    setTimeout(() => {
        state.user = {
            uid: 'user_' + Date.now(),
            alias: generateAlias(),
            isHelper: false
        };

        loginBtn.innerHTML = originalText;
        userAliasDisplay.innerText = state.user.alias;
        switchView('roleSelect');
    }, 600);
}

function handleLogout() {
    // Go back to role selection so user can switch roles without re-logging in
    switchView('roleSelect');
}

// -------------------------------------------------------------------
// Dashboard & Requests Logic
// -------------------------------------------------------------------

function createRequest(e) {
    e.preventDefault();

    const location = document.getElementById('req-location').value;
    const type = document.getElementById('req-type').value;
    const urgency = document.getElementById('req-urgency').value;

    const newReq = {
        id: 'req_' + Date.now(),
        requesterId: state.user.uid,
        requesterAlias: state.user.alias, // Kept private normally, but needed for local sim
        location,
        type,
        urgency,
        status: 'active',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
    };

    // Add to top of array
    state.requests.unshift(newReq);

    // Reset form
    requestForm.reset();

    renderRequests();
}


function renderRequests() {
    requestsList.innerHTML = '';

    const activeRequests = state.requests.filter(r => r.status === 'active');

    if (activeRequests.length === 0) {
        requestsList.innerHTML = `<p class="empty-state">No active requests right now. The community is calm.</p>`;
        return;
    }

    activeRequests.forEach(req => {
        const isMine = req.requesterId === state.user.uid;
        const isUrgent = req.urgency === 'Urgent';

        const card = document.createElement('div');
        card.className = `req-item ${isUrgent ? 'urgent' : ''}`;

        // Safety check: Don't show generic helpers their own requests as "others"
        // Let's just show them all for local test purposes, but mark if it's mine

        card.innerHTML = `
      <div class="req-info">
        <h4>${req.location} ${isMine ? '(Your request)' : ''}</h4>
        <div class="req-meta">
          <span class="tag">${req.type}</span>
          <span class="tag ${isUrgent ? 'urgent-tag' : ''}">${req.urgency}</span>
          <span class="tag" style="background:transparent; color:var(--text-muted); padding:4px 0;">
            • ${req.timestamp}
          </span>
        </div>
        <button class="btn btn-outline btn-help" onclick="acceptRequest('${req.id}')">I Have</button>
      </div>
    `;

        requestsList.appendChild(card);
    });
}

function acceptRequest(reqId) {
    const req = state.requests.find(r => r.id === reqId);
    if (!req) return;

    // Transition to chat view
    openChat(req);
}

// -------------------------------------------------------------------
// Chat Logic
// -------------------------------------------------------------------

function openChat(request) {
    state.currentChatId = request.id;
    chatMeta.innerText = `${request.location} • ${request.urgency}`;

    // Clear previous messages
    chatMessagesContainer.innerHTML = `
    <div class="system-message">
      <span>Chat started. Messages auto-delete after fulfillment. Keep it discreet.</span>
    </div>
  `;

    // Add initial automated message based on context
    appendMessage(`Hi, Where exactly are you?`, false);

    switchView('chat');
}

function handleChatSubmit(e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, true);
    chatInput.value = '';

    // Simulate reply if talking to the "requester"
    setTimeout(() => {
        if (state.currentChatId) {
            appendMessage("Okay, I will wait there.", false);
        }
    }, 2000);
}

function appendMessage(text, isMine) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${isMine ? 'msg-mine' : 'msg-theirs'}`;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    msgDiv.innerHTML = `
    ${text}
    <span class="msg-time" style="color: ${isMine ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)'}">${time}</span>
  `;

    chatMessagesContainer.appendChild(msgDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// -------------------------------------------------------------------
// Event Listeners Initialization
// -------------------------------------------------------------------

loginBtn.addEventListener('click', handleLogin);
logoutBtn.addEventListener('click', handleLogout);

roleNeedBtn.addEventListener('click', () => {
    switchView('dashboard');
});

roleHaveBtn.addEventListener('click', () => {
    renderRequests();
    switchView('feed');
});

requestForm.addEventListener('submit', createRequest);

backToDashBtn.addEventListener('click', () => {
    renderRequests();
    switchView('feed');
});

chatForm.addEventListener('submit', handleChatSubmit);

// Feed Exit -> Role Select
const feedExitBtn = document.getElementById('feed-exit-btn');
if (feedExitBtn) feedExitBtn.addEventListener('click', () => switchView('roleSelect'));

// Initialize App State
switchView('auth');
