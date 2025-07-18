// PECS Data Structure - Easily extensible
const pecsData = {
    core: [
        { id: 'want', text: 'I want', emoji: '🤚' },
        { id: 'need', text: 'I need', emoji: '🙏' },
        { id: 'help', text: 'Help', emoji: '🆘' },
        { id: 'more', text: 'More', emoji: '➕' },
        { id: 'stop', text: 'Stop', emoji: '🛑' },
        { id: 'go', text: 'Go', emoji: '🏃' },
        { id: 'yes', text: 'Yes', emoji: '✅' },
        { id: 'no', text: 'No', emoji: '❌' },
        { id: 'please', text: 'Please', emoji: '🙏' },
        { id: 'thank', text: 'Thank you', emoji: '🙌' }
    ],
    food: [
        { id: 'water', text: 'Water', emoji: '💧' },
        { id: 'milk', text: 'Milk', emoji: '🥛' },
        { id: 'juice', text: 'Juice', emoji: '🧃' },
        { id: 'apple', text: 'Apple', emoji: '🍎' },
        { id: 'banana', text: 'Banana', emoji: '🍌' },
        { id: 'cookie', text: 'Cookie', emoji: '🍪' },
        { id: 'sandwich', text: 'Sandwich', emoji: '🥪' },
        { id: 'pizza', text: 'Pizza', emoji: '🍕' },
        { id: 'hungry', text: 'Hungry', emoji: '😋' },
        { id: 'thirsty', text: 'Thirsty', emoji: '🥤' }
    ],
    activities: [
        { id: 'play', text: 'Play', emoji: '🎮' },
        { id: 'read', text: 'Read', emoji: '📚' },
        { id: 'music', text: 'Music', emoji: '🎵' },
        { id: 'outside', text: 'Outside', emoji: '🌳' },
        { id: 'bathroom', text: 'Bathroom', emoji: '🚽' },
        { id: 'sleep', text: 'Sleep', emoji: '😴' },
        { id: 'school', text: 'School', emoji: '🏫' },
        { id: 'home', text: 'Home', emoji: '🏠' },
        { id: 'tv', text: 'TV', emoji: '📺' },
        { id: 'computer', text: 'Computer', emoji: '💻' }
    ],
    feelings: [
        { id: 'happy', text: 'Happy', emoji: '😊' },
        { id: 'sad', text: 'Sad', emoji: '😢' },
        { id: 'angry', text: 'Angry', emoji: '😠' },
        { id: 'tired', text: 'Tired', emoji: '😴' },
        { id: 'scared', text: 'Scared', emoji: '😨' },
        { id: 'sick', text: 'Sick', emoji: '🤒' },
        { id: 'hurt', text: 'Hurt', emoji: '🤕' },
        { id: 'excited', text: 'Excited', emoji: '🤩' },
        { id: 'love', text: 'Love', emoji: '❤️' },
        { id: 'confused', text: 'Confused', emoji: '😕' }
    ]
};

// Application State
let currentCategory = 'core';
let sentenceArray = [];

// DOM Elements
const categoryTabs = document.getElementById('categoryTabs');
const pecsGrid = document.getElementById('pecsGrid');
const sentenceStrip = document.getElementById('sentenceStrip');
const speakBtn = document.getElementById('speakBtn');
const clearBtn = document.getElementById('clearBtn');

// Initialize the app
function init() {
    setupEventListeners();
    renderPecsGrid(currentCategory);
    setupDragAndDrop();
}

// Event Listeners Setup
function setupEventListeners() {
    // Category tabs
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tab')) {
            switchCategory(e.target.dataset.category);
        }
    });

    // Control buttons
    speakBtn.addEventListener('click', speakSentence);
    clearBtn.addEventListener('click', clearSentence);
}

// Switch between categories
function switchCategory(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Render new grid
    renderPecsGrid(category);
}

// Render PECS grid based on category
function renderPecsGrid(category) {
    pecsGrid.innerHTML = '';
    
    const pecs = pecsData[category];
    pecs.forEach(pec => {
        const pecCard = createPecCard(pec);
        pecsGrid.appendChild(pecCard);
    });
}

// Create individual PEC card
function createPecCard(pec) {
    const card = document.createElement('div');
    card.className = 'pec-card';
    card.draggable = true;
    card.dataset.pecId = pec.id;
    card.dataset.pecText = pec.text;
    card.dataset.pecEmoji = pec.emoji;
    
    card.innerHTML = `
        <div style="font-size: 2.5rem;">${pec.emoji}</div>
        <span>${pec.text}</span>
    `;
    
    // Click to add to sentence
    card.addEventListener('click', () => addToSentence(pec));
    
    // Drag events
    card.addEventListener('dragstart', handleDragStart);
    
    return card;
}

// Add PEC to sentence
function addToSentence(pec) {
    sentenceArray.push(pec);
    renderSentence();
}

// Render the sentence strip
function renderSentence() {
    sentenceStrip.innerHTML = '';
    
    sentenceArray.forEach((pec, index) => {
        const pecElement = document.createElement('div');
        pecElement.className = 'sentence-pec';
        pecElement.innerHTML = `
            <div style="font-size: 2rem;">${pec.emoji}</div>
            <span>${pec.text}</span>
            <button class="remove-pec" data-index="${index}">×</button>
        `;
        
        // Remove button
        pecElement.querySelector('.remove-pec').addEventListener('click', (e) => {
            e.stopPropagation();
            removePecFromSentence(index);
        });
        
        sentenceStrip.appendChild(pecElement);
    });
}

// Remove PEC from sentence
function removePecFromSentence(index) {
    sentenceArray.splice(index, 1);
    renderSentence();
}

// Speak the sentence using Web Speech API
function speakSentence() {
    if (sentenceArray.length === 0) {
        alert('Please add some words to your sentence first!');
        return;
    }
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = sentenceArray.map(pec => pec.text).join(' ');
        utterance.rate = 0.8; // Slightly slower for clarity
        utterance.pitch = 1;
        utterance.volume = 1;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('Speech synthesis is not supported in your browser.');
    }
}

// Clear the sentence
function clearSentence() {
    sentenceArray = [];
    renderSentence();
}

// Drag and Drop functionality
function setupDragAndDrop() {
    sentenceStrip.addEventListener('dragover', handleDragOver);
    sentenceStrip.addEventListener('drop', handleDrop);
    sentenceStrip.addEventListener('dragenter', handleDragEnter);
    sentenceStrip.addEventListener('dragleave', handleDragLeave);
}

let draggedPec = null;

function handleDragStart(e) {
    draggedPec = {
        id: e.target.dataset.pecId,
        text: e.target.dataset.pecText,
        emoji: e.target.dataset.pecEmoji
    };
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'copy';
    return false;
}

function handleDragEnter(e) {
    sentenceStrip.classList.add('drag-over');
}

function handleDragLeave(e) {
    if (e.target === sentenceStrip) {
        sentenceStrip.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    sentenceStrip.classList.remove('drag-over');
    
    if (draggedPec) {
        addToSentence(draggedPec);
        draggedPec = null;
    }
    
    return false;
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);