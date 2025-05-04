// Mengambil semua elemen yang diperlukan dari DOM
const menitElement = document.querySelector('.menit');
const detikElement = document.querySelector('.detik');
const mulaiButton = document.querySelector('.mulai');
const berhentiButton = document.querySelector('.berhenti');
const resetButton = document.querySelector('.reset');

// Variabel untuk menyimpan interval dan waktu
let interval;
let minutes = 0;
let seconds = 0;
let isRunning = false;

// Fungsi untuk memformat angka menjadi dua digit (menambahkan 0 di depan jika perlu)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Fungsi untuk memperbarui tampilan waktu
function updateDisplay() {
    menitElement.textContent = formatTime(minutes);
    detikElement.textContent = formatTime(seconds);
}

// Fungsi untuk menjalankan timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            
            if (seconds === 100) {
                seconds = 0;
                minutes++;  
            }
            
            updateDisplay();
        }, 100);
        
        // Menonaktifkan tombol mulai saat timer berjalan
        mulaiButton.disabled = true;
    }
}

// Fungsi untuk menghentikan timer
function stopTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        
        // Mengaktifkan kembali tombol mulai
        mulaiButton.disabled = false;
    }
}

// Fungsi untuk mereset timer
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Menambahkan event listener ke tombol-tombol
mulaiButton.addEventListener('click', startTimer);
berhentiButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Inisialisasi tampilan
updateDisplay();