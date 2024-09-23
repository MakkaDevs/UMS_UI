const startQuizBtn = document.getElementById('startQuizBtn');
const statusMessage = document.getElementById('statusMessage');
const controlButtons = document.querySelectorAll('.control-btn');
const examTypeSelect = document.getElementById('examType');
const quizStatusText = document.getElementById('quizStatusText');
const countdownTimer = document.getElementById('countdownTimer');
const addToCalendarBtn = document.getElementById('addToCalendarBtn');
const examDateElem = document.getElementById('examDate');

let currentStatus = 'available';
let examType = 'scheduled';
let countdownInterval;
let pastStatus = 'passed';
let resultsPending = false;
let canViewResults = false;

function setQuizStatus(status) {
  currentStatus = status;
  clearInterval(countdownInterval);

  // Update control buttons
  controlButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.status === status) {
      btn.classList.add('active');
    }
  });

  // Update quiz status
  quizStatusText.textContent = status.charAt(0).toUpperCase() + status.slice(1);

  // Reset result controls
  document.getElementById('resultControls').style.display = 'none';

  // Show/hide past controls
  document.getElementById('pastControls').style.display = status === 'past' ? 'block' : 'none';

  // Reset and hide countdown timer
  countdownTimer.style.display = 'none';
  countdownTimer.textContent = '';

  switch (status) {
    case 'available':
      startQuizBtn.disabled = false;
      startQuizBtn.textContent = "Start Quiz";
      statusMessage.textContent = "You're ready to begin!";
      addToCalendarBtn.style.display = 'none';
      startQuizBtn.style.display = 'block';
      break;
    case 'upcoming':
      startQuizBtn.disabled = true;
      startQuizBtn.textContent = "Quiz Not Available";
      statusMessage.textContent = "Quiz starts soon. Get ready!";
      addToCalendarBtn.style.display = 'block';
      startQuizBtn.style.display = 'block';
      countdownTimer.style.display = 'block';
      startCountdown();
      break;
    case 'past':
      startQuizBtn.disabled = true;
      startQuizBtn.textContent = "Quiz Ended";
      statusMessage.textContent = "This quiz has ended.";
      addToCalendarBtn.style.display = 'none';
      showPastStatus(); // Call showPastStatus instead of setting a default
      break;
  }
}

function startCountdown() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 3); // 3 days from now

  updateCountdown(); // Initial call to set the countdown immediately

  countdownInterval = setInterval(() => {
    if (currentStatus !== 'upcoming') {
      clearInterval(countdownInterval);
      return;
    }
    updateCountdown();
  }, 1000);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = futureDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownTimer.textContent = "Quiz is now available!";
      setQuizStatus('available');
    }
  }
}

function reviewQuiz() {
  alert('Reviewing the quiz. Implement the review functionality here.');
}

function updatePastAttempts() {
  let pastAttempts = [
    {id: 1, status: 'passed', score: 85},
    {id: 2, status: 'failed', score: 60},
    {id: 3, status: 'pending', score: null}
  ];
  const pastAttemptsList = document.getElementById('pastAttemptsList');
  pastAttemptsList.innerHTML = '';

  pastAttempts.forEach(attempt => {
    const li = document.createElement('li');
    li.textContent = `Attempt ${attempt.id}: ${attempt.status.charAt(0).toUpperCase() + attempt.status.slice(1)}`;

    if (attempt.score !== null && !resultsPending) {
      li.textContent += ` - Score: ${attempt.score}`;
    }

    // Use canViewResults and resultsPending here
    if (canViewResults) {
      const reviewBtn = document.createElement('button');
      reviewBtn.textContent = 'Review';
      reviewBtn.className = 'review-btn';
      reviewBtn.onclick = () => reviewQuiz(attempt.id);
      li.appendChild(reviewBtn);
    } else { // Check if results are not pending
      const unavailableSpan = document.createElement('span');
      unavailableSpan.textContent = 'Review unavailable';
      unavailableSpan.className = 'review-unavailable';
      li.appendChild(unavailableSpan);
    }

    pastAttemptsList.appendChild(li);
  });
}

function setExamType(type) {
  examType = type;
  if (type === 'open') {
    examDateElem.textContent = 'Open Exam: No specific due date';
    controlButtons.forEach(btn => {
      if (btn.dataset.status === 'upcoming') {
        btn.style.display = 'none';
      }
    });
  } else {
    examDateElem.textContent = 'Due Date: August 15, 2023';
    controlButtons.forEach(btn => btn.style.display = 'inline-block');
  }
}

function showPastStatus() {
  const resultControls = document.getElementById('resultControls');
  const resultStatus = document.getElementById('resultStatus');
  const resultPublishDate = document.getElementById('resultPublishDate');

  resultControls.style.display = 'block';

  if (resultsPending) {
    resultStatus.textContent = 'Status: Completed (Results Pending)';
    const publishDate = new Date();
    publishDate.setDate(publishDate.getDate() + 7);
    resultPublishDate.textContent = `Results will be published on: ${publishDate.toDateString()}`;
  } else {
    resultStatus.textContent = `Status: ${pastStatus.charAt(0).toUpperCase() + pastStatus.slice(1)}`;
    resultPublishDate.textContent = '';
  }

  // Update past status buttons
  document.querySelectorAll('.past-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.pastStatus === pastStatus) {
      btn.classList.add('active');
    }
  });
}


// Initialize
setExamType('scheduled');
setQuizStatus('available');
updatePastAttempts();

// Event Listeners
startQuizBtn.addEventListener('click', () => {
  if (startQuizBtn.textContent === "Start Quiz") {
    alert('Starting the quiz! Good luck!');
  } else if (startQuizBtn.textContent === "Review Quiz") {
    alert('Reviewing the quiz results...');
  }
});

addToCalendarBtn.addEventListener('click', () => {
  alert('Adding to calendar... (Implementation required)');
});

examTypeSelect.addEventListener('change', (e) => {
  setExamType(e.target.value);
});

controlButtons.forEach(btn => {
  btn.addEventListener('click', () => setQuizStatus(btn.dataset.status));
});


document.querySelectorAll('.past-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    pastStatus = e.target.dataset.pastStatus;
    showPastStatus();
  });
});

document.getElementById('resultsPendingCheckbox').addEventListener('change', (e) => {
  resultsPending = e.target.checked;
  document.getElementById('canViewControl').style.display = resultsPending ? 'none' : 'block';
  showPastStatus();
});

document.getElementById('canViewCheckbox').addEventListener('change', (e) => {
  canViewResults = e.target.checked;
  updatePastAttempts();
});

document.querySelectorAll('.past-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    showPastStatus(e.target.dataset.pastStatus);
  });
});


document.querySelectorAll('.past-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const pastStatus = e.target.dataset.pastStatus;
    showPastStatus(pastStatus);

    // Show/hide the review control based on the status
    const reviewControl = document.getElementById('reviewControl');
    reviewControl.style.display = pastStatus === 'pending' ? 'none' : 'block';
  });
});
