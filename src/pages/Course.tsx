
import { useState } from "react";
import { lessons } from "@/data/lessons";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import LessonList from "@/components/LessonList";
import LessonPlayer from "@/components/LessonPlayer";

const Course = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null);

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const currentIndex = currentLessonId
    ? lessons.findIndex((l) => l.id === currentLessonId)
    : -1;
  const currentLesson =
    currentIndex !== -1 ? lessons[currentIndex] : null;

  const handleSelect = (id: number) => {
    setCurrentLessonId(id);
  };

  const handleNext = () => {
    if (currentLesson && currentIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentLesson && currentIndex > 0) {
      setCurrentLessonId(lessons[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-primary/60 to-blue-100 flex flex-col items-center">
      <Header title="Curso Online Pós Cesárea" />
      <div className="w-full max-w-6xl flex-1 flex flex-col gap-6 px-2 pb-10">
        {!currentLesson && (
          <>
            <h2 className="text-2xl font-bold mt-6 mb-2 text-primary">
              Suas aulas
            </h2>
            <LessonList lessons={lessons} onSelect={handleSelect} currentId={currentLessonId} />
          </>
        )}
        {currentLesson && (
          <div className="mt-4 mx-auto max-w-3xl w-full">
            <LessonPlayer
              lesson={currentLesson}
              onPrev={handlePrev}
              onNext={handleNext}
              hasPrev={currentIndex > 0}
              hasNext={currentIndex < lessons.length - 1}
            />
            <button
              onClick={() => setCurrentLessonId(null)}
              className="mt-6 block mx-auto text-primary hover:underline transition font-semibold text-base"
            >
              ← Voltar para lista de aulas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
