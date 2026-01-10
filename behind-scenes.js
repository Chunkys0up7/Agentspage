// Development Timeline Data
const developmentIterations = [
    {
        iteration: 1,
        userRequest: "Build an interactive HTML presentation about AI agents. Make it very interactive and explain concepts well. Audience is non-technical and AI-curious.",
        agentThinking: [
            "Analyzing requirements: interactive, educational, non-technical audience",
            "Planning structure: hero section, agent types grid, interactive demos",
            "Choosing tech stack: vanilla JS for simplicity, CSS animations for interactivity",
            "Designing 7 agent types with real-world analogies"
        ],
        codeGenerated: [
            { file: "index.html", lines: 285, description: "Main page structure with hero, agent cards, demos" },
            { file: "styles.css", lines: 1200, description: "Complete styling with animations and responsive design" },
            { file: "script.js", lines: 400, description: "Interactive demos with text input" }
        ],
        result: "Initial presentation with 7 agent types and text-input demos",
        visual: "Created hero section with Perceive → Think → Act flow, agent cards with difficulty badges, and interactive text input demos"
    },
    {
        iteration: 2,
        userRequest: "The colour scheme and emojis are great but look a little unprofessional - can you tidy up a bit. And for the demos, rather than have someone type something in - can you repopulate and show the path the agents would take?",
        agentThinking: [
            "User feedback: design too playful, needs professional appearance",
            "Analyzing color psychology: blues convey trust and technology",
            "Rethinking demo interaction: pre-populated scenarios better for presentations",
            "Planning walkthrough animation: step-by-step visual progression"
        ],
        codeGenerated: [
            { file: "styles.css", changes: "Updated color palette from purple (#667eea) to professional blue (#2563EB)", description: "Changed hero gradient, reduced emoji sizes, removed bouncing animations" },
            { file: "script.js", changes: "Replaced text input with automated walkthroughs", description: "Added pre-populated scenarios, step-by-step animations, progress bars" }
        ],
        result: "Professional color scheme with automated demo walkthroughs",
        visual: "Dark blue hero gradient, refined animations, pre-populated demos showing agent decision paths"
    },
    {
        iteration: 3,
        userRequest: "I would like a second page added that explains key tools and what they do in the process (LangChain, MCP, etc.)",
        agentThinking: [
            "Researching AI frameworks: LangChain, MCP, LlamaIndex, AutoGen, CrewAI, LangGraph",
            "Planning page structure: consistent with index.html design patterns",
            "Designing stack diagram: visual hierarchy of architecture layers",
            "Creating decision guide: when to use each tool"
        ],
        codeGenerated: [
            { file: "tools.html", lines: 350, description: "New page with 6 tool cards and integration examples" },
            { file: "styles.css", changes: "Added navigation bar styles", description: "Created sticky nav with backdrop blur, added tool card styles" },
            { file: "index.html", changes: "Added navigation header", description: "Inserted nav element linking to tools page" }
        ],
        result: "Tools & Frameworks page with navigation system",
        visual: "Multi-page site with sticky navigation, tool cards showing capabilities and use cases"
    },
    {
        iteration: 4,
        userRequest: "I was asked to add guardrails in the presentation as well. [Provides extensive research on safety frameworks, EU AI Act, NIST RMF, defense-in-depth]",
        agentThinking: [
            "Analyzing safety requirements: defense-in-depth, risk tiers, compliance",
            "Designing 5-layer guardrail system: Input → Processing → Output → HITL → Monitoring",
            "Creating interactive threat scenarios: real examples of guardrails in action",
            "Planning governance framework: metrics, timeline, regulatory alignment"
        ],
        codeGenerated: [
            { file: "guardrails.html", lines: 450, description: "Comprehensive safety page with layers, scenarios, governance" },
            { file: "styles.css", changes: "Added color-coded layer styles", description: "Green (input), blue (processing), purple (output), amber (HITL), red (monitoring)" },
            { file: "script.js", changes: "Added scenario expansion functions", description: "Interactive threat scenario cards" }
        ],
        result: "Guardrails & Safety page with defense-in-depth framework",
        visual: "5-layer vertical flow, 4 interactive threat scenarios, governance metrics, compliance table"
    },
    {
        iteration: 5,
        userRequest: "It would be cool to show how an agent built this project - can you think of an interactive cool way to show that as well?",
        agentThinking: [
            "Meta concept: show the development process itself",
            "Planning interactive timeline: walkthrough of all 5 iterations",
            "Designing decision tree: visualize agent reasoning at key points",
            "Creating code evolution gallery: before/after comparisons",
            "Linking agent types: show which behaviors were used when"
        ],
        codeGenerated: [
            { file: "behind-scenes.html", lines: 600, description: "This page - development journey, decisions, evolution" },
            { file: "behind-scenes.js", lines: 300, description: "Timeline animation, decision tree, code comparison" },
            { file: "styles.css", changes: "Added timeline, decision node, evolution card styles", description: "Timeline container, code-window animation, comparison tabs" }
        ],
        result: "Behind the Scenes page showing AI agent development process",
        visual: "Animated timeline, clickable decision tree, before/after code comparisons, agent type examples"
    }
];

// Animation state
let timelineAnimationRunning = false;

// Start Development Walkthrough
async function startDevelopmentWalkthrough() {
    if (timelineAnimationRunning) return;

    timelineAnimationRunning = true;
    const container = document.getElementById('timeline-container');
    const progressContainer = document.getElementById('progress-container');
    const progressFill = document.getElementById('timeline-progress');
    const progressLabel = document.getElementById('progress-label');
    const replayControls = document.getElementById('replay-controls');

    // Clear previous content
    container.innerHTML = '';
    progressContainer.style.display = 'block';
    replayControls.style.display = 'none';

    // Animate through each iteration
    for (let i = 0; i < developmentIterations.length; i++) {
        const iteration = developmentIterations[i];
        const progress = ((i + 1) / developmentIterations.length) * 100;

        // Update progress
        progressFill.style.width = progress + '%';
        progressLabel.textContent = `Iteration ${i + 1} of ${developmentIterations.length}`;

        // Create iteration card
        const iterationCard = document.createElement('div');
        iterationCard.className = 'iteration-card';
        iterationCard.innerHTML = `
            <div class="iteration-header">
                <div class="iteration-number">Iteration ${iteration.iteration}</div>
            </div>

            <div class="iteration-step user-step">
                <div class="step-label">
                    <span class="step-icon">💬</span>
                    <span class="step-title">User Request</span>
                </div>
                <div class="step-content">"${iteration.userRequest}"</div>
            </div>

            <div class="iteration-step thinking-step">
                <div class="step-label">
                    <span class="step-icon">🧠</span>
                    <span class="step-title">Agent Thinking</span>
                </div>
                <div class="step-content">
                    <ul class="thinking-list">
                        ${iteration.agentThinking.map(thought => `<li>${thought}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="iteration-step code-step">
                <div class="step-label">
                    <span class="step-icon">💻</span>
                    <span class="step-title">Code Generated</span>
                </div>
                <div class="step-content">
                    <div class="code-files">
                        ${iteration.codeGenerated.map(file => `
                            <div class="code-file">
                                <div class="file-name">${file.file}${file.lines ? ` (${file.lines} lines)` : ''}</div>
                                <div class="file-description">${file.description || file.changes || ''}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="iteration-step result-step">
                <div class="step-label">
                    <span class="step-icon">✨</span>
                    <span class="step-title">Result</span>
                </div>
                <div class="step-content">
                    <div class="result-summary">${iteration.result}</div>
                    <div class="result-details">${iteration.visual}</div>
                </div>
            </div>
        `;

        container.appendChild(iterationCard);

        // Animate card appearance
        await new Promise(resolve => setTimeout(resolve, 100));
        iterationCard.style.opacity = '1';
        iterationCard.style.transform = 'translateY(0)';

        // Wait before next iteration (shorter delay for smoother experience)
        if (i < developmentIterations.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
    }

    // Show replay button
    await new Promise(resolve => setTimeout(resolve, 500));
    replayControls.style.display = 'flex';
    timelineAnimationRunning = false;
}

// Replay Development
function replayDevelopment() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';
    startDevelopmentWalkthrough();
}

// Toggle Decision Node
function toggleDecisionNode(nodeId) {
    const details = document.getElementById('decision-' + nodeId);
    const allDetails = document.querySelectorAll('.decision-details');
    const allNodes = document.querySelectorAll('.decision-node:not(.root-node)');

    // Close all other nodes
    allDetails.forEach(detail => {
        if (detail.id !== 'decision-' + nodeId) {
            detail.classList.remove('open');
        }
    });

    // Remove active state from all nodes
    allNodes.forEach(node => {
        if (!node.onclick || node.onclick.toString().indexOf(nodeId) === -1) {
            node.classList.remove('active');
        }
    });

    // Toggle current node
    details.classList.toggle('open');

    // Find and toggle the clicked node
    const clickedNode = Array.from(allNodes).find(node =>
        node.onclick && node.onclick.toString().indexOf(nodeId) > -1
    );
    if (clickedNode) {
        clickedNode.classList.toggle('active');
    }
}

// Switch Evolution Tab
function switchTab(cardId, version) {
    // Get all tabs and versions for this card
    const card = document.querySelector(`.evolution-card h3`).parentElement;
    const tabs = card.querySelectorAll('.tab-btn');
    const versions = card.querySelectorAll('.code-version');

    // Find the specific card by looking at the h3 text content
    const allCards = document.querySelectorAll('.evolution-card');
    let targetCard = null;

    allCards.forEach(card => {
        const tabs = card.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            if (tab.onclick && tab.onclick.toString().indexOf(cardId) > -1 && tab.onclick.toString().indexOf(version) > -1) {
                targetCard = card;
            }
        });
    });

    if (!targetCard) return;

    // Update tabs
    const cardTabs = targetCard.querySelectorAll('.tab-btn');
    cardTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().includes(version)) {
            tab.classList.add('active');
        }
    });

    // Update versions
    const cardVersions = targetCard.querySelectorAll('.code-version');
    cardVersions.forEach(versionDiv => {
        versionDiv.classList.remove('active');
        if (versionDiv.id === `${cardId}-${version}`) {
            versionDiv.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add typing animation to hero code
    const codeElement = document.getElementById('typing-code');
    if (codeElement) {
        codeElement.style.opacity = '1';
    }

    // Add scroll animations to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe section elements
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
