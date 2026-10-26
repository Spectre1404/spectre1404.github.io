/* Site content. Every page and the answer box render from this object.
   Keep the part after "window.SITE =" valid JSON: double-quoted keys and strings, no comments, no trailing commas. */
   window.SITE = {
    "config": {
      "draft": false,
      "updated": "October 2026",
      "email": "shivanshamba1404@gmail.com",
      "linkedin": "https://www.linkedin.com/in/shivanshamba",
      "github": "https://github.com/Spectre1404",
      "resume": "resume.pdf",
      "headshot": "images/headshot.jpg",
      "askEndpoint": ""
    },
    "home": {
      "lede": "I build AI systems where code owns the logic and every claim points to a source.",
      "sub": "Data Science and Finance at UIC, December 2026. AI product and data systems at mHUB in Chicago."
    },
    "pages": {
      "builds": {
        "title": "Builds",
        "intro": "Each entry lists what you can check: tests, data, and code.",
        "ask": [
          "Tell me about Mandate Guard",
          "What is Agent Visa?",
          "What research has he done?"
        ]
      },
      "work": {
        "title": "Work",
        "intro": "Roles, teaching, and entrepreneurship since 2024, current first.",
        "ask": [
          "Where does he work now?",
          "What has he done in entrepreneurship?",
          "Has he taught?"
        ]
      },
      "stack": {
        "title": "How I build",
        "intro": "The method first, then the tools. Each tool links to the work where I used it.",
        "ask": [
          "How does fenced generation work?",
          "What AI tools does he use?",
          "What fintech technology has he worked with?"
        ]
      },
      "notes": {
        "title": "Field notes",
        "intro": "Hackathons, conferences, and events from 2026, in order.",
        "ask": [
          "Which events has he been to?",
          "What did he do at TechCrunch Disrupt?"
        ]
      },
      "writing": {
        "title": "Writing",
        "intro": "What I write and where it’s published.",
        "ask": [
          "What does he write about?"
        ]
      },
      "about": {
        "title": "About",
        "intro": "",
        "ask": [
          "Where did he study?",
          "How can I contact him?"
        ]
      }
    },
    "about": {
      "paragraphs": [
        "I’m Shiv Amba. I study Data Science, with a concentration in Business Analytics, and Finance at the University of Illinois Chicago, and finish both degrees in December 2026.",
        "My work sits where analytics, AI, and finance meet. I build data pipelines and AI workflows, and I build quantitative models for business, financial, and healthcare problems.",
        "The rule I build by: the model writes language, code owns the logic, and every claim points to a source before it ships.",
        "At mHUB, Chicago’s hardtech incubator, I build AI and data systems across its business units. On my own time I build trust infrastructure for agentic commerce: Mandate Guard and Agent Visa.",
        "I led UIC’s chapter of the Collegiate Entrepreneurs’ Organization from 2024 to 2026, first as vice president and then as president. Membership grew 150% to 70 students across 20 majors, and partnerships with startup founders led to 5 member hires.",
        "I’ve taught 200+ students in Chicago Tech Circle’s Data & AI course and mentored 500+ students in calculus."
      ],
      "summary": "He studies Data Science (Business Analytics concentration) and Finance at UIC, finishing in December 2026, and builds data pipelines, AI workflows, and quantitative models.",
      "facts": [
        [
          "Based in",
          "Chicago"
        ],
        [
          "Languages",
          "English, Hindi, French (DELF A2, through Alliance Française)"
        ]
      ]
    },
    "education": {
      "degrees": [
        {
          "degree": "B.S. Data Science, concentration in Business Analytics",
          "school": "University of Illinois Chicago",
          "when": "Jan 2023 – Dec 2026"
        },
        {
          "degree": "B.S. Finance",
          "school": "University of Illinois Chicago",
          "when": "Jan 2023 – Dec 2026"
        }
      ],
      "gpa": "3.52, Dean’s List",
      "coursework": "Artificial Intelligence (RAG), Machine Learning, Big Data, Databases, Data Mining, Statistical Computing (R), Econometrics, Time Series, Data Science for Business, Corporate Finance, Investments, Portfolio Management"
    },
    "certifications": {
      "items": [
        {
          "name": "AI Engineering Professional Certificate",
          "issuer": "CodePath",
          "when": "May 2026",
          "url": "https://drive.google.com/file/d/17-ytWTOVip_xtMRiMqx-dwuwE3kXN2mv/view?usp=sharing"
        },
        {
          "name": "Data Analyst in Databricks",
          "issuer": "DataCamp",
          "when": "Mar 2026"
        },
        {
          "name": "Associate Data Analyst in SQL",
          "issuer": "DataCamp",
          "when": "Jan 2026"
        },
        {
          "name": "Microsoft Excel Fundamentals Track",
          "issuer": "DataCamp",
          "when": "Dec 2025"
        },
        {
          "name": "Data Literacy",
          "issuer": "DataCamp",
          "when": "Dec 2025"
        },
        {
          "name": "GitHub Foundations",
          "issuer": "DataCamp",
          "when": "Oct 2025"
        },
        {
          "name": "Advanced Python",
          "issuer": "Udemy",
          "when": "Jul 2024"
        },
        {
          "name": "IBM AI Foundations for Business Specialization",
          "issuer": "IBM",
          "when": "Mar 2024"
        }
      ]
    },
    "builds": [
      {
        "id": "b-mandate",
        "feature": true,
        "title": "Mandate Guard",
        "meta": "Aug 2026. Built solo at the Prava × Devfolio hackathon; judges from Visa and OpenAI.",
        "body": "Payment authorization controls for AI agents. A purchase outside the user’s mandate is blocked, and every decision is written to evidence that can be exported for a dispute.",
        "pipe": [
          {
            "label": "Mandate",
            "note": "plain language"
          },
          {
            "label": "Compiler"
          },
          {
            "label": "7-rule gate",
            "note": "no LLM",
            "gate": true
          },
          {
            "label": "Payment rail"
          },
          {
            "label": "Hash-chained ledger",
            "note": "append-only"
          },
          {
            "label": "Evidence",
            "note": "PDF, JSON"
          }
        ],
        "evidence": [
          [
            "372",
            "tests"
          ],
          [
            "7",
            "rules in the gate"
          ],
          [
            "0",
            "model calls in the decision path"
          ],
          [
            "Live",
            "payment-sandbox run confirmed"
          ]
        ],
        "links": [
          {
            "label": "Code",
            "url": "https://github.com/Spectre1404/mandate-guard"
          },
          {
            "label": "Evidence packet (PDF)",
            "url": "https://github.com/Spectre1404/mandate-guard/blob/main/evidence/sample/evidence-packet.pdf"
          }
        ],
        "summary": "Mandate Guard blocks AI-agent purchases outside a user’s mandate with a seven-rule deterministic gate and writes each decision to a hash-chained evidence ledger.",
        "more": [
          "A plain-language mandate is compiled into rules, and a seven-rule gate of pure functions decides each agent purchase with no model in the decision path.",
          "Every decision goes to an append-only, hash-chained ledger that exports as PDF or JSON for disputes.",
          "It has 372 tests, and a live payment-sandbox run is confirmed."
        ]
      },
      {
        "id": "b-visa",
        "title": "Agent Visa",
        "meta": "Aug 2026. Egoist Machines AI Passport Ideathon, Agents track.",
        "quote": "The passport proves who you are. The Agent Visa proves what your agent may do.",
        "body": "Signing happens in the browser with ECDSA P-256, so the model never touches keys. Seven fail-fast rules authenticate before anything is interpreted. Delegated permissions can only narrow, receipts are hash-chained, and three denials in a row suspend the agent.",
        "links": [
          {
            "label": "Code",
            "url": "https://github.com/Spectre1404/agent-visa"
          }
        ],
        "summary": "Agent Visa is a protocol that proves what an AI agent is allowed to do, with browser-side ECDSA P-256 signing and hash-chained receipts.",
        "more": [
          "Agent Visa proves what an AI agent is allowed to do, not only who it is.",
          "Signing happens in the browser with ECDSA P-256, so the model never touches keys, and seven fail-fast rules run with no model in the trust path.",
          "Delegated permissions can only narrow, receipts are hash-chained, and three denials in a row suspend the agent.",
          "The planner in its live agent mode runs on the Anthropic Messages API."
        ]
      },
      {
        "id": "b-strata",
        "title": "Strata",
        "meta": "Oct 2026. MongoDB hackathon at SF Tech Week.",
        "body": "A trading-research agent that keeps a permanent record of every attempt in MongoDB Atlas. Tested on real market data.",
        "links": [
          {
            "label": "Code",
            "url": "https://github.com/Spectre1404/Strata"
          }
        ],
        "summary": "Strata is a trading-research agent that keeps a permanent record of every attempt in MongoDB Atlas, tested on real market data.",
        "more": [
          "Strata is a trading-research agent that keeps a permanent record of every attempt in MongoDB Atlas.",
          "It was tested on real market data.",
          "He built it at MongoDB’s hackathon during SF Tech Week."
        ]
      },
      {
        "id": "b-campus",
        "wide": true,
        "title": "CampusCare",
        "meta": "2026. HAL Lab, UIC. SwiftUI.",
        "body": "An iOS chatbot that answers student health-insurance questions from a curated 74-fact corpus. On the distress path the model only classifies; every reply comes from a list of pre-approved fixed strings.",
        "evidence": [
          [
            "74",
            "facts in the corpus"
          ],
          [
            "Fixed",
            "replies on the distress path"
          ]
        ],
        "links": [],
        "summary": "CampusCare is an iOS health-insurance chatbot grounded on a 74-fact corpus, with fixed pre-approved replies on its distress path.",
        "more": [
          "CampusCare is an iOS app built in SwiftUI that answers student health-insurance questions from a curated 74-fact corpus.",
          "On the distress path the model classifies the message, and the reply comes from a list of pre-approved fixed strings."
        ]
      }
    ],
    "research": [
      {
        "id": "r-risk",
        "short": "Risk scoring",
        "when": "Fall 2026, in progress",
        "title": "Cybersecurity risk scoring",
        "org": "UIC industry project, company under NDA",
        "body": "A composite risk score across five security signals, in a real-time Power BI dashboard. The work centers on the data model and on tracing each score back to its inputs."
      },
      {
        "id": "r-ppp",
        "short": "PPP study",
        "when": "Spring 2026",
        "title": "PPP loan forgiveness threshold and small-business survival",
        "org": "Causal inference in R",
        "body": "Estimated the causal effect of a policy threshold on 880K+ records with sharp and covariate regression discontinuity, triangular-kernel regression, and a McCrary density test."
      },
      {
        "id": "r-ceo",
        "short": "CEO pay study",
        "when": "Fall 2025",
        "title": "CEO pay sensitivity and industry competition",
        "org": "Econometrics in Python and SQL",
        "body": "Built a dataset of executive pay and market data, measured competition as HHI by SIC code, and ran OLS with HAC errors. Kept an assumptions log covering methods, data lineage, and QA."
      },
      {
        "id": "r-opt",
        "short": "Portfolio optimizer",
        "when": "Mar 2026",
        "title": "Mean-variance portfolio optimizer",
        "org": "Python, SciPy",
        "body": "A Markowitz optimizer that finds the max-Sharpe and min-variance portfolios, traces the efficient frontier, and writes a self-contained HTML report that compares the result against an equal-weight (1/N) benchmark. Long-only and fully invested. Guardrails are their own layer: input validation, constraint feasibility, PSD covariance, concentration warnings, and no-look-ahead checks.",
        "links": [
          {
            "label": "Code",
            "url": "https://github.com/Spectre1404/portfolio_optimizer"
          }
        ]
      },
      {
        "id": "r-pay",
        "short": "Payments research",
        "when": "",
        "title": "Payments sector equity research",
        "org": "Equity research",
        "body": "A coverage initiation framework for Visa and Mastercard, valued with DCF and comparable companies."
      }
    ],
    "work": [
      {
        "id": "w-mhub",
        "group": "now",
        "org": "mHUB",
        "place": "Chicago",
        "when": "Jun 2026 – now",
        "roles": [
          [
            "AI Product and Data Systems Intern",
            "Aug 2026 – now, hybrid"
          ],
          [
            "AI Agent and Platform Development Intern",
            "Jun – Aug 2026, on-site"
          ]
        ],
        "bullets": [
          "Built a GenAI data-enrichment pipeline (Python, Supabase, Claude API, n8n) for mHUB’s 2027 Energy Tech Accelerator. Every claim in a company profile must trace to a source field or fail validation before render, and web-sourced URLs pass two-stage verification. Research time for the accelerator team dropped about 70%; 70+ profiles filed; 64 offline tests passing.",
          "Built a two-stage contractor–client matching pipeline over 200+ records: SQL rules decide eligibility, then a model judges fit among at most 45 qualified candidates. Built the survey-to-database write path with email-keyed, newer-wins upserts.",
          "Ran a data-readiness audit across five business units and designed the AI knowledge-corpus strategy; presented findings and a stakeholder value matrix to leadership."
        ]
      },
      {
        "id": "w-ta",
        "short": "Data & AI TA",
        "group": "now",
        "org": "Chicago Tech Circle",
        "place": "Chicago",
        "when": "Aug 2025 – now",
        "roles": [
          [
            "Teaching Assistant, Data & AI",
            "Aug 2025 – now"
          ]
        ],
        "bullets": [
          "Taught 200+ students across majors to use production AI tools (n8n, Custom GPTs, Cursor, Claude Code) on business problems.",
          "Wrote course practices for responsible AI use, bias mitigation, and prompt engineering.",
          "Fall 2026, FIN 494 Financial Data and AI: own the module on data and AI tools in financial services, delivered the AI landscape lecture segment, and test-ran Project 1 end to end before release. Building the project’s WRDS (CRSP and Compustat) data pull in R."
        ]
      },
      {
        "id": "w-ctc",
        "short": "CTC internship",
        "group": "past",
        "org": "Chicago Tech Circle",
        "place": "Chicago",
        "when": "Mar – Jun 2026",
        "roles": [
          [
            "Applied AI Intern",
            "Mar – Jun 2026"
          ]
        ],
        "bullets": [
          "Built an AI job-matching pipeline for early-career job seekers with the Gemini and Adzuna APIs, iterating prompts and adversarial guardrails over five cycles; shipped solo in under a week.",
          "Built prompt libraries, API integrations, and human-in-the-loop approval gates, with evaluation and QA checks on model outputs before deployment. Wrote SOPs and documentation so the automations kept working after handoff."
        ]
      },
      {
        "id": "w-hal",
        "short": "HAL Lab",
        "group": "past",
        "org": "HAL Lab by Apple, UIC Innovation Center",
        "place": "Chicago",
        "when": "Feb – Aug 2026",
        "roles": [
          [
            "Research Assistant",
            "Feb – Aug 2026"
          ]
        ],
        "bullets": [
          "Built CampusCare, an iOS/SwiftUI health-insurance literacy chatbot grounded on a curated 74-fact corpus, with a fenced distress path: the model classifies, and replies are limited to pre-approved fixed strings.",
          "Delivered handoff documentation and set up the team’s pull-request workflow."
        ]
      },
      {
        "id": "w-ceo",
        "short": "CEO at UIC",
        "group": "community",
        "org": "Collegiate Entrepreneurs’ Organization, UIC chapter",
        "place": "Chicago",
        "when": "May 2024 – Aug 2026",
        "roles": [
          [
            "President",
            "Jan 2025 – Aug 2026"
          ],
          [
            "Vice President",
            "May 2024 – Jan 2025"
          ]
        ],
        "bullets": [
          "Grew active membership 150% to 70 students across 20 majors.",
          "Set up partnerships with startup founders that led to 5 member hires."
        ]
      },
      {
        "id": "w-mla",
        "short": "Calculus tutoring",
        "group": "past",
        "org": "University of Illinois Chicago",
        "place": "Chicago",
        "when": "Oct 2024 – Mar 2026",
        "roles": [
          [
            "Math Learning Assistant, Calculus",
            "Oct 2024 – Mar 2026"
          ]
        ],
        "bullets": [
          "Mentored 500+ students in undergraduate calculus through drop-in tutoring and workshops, and designed practice materials with faculty."
        ]
      },
      {
        "id": "w-pm",
        "short": "Portfolio team",
        "group": "past",
        "org": "UIC Business Portfolio Management Team",
        "place": "Chicago",
        "when": "Sep 2024 – Apr 2025",
        "roles": [
          [
            "Financial Analyst",
            "Sep 2024 – Apr 2025"
          ]
        ],
        "bullets": [
          "Built Python and Excel valuation models (three-statement, DCF and comps, scenario and sensitivity analysis) on Financials sector equities; read 10-Ks and 10-Qs and tracked macro trends to source investment ideas."
        ]
      },
      {
        "id": "w-perplexity",
        "group": "community",
        "org": "Perplexity",
        "place": "UIC",
        "when": "Aug 2025 – now",
        "roles": [
          [
            "Campus Partner",
            "Aug 2025 – now"
          ]
        ],
        "bullets": [
          "Co-designed campus activations at UIC with Perplexity’s team on responsible AI use and industry practices, and sent structured feedback to the product team."
        ]
      }
    ],
    "stack": {
      "method": [
        {
          "title": "The model writes language",
          "body": "It drafts and classifies. It does not compute, map, or decide."
        },
        {
          "title": "Code owns logic, math, and mapping",
          "body": "Rules, eligibility, and numbers run as deterministic, tested code."
        },
        {
          "title": "Every claim traces to a source field",
          "body": "A generated sentence carries the field it came from."
        },
        {
          "title": "A gate verifies before shipping",
          "body": "A claim without a source fails validation and does not render."
        }
      ],
      "skills": "Python, SQL, R, Databases, Power BI and Tableau, Data Science, Applied AI, Econometrics, Financial Modeling",
      "groups": [
        {
          "id": "s-ai",
          "title": "AI and LLM systems",
          "items": [
            {
              "name": "Claude API",
              "what": "Generation inside fenced pipelines, and the planner in Agent Visa’s live agent mode.",
              "refs": [
                "w-mhub",
                "b-visa"
              ]
            },
            {
              "name": "Claude Code and Cursor",
              "what": "Tools I build with and teach.",
              "refs": [
                "w-ta"
              ]
            },
            {
              "name": "Gemini API",
              "what": "The job-matching pipeline at Chicago Tech Circle.",
              "refs": [
                "w-ctc"
              ]
            },
            {
              "name": "n8n",
              "what": "Workflow automation in the accelerator pipeline and the Data & AI course.",
              "refs": [
                "w-mhub",
                "w-ta"
              ]
            },
            {
              "name": "Custom GPTs",
              "what": "Taught in the Data & AI course.",
              "refs": [
                "w-ta"
              ]
            },
            {
              "name": "Grounded retrieval",
              "what": "A 74-fact corpus behind CampusCare, source-field tracing at mHUB, and RAG coursework.",
              "refs": [
                "b-campus",
                "w-mhub",
                "edu"
              ]
            },
            {
              "name": "Prompt engineering and adversarial guardrails",
              "what": "Five iteration cycles on the job-matching pipeline.",
              "refs": [
                "w-ctc"
              ]
            },
            {
              "name": "Evaluation and human-in-the-loop gates",
              "what": "QA checks on model outputs and approval gates before deployment.",
              "refs": [
                "w-ctc"
              ]
            },
            {
              "name": "Model as judge inside deterministic rules",
              "what": "SQL decides eligibility; a model judges fit among at most 45 candidates.",
              "refs": [
                "w-mhub"
              ]
            }
          ]
        },
        {
          "id": "s-fintech",
          "title": "Fintech and payments",
          "items": [
            {
              "name": "Payment rail integration",
              "what": "Mandate Guard’s purchases run through a live payment sandbox.",
              "refs": [
                "b-mandate"
              ]
            },
            {
              "name": "Mandate and authorization controls",
              "what": "A seven-rule purchase gate, and signed agent permissions that can only narrow.",
              "refs": [
                "b-mandate",
                "b-visa"
              ]
            },
            {
              "name": "Hash-chained, append-only ledgers",
              "what": "Evidence for disputes and receipts for agent actions.",
              "refs": [
                "b-mandate",
                "b-visa"
              ]
            },
            {
              "name": "ECDSA P-256 with WebCrypto",
              "what": "Browser-side signing so the model never touches keys.",
              "refs": [
                "b-visa"
              ]
            },
            {
              "name": "Dispute evidence export",
              "what": "PDF and JSON packets built from the ledger.",
              "refs": [
                "b-mandate"
              ]
            }
          ]
        },
        {
          "id": "s-quant",
          "title": "Quantitative finance and financial data",
          "items": [
            {
              "name": "WRDS: CRSP and Compustat",
              "what": "The data pull in R for FIN 494’s first project.",
              "refs": [
                "w-ta"
              ]
            },
            {
              "name": "Econometrics",
              "what": "OLS with HAC errors, and competition measured as HHI by SIC code.",
              "refs": [
                "r-ceo"
              ]
            },
            {
              "name": "Causal inference",
              "what": "Regression discontinuity, triangular kernels, and McCrary density tests on 880K+ records.",
              "refs": [
                "r-ppp"
              ]
            },
            {
              "name": "Valuation",
              "what": "Three-statement models, DCF, and comps in Python and Excel.",
              "refs": [
                "w-pm",
                "r-pay"
              ]
            },
            {
              "name": "Portfolio optimization",
              "what": "Max-Sharpe and min-variance portfolios, the efficient frontier, and an equal-weight benchmark.",
              "refs": [
                "r-opt"
              ]
            },
            {
              "name": "Research records",
              "what": "Every trading-research attempt kept in MongoDB Atlas.",
              "refs": [
                "b-strata"
              ]
            }
          ]
        },
        {
          "id": "s-data",
          "title": "Data, code, and infrastructure",
          "items": [
            {
              "name": "Python",
              "what": "pandas, NumPy, SciPy, scikit-learn, and statsmodels.",
              "refs": [
                "w-mhub",
                "r-ceo"
              ]
            },
            {
              "name": "SQL and Postgres on Supabase",
              "what": "Eligibility rules, upserts, and pipeline storage.",
              "refs": [
                "w-mhub"
              ]
            },
            {
              "name": "R",
              "what": "Causal inference and WRDS pulls.",
              "refs": [
                "r-ppp",
                "w-ta"
              ]
            },
            {
              "name": "MongoDB Atlas",
              "what": "The research record behind Strata.",
              "refs": [
                "b-strata"
              ]
            },
            {
              "name": "Databricks",
              "what": "DataCamp’s Data Analyst in Databricks certification.",
              "refs": [
                "certs"
              ]
            },
            {
              "name": "Power BI",
              "what": "The real-time risk-scoring dashboard.",
              "refs": [
                "r-risk"
              ]
            },
            {
              "name": "Swift and SwiftUI",
              "what": "The CampusCare iOS app.",
              "refs": [
                "b-campus"
              ]
            },
            {
              "name": "AWS",
              "what": "Listed on my résumé.",
              "refs": []
            }
          ]
        }
      ]
    },
    "events": [
      {
        "id": "e-prava",
        "when": "Aug 2026",
        "short": "Aug",
        "place": "San Francisco",
        "title": "Prava × Devfolio hackathon",
        "photo": "images/events/prava-devfolio.jpg",
        "note": "Built Mandate Guard v1, focused on agentic commerce. The judges came from Visa and OpenAI.",
        "detail": ""
      },
      {
        "id": "e-egoist",
        "when": "Aug 7–12, 2026",
        "short": "Aug 7",
        "place": "San Francisco",
        "title": "Egoist Machines AI Passport Ideathon",
        "photo": "images/events/egoist-machines.jpg",
        "note": "Invite-only, about 22 builders. I built Agent Visa in the Agents track.",
        "detail": ""
      },
      {
        "id": "e-g2g",
        "when": "Sep 18, 2026",
        "short": "Sep 18",
        "place": "Google, Chicago",
        "title": "Genesis2Genesis",
        "photo": "images/events/genesis2genesis.jpg",
        "note": "A day on finance at Google. I left with the 10 new connections the keynote asked for.",
        "detail": "Google’s student conference on finance at Google, held at its Chicago office. Ben Myszkowski’s keynote kept coming back to people and relationships, and set one goal for the day: leave with 10 connections you didn’t walk in with. Paige Bailey’s session covered Google DeepMind’s direction for agentic AI and where the Gemini and open-source Gemma models are heading; I asked questions in the Q&A.",
        "link": "a-g2g",
        "extLinks": [
          {
            "label": "Google’s post on the Genesis program",
            "url": "https://www.linkedin.com/posts/googles-genesis-program-is-our-rotational-ugcPost-7257753181135228928-XKcu/"
          }
        ]
      },
      {
        "id": "e-snowflake",
        "when": "Oct 12, 2026",
        "short": "Oct 12",
        "place": "Snowflake SVAI Hub, Menlo Park",
        "title": "TechEquity AI Company Brain Hackathon",
        "photo": "images/events/company-brain-hackathon.jpg",
        "note": "",
        "detail": ""
      },
      {
        "id": "e-disrupt",
        "when": "Oct 13–15, 2026",
        "short": "Oct 13",
        "place": "San Francisco",
        "title": "TechCrunch Disrupt",
        "photo": "images/events/disrupt.jpg",
        "note": "Three days of meeting people with drive. I left with a clearer sense of where I am in my entrepreneurial journey and what comes next.",
        "detail": "I went with meetings set up ahead of time. The same trip covered the Company Brain hackathon in Menlo Park and the MongoDB hackathon during SF Tech Week."
      },
      {
        "id": "e-mongo",
        "when": "Oct 2026",
        "short": "Oct",
        "place": "San Francisco, SF Tech Week",
        "title": "MongoDB Harness Engineering & Model Wrangling hackathon",
        "photo": "images/events/mongodb-hackathon.jpg",
        "note": "Built Strata, a trading-research agent on MongoDB Atlas.",
        "detail": ""
      }
    ],
    "writing": [
      {
        "id": "a-g2g",
        "source": "LinkedIn, Sep 2026",
        "title": "Genesis2Genesis at Google Chicago",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7508159515880681472/",
        "body": "What I took from Google’s Finance at Google student conference: the keynote’s goal of 10 new connections, and Google DeepMind’s direction for agentic AI."
      },
      {
        "id": "a-ctc",
        "source": "Chicago Tech Circle, 2026",
        "title": "On TAing Intro to Data + AI",
        "url": "https://ctc.uic.edu/bios/shiv-a/",
        "body": "Students who started the semester unsure why a business or liberal arts major needs APIs and automation ended it pitching solutions to companies."
      }
    ],
    "extraTodos": [],
    "chips": [
      "What has he shipped?",
      "How does fenced generation work?",
      "What AI tools does he use?",
      "What fintech technology has he worked with?",
      "Where does he work now?",
      "What has he done in finance?",
      "Tell me about Mandate Guard",
      "What is Agent Visa?",
      "What did he do at TechCrunch Disrupt?",
      "What did he take from Genesis2Genesis?",
      "Has he taught?",
      "What research has he done?",
      "What has he done in entrepreneurship?",
      "Where did he study?"
    ],
    "answers": [
      {
        "q": "Tell me about Mandate Guard",
        "keys": [
          "mandate",
          "guard",
          "ledger",
          "dispute",
          "disputes",
          "purchase",
          "purchases",
          "chargeback"
        ],
        "sentences": [
          {
            "t": "Mandate Guard compiles a user’s plain-language mandate into rules, and a seven-rule gate of pure functions decides each agent purchase.",
            "src": [
              "b-mandate"
            ]
          },
          {
            "t": "Each decision goes to an append-only, hash-chained ledger that exports as PDF or JSON for disputes.",
            "src": [
              "b-mandate"
            ]
          },
          {
            "t": "It has 372 tests, and a live payment-sandbox run is confirmed.",
            "src": [
              "b-mandate"
            ]
          },
          {
            "t": "He built it solo at the Prava × Devfolio hackathon in August 2026, with judges from Visa and OpenAI.",
            "src": [
              "e-prava",
              "b-mandate"
            ]
          }
        ]
      },
      {
        "q": "What is Agent Visa?",
        "keys": [
          "visa",
          "avp",
          "passport",
          "authorization",
          "authorisation",
          "ecdsa",
          "delegation",
          "permissions",
          "signing",
          "cryptographic",
          "cryptography",
          "webcrypto"
        ],
        "sentences": [
          {
            "t": "Agent Visa proves what an AI agent is allowed to do, not only who it is.",
            "src": [
              "b-visa"
            ]
          },
          {
            "t": "Signing happens in the browser with ECDSA P-256, so the model never touches keys, and seven fail-fast rules run with no model in the trust path.",
            "src": [
              "b-visa"
            ]
          },
          {
            "t": "Delegated permissions can only narrow, receipts are hash-chained, and three denials in a row suspend the agent.",
            "src": [
              "b-visa"
            ]
          },
          {
            "t": "He built it at the Egoist Machines AI Passport Ideathon in August 2026, and the code is public.",
            "src": [
              "e-egoist",
              "b-visa"
            ]
          }
        ]
      },
      {
        "q": "What is Strata?",
        "keys": [
          "strata",
          "mongodb",
          "mongo",
          "atlas"
        ],
        "sentences": [
          {
            "t": "Strata is a trading-research agent that keeps a permanent record of every attempt in MongoDB Atlas.",
            "src": [
              "b-strata"
            ]
          },
          {
            "t": "It was tested on real market data.",
            "src": [
              "b-strata"
            ]
          },
          {
            "t": "He built it at MongoDB’s hackathon during SF Tech Week.",
            "src": [
              "e-mongo"
            ]
          }
        ]
      },
      {
        "q": "What is CampusCare?",
        "keys": [
          "campuscare",
          "campus",
          "care",
          "health",
          "insurance",
          "ios",
          "swift",
          "swiftui",
          "hal",
          "apple",
          "chatbot"
        ],
        "sentences": [
          {
            "t": "CampusCare is an iOS app built in SwiftUI at HAL Lab that answers student health-insurance questions from a curated 74-fact corpus.",
            "src": [
              "b-campus",
              "w-hal"
            ]
          },
          {
            "t": "On the distress path the model classifies the message, and the reply comes from a list of pre-approved fixed strings.",
            "src": [
              "b-campus"
            ]
          },
          {
            "t": "He also wrote the handoff documentation and set up the team’s pull-request workflow.",
            "src": [
              "w-hal"
            ]
          }
        ]
      },
      {
        "q": "What did he take from Genesis2Genesis?",
        "keys": [
          "genesis2genesis",
          "genesis",
          "g2g",
          "google"
        ],
        "sentences": [
          {
            "t": "Genesis2Genesis is Google’s student conference on finance at Google, held at its Chicago office on September 18, 2026.",
            "src": [
              "e-g2g"
            ]
          },
          {
            "t": "Ben Myszkowski’s keynote set one goal for the day: leave with 10 new connections. He did.",
            "src": [
              "e-g2g"
            ]
          },
          {
            "t": "Paige Bailey’s session covered Google DeepMind’s direction for agentic AI and the Gemini and Gemma models, and he asked questions in the Q&A.",
            "src": [
              "e-g2g"
            ]
          },
          {
            "t": "He wrote about it in a LinkedIn post.",
            "src": [
              "a-g2g"
            ]
          }
        ]
      },
      {
        "q": "What did he do at TechCrunch Disrupt?",
        "keys": [
          "disrupt",
          "techcrunch",
          "tc"
        ],
        "sentences": [
          {
            "t": "He spent October 13–15, 2026 at TechCrunch Disrupt in San Francisco, with meetings set up ahead of time.",
            "src": [
              "e-disrupt"
            ]
          },
          {
            "t": "It gave him a clearer sense of where he is in his entrepreneurial journey and what comes next.",
            "src": [
              "e-disrupt"
            ]
          },
          {
            "t": "The same trip covered the Company Brain hackathon in Menlo Park and the MongoDB hackathon during SF Tech Week.",
            "src": [
              "e-disrupt",
              "e-snowflake",
              "e-mongo"
            ]
          }
        ]
      },
      {
        "q": "What is the portfolio optimizer?",
        "keys": [
          "optimizer",
          "optimiser",
          "optimization",
          "markowitz",
          "sharpe",
          "frontier",
          "variance"
        ],
        "sentences": [
          {
            "t": "In March 2026 he built a mean-variance (Markowitz) optimizer that finds the max-Sharpe and min-variance portfolios and traces the efficient frontier.",
            "src": [
              "r-opt"
            ]
          },
          {
            "t": "It writes a self-contained HTML report that compares the result against an equal-weight (1/N) benchmark.",
            "src": [
              "r-opt"
            ]
          },
          {
            "t": "Guardrails are their own layer: input validation, constraint feasibility, PSD covariance, concentration warnings, and no-look-ahead checks. The code is public.",
            "src": [
              "r-opt"
            ]
          }
        ]
      },
      {
        "q": "How does fenced generation work?",
        "keys": [
          "fenced",
          "fence",
          "generation",
          "method",
          "methodology",
          "approach",
          "process",
          "deterministic",
          "hallucination",
          "hallucinations",
          "reliability",
          "philosophy",
          "principles",
          "guardrails",
          "trust"
        ],
        "sentences": [
          {
            "t": "The language model writes language only; deterministic code owns the logic, math, and mapping.",
            "src": [
              "m-fenced"
            ]
          },
          {
            "t": "Every claim traces to a source field, and a gate verifies it before anything ships.",
            "src": [
              "m-fenced"
            ]
          },
          {
            "t": "At mHUB, a company-profile claim without a source fails validation before it renders.",
            "src": [
              "w-mhub"
            ]
          },
          {
            "t": "In CampusCare, the model classifies distress, but replies come only from pre-approved fixed strings.",
            "src": [
              "b-campus"
            ]
          },
          {
            "t": "This chat follows the same rule: every sentence it shows is checked against the entry it cites.",
            "src": [
              "m-fenced"
            ]
          }
        ]
      },
      {
        "q": "What fintech technology has he worked with?",
        "keys": [
          "fintech",
          "payments",
          "payment",
          "acp",
          "ap2",
          "tap",
          "mastercard",
          "commerce",
          "agentic",
          "rail",
          "rails",
          "crypto",
          "blockchain",
          "banking"
        ],
        "sentences": [
          {
            "t": "Mandate Guard runs agent purchases through a live payment sandbox behind a seven-rule gate and writes each decision to a hash-chained ledger.",
            "src": [
              "b-mandate"
            ]
          },
          {
            "t": "Agent Visa signs agent permissions with ECDSA P-256 in the browser and keeps hash-chained receipts.",
            "src": [
              "b-visa"
            ]
          },
          {
            "t": "Mandate Guard exports dispute evidence as PDF and JSON packets built from its ledger.",
            "src": [
              "b-mandate",
              "s-fintech"
            ]
          }
        ]
      },
      {
        "q": "What AI tools does he use?",
        "keys": [
          "ai",
          "llm",
          "llms",
          "genai",
          "claude",
          "anthropic",
          "gemini",
          "gpt",
          "gpts",
          "openai",
          "model",
          "models",
          "n8n",
          "cursor",
          "prompt",
          "prompts",
          "prompting",
          "agents",
          "automation",
          "rag",
          "retrieval"
        ],
        "sentences": [
          {
            "t": "He builds with the Claude API inside fenced pipelines, and the planner in Agent Visa’s live agent mode runs on it.",
            "src": [
              "s-ai",
              "b-visa"
            ]
          },
          {
            "t": "He used the Gemini API for a job-matching pipeline with adversarial guardrails, evaluation checks, and human-in-the-loop approval gates.",
            "src": [
              "w-ctc"
            ]
          },
          {
            "t": "He automates workflows with n8n and teaches n8n, Custom GPTs, Cursor, and Claude Code in the Data & AI course.",
            "src": [
              "w-mhub",
              "w-ta"
            ]
          },
          {
            "t": "For retrieval, CampusCare answers from a curated 74-fact corpus.",
            "src": [
              "b-campus"
            ]
          }
        ]
      },
      {
        "q": "What’s his technical stack?",
        "keys": [
          "stack",
          "tools",
          "tool",
          "languages",
          "language",
          "python",
          "sql",
          "skills",
          "skill",
          "tech",
          "technologies",
          "technical",
          "frameworks",
          "libraries",
          "databases",
          "database",
          "infrastructure"
        ],
        "sentences": [
          {
            "t": "Code: Python (pandas, NumPy, SciPy, scikit-learn, statsmodels), SQL on Postgres through Supabase, R, and Swift.",
            "src": [
              "s-data"
            ]
          },
          {
            "t": "AI: the Claude API, Gemini API, n8n, Claude Code, and Cursor.",
            "src": [
              "s-ai"
            ]
          },
          {
            "t": "Finance data and methods: WRDS (CRSP, Compustat), econometrics, regression discontinuity, and valuation models.",
            "src": [
              "s-quant"
            ]
          },
          {
            "t": "Data platforms: MongoDB Atlas, Databricks, and Power BI.",
            "src": [
              "s-data"
            ]
          }
        ]
      },
      {
        "q": "What has he shipped?",
        "keys": [
          "shipped",
          "ship",
          "built",
          "build",
          "builds",
          "projects",
          "project",
          "made",
          "products",
          "product",
          "demo",
          "demos"
        ],
        "sentences": [
          {
            "t": "Mandate Guard blocks AI-agent purchases that fall outside a user’s mandate, with seven deterministic rules and no model in the decision path; it has 372 tests and a confirmed live payment-sandbox run.",
            "src": [
              "b-mandate"
            ]
          },
          {
            "t": "Agent Visa is a protocol that proves what an agent is allowed to do, using ECDSA P-256 signatures and hash-chained receipts.",
            "src": [
              "b-visa"
            ]
          },
          {
            "t": "At mHUB he built a profile pipeline for the 2027 Energy Tech Accelerator in which any claim without a source field fails validation; 70+ profiles were filed, and research time for the accelerator team dropped about 70%.",
            "src": [
              "w-mhub"
            ]
          },
          {
            "t": "Strata is a trading-research agent that keeps a permanent record of every attempt in MongoDB Atlas.",
            "src": [
              "b-strata"
            ]
          }
        ]
      },
      {
        "q": "Where does he work now?",
        "keys": [
          "work",
          "works",
          "working",
          "job",
          "jobs",
          "current",
          "currently",
          "employer",
          "mhub",
          "intern",
          "internship",
          "internships",
          "now",
          "company",
          "incubator",
          "experience",
          "role"
        ],
        "sentences": [
          {
            "t": "He is the AI Product and Data Systems Intern at mHUB, Chicago’s hardtech incubator, after starting there in June 2026 as the AI Agent and Platform Development Intern.",
            "src": [
              "w-mhub"
            ]
          },
          {
            "t": "He is a teaching assistant for Data & AI at Chicago Tech Circle, which this fall includes FIN 494 Financial Data and AI.",
            "src": [
              "w-ta"
            ]
          },
          {
            "t": "He is also a Campus Partner for Perplexity at UIC.",
            "src": [
              "w-perplexity"
            ]
          }
        ]
      },
      {
        "q": "What has he done in finance?",
        "keys": [
          "finance",
          "financial",
          "quant",
          "quantitative",
          "trading",
          "valuation",
          "markets",
          "market",
          "econometrics",
          "dcf",
          "investing",
          "investment",
          "investments",
          "equities",
          "equity",
          "economics",
          "portfolio",
          "wrds",
          "crsp",
          "compustat"
        ],
        "sentences": [
          {
            "t": "On UIC Business’s portfolio management team he built Python and Excel valuation models (three-statement, DCF, comps) for Financials sector equities.",
            "src": [
              "w-pm"
            ]
          },
          {
            "t": "He modeled CEO pay sensitivity against industry competition with HHI by SIC code and OLS with HAC errors.",
            "src": [
              "r-ceo"
            ]
          },
          {
            "t": "He estimated the causal effect of the PPP loan forgiveness threshold on 880K+ records with a regression discontinuity design.",
            "src": [
              "r-ppp"
            ]
          },
          {
            "t": "He built a mean-variance portfolio optimizer that finds the max-Sharpe and min-variance portfolios and compares them against an equal-weight benchmark.",
            "src": [
              "r-opt"
            ]
          },
          {
            "t": "For FIN 494 he is building the WRDS (CRSP and Compustat) data pull in R.",
            "src": [
              "w-ta"
            ]
          }
        ]
      },
      {
        "q": "What research has he done?",
        "keys": [
          "research",
          "paper",
          "papers",
          "causal",
          "regression",
          "rdd",
          "discontinuity",
          "study",
          "studies",
          "econometric",
          "cybersecurity",
          "security",
          "risk",
          "ppp",
          "pay",
          "compensation"
        ],
        "sentences": [
          {
            "t": "He estimated the causal effect of the PPP loan forgiveness threshold on 880K+ records with regression discontinuity and a McCrary density test.",
            "src": [
              "r-ppp"
            ]
          },
          {
            "t": "He modeled CEO pay sensitivity against industry competition with HHI by SIC code and OLS with HAC errors.",
            "src": [
              "r-ceo"
            ]
          },
          {
            "t": "He built a mean-variance portfolio optimizer in March 2026 that compares max-Sharpe and min-variance portfolios against an equal-weight benchmark.",
            "src": [
              "r-opt"
            ]
          },
          {
            "t": "He is building a composite cybersecurity risk score across five signals for a company under NDA, traced back to its inputs.",
            "src": [
              "r-risk"
            ]
          },
          {
            "t": "At HAL Lab he built CampusCare as a research prototype.",
            "src": [
              "w-hal"
            ]
          }
        ]
      },
      {
        "q": "What has he built at hackathons?",
        "keys": [
          "hackathon",
          "hackathons",
          "ideathon",
          "buildathon",
          "competition",
          "competitions",
          "judges",
          "won"
        ],
        "sentences": [
          {
            "t": "Mandate Guard: built solo at the Prava × Devfolio hackathon in August 2026, with judges from Visa and OpenAI.",
            "src": [
              "b-mandate",
              "e-prava"
            ]
          },
          {
            "t": "Agent Visa: built at the invite-only Egoist Machines AI Passport Ideathon in August 2026.",
            "src": [
              "b-visa",
              "e-egoist"
            ]
          },
          {
            "t": "Strata: built at MongoDB’s hackathon during SF Tech Week.",
            "src": [
              "b-strata",
              "e-mongo"
            ]
          },
          {
            "t": "He also competed at TechEquity AI’s Company Brain Hackathon in Menlo Park.",
            "src": [
              "e-snowflake"
            ]
          }
        ]
      },
      {
        "q": "Has he taught?",
        "keys": [
          "teach",
          "teaching",
          "taught",
          "ta",
          "tas",
          "students",
          "course",
          "courses",
          "class",
          "instructor",
          "mentor",
          "mentored",
          "tutor",
          "tutoring",
          "tutored",
          "fin",
          "494",
          "calculus"
        ],
        "sentences": [
          {
            "t": "He is a teaching assistant for Data & AI at Chicago Tech Circle, where he has taught 200+ students to use n8n, Custom GPTs, Cursor, and Claude Code.",
            "src": [
              "w-ta"
            ]
          },
          {
            "t": "This fall that includes FIN 494 Financial Data and AI, where he owns the module on data and AI tools in financial services.",
            "src": [
              "w-ta"
            ]
          },
          {
            "t": "As a Math Learning Assistant he mentored 500+ students in undergraduate calculus.",
            "src": [
              "w-mla"
            ]
          },
          {
            "t": "His account of teaching the Data & AI course is on Chicago Tech Circle’s site.",
            "src": [
              "a-ctc"
            ]
          }
        ]
      },
      {
        "q": "What does he write about?",
        "keys": [
          "write",
          "writes",
          "writing",
          "articles",
          "article",
          "blog",
          "posts",
          "post",
          "substack",
          "newsletter",
          "essays",
          "published"
        ],
        "sentences": [
          {
            "t": "Chicago Tech Circle published his account of TAing Intro to Data + AI.",
            "src": [
              "a-ctc"
            ]
          }
        ]
      },
      {
        "q": "Where did he study?",
        "keys": [
          "study",
          "studied",
          "studies",
          "education",
          "school",
          "college",
          "university",
          "uic",
          "degree",
          "degrees",
          "gpa",
          "major",
          "graduate",
          "graduation",
          "coursework",
          "certifications",
          "certification",
          "certificate",
          "certificates",
          "certified",
          "codepath",
          "datacamp",
          "databricks"
        ],
        "sentences": [
          {
            "t": "He is finishing a B.S. in Data Science, with a concentration in Business Analytics, and a B.S. in Finance at the University of Illinois Chicago, both in December 2026.",
            "src": [
              "edu"
            ]
          },
          {
            "t": "His GPA is 3.52, with Dean’s List.",
            "src": [
              "edu"
            ]
          },
          {
            "t": "His certifications include CodePath’s AI Engineering Professional Certificate and DataCamp’s Data Analyst in Databricks and Associate Data Analyst in SQL.",
            "src": [
              "certs"
            ]
          }
        ]
      },
      {
        "q": "What has he done in entrepreneurship?",
        "keys": [
          "entrepreneurship",
          "entrepreneur",
          "entrepreneurs",
          "entrepreneurial",
          "startup",
          "startups",
          "founder",
          "founders",
          "venture",
          "ventures",
          "ecosystem",
          "midwest",
          "ceo"
        ],
        "sentences": [
          {
            "t": "He led UIC’s chapter of the Collegiate Entrepreneurs’ Organization, as vice president from May 2024 and as president from January 2025 to August 2026.",
            "src": [
              "w-ceo"
            ]
          },
          {
            "t": "Membership grew 150% to 70 students across 20 majors, and partnerships with startup founders led to 5 member hires.",
            "src": [
              "w-ceo"
            ]
          },
          {
            "t": "He works at mHUB, Chicago’s hardtech incubator, where he built the profile pipeline for its 2027 Energy Tech Accelerator.",
            "src": [
              "w-mhub"
            ]
          },
          {
            "t": "On his own time he builds trust infrastructure for agentic commerce: Mandate Guard and Agent Visa.",
            "src": [
              "about",
              "b-mandate",
              "b-visa"
            ]
          },
          {
            "t": "TechCrunch Disrupt gave him a clearer sense of where he is in his entrepreneurial journey and what comes next.",
            "src": [
              "e-disrupt"
            ]
          }
        ]
      },
      {
        "q": "What leadership roles has he had?",
        "keys": [
          "leadership",
          "lead",
          "leader",
          "led",
          "president",
          "club",
          "organization",
          "volunteer",
          "volunteering",
          "perplexity",
          "community"
        ],
        "sentences": [
          {
            "t": "He was president of the UIC chapter of the Collegiate Entrepreneurs’ Organization from January 2025 to August 2026, after serving as vice president.",
            "src": [
              "w-ceo"
            ]
          },
          {
            "t": "Membership grew 150% to 70 students across 20 majors, and partnerships with startup founders led to 5 member hires.",
            "src": [
              "w-ceo"
            ]
          },
          {
            "t": "He is a Campus Partner for Perplexity, co-designing campus activations at UIC on responsible AI use.",
            "src": [
              "w-perplexity"
            ]
          }
        ]
      },
      {
        "q": "Which events has he been to?",
        "keys": [
          "events",
          "event",
          "conference",
          "conferences",
          "attended",
          "photos",
          "pictures",
          "gallery",
          "meetups",
          "trips"
        ],
        "type": "events"
      },
      {
        "q": "How can I contact him?",
        "keys": [
          "contact",
          "email",
          "reach",
          "connect",
          "message",
          "hire",
          "hiring",
          "resume",
          "cv",
          "linkedin"
        ],
        "sentences": [
          {
            "t": "Email shivanshamba1404@gmail.com. His résumé opens from the Résumé button at the top of every page, and his LinkedIn and GitHub are linked on the About page.",
            "src": [
              "contact"
            ]
          }
        ]
      },
      {
        "q": "Who is Shiv?",
        "keys": [
          "background",
          "introduce",
          "introduction",
          "bio",
          "summary",
          "overview"
        ],
        "sentences": [
          {
            "t": "He studies Data Science (Business Analytics concentration) and Finance at UIC, finishing in December 2026.",
            "src": [
              "about",
              "edu"
            ]
          },
          {
            "t": "He builds data pipelines, AI workflows, and quantitative models, with one rule: the model writes language, code owns the logic, and every claim points to a source before it ships.",
            "src": [
              "about",
              "m-fenced"
            ]
          },
          {
            "t": "He works at mHUB on AI and data systems, and builds trust infrastructure for agentic commerce on his own time: Mandate Guard and Agent Visa.",
            "src": [
              "w-mhub",
              "b-mandate",
              "b-visa"
            ]
          }
        ]
      }
    ]
  };