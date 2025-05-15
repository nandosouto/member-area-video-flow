
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/curso");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default Index;
