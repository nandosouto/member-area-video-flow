
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Header = ({ title }: { title: string }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur shadow-md rounded-b-xl mb-4">
      <div className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/jkfsM4B6/imagem-gerada.png"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover border border-primary"
        />
        <span className="font-bold text-lg text-primary">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden sm:block text-sm text-gray-700">{user}</span>
        <Button
          size="sm"
          variant="outline"
          className="gap-1 px-3 text-xs"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          Sair
        </Button>
      </div>
    </header>
  );
};

export default Header;
