<p align="center">
  <img src="./img.png" alt="FloWing Banner" width="100%">
</p>


# FloWing🎯

## Basic Details

### Team Name: TechNova

### Team Members
- Member 1: Sarayu Suresh - MBCCET
- Member 2: Saniya Sabu - MBCCET

### Hosted Project Link
[https://sarayusuresh18.github.io/FloWing/]

### Project Description
FloWing is a privacy-first, peer-to-peer sanitary pad sharing web application designed for women in colleges and offices. It lets users anonymously request or offer pads during emergencies with real-time anonymous chat and zero personal data exposure.

### The Problem Statement
Unexpected periods cause panic and embarrassment in colleges and offices. There is no discreet, fast, and anonymous way for women to reach out to nearby peers for sanitary pad help  making a private biological need unnecessarily stressful.

### The Solution
FloWing creates a women-only micro-network within campuses where users can post anonymous pad requests or offer to help all behind generated aliases. Requests appear on a live feed and helpers can respond instantly through an anonymous chat, without either party ever revealing their identity.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- **Languages used:** HTML5, CSS, JavaScript (ES6+)
- **Frameworks used:** None (Vanilla frontend)
- **Libraries used:** Google Fonts (Outfit typeface)
- **Tools used:** VS Code, Git

---

## Features

- 🔒 **Anonymous Identity** — No real names ever shown.
- 🆘 **Quick Request** — Post a pad request with location, urgency, and pad type in seconds.
- 📋 **Live Feed** — See all active nearby requests in real time without refreshing.
- 💬 **Anonymous Chat** — Accept a request and chat discreetly to coordinate a drop-off spot.
- 🎭 **Role-Based Routing** — "I Need Pads" goes to request form; "I Have Pads" goes directly to live feed.
- 🔔 **Toast Notifications** — Subtle confirmations ("Notification sent ✓") without pop-ups.
- 🗑️ **Auto-Cleanup** — Requests disappear after fulfillment (real backend would auto-delete after 2 hours).

---

## Implementation

### For Software:

#### Installation
```bash
# No installation needed — this is a pure HTML/CSS/JS project.
# Just clone or download the project files.
git clone <your-repo-url>
cd flowing
```

#### Run
```bash
# Open index.html directly in any modern browser.
# On Windows:
start index.html

# On macOS:
open index.html

# Or use VS Code Live Server extension for hot-reload during development.
```

---

## Project Documentation

### Screenshots

![Login Screen] https://drive.google.com/file/d/1jbVTZlHyAyvSa65SWH6H0CLJkU7mDAdY/view?usp=sharing
*Login screen — clean branding with a college email login prompt*

![Role Selection] https://drive.google.com/file/d/1Ui-n7ancVLidvOasGYw9zc04bub96VYC/view?usp=sharing
*Welcome screen — users choose between "I Need Pads" or "I Have Pads"*

![Live Feed] https://drive.google.com/file/d/17o-SpisUfyh8qjcqhpImPK4tZOSW7yIi/view?usp=sharing
*Live request feed — anonymous requests with urgency tags and I Have button*

![Chat View] https://drive.google.com/file/d/1zr3ydbJirIIC2LDncIWLjV5aJLtYNbQb/view?usp=sharing
*Anonymous chat — coordinate a discreet drop-off without revealing identity*

---

### Diagrams

**Application Workflow:**

```
Login Page
    ↓
Welcome Page (Role Select)
    ├── "I Need Pads" → Dashboard (Post Request Form)
    │       ↓
    │   Request added to Live Feed
    │
    └── "I Have Pads" → Live Feed
            ↓
        Click "I Have" → Toast ("Message sent ✓")
        Click "💬 Chat" → Anonymous Chat View
```

---



---

## Project Demo

### Video
https://drive.google.com/file/d/1mGl7XRHYolDxn9neuuKNwxdCzDMOm1Mm/view?usp=sharing

*Demo shows: login flow → role selection → posting a request → viewing it on live feed → accepting and chatting anonymously*

---

## AI Tools Used

**Tool Used:** Google Gemini\

**Purpose:** iterative feature development.
- JS application logic
- Debugging and cleanup of JS state management

**Percentage of AI-generated code:** ~60%

**Human Contributions:**
- Product vision and feature specification
- UX flow decisions and iterative design feedback
- Color palette and branding direction (Deep Rose & Mauve theme)
- Naming ("FloWing") and tone of voice for the app

---

## Team Contributions

- Saniya Sabu: Product concept, UX research, feature specification
- Sarayu Suresh: Frontend design direction, color system, user testing, deployment


---

## License

This project is licensed under the MIT License.

---

Made with ❤️ at TinkerHub
