"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
} from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);

  const audioUrl = "/journey-music.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isRepeat]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume || 0.5;
      setVolume(volume || 0.5);
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const skip = (seconds) => {
    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const waveformBars = Array.from({ length: 80 }, (_, i) => {
    const progress = currentTime / duration;
    const barProgress = i / 80;
    const height = Math.random() * 60 + 20;
    const isActive = barProgress <= progress;

    return (
      <div
        key={i}
        className="transition-all duration-150"
        style={{
          width: "2px",
          height: `${height}%`,
          backgroundColor: isActive ? "#F5993E" : "#F5993E",
          opacity: isActive ? 1 : 0.3,
        }}
      />
    );
  });

  return (
    <div className="flex items-center mt-20 md:mt-0 justify-center  relative z-30">
      <div className="w-full md:max-w-7xl  rounded-lg  shadow-4xl ">
        <div className="flex  shadow-2xl rounded-[10px] py-5 ">
          {/* Album Art */}
          <div className="w-28 mt-8 h-28  ">
            <img
              src="/logo.png"
              alt="Album Cover"
              className="w-full  h-full object-cover"
            />
          </div>

          {/* Player Content */}
          <div className="flex-1 md:p-6 flex flex-col">
            {/* Track Info & Actions */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <h3 className="text-gray-500 text-start text-sm font-medium">
                  86AD
                </h3>
                <h2 className="text-xl md:text-xl font-bold text-white">
                  The Journey of the Little!</h2>
              </div>
              {/* <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <Heart
                    size={24}
                    className={
                      isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
                    }
                  />
                </button> */}
            </div>

            {/* Waveform Visualization */}
            <div className="relative ">
              <div
                className="flex items-center justify-between h-20 gap-0.5 cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = x / rect.width;
                  audioRef.current.currentTime = percentage * duration;
                }}
              >
                {waveformBars}
              </div>
            </div>

            {/* Time Display */}
            <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="hidden md:flex  items-center gap-0 md:gap-2">
                {/* <button
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`p-2 rounded-full transition ${
                      isShuffle
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <Shuffle size={18} />
                  </button>
                  <button
                    onClick={() => setIsRepeat(!isRepeat)}
                    className={`p-2 rounded-full transition ${
                      isRepeat
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <Repeat size={18} />
                  </button> */}
              </div>

              {/* Center Controls */}
              <div className="flex w-[120px] md:w-full items-center gap-0 md:gap-2">
                <button
                  onClick={() => skip(-10)}
                  className="p-2 text-gray-600 hover:text-gray-800 transition"
                >
                  <SkipBack size={24} />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient transition text-white shadow-lg"
                >
                  {isPlaying ? (
                    <Pause size={24} />
                  ) : (
                    <Play size={24} className="ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => skip(10)}
                  className="p-2 text-gray-600 hover:text-gray-800 transition"
                >
                  <SkipForward size={24} />
                </button>
              </div>

              {/* Right Controls - Volume */}
              <div className="flex w-[350px] md:w-full items-center gap-0 md:gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={18} />
                  ) : (
                    <Volume2 size={18} />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-gray-300 custom-slider rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FF5722 0%, #FF5722 ${
                      (isMuted ? 0 : volume) * 100
                    }%, #d1d5db ${
                      (isMuted ? 0 : volume) * 100
                    }%, #d1d5db 100%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={audioUrl} />
      </div>
    </div>
  );
}
