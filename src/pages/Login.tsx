
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/curso");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Digite seu e-mail!");
      return;
    }
    if (password !== "acesso123") {
      setError("Senha incorreta.");
      return;
    }
    login(email);
    navigate("/curso");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-primary to-blue-200 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm animate-[fade-in_0.3s_ease]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-primary">Área de Membros</h1>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm mb-1" htmlFor="email">E-mail</label>
          <Input
            id="email"
            placeholder="seu@email.com"
            type="email"
            autoComplete="email"
            required
            className="w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-800 text-sm mb-1" htmlFor="senha">Senha</label>
          <div className="flex gap-2">
            <Input
              id="senha"
              type={showPass ? "text" : "password"}
              placeholder="acesso123"
              autoComplete="current-password"
              required
              className="w-full"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="text-xs bg-gray-100 w-10 rounded hover:bg-gray-200"
              tabIndex={-1}
              onClick={() => setShowPass((v) => !v)}
            >{showPass ? "Ocultar" : "Mostrar"}</button>
          </div>
        </div>
        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        <Button type="submit" className="w-full mt-4 transition-all">Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
