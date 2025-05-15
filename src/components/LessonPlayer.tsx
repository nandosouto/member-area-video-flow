
import { useEffect, useRef, useState } from "react";
import { LessonType } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LessonPlayerProps {
  lesson: LessonType;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const LessonPlayer = ({ lesson, onPrev, onNext, hasPrev, hasNext }: LessonPlayerProps) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    setVideoEnded(false); // Reset when lesson changes
  }, [lesson.id]);

  // For YouTube - listen for end of video via postMessage
  useEffect(() => {
    if (lesson.videoType !== "youtube") return;
    function handleMessage(e: MessageEvent) {
      if (typeof e.data === "object" && e.data.event === "onStateChange" && e.data.info === 0) {
        setVideoEnded(true);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [lesson.videoType]);

  // For Wistia - use window._wq as per docs
  useEffect(() => {
    if (lesson.videoType !== "wistia") return;
    // Make sure wistia script is loaded
    if (!document.querySelector("#wistia-player-script")) {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script.id = "wistia-player-script";
      script.async = true;
      document.body.appendChild(script);
    }
    // Use Wistia's _wq queue to attach ended event
    (window as any)._wq = (window as any)._wq || [];
    (window as any)._wq.push({
      id: lesson.videoId,
      onReady: function (video: any) {
        video.bind("end", () => setVideoEnded(true));
      },
    });
  }, [lesson.videoId, lesson.videoType]);

  return (
    <div className="w-full flex flex-col items-center gap-4 animate-fade-in">
      <div className="w-full max-w-2xl relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
        {lesson.videoType === "youtube" && (
          <iframe
            ref={playerRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${lesson.videoId}?enablejsapi=1&origin=${window.location.origin}`}
            title={lesson.title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {lesson.videoType === "wistia" && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full">
              <div
                className="wistia_responsive_wrapper"
                style={{ height: "100%", position: "relative" }}
              >
                <div
                  className="wistia_responsive_padding"
                  style={{ paddingTop: "56.25%" }}
                ></div>
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${lesson.videoId}?seo=false&videoFoam=true&playerColor=9b87f5`}
                    title={lesson.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-1"
        >
          <ChevronLeft size={18} />
          Anterior
        </Button>
        <Button
          onClick={onNext}
          disabled={!hasNext && !videoEnded}
          className="flex items-center gap-1 bg-primary text-white hover:bg-primary/80"
        >
          Próxima aula
          <ChevronRight size={18} />
        </Button>
      </div>
      <div className="text-center text-lg font-bold text-primary">{lesson.title}</div>
      <div className="text-sm text-gray-700">{lesson.description}</div>
    </div>
  );
};

export default LessonPlayer;
