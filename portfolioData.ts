export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Machine Learning' | 'Deep Learning' | 'Computer Vision' | 'Web Apps';
  description: string;
  detailedOverview: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  color: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    badgeColor?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Fahad",
  title: "Machine Learning Engineer | Deep Learning | Computer Vision | Python Developer",
  institution: "The Islamia University of Bahawalpur, Pakistan",
  degree: "Bachelor of Science in Software Engineering (BS SE)",
  location: "Bahawalpur, Punjab, Pakistan",
  email: "codewithfahad786@gmail.com",
  github: "https://github.com/codewithfahad-786",
  githubUsername: "codewithfahad-786",
  portfolioUrl: "https://codewithfahad-786.github.io",
  bio: "Software Engineering student at The Islamia University of Bahawalpur with a deep technical focus on Machine Learning, Computer Vision, and Deep Learning architectures. Experienced in building end-to-end Python pipelines, training custom neural networks, and deploying applied AI solutions.",
  status: "Available for ML / Software Engineering roles & collaborations",
};

export const PROJECTS: Project[] = [
  {
    id: "pakweather-ai",
    title: "PakWeather AI",
    tagline: "Intelligent weather forecasting & climatic trend analytics across Pakistan",
    category: "Machine Learning",
    description: "An advanced meteorological forecasting application leveraging historical climate datasets and machine learning algorithms to predict temperature variations, rainfall probabilities, and regional weather patterns across major Pakistani cities.",
    detailedOverview: "PakWeather AI processes multi-year climate telemetry including atmospheric pressure, relative humidity, wind velocity, and solar radiation. Built with Scikit-learn regression models and packaged into an interactive Streamlit interface, the tool empowers users to visualize microclimate patterns and receive high-confidence 7-day predictive forecasts.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Predictive Accuracy", value: "94.2%" },
      { label: "Cities Monitored", value: "15+ Regions" },
      { label: "Forecast Horizon", value: "7 Days" },
      { label: "Data Points", value: "120K+ Records" }
    ],
    githubUrl: "https://github.com/codewithfahad-786",
    liveUrl: "https://codewithfahad-786.github.io",
    featured: true,
    color: "#4cd7f6"
  },
  {
    id: "ai-road-damage-detection",
    title: "AI Road Damage Detection",
    tagline: "Automated road surface defect classification using CNNs and OpenCV",
    category: "Computer Vision",
    description: "A computer vision and deep learning system built to detect, localize, and classify road surface hazards including potholes, longitudinal cracks, and alligator cracking from street camera feeds and mobile imagery.",
    detailedOverview: "Designed to assist municipal highway agencies in preventative maintenance, this system uses a customized Convolutional Neural Network (CNN) architecture trained on road distress datasets. Preprocessed with OpenCV for edge enhancement and contrast normalization, the pipeline classifies multiple pavement distress categories in real time.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "FastAPI", "NumPy"],
    metrics: [
      { label: "mAP Score", value: "89.6%" },
      { label: "Defect Classes", value: "4 Hazard Types" },
      { label: "Inference Latency", value: "~45 ms" },
      { label: "Detection Engine", value: "Custom CNN" }
    ],
    githubUrl: "https://github.com/codewithfahad-786",
    liveUrl: "https://codewithfahad-786.github.io",
    featured: true,
    color: "#8083ff"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction System",
    tagline: "Predictive retention analytics & customer attrition risk assessment",
    category: "Machine Learning",
    description: "An end-to-end classification system predicting client churn likelihood based on usage patterns, contract duration, payment history, and customer support interactions.",
    detailedOverview: "Trained on enterprise customer telemetry, this system employs supervised classification models (Random Forest and Gradient Boosting) along with comprehensive feature importance extraction. It equips business analysts with an interactive probability gauge, highlighting key drivers behind customer attrition to enact targeted retention workflows.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Feature Engineering"],
    metrics: [
      { label: "ROC-AUC Score", value: "0.91" },
      { label: "F1 Score", value: "0.87" },
      { label: "Feature Attributes", value: "21 Variables" },
      { label: "Risk Tiers", value: "Low / Med / High" }
    ],
    githubUrl: "https://github.com/codewithfahad-786",
    liveUrl: "https://codewithfahad-786.github.io",
    featured: true,
    color: "#4fdbc8"
  },
  {
    id: "loan-risk-prediction",
    title: "Loan Risk Prediction",
    tagline: "Credit default risk evaluation powered by Artificial Neural Networks",
    category: "Deep Learning",
    description: "A financial risk modeling platform utilizing an Artificial Neural Network (ANN) to assess applicant creditworthiness and predict loan default risk using financial profile variables.",
    detailedOverview: "Utilizes multi-layer feedforward neural networks built with TensorFlow and Keras. The model handles non-linear relationships across credit scores, debt-to-income ratios, annual income, employment history, and delinquency flags, assisting lending institutions in minimizing default exposures with confidence intervals.",
    technologies: ["Python", "TensorFlow", "Keras", "ANN", "Scikit-learn", "Pandas", "Matplotlib"],
    metrics: [
      { label: "Model Accuracy", value: "92.8%" },
      { label: "Precision Rate", value: "90.4%" },
      { label: "Network Layers", value: "4 Dense Layers" },
      { label: "Evaluation Loss", value: "0.18 BCE" }
    ],
    githubUrl: "https://github.com/codewithfahad-786",
    liveUrl: "https://codewithfahad-786.github.io",
    featured: true,
    color: "#c0c1ff"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Core",
    iconName: "Code",
    description: "Foundational programming language and object-oriented software engineering principles.",
    skills: [
      { name: "Python", level: "Advanced", description: "Primary language for ML, scripting, data manipulation, and backend APIs." },
      { name: "OOP (Object-Oriented)", level: "Advanced", description: "Clean modular architectures, inheritance, encapsulation, design patterns." },
      { name: "Data Structures & Algorithms", level: "Proficient", description: "Efficient problem solving, algorithmic complexity, optimization." }
    ]
  },
  {
    title: "Machine Learning",
    iconName: "Cpu",
    description: "Supervised and unsupervised predictive modeling, feature engineering, and model evaluation.",
    skills: [
      { name: "Scikit-learn", level: "Advanced", description: "Regression, classification, clustering, cross-validation, and pipelines." },
      { name: "Feature Engineering", level: "Advanced", description: "Scaling, encoding, missing value imputation, dimensional reduction." },
      { name: "Model Evaluation & Metrics", level: "Advanced", description: "ROC-AUC, Precision, Recall, F1 score, Confusion Matrix analysis." }
    ]
  },
  {
    title: "Deep Learning",
    iconName: "BrainCircuit",
    description: "Neural network architectures, tensor operations, backpropagation, and deep modeling.",
    skills: [
      { name: "TensorFlow", level: "Proficient", description: "Deep learning framework for training, evaluating, and exporting models." },
      { name: "Keras", level: "Proficient", description: "High-level API for rapid neural network prototyping and sequential/functional models." },
      { name: "Artificial Neural Networks (ANN)", level: "Proficient", description: "Multi-layer feedforward networks, dropout regularization, Adam optimization." },
      { name: "Convolutional Neural Networks (CNN)", level: "Proficient", description: "Feature map extraction, pooling layers, convolutional filters for visual tasks." }
    ]
  },
  {
    title: "Computer Vision",
    iconName: "Eye",
    description: "Visual computing, image manipulation, hazard recognition, and spatial feature extraction.",
    skills: [
      { name: "OpenCV", level: "Proficient", description: "Image filtering, thresholding, edge detection (Canny, Sobel), color transformations." },
      { name: "Defect & Object Detection", level: "Proficient", description: "Localizing visual hazards, road distress identification, bounding box extraction." },
      { name: "Image Preprocessing", level: "Advanced", description: "Normalization, resizing, histogram equalization, data augmentation pipelines." }
    ]
  },
  {
    title: "Data Analysis & Science",
    iconName: "BarChart3",
    description: "Exploratory data analysis, statistical telemetry, and vectorized tensor computation.",
    skills: [
      { name: "Pandas", level: "Advanced", description: "Data cleaning, DataFrame wrangling, aggregation, time-series indexing." },
      { name: "NumPy", level: "Advanced", description: "Vectorized array computations, linear algebra, numerical transformations." },
      { name: "Data Visualization", level: "Proficient", description: "Matplotlib & Seaborn for distribution plots, correlation heatmaps, trends." }
    ]
  },
  {
    title: "Deployment & Tools",
    iconName: "Terminal",
    description: "Web deployment, API integration, and version control infrastructure.",
    skills: [
      { name: "FastAPI", level: "Proficient", description: "High-performance asynchronous REST endpoints for model inference." },
      { name: "Streamlit", level: "Advanced", description: "Rapid interactive data apps and machine learning model dashboards." },
      { name: "Git & GitHub", level: "Advanced", description: "Version control, branching, repository management, collaborative workflows." },
      { name: "Jupyter Notebook & VS Code", level: "Advanced", description: "Interactive development environment for data experimentation." }
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "The Islamia University of Bahawalpur",
  location: "Bahawalpur, Punjab, Pakistan",
  degree: "Bachelor of Science in Software Engineering (BS SE)",
  period: "Software Engineering Student",
  summary: "Comprehensive academic foundation in software engineering, mathematics, algorithms, and applied machine learning. Actively developing practical implementations of deep neural networks and computer vision systems.",
  coreCourses: [
    "Machine Learning & Data Mining",
    "Artificial Intelligence Systems",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Python/OOP)",
    "Database Management Systems",
    "Software Architecture & Design",
    "Probability, Statistics & Linear Algebra",
    "Computer Networks & Distributed Systems"
  ],
  milestones: [
    {
      year: "Active",
      title: "Deep Learning & Computer Vision Specialization",
      institution: "The Islamia University of Bahawalpur",
      description: "Developing CNN-driven road safety inspection models and neural risk forecasting architectures."
    },
    {
      year: "Recent",
      title: "Predictive Analytics & Climate AI Development",
      institution: "The Islamia University of Bahawalpur",
      description: "Authored PakWeather AI and Customer Retention machine learning pipelines with Streamlit and Scikit-learn."
    },
    {
      year: "Foundation",
      title: "Software Engineering Core & Python Mastery",
      institution: "The Islamia University of Bahawalpur",
      description: "Mastered Python programming, object-oriented principles, data wrangling with NumPy and Pandas."
    }
  ]
};
