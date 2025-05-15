
import { LessonType } from "@/data/lessons";
import { cn } from "@/lib/utils";

interface LessonListProps {
  lessons: LessonType[];
  onSelect: (id: number) => void;
  currentId: number | null;
}

const LessonList = ({ lessons, onSelect, currentId }: LessonListProps) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full fade-in">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className={cn(
            "cursor-pointer transition-shadow bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2 border border-transparent hover:shadow-md hover:border-primary",
            currentId === lesson.id && "border-2 border-primary shadow-lg"
          )}
          tabIndex={0}
          onClick={() => onSelect(lesson.id)}
        >
          <img
            src={lesson.cover}
            alt={lesson.title}
            className="w-full aspect-video rounded-lg object-cover mb-2"
            draggable={false}
          />
          <h3 className="font-semibold text-lg text-primary line-clamp-2">{lesson.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{lesson.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LessonList;
