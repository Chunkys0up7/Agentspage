// Agent Demo Data - Pre-populated scenarios with visual walkthroughs

const agentDemos = {
    reflex: {
        title: "Simple Reflex Agent",
        subtitle: "Email Spam Detection",
        scenario: "Email: 'URGENT: Click here to verify your account and claim $500!'",
        steps: [
            {
                label: "Input Received",
                content: "Email arrives: 'URGENT: Click here to verify your account and claim $500!'",
                highlight: "perceive",
                icon: "📧"
            },
            {
                label: "Pattern Matching",
                content: "Scanning for trigger keywords: URGENT ✓ | Click here ✓ | $500 ✓",
                highlight: "think",
                icon: "🔍"
            },
            {
                label: "Rule Evaluation",
                content: "IF keywords >= 2 spam indicators THEN category = SPAM",
                highlight: "think",
                icon: "⚙️"
            },
            {
                label: "Action Taken",
                content: "Move to spam folder immediately",
                highlight: "act",
                icon: "✅"
            }
        ],
        output: {
            title: "Result: SPAM",
            details: "3 spam indicators detected. Email categorized without any memory of previous emails or context."
        },
        keyInsight: "No memory - decisions made purely on current input using predefined rules"
    },

    model: {
        title: "Model-Based Agent",
        subtitle: "Customer Support Conversation",
        scenario: "User asks follow-up questions about their order",
        steps: [
            {
                label: "First Message",
                content: "User: 'Where is my order?'",
                highlight: "perceive",
                icon: "💬"
            },
            {
                label: "Context Check",
                content: "Checking conversation history... No previous context found. Retrieving user order #A1234",
                highlight: "think",
                icon: "🧠"
            },
            {
                label: "Store Context",
                content: "Memory updated: Order #A1234, Status: Shipped, User inquiry: delivery",
                highlight: "think",
                icon: "💾"
            },
            {
                label: "Response",
                content: "Agent: 'Your order #A1234 shipped yesterday. Expected delivery: 2-3 days.'",
                highlight: "act",
                icon: "✅"
            },
            {
                label: "Follow-up Question",
                content: "User: 'Can I change the delivery address?'",
                highlight: "perceive",
                icon: "💬"
            },
            {
                label: "Use Remembered Context",
                content: "Agent recalls order #A1234 is already shipped. Uses this context to provide accurate answer.",
                highlight: "think",
                icon: "🔗"
            },
            {
                label: "Contextual Response",
                content: "Agent: 'Since order #A1234 has shipped, contact carrier to redirect delivery.'",
                highlight: "act",
                icon: "✅"
            }
        ],
        output: {
            title: "Result: Contextual Support",
            details: "Agent remembered the order number and shipping status from earlier in the conversation, providing accurate follow-up answers."
        },
        keyInsight: "Maintains internal state - remembers conversation context to provide coherent multi-turn interactions"
    },

    goal: {
        title: "Goal-Based Agent",
        subtitle: "Travel Booking Assistant",
        scenario: "User wants to book a weekend trip to San Francisco",
        steps: [
            {
                label: "Goal Identified",
                content: "Goal: Book complete weekend trip to San Francisco (flight + hotel)",
                highlight: "perceive",
                icon: "🎯"
            },
            {
                label: "Plan Creation",
                content: "Breaking goal into sub-goals:\n1. Find flight options\n2. Find hotel options\n3. Check availability\n4. Compare options\n5. Make booking",
                highlight: "think",
                icon: "📋"
            },
            {
                label: "Execute Sub-Goal 1",
                content: "Searching flights... Found 12 options for weekend dates",
                highlight: "act",
                icon: "✈️"
            },
            {
                label: "Execute Sub-Goal 2",
                content: "Searching hotels near Union Square... Found 8 available properties",
                highlight: "act",
                icon: "🏨"
            },
            {
                label: "Execute Sub-Goal 3",
                content: "Cross-checking dates: Flight Sat 9am + Hotel Sat-Sun = Compatible ✓",
                highlight: "think",
                icon: "📅"
            },
            {
                label: "Execute Sub-Goal 4",
                content: "Sorting by best value: Flight $299 + Hotel $180/night = Total $659",
                highlight: "think",
                icon: "💰"
            },
            {
                label: "Goal Achieved",
                content: "Complete package ready for booking. All sub-goals accomplished.",
                highlight: "act",
                icon: "✅"
            }
        ],
        output: {
            title: "Result: Complete Travel Package",
            details: "Flight AA123 (Sat 9am) + Hilton Union Square (Sat-Sun) = $659 total. All steps planned and executed to achieve the main goal."
        },
        keyInsight: "Plans ahead - breaks complex goals into actionable steps and executes them systematically"
    },

    utility: {
        title: "Utility-Based Agent",
        subtitle: "Route Optimization",
        scenario: "Finding the best route from home to airport during rush hour",
        steps: [
            {
                label: "Identify Options",
                content: "3 routes available:\n• Highway Route\n• Scenic Route\n• City Route",
                highlight: "perceive",
                icon: "🗺️"
            },
            {
                label: "Define Utility Factors",
                content: "Factors to optimize:\n• Travel time (40% weight)\n• Cost (20%)\n• Reliability (25%)\n• Comfort (15%)",
                highlight: "think",
                icon: "⚖️"
            },
            {
                label: "Evaluate Highway Route",
                content: "Time: 35min (Good) | Cost: $12 toll (Medium) | Reliability: 70% (Traffic) | Comfort: High\nUtility Score: 72/100",
                highlight: "think",
                icon: "📊"
            },
            {
                label: "Evaluate Scenic Route",
                content: "Time: 55min (Poor) | Cost: $0 (Best) | Reliability: 95% (Excellent) | Comfort: High\nUtility Score: 68/100",
                highlight: "think",
                icon: "📊"
            },
            {
                label: "Evaluate City Route",
                content: "Time: 42min (Medium) | Cost: $3 (Good) | Reliability: 60% (Rush hour) | Comfort: Low\nUtility Score: 64/100",
                highlight: "think",
                icon: "📊"
            },
            {
                label: "Compare Trade-offs",
                content: "Highway: Fastest but expensive and traffic risk\nScenic: Reliable but slow\nCity: Cheap but uncomfortable and risky",
                highlight: "think",
                icon: "🔄"
            },
            {
                label: "Optimal Choice",
                content: "Highway Route selected - best balance of speed and reliability despite higher cost",
                highlight: "act",
                icon: "✅"
            }
        ],
        output: {
            title: "Result: Highway Route (72/100)",
            details: "Chose highway despite $12 toll because time reliability matters most for airport trips. Optimized for best overall outcome, not just cheapest or fastest."
        },
        keyInsight: "Weighs trade-offs - evaluates multiple factors with different priorities to find the optimal solution"
    },

    learning: {
        title: "Learning Agent",
        subtitle: "Email Priority Prediction",
        scenario: "Agent learns to predict important emails over time",
        steps: [
            {
                label: "Initial State (Day 1)",
                content: "New email arrives from boss. Model accuracy: 45% (untrained)",
                highlight: "perceive",
                icon: "📧"
            },
            {
                label: "Make Prediction",
                content: "Prediction: Normal priority (INCORRECT - should be High)",
                highlight: "think",
                icon: "🤔"
            },
            {
                label: "Receive Feedback",
                content: "User marks as High Priority. Agent records the mistake.",
                highlight: "perceive",
                icon: "📝"
            },
            {
                label: "Update Model (Week 1)",
                content: "Learning from 47 labeled examples. Updating weights... Accuracy improved to 68%",
                highlight: "think",
                icon: "📈"
            },
            {
                label: "New Email (Week 2)",
                content: "Similar email from boss arrives. Model accuracy now: 68%",
                highlight: "perceive",
                icon: "📧"
            },
            {
                label: "Improved Prediction",
                content: "Prediction: High priority ✓ (CORRECT - learned from past feedback)",
                highlight: "think",
                icon: "✅"
            },
            {
                label: "Continued Learning (Month 1)",
                content: "After 350 examples... Accuracy: 89%. Agent now reliably predicts priorities.",
                highlight: "think",
                icon: "🎯"
            }
        ],
        output: {
            title: "Result: 89% Accuracy",
            details: "Started at 45% (random guessing), learned from user feedback over time, now accurately predicts email priority in 9/10 cases."
        },
        keyInsight: "Improves with experience - uses feedback to update its model and make better predictions over time"
    },

    knowledge: {
        title: "Knowledge Retrieval Agent (RAG)",
        subtitle: "Technical Documentation Q&A",
        scenario: "User asks: 'How do I reset my password?'",
        steps: [
            {
                label: "Query Received",
                content: "Question: 'How do I reset my password?'",
                highlight: "perceive",
                icon: "❓"
            },
            {
                label: "Query Analysis",
                content: "Converting question to search terms: password reset, authentication, account recovery",
                highlight: "think",
                icon: "🔍"
            },
            {
                label: "Search Knowledge Base",
                content: "Searching 1,200 documentation pages using semantic similarity...",
                highlight: "act",
                icon: "📚"
            },
            {
                label: "Retrieve Relevant Docs",
                content: "Found 3 relevant documents:\n• 'Password Reset Guide' (95% match)\n• 'Account Security FAQ' (87% match)\n• 'Login Troubleshooting' (78% match)",
                highlight: "think",
                icon: "📄"
            },
            {
                label: "Extract Key Information",
                content: "From top documents:\n1. Click 'Forgot Password'\n2. Enter email\n3. Check email for reset link\n4. Link expires in 24 hours",
                highlight: "think",
                icon: "✂️"
            },
            {
                label: "Synthesize Answer",
                content: "Combining information from multiple sources into coherent response...",
                highlight: "think",
                icon: "✨"
            },
            {
                label: "Provide Answer",
                content: "Complete answer with step-by-step instructions from official documentation + source citations",
                highlight: "act",
                icon: "✅"
            }
        ],
        output: {
            title: "Result: Accurate Answer with Sources",
            details: "To reset your password: 1) Click 'Forgot Password' on login page, 2) Enter your email, 3) Check email for reset link (valid 24hrs), 4) Create new password. [Sources: Password Reset Guide p.3, Account Security FAQ]"
        },
        keyInsight: "Retrieves then generates - searches knowledge base for relevant information, then synthesizes accurate answers with source attribution"
    },

    multi: {
        title: "Multi-Agent System",
        subtitle: "Content Creation Workflow",
        scenario: "Create a blog post about AI trends",
        steps: [
            {
                label: "Coordinator Agent",
                content: "Task received: Create blog post on AI trends. Assigning work to specialist agents...",
                highlight: "perceive",
                icon: "🎯"
            },
            {
                label: "Research Agent (Parallel)",
                content: "Agent 1 working: Searching latest AI news, analyzing trends, gathering statistics...\n✓ Found 5 major trends\n✓ Collected 12 relevant statistics",
                highlight: "think",
                icon: "🔬"
            },
            {
                label: "Writer Agent (Parallel)",
                content: "Agent 2 working: Waiting for research... Now drafting article structure, writing introduction...\n✓ Created outline\n✓ Wrote intro paragraph",
                highlight: "think",
                icon: "✍️"
            },
            {
                label: "SEO Agent (Parallel)",
                content: "Agent 3 working: Analyzing keywords, checking search volume, optimizing for 'AI trends 2025'...\n✓ Identified 8 target keywords\n✓ Suggested meta description",
                highlight: "think",
                icon: "📊"
            },
            {
                label: "Collaboration",
                content: "Agents sharing findings:\n• Research → Writer: Here are the 5 trends\n• SEO → Writer: Use these keywords naturally\n• Writer → All: Draft ready for review",
                highlight: "act",
                icon: "🤝"
            },
            {
                label: "Editor Agent",
                content: "Agent 4 reviewing: Checking grammar, fact-checking statistics, ensuring keyword placement...\n✓ Fixed 3 grammar issues\n✓ Verified all statistics\n✓ Improved readability score",
                highlight: "think",
                icon: "📝"
            },
            {
                label: "Coordinator Synthesis",
                content: "Combining all contributions: Research data + Well-written content + SEO optimization + Professional editing = Complete blog post",
                highlight: "act",
                icon: "✅"
            }
        ],
        output: {
            title: "Result: Professional Blog Post",
            details: "1,200-word article covering 5 AI trends, optimized for 'AI trends 2025' (search volume: 8,100/mo), fact-checked, professionally edited. Created in 4 minutes with 4 specialized agents working in parallel."
        },
        keyInsight: "Team coordination - multiple specialized agents work in parallel and collaborate, each contributing their expertise to solve complex tasks"
    }
};

// Comparison Scenarios
const comparisonScenarios = {
    email: {
        title: "Sorting Incoming Emails",
        input: "URGENT: You've won $1000! Click here to claim your prize within 24 hours!",
        agents: [
            {
                name: "Simple Reflex Agent",
                steps: [
                    "Scans for keywords: 'URGENT' ✓, 'won' ✓, 'click here' ✓",
                    "Matches spam rule pattern",
                    "Result: SPAM (3 trigger words found)"
                ]
            },
            {
                name: "Model-Based Agent",
                steps: [
                    "Checks keywords + remembers you never entered any contests",
                    "Compares to your typical email patterns",
                    "Result: SPAM + Reason: 'No contest entry in history'"
                ]
            },
            {
                name: "Learning Agent",
                steps: [
                    "Uses trained model from 1,000s of previous emails",
                    "Recognizes phishing pattern with 95% confidence",
                    "Gets smarter each time you mark spam/not spam",
                    "Result: SPAM (High confidence, improves with feedback)"
                ]
            }
        ]
    },
    travel: {
        title: "Planning a Trip",
        input: "Plan a 3-day trip to San Francisco",
        agents: [
            {
                name: "Simple Reflex Agent",
                steps: [
                    "Detects 'trip' keyword",
                    "Result: 'Here are hotels in San Francisco' (no real planning)"
                ]
            },
            {
                name: "Goal-Based Agent",
                steps: [
                    "Goal: Create 3-day itinerary",
                    "Breaks down: Day 1 - arrival & downtown, Day 2 - sightseeing, Day 3 - departure",
                    "Plans activities hour-by-hour",
                    "Result: Complete structured itinerary with times and locations"
                ]
            },
            {
                name: "Utility-Based Agent",
                steps: [
                    "Considers: budget, travel time, interests, weather",
                    "Weighs trade-offs (tourist spots vs hidden gems)",
                    "Optimizes for best experience/cost ratio",
                    "Result: Balanced plan maximizing value: mid-range hotels, mix of popular & local spots"
                ]
            }
        ]
    },
    support: {
        title: "Customer Support Question",
        input: "My package hasn't arrived. I ordered it last week.",
        agents: [
            {
                name: "Simple Reflex Agent",
                steps: [
                    "Detects 'package' keyword",
                    "Result: Generic response: 'Check tracking number on our website'"
                ]
            },
            {
                name: "Model-Based Agent",
                steps: [
                    "Remembers: User is John, ordered item #X123",
                    "Checks system: Order placed 7 days ago, still in transit",
                    "Result: 'Hi John, your order #X123 is on the way. Expected delivery: 2 days. Tracking: [link]'"
                ]
            },
            {
                name: "Multi-Agent System",
                steps: [
                    "Agent 1: Retrieves order details from database",
                    "Agent 2: Checks shipping status with carrier",
                    "Agent 3: Evaluates if compensation needed",
                    "Coordinator: Combines info",
                    "Result: Complete answer + tracking + apology + $10 discount for delay"
                ]
            }
        ]
    }
};

// Open Demo Modal with Automated Walkthrough
function openDemo(agentType) {
    const modal = document.getElementById('demo-modal');
    const container = document.getElementById('demo-container');
    const demo = agentDemos[agentType];

    container.innerHTML = `
        <div class="demo-header">
            <h2>${demo.title}</h2>
            <p class="demo-subtitle">${demo.subtitle}</p>
            <div class="scenario-box">
                <strong>Scenario:</strong> ${demo.scenario}
            </div>
        </div>

        <div class="demo-walkthrough">
            <div class="progress-bar">
                <div class="progress-fill" id="progress-fill"></div>
            </div>
            <div id="steps-container" class="steps-container"></div>
        </div>

        <div id="demo-output" class="demo-output" style="display: none;">
            <h3>${demo.output.title}</h3>
            <p>${demo.output.details}</p>
            <div class="key-insight">
                <strong>Key Insight:</strong> ${demo.keyInsight}
            </div>
        </div>

        <div class="demo-controls">
            <button class="control-btn" id="start-btn" onclick="startWalkthrough('${agentType}')">Start Walkthrough</button>
            <button class="control-btn secondary" id="replay-btn" style="display: none;" onclick="startWalkthrough('${agentType}')">Replay</button>
        </div>
    `;

    modal.style.display = 'block';
}

// Animated Walkthrough
async function startWalkthrough(agentType) {
    const demo = agentDemos[agentType];
    const stepsContainer = document.getElementById('steps-container');
    const progressFill = document.getElementById('progress-fill');
    const outputDiv = document.getElementById('demo-output');
    const startBtn = document.getElementById('start-btn');
    const replayBtn = document.getElementById('replay-btn');

    // Reset
    stepsContainer.innerHTML = '';
    outputDiv.style.display = 'none';
    startBtn.style.display = 'none';
    replayBtn.style.display = 'none';
    progressFill.style.width = '0%';

    // Animate each step
    for (let i = 0; i < demo.steps.length; i++) {
        const step = demo.steps[i];
        const stepDiv = document.createElement('div');
        stepDiv.className = `step-item ${step.highlight}`;
        stepDiv.innerHTML = `
            <div class="step-icon">${step.icon}</div>
            <div class="step-content">
                <div class="step-label">${step.label}</div>
                <div class="step-text">${step.content.replace(/\n/g, '<br>')}</div>
            </div>
        `;

        stepsContainer.appendChild(stepDiv);

        // Animate progress
        const progress = ((i + 1) / demo.steps.length) * 100;
        progressFill.style.width = progress + '%';

        // Wait before next step
        await new Promise(resolve => setTimeout(resolve, 1200));
    }

    // Show output
    await new Promise(resolve => setTimeout(resolve, 500));
    outputDiv.style.display = 'block';
    outputDiv.classList.add('fade-in');
    replayBtn.style.display = 'inline-block';
}

// Close Demo Modal
function closeDemo() {
    document.getElementById('demo-modal').style.display = 'none';
}

// Load Comparison Scenario
function loadScenario(scenarioType) {
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    const scenario = comparisonScenarios[scenarioType];
    const container = document.getElementById('comparison-content');

    container.innerHTML = `
        <div class="scenario-input">
            <h3>Scenario: ${scenario.title}</h3>
            <p><strong>Input:</strong> "${scenario.input}"</p>
        </div>

        ${scenario.agents.map(agent => `
            <div class="comparison-item">
                <h4>${agent.name}</h4>
                <ul class="comparison-steps">
                    ${agent.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
    `;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('demo-modal');
    if (event.target == modal) {
        closeDemo();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadScenario('email');

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDemo();
        }
    });

    // Intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.agent-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
