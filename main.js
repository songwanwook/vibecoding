// Teachable Machine Model URL
const URL = "https://teachablemachine.withgoogle.com/models/u1XRiEMcN/";

let model, labelContainer, maxPredictions;

// Initialize the theme and load the model
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    await initAI();
    setupEventListeners();
});

// --- Theme Logic ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// --- AI Logic ---
async function initAI() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        console.log("Model loaded successfully");
    } catch (error) {
        console.error("Error loading model:", error);
    }
}

function setupEventListeners() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('image-upload');
    const retryBtn = document.getElementById('retry-btn');

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            handleImageUpload(e.target.files[0]);
        }
    });

    // Drag and drop support
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = "var(--btn-bg)";
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = "var(--input-border)";
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageUpload(e.dataTransfer.files[0]);
        }
    });

    retryBtn.addEventListener('click', resetUI);
}

async function handleImageUpload(file) {
    const reader = new FileReader();
    const preview = document.getElementById('image-preview');
    const uploadArea = document.getElementById('upload-area');
    const previewContainer = document.getElementById('preview-container');
    const spinner = document.getElementById('loading-spinner');
    const resultContainer = document.getElementById('result-container');

    uploadArea.style.display = 'none';
    previewContainer.style.display = 'block';
    spinner.style.display = 'block';
    resultContainer.style.display = 'none';

    reader.onload = async (e) => {
        preview.src = e.target.result;
        
        // Wait for image to load before predicting
        preview.onload = async () => {
            await predict();
            spinner.style.display = 'none';
            resultContainer.style.display = 'block';
        };
    };
    reader.readAsDataURL(file);
}

async function predict() {
    const image = document.getElementById('image-preview');
    const prediction = await model.predict(image);
    const labelContainer = document.getElementById('label-container');
    const resultTitle = document.getElementById('result-title');
    
    labelContainer.innerHTML = '';
    
    // Sort predictions by probability
    prediction.sort((a, b) => b.probability - a.probability);
    
    const topResult = prediction[0];
    resultTitle.innerText = `You are more like a ${topResult.className}!`;

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i];
        const percentage = (classPrediction.probability * 100).toFixed(0);
        
        const wrapper = document.createElement('div');
        wrapper.className = 'result-bar-wrapper';
        
        const bar = document.createElement('div');
        bar.className = 'result-bar';
        
        const text = document.createElement('div');
        text.className = 'result-text';
        text.innerHTML = `<span>${classPrediction.className}</span><span>${percentage}%</span>`;
        
        wrapper.appendChild(bar);
        wrapper.appendChild(text);
        labelContainer.appendChild(wrapper);
        
        // Trigger animation
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 100);
    }
}

function resetUI() {
    document.getElementById('upload-area').style.display = 'flex';
    document.getElementById('preview-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('image-upload').value = '';
}
