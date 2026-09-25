/**
 * ============================================================================
 * CRUMBLE CHORDS — BACKGROUND MUSIC CONTROLLER
 * Unobtrusive classic bakery café audio player
 * ============================================================================
 *
 * NOTE FOR STUDENTS & TEACHERS:
 * Background music creates a nostalgic café ambience.
 * 1. It NEVER autoplays (prevents startling users and adheres to browser policy).
 * 2. It points to 'audio/bakery-classic.mp3'.
 * 3. If no physical MP3 file is present, it uses a soft Web Audio API synthesizer
 *    to generate warm, gentle acoustic chord progressions (Cmaj9 - Am7 - Dm7 - G7)
 *    so testing the feature is completely functional even before audio files are uploaded!
 */

class BakeryMusicPlayer {
  constructor() {
    this.isPlaying = false;
    this.audioElement = null;
    this.audioContext = null;
    this.synthInterval = null;
    this.initElements();
  }

  initElements() {
    this.toggleButtons = document.querySelectorAll(".music-toggle-btn");
    this.audioElement = document.getElementById("bakeryAudio");

    if (this.toggleButtons.length > 0) {
      this.toggleButtons.forEach(btn => {
        btn.addEventListener("click", () => this.togglePlayback());
      });
    }
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    this.updateUI(true);

    // Try playing local audio file first
    if (this.audioElement && this.audioElement.src) {
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If file not found or browser blocked file access, fallback to ambient chord synth
          this.startAmbientBakeryChords();
        });
      }
    } else {
      this.startAmbientBakeryChords();
    }
  }

  pause() {
    this.isPlaying = false;
    this.updateUI(false);

    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopAmbientBakeryChords();
  }

  updateUI(playing) {
    this.toggleButtons.forEach(btn => {
      const textSpan = btn.querySelector(".music-btn-text");
      if (textSpan) {
        textSpan.textContent = playing ? "Music: Pause" : "Music: Play";
      } else {
        btn.textContent = playing ? "Music: Pause" : "Music: Play";
      }
      btn.classList.toggle("is-playing", playing);
      btn.setAttribute("aria-pressed", playing ? "true" : "false");
    });
  }

  /**
   * Ambient Warm Piano / Rhodes Synthesizer
   * Generates a warm, gentle nostalgic chord progression via Web Audio API.
   */
  startAmbientBakeryChords() {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }

    // Classic warm café chord frequencies (Hz)
    // Cmaj9, Am9, Dm9, G13
    const chordProgressions = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // C, E, G, B, D
      [220.00, 261.63, 329.63, 392.00, 493.88], // A, C, E, G, B
      [293.66, 349.23, 440.00, 523.25, 659.25], // D, F, A, C, E
      [196.00, 246.94, 293.66, 349.23, 440.00]  // G, B, D, F, A
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.audioContext) return;

      const chord = chordProgressions[chordIndex];
      chordIndex = (chordIndex + 1) % chordProgressions.length;

      chord.forEach((freq, i) => {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();

        // Warm lowpass filter to emulate Rhodes electric piano / soft felt upright piano
        filter.type = "lowpass";
        filter.frequency.value = 650;

        osc.type = i % 2 === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

        // Gentle envelope
        const now = this.audioContext.currentTime + (i * 0.04);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.045, now + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now);
        osc.stop(now + 4.0);
      });
    };

    // Play first chord immediately, then every 3.8 seconds
    playChord();
    this.synthInterval = setInterval(playChord, 3800);
  }

  stopAmbientBakeryChords() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.bakeryMusic = new BakeryMusicPlayer();
});
