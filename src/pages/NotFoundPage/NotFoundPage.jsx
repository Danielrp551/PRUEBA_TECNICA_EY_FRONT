
export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
        <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/10">
            <h2 className="text-3xl text-white font-bold mb-6 text-center tracking-widest uppercase">
            Página no encontrada
            </h2>
            <p className="text-white text-center">La página que buscas no existe. Verifica la URL e intenta nuevamente.</p>
        </div>
        </div>
    );
}