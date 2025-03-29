import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { memo } from "react";

function NotFoundPage() {
  document.title = "Not Found !";

  return (
    <main className="bg-[url('/login-cover.jpg')] w-full bg-cover bg-center h-screen">
      <div className="h-full w-full fixed inset-0 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 backdrop-blur-xs p-4 rounded-xl ring-2 ring-white">
          <h1 className="text-black font-bold text-4xl drop-shadow-xl">
            You Are In The Wrong Path
          </h1>
          <p className="text-black font-semibold text-xl drop-shadow-2xl">
            Seems Like You Are Lost
          </p>
          <Link to="/" className="w-full">
            <Button variant="secondary" className="font-bold w-full">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default memo(NotFoundPage);
